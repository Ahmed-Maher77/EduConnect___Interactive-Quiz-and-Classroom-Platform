import React from "react";
import "./DateField.scss";

interface DateFieldProps {
	id: string;
	name: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string;
	touched?: boolean;
	min?: string;
	max?: string;
}

const DateField: React.FC<DateFieldProps> = ({
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
}) => {
	const isError = touched && error;
	const isControlled = value !== undefined && onChange !== undefined;

	return (
		<fieldset className={`date-field ${className}`}>
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
				type="date"
				id={id}
				name={name}
				placeholder={placeholder}
				min={min}
				max={max}
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

export default DateField;
