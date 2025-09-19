import React, { useState } from "react";
import "./PasswordField.scss";

interface PasswordFieldProps {
	id: string;
	name: string;
	label: string;
	placeholder: string;
	required?: boolean;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string;
	touched?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
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
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const isError = touched && error;
	const isControlled = value !== undefined && onChange !== undefined;

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<fieldset className={`password-field ${className}`}>
			<label
				className={`main-label ${
					required ? "input-required-label" : ""
				}`}
				htmlFor={id}
			>
				{label}
			</label>
			<div className="password-input-wrapper">
				<input
					className={`border-gray-main input-bg-color rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
						isError ? "border-red-500" : ""
					}`}
					type={showPassword ? "text" : "password"}
					id={id}
					name={name}
					placeholder={placeholder}
					{...(isControlled
						? { value, onChange, onBlur }
						: { defaultValue: value || "" })}
					required={required}
				/>
				<button
					type="button"
					className="password-toggle"
					onClick={togglePasswordVisibility}
					aria-label={
						showPassword ? "Hide password" : "Show password"
					}
				>
					<i
						className={`fa-solid ${
							showPassword ? "fa-eye-slash" : "fa-eye"
						}`}
					></i>
				</button>
			</div>
			{isError && (
				<div className="field-error">
					<i className="fa-solid fa-circle-exclamation"></i>
					<span>{error}</span>
				</div>
			)}
		</fieldset>
	);
};

export default PasswordField;
