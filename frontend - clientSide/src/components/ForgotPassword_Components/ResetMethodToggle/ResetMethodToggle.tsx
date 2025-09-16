interface ResetMethodToggleProps {
	resetMethod: "email" | "id";
	onToggle: (method: "email" | "id") => void;
}

const ResetMethodToggle = ({
	resetMethod,
	onToggle,
}: ResetMethodToggleProps) => {
	return (
		<div className="reset-method-toggle">
			<div className="toggle-container max-w-[300px] mx-auto mt-10">
				<button
					type="button"
					className={`toggle-option ${
						resetMethod === "email" ? "active" : ""
					}`}
					onClick={() => onToggle("email")}
				>
					<i className="fa-solid fa-envelope"></i>
					Email
				</button>
				<button
					type="button"
					className={`toggle-option ${
						resetMethod === "id" ? "active" : ""
					}`}
					onClick={() => onToggle("id")}
				>
					<i className="fa-solid fa-id-card"></i>
					User ID
				</button>
			</div>
			<p className="toggle-hint">
				{resetMethod === "email"
					? "Enter your email address to receive reset instructions"
					: "Enter your user ID to receive reset instructions"}
			</p>
		</div>
	);
};

export default ResetMethodToggle;
