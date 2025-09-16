import type { RoleChoiceCardProps } from "../../../common/Types/Interfaces";

const RoleChoiceCard = ({
	role,
	roleImage,
	roleDescription,
	roleIcon,
	onSelectRole,
}: RoleChoiceCardProps) => {
	return (
		<section className="role-choice white-bg rounded-lg p-4 light-shadow flex flex-col gap-4 max-w-[450px] group light-shadow-hover transition-all duration-300 w-full mx-auto hover:scale-[1.01]">
			{/* ================== Header ================== */}
			<header className="flex items-center gap-4 min-h-[72px]">
				<i className={`${roleIcon} text-3xl black-color`}></i>
				<div className="role-choice-title flex flex-col gap-1">
					<h3 className="text-xl font-bold black-color">{role}</h3>
					<p className="text-sm dark2-gray-color">
						{roleDescription}
					</p>
				</div>
			</header>

			{/* ================== Divider ================== */}
			<div
				className="light-divider"
				style={{ marginBlock: "0rem" }}
			></div>

			{/* ================== Image ================== */}
			<img
				className="h-[250px] rounded-lg mx-auto group-hover:scale-105 transition-all duration-300"
				src={roleImage}
				alt={role}
			/>

			{/* ================== Divider ================== */}
			<div
				className="main-divider"
				style={{ marginBlock: "0.5rem" }}
			></div>

			{/* ================== Actions ================== */}
			<div className="actions flex justify-end">
				<button
					className="btn-main-gray font-semibold flex items-center justify-center gap-2 min-w-[140px]"
					style={{ paddingBlock: "0.65rem" }}
					onClick={() => onSelectRole(role)}
				>
					{role === "Admin" ? "Login" : "Register"}
				</button>
			</div>
		</section>
	);
};

export default RoleChoiceCard;
