import SwapPresence from "../../../../common/Animations/SwapPresence";

interface LoginFieldProps {
	fieldName: "email" | "id";
	placeholder: string;
	autoComplete: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string;
	touched?: boolean;
	swapDirection: "left" | "right";
}

const LoginField = ({
	fieldName,
	placeholder,
	autoComplete,
	value,
	onChange,
	onBlur,
	error,
	touched,
	swapDirection,
}: LoginFieldProps) => {
	const isEmail = fieldName === "email";
	const hasError = touched && error;

	return (
		<fieldset className="relative">
			<div style={{ position: "relative", height: 60 }}>
				<SwapPresence id={fieldName} direction={swapDirection}>
					<input
						className={`${fieldName}-field border-gray-main rounded-md p-4 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
							value ? "active" : ""
						}`}
						type="text"
						placeholder={placeholder}
						autoComplete={autoComplete}
						name={fieldName}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
					/>
				</SwapPresence>
			</div>

			{/* Field Icon */}
			{isEmail ? (
				<i className="fa-solid dark2-gray-color fa-envelope text-xl absolute top-[19.5px] left-4"></i>
			) : (
				<i className="fa-solid dark2-gray-color fa-id-badge text-xl absolute top-[19.5px] left-4"></i>
			)}

			{/* Error Message */}
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

export default LoginField;
