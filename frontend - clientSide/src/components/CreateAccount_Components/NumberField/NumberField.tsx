import React from "react";
import "./NumberField.scss";

interface NumberFieldProps {
	id: string;
	name: string;
	label: string;
	placeholder: string;
	required?: boolean;
	className?: string;
	value?: number | string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string;
	touched?: boolean;
	min?: number;
	max?: number;
	step?: number;
}

const NumberField: React.FC<NumberFieldProps> = ({
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
	min,
	max,
	step,
}) => {
	const isError = touched && error;
	const isControlled = value !== undefined && onChange !== undefined;

	return (
		<fieldset className={`number-field ${className}`}>
			<label
				className={`main-label ${
					required ? "input-required-label" : ""
				}`}
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className={`border-gray-main input-bg-color rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
					isError ? "border-red-500" : ""
				}`}
				type="number"
				id={id}
				name={name}
				placeholder={placeholder}
				min={min}
				max={max}
				step={step}
				{...(isControlled
					? { value, onChange, onBlur }
					: { defaultValue: value || "" })}
				required={required}
			/>
			{isError && (
				<div className="field-error">
					<i className="fa-solid fa-circle-exclamation"></i>
					<span>{error}</span>
				</div>
			)}
		</fieldset>
	);
};

export default NumberField;
