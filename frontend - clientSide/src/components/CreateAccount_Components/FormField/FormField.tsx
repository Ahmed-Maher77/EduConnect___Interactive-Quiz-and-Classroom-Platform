import React from "react";
import "./FormField.scss";

interface FormFieldProps {
	id: string;
	name: string;
	label: string;
	type?: "text" | "email" | "tel" | "password";
	placeholder: string;
	required?: boolean;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string;
	touched?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
	id,
	name,
	label,
	type = "text",
	placeholder,
	required = false,
	className = "",
	value,
	onChange,
	onBlur,
	error,
	touched = false,
}) => {
	const isError = touched && error;
	const isControlled = value !== undefined && onChange !== undefined;

	return (
		<fieldset className={`form-field ${className}`}>
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
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
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

export default FormField;
