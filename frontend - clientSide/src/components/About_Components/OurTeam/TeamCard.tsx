import type { TeamMember } from "../../../common/Types/Interfaces";
import ImageOverlayLink from "../../ImageOverlayLink/ImageOverlayLink";
import "./TeamCard.scss";

interface TeamCardProps {
	member: TeamMember;
	index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
	return (
		<div
			className="team-card"
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			<div className="team-card-avatar relative group">
				<img
					src={member.avatar}
					alt={member.name}
					loading="lazy"
					style={
						member.name === "Ahmed Maher"
							? { objectPosition: "top" }
							: {}
					}
				/>
				<ImageOverlayLink href="https://ahmedmaher-portfolio.vercel.app/" />
			</div>
			<div className="team-card-content">
				<h3 className="team-card-name">{member.name}</h3>
				<p className="team-card-title">{member.title}</p>
				<TeamCardSocialLink />
			</div>
		</div>
	);
};

const TeamCardSocialLink = ({ className }: { className?: string }) => {
	return (
		<div className="team-card-social-links">
			<a
				href="https://ahmedmaher-portfolio.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				className={className}
			>
				<i className="fa-solid fa-arrow-up-right-from-square text-2xl main-color trans-3"></i>
			</a>
		</div>
	);
};




export default TeamCard;
