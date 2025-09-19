import React, { useState, useRef, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { useToast } from "../Toast/ToastContext";
import "./ChipInput.scss";

interface Chip {
	id: string;
	label: string;
}

interface ChipInputProps {
	value: Chip[];
	onChange: (chips: Chip[]) => void;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	maxChips?: number;
	suggestions?: string[];
}

const ChipInput: React.FC<ChipInputProps> = ({
	value = [],
	onChange,
	placeholder = "Type and press Enter to add",
	className = "",
	disabled = false,
	maxChips = 10,
	suggestions = [],
}) => {
	const [inputValue, setInputValue] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(
		[]
	);
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const suggestionRef = useRef<HTMLDivElement>(null);
	const { showToast } = useToast();

	// Common subject suggestions
	const defaultSuggestions = [
		"Mathematics",
		"Science",
		"English",
		"History",
		"Geography",
		"Physics",
		"Chemistry",
		"Biology",
		"Computer Science",
		"Art",
		"Music",
		"Physical Education",
		"Literature",
		"Economics",
		"Psychology",
		"Social Studies",
		"Foreign Language",
		"Drama",
		"Philosophy",
		"Statistics",
	];

	const allSuggestions =
		suggestions.length > 0 ? suggestions : defaultSuggestions;

	useEffect(() => {
		if (inputValue.trim()) {
			const filtered = allSuggestions.filter(
				(suggestion) =>
					suggestion
						.toLowerCase()
						.includes(inputValue.toLowerCase()) &&
					!value.some(
						(chip) =>
							chip.label.toLowerCase() ===
							suggestion.toLowerCase()
					)
			);
			setFilteredSuggestions(filtered.slice(0, 5)); // Show max 5 suggestions
			setShowSuggestions(filtered.length > 0);
			setSelectedSuggestionIndex(-1);
		} else {
			setShowSuggestions(false);
			setSelectedSuggestionIndex(-1);
		}
	}, [inputValue, value, allSuggestions]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				suggestionRef.current &&
				!suggestionRef.current.contains(event.target as Node)
			) {
				setShowSuggestions(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const addChip = (label: string) => {
		console.log("addChip called with:", label); // Debug log
		const trimmedLabel = label.trim();
		console.log("trimmedLabel:", trimmedLabel); // Debug log
		console.log("current value:", value); // Debug log

		if (
			trimmedLabel &&
			!value.some(
				(chip) =>
					chip.label.toLowerCase() === trimmedLabel.toLowerCase()
			)
		) {
			if (value.length >= maxChips) {
				// Show a custom modern toast
				showToast(
					`You can add maximum ${maxChips} subjects`,
					"warning",
					5000
				);
				return;
			}
			const newChip: Chip = {
				id: Date.now().toString(),
				label: trimmedLabel,
			};
			console.log("Adding new chip:", newChip); // Debug log
			const updatedChips = [...value, newChip];
			console.log(
				"All chips after adding:",
				updatedChips.map((chip) => chip.label)
			); // Show all chip labels
			onChange(updatedChips);
		} else {
			console.log("Chip not added - either empty or duplicate"); // Debug log
		}
		setInputValue("");
		setShowSuggestions(false);
		setSelectedSuggestionIndex(-1);
	};

	const removeChip = (chipId: string) => {
		const updatedChips = value.filter((chip) => chip.id !== chipId);
		console.log(
			"All chips after removing:",
			updatedChips.map((chip) => chip.label)
		); // Show all chip labels
		onChange(updatedChips);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (showSuggestions && selectedSuggestionIndex >= 0) {
				addChip(filteredSuggestions[selectedSuggestionIndex]);
			} else if (inputValue.trim()) {
				addChip(inputValue);
			}
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			if (showSuggestions) {
				setSelectedSuggestionIndex((prev) =>
					prev < filteredSuggestions.length - 1 ? prev + 1 : 0
				);
			}
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			if (showSuggestions) {
				setSelectedSuggestionIndex((prev) =>
					prev > 0 ? prev - 1 : filteredSuggestions.length - 1
				);
			}
		} else if (e.key === "Backspace" && !inputValue && value.length > 0) {
			removeChip(value[value.length - 1].id);
		} else if (e.key === "Escape") {
			setShowSuggestions(false);
			setSelectedSuggestionIndex(-1);
			inputRef.current?.blur();
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSuggestionClick = (suggestion: string) => {
		console.log("Suggestion clicked:", suggestion); // Debug log
		addChip(suggestion);
	};

	const handleFocus = () => {
		if (inputValue.trim()) {
			setShowSuggestions(true);
		}
	};

	const handleBlur = () => {
		// Delay to allow suggestion clicks
		setTimeout(() => {
			setShowSuggestions(false);
			setSelectedSuggestionIndex(-1);
		}, 200);
	};

	return (
		<div className="chip-input-wrapper" ref={suggestionRef}>
			<div
				className={`chip-input-container ${className} ${
					disabled ? "disabled" : ""
				} ${showSuggestions ? "suggestions-open" : ""}`}
			>
				<div className="chips-wrapper">
					{value.map((chip) => (
						<div key={chip.id} className="chip">
							<span className="chip-label">{chip.label}</span>
							<button
								type="button"
								className="chip-remove"
								onClick={() => removeChip(chip.id)}
								disabled={disabled}
								title="Remove subject"
							>
								<i className="fa-solid fa-times"></i>
							</button>
						</div>
					))}
					<input
						ref={inputRef}
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
						onFocus={handleFocus}
						onBlur={handleBlur}
						placeholder={
							value.length === 0
								? placeholder
								: "Add another subject..."
						}
						className="chip-input"
						disabled={disabled}
						maxLength={50}
					/>
				</div>

				{/* Chip count indicator */}
				{maxChips > 0 && (
					<div className="chip-count">
						{value.length}/{maxChips}
					</div>
				)}
			</div>

			{/* Suggestions dropdown */}
			{showSuggestions && filteredSuggestions.length > 0 && (
				<div className="suggestions-dropdown">
					<div className="suggestions-header">
						<i className="fa-solid fa-lightbulb"></i>
						<span>Suggestions</span>
					</div>
					<ul className="suggestions-list">
						{filteredSuggestions.map((suggestion, index) => (
							<li
								key={suggestion}
								className={`suggestion-item ${
									index === selectedSuggestionIndex
										? "selected"
										: ""
								}`}
								onMouseDown={(e) => {
									e.preventDefault();
									handleSuggestionClick(suggestion);
								}}
							>
								<i className="fa-solid fa-plus suggestion-icon"></i>
								<span>{suggestion}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ChipInput;
