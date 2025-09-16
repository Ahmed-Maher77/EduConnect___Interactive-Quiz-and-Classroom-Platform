import SwapPresence from "../../../common/Animations/SwapPresence";

interface ResetFieldProps {
	resetMethod: "email" | "id";
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	error?: string;
	touched?: boolean;
	swapDirection: "left" | "right";
}

const ResetField = ({
	resetMethod,
	value,
	onChange,
	onBlur,
	error,
	touched,
	swapDirection,
}: ResetFieldProps) => {
	const isEmail = resetMethod === "email";

	return (
		<SwapPresence
			id={isEmail ? "email" : "id"}
			direction={swapDirection}
			className="swap-presence-container"
		>
			<div className="form-group mt-10">
				<label htmlFor="emailOrId" className="form-label">
					{isEmail ? "Email Address" : "User ID"}
				</label>
				<div className="input-container">
					<input
						type={isEmail ? "email" : "text"}
						id="emailOrId"
						name="emailOrId"
						placeholder={
							isEmail ? "you@example.com" : "Enter your user ID"
						}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						className={`reset-password-field form-input border-gray-main rounded-md p-4 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
							value ? "active" : ""
						} ${touched && error ? "error" : ""}`}
					/>
					<i
						className={`fa-solid ${
							isEmail ? "fa-envelope" : "fa-id-card"
						} dark2-gray-color input-icon`}
					></i>
				</div>
				{touched && error && (
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
			</div>
		</SwapPresence>
	);
};

export default ResetField;
