import type { RoleChoiceCardProps } from "../../../common/Types/Interfaces";
import "./RoleChoiceCard.scss";

interface EnhancedRoleChoiceCardProps extends RoleChoiceCardProps {
	gradient?: string;
	features?: string[];
}

const RoleChoiceCard = ({
	role,
	roleImage,
	roleDescription,
	roleIcon,
	gradient = "from-blue-500 to-purple-600",
	features = [],
	onSelectRole,
}: EnhancedRoleChoiceCardProps) => {
	return (
		<section className="role-choice-card">
			{/* Gradient Background */}
			<div
				className={`role-card-gradient bg-gradient-to-br ${gradient}`}
			></div>

			{/* Card Content */}
			<div className="role-card-content">
				{/* Header */}
				<header className="role-card-header">
					<div className="role-icon-container">
						<i className={`${roleIcon} role-icon`}></i>
					</div>
					<div className="role-title-section">
						<h3 className="role-title">{role}</h3>
						<p className="role-description">{roleDescription}</p>
					</div>
				</header>

				{/* Image */}
				<div className="role-image-container">
					<img
						className="role-image"
						src={roleImage}
						alt={role}
						loading="lazy"
					/>
					<div className="image-overlay"></div>
				</div>

				{/* Features */}
				{features.length > 0 && (
					<div className="role-features">
						<h4 className="features-title">Key Features:</h4>
						<ul className="features-list">
							{features.map((feature, idx) => (
								<li key={idx} className="feature-item">
									<i className="fa-solid fa-check feature-check"></i>
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Action Button */}
				<div className="role-action">
					<button
						className="role-button"
						onClick={() => onSelectRole(role)}
					>
						<span className="button-text">
							{role === "Admin" ? "Login" : "Register"}
						</span>
						<i className="fa-solid fa-arrow-right button-icon"></i>
					</button>
				</div>
			</div>
		</section>
	);
};

export default RoleChoiceCard;
