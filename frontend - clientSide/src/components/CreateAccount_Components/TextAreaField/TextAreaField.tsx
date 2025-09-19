import React, { useState } from "react";
import "./TextAreaField.scss";

interface TextAreaFieldProps {
	id: string;
	name: string;
	label: string;
	placeholder: string;
	required?: boolean;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
	error?: string;
	touched?: boolean;
	maxLength?: number;
	rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
	id,
	name,
	label,
	placeholder,
	required = false,
	className = "",
	value,
	onChange,
	onBlur,
	error,
	touched = false,
	maxLength,
	rows = 5,
}) => {
	const [charCount, setCharCount] = useState(0);
	const isError = touched && error;
	const isControlled = value !== undefined && onChange !== undefined;

	const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (!isControlled) {
			setCharCount(e.target.value.length);
		}
		if (onChange) {
			onChange(e);
		}
	};

	const currentCharCount = isControlled ? value?.length || 0 : charCount;

	return (
		<fieldset className={`textarea-field ${className}`}>
			<label
				className={`main-label ${
					required ? "input-required-label" : ""
				}`}
				htmlFor={id}
			>
				{label}
			</label>
			<textarea
				className={`border-gray-main input-bg-color rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 resize-none ${
					isError ? "border-red-500" : ""
				}`}
				id={id}
				name={name}
				placeholder={placeholder}
				rows={rows}
				maxLength={maxLength}
				onInput={handleInput}
				{...(isControlled
					? { value, onChange, onBlur }
					: { defaultValue: value || "" })}
				required={required}
			/>
			{maxLength && (
				<div className="character-count">
					<span className="current-count">{currentCharCount}</span>
					<span className="separator">/</span>
					<span className="max-count">{maxLength}</span>
				</div>
			)}
			{isError && (
				<div className="field-error">
					<i className="fa-solid fa-circle-exclamation"></i>
					<span>{error}</span>
				</div>
			)}
		</fieldset>
	);
};

export default TextAreaField;
