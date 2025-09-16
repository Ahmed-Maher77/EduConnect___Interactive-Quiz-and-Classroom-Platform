interface LoginMethodToggleProps {
	isEmail: boolean;
	onToggle: (method: "email" | "id") => void;
}

const LoginMethodToggle = ({ isEmail, onToggle }: LoginMethodToggleProps) => {
	return (
		<>
			{/* Login method toggle */}
			<div className="relative overflow-hidden flex items-center light2-gray-bg rounded-lg w-fit mx-auto p-[0.4rem]">
				<span
					className="absolute rounded-md white-bg shadow-sm transition-all duration-300"
					style={{
						width: "120px",
						top: "0.4rem",
						bottom: "0.4rem",
						left: isEmail ? "0.4rem" : "calc(0.4rem + 120px)",
					}}
				/>
				<button
					type="button"
					className={`relative z-[1] px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 w-[120px] ${
						isEmail
							? "blue-color font-medium"
							: "light-mode-toggle-color"
					}`}
					onClick={() => onToggle("email")}
				>
					<i className="fa-solid fa-envelope mr-2"></i>Email
				</button>
				<button
					type="button"
					className={`relative z-[1] px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 w-[120px] ${
						!isEmail
							? "blue-color font-medium"
							: "light-mode-toggle-color"
					}`}
					onClick={() => onToggle("id")}
				>
					<i className="fa-solid fa-id-badge mr-2"></i>ID
				</button>
			</div>

			<div className="user-help-text mt-[-10px] flex flex-col gap-1">
				<p className="text-sm dark2-gray-color text-center">
					You can log in using your Email or your ID.
				</p>
				<p className="text-xs dark3-gray-color text-center">
					You can find your ID in your profile.
				</p>
			</div>
		</>
	);
};

export default LoginMethodToggle;
