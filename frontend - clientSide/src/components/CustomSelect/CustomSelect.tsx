import { useState, useRef, useEffect } from "react";
import "./CustomSelect.scss";

interface SelectOption {
	value: string;
	label: string;
}

interface CustomSelectProps {
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	id?: string;
	name?: string;
}

const CustomSelect = ({
	options,
	value,
	onChange,
	placeholder = "Select an option",
	disabled = false,
	className = "",
	name,
}: CustomSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const selectRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const selectedOption = options.find((option) => option.value === value);

	// Filter options based on search term
	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				setSearchTerm("");
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Focus input when dropdown opens
	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	const handleToggle = () => {
		if (!disabled) {
			setIsOpen(!isOpen);
			setSearchTerm("");
		}
	};

	const handleOptionClick = (optionValue: string) => {
		onChange(optionValue);
		setIsOpen(false);
		setSearchTerm("");
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleToggle();
		} else if (e.key === "Escape") {
			setIsOpen(false);
			setSearchTerm("");
		}
	};

	return (
		<div
			ref={selectRef}
			className={`custom-select ${className} ${
				disabled ? "disabled" : ""
			}`}
		>
			<div
				className={`select-trigger ${isOpen ? "open" : ""} ${
					disabled ? "disabled" : ""
				}`}
				onClick={handleToggle}
				onKeyDown={handleKeyDown}
				tabIndex={disabled ? -1 : 0}
				role="combobox"
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				aria-label={placeholder}
			>
				<span
					className={`select-value ${
						!selectedOption ? "placeholder" : ""
					}`}
				>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<i
					className={`fa-solid fa-chevron-down select-arrow ${
						isOpen ? "open" : ""
					}`}
				></i>
			</div>

			{isOpen && (
				<div className="select-dropdown">
					<div className="select-search">
						<input
							ref={inputRef}
							type="text"
							className="search-input"
							placeholder="Search options..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							onKeyDown={(e) => e.stopPropagation()}
						/>
						<i className="fa-solid fa-search search-icon"></i>
					</div>

					<div className="select-options" role="listbox">
						{filteredOptions.length > 0 ? (
							filteredOptions.map((option) => (
								<div
									key={option.value}
									className={`select-option ${
										value === option.value ? "selected" : ""
									}`}
									onClick={() =>
										handleOptionClick(option.value)
									}
									role="option"
									aria-selected={value === option.value}
								>
									<span className="option-label">
										{option.label}
									</span>
									{value === option.value && (
										<i className="fa-solid fa-check option-check"></i>
									)}
								</div>
							))
						) : (
							<div className="no-options">
								<i className="fa-solid fa-search"></i>
								<span>No options found</span>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Hidden input for form submission */}
			<input type="hidden" name={name} value={value} />
		</div>
	);
};

export default CustomSelect;
