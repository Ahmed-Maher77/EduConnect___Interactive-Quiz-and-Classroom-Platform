import { useEffect, useMemo, useRef, useState } from "react";
import "./CountrySelect.scss";
import type { CountrySelectProps } from "../../../common/Types/Interfaces";
import type { CountryOption } from "../../../common/Types/Interfaces";

type RestCountry = {
	cca2: string;
	name?: { common?: string };
};

const CountrySelect = ({
	id,
	name,
	value,
	onChange,
	placeholder = "Select a country",
	className = "",
	disabled = false,
}: CountrySelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [countries, setCountries] = useState<CountryOption[]>([]);
	const [highlightIndex, setHighlightIndex] = useState<number>(-1);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let isMounted = true;
		const fetchCountries = async () => {
			try {
				const res = await fetch(
					"https://restcountries.com/v3.1/all?fields=name,cca2"
				);
				const data: RestCountry[] = await res.json();
				if (!isMounted) return;
				const mapped: CountryOption[] = (data || [])
					.map((c: RestCountry) => ({
						code: c.cca2,
						name: c.name?.common || "",
					}))
					.filter((c: CountryOption) => Boolean(c.name))
					.sort((a: CountryOption, b: CountryOption) =>
						a.name.localeCompare(b.name)
					);
				setCountries(mapped);
			} catch (e) {
				console.error("Failed to load countries", e);
			}
		};
		fetchCountries();
		return () => {
			isMounted = false;
		};
	}, []);

	const selected = useMemo(
		() => countries.find((c) => c.name === value) || null,
		[countries, value]
	);

	const filtered = useMemo(() => {
		const term = searchTerm.trim().toLowerCase();
		if (!term) return countries;
		return countries.filter((c) => c.name.toLowerCase().includes(term));
	}, [countries, searchTerm]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
				setHighlightIndex(-1);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSelect = (name: string) => {
		onChange(name);
		setIsOpen(false);
		setSearchTerm("");
		setHighlightIndex(-1);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (!isOpen) {
			if (e.key === "Enter" || e.key === " ") {
				setIsOpen(true);
				e.preventDefault();
			}
			return;
		}
		if (e.key === "Escape") {
			setIsOpen(false);
			setHighlightIndex(-1);
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setHighlightIndex((idx) =>
				Math.min(idx + 1, Math.max(0, filtered.length - 1))
			);
			return;
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			setHighlightIndex((idx) => Math.max(idx - 1, 0));
			return;
		}
		if (e.key === "Enter") {
			e.preventDefault();
			const option = filtered[highlightIndex];
			if (option) handleSelect(option.name);
		}
	};

	return (
		<div
			ref={containerRef}
			className={`country-select ${className} ${
				disabled ? "disabled" : ""
			}`}
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>
			<div
				className={`selected-value ${isOpen ? "open" : ""}`}
				onClick={() => !disabled && setIsOpen((s) => !s)}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				aria-labelledby={id}
			>
				{selected ? selected.name : placeholder}
				<i
					className={`fa-solid fa-chevron-down arrow-icon ${
						isOpen ? "rotate" : ""
					}`}
				></i>
			</div>

			{isOpen && (
				<div className="options-dropdown">
					<div className="search-input-wrapper">
						<input
							type="text"
							placeholder="Search countries..."
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setHighlightIndex(0);
							}}
							className="search-input"
							aria-label="Search options"
							autoFocus={true}
						/>
					</div>
					<ul
						className="options-list"
						role="listbox"
						aria-labelledby={id}
					>
						{filtered.length > 0 ? (
							filtered.map((option, idx) => (
								<li
									key={option.code}
									className={`option-item ${
										option.name === value ? "selected" : ""
									} ${
										idx === highlightIndex
											? "highlight"
											: ""
									}`}
									onMouseEnter={() => setHighlightIndex(idx)}
									onClick={() => handleSelect(option.name)}
									role="option"
									aria-selected={option.name === value}
								>
									{option.name}
									{option.name === value && (
										<i className="fa-solid fa-check check-icon"></i>
									)}
								</li>
							))
						) : (
							<li className="no-options">No countries found</li>
						)}
					</ul>
				</div>
			)}

			<input type="hidden" id={id} name={name} value={value} />
		</div>
	);
};

export default CountrySelect;
