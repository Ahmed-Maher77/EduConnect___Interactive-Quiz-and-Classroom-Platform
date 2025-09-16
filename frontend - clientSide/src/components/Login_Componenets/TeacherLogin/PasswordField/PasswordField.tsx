import { useState } from "react";

interface PasswordFieldProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string;
	touched?: boolean;
}

const PasswordField = ({
	value,
	onChange,
	onBlur,
	error,
	touched,
}: PasswordFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const hasError = touched && error;

	return (
		<fieldset className="relative">
			<input
				className={`password-field border-gray-main rounded-md p-4 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
					value ? "active" : ""
				}`}
				type={showPassword ? "text" : "password"}
				placeholder="Password"
				autoComplete="current-password"
				name="password"
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			<i className="fa-solid dark2-gray-color fa-lock text-xl absolute top-[19.5px] left-4"></i>
			<button
				type="button"
				aria-label={showPassword ? "Hide password" : "Show password"}
				className="absolute top-[11px] right-3 p-2 icon-gray-color cursor-pointer"
				onClick={() => setShowPassword((prev) => !prev)}
			>
				<i
					className={`fa-solid ${
						showPassword ? "fa-eye-slash" : "fa-eye"
					} text-xl`}
				></i>
			</button>
			{hasError && (
				<div
					style={{
						color: "red",
						fontSize: "0.9rem",
						marginTop: "6px",
						display: "flex",
						alignItems: "center",
						gap: "5px",
					}}
				>
					<i className="fa-solid fa-circle-exclamation"></i>
					{error}
				</div>
			)}
		</fieldset>
	);
};

export default PasswordField;
