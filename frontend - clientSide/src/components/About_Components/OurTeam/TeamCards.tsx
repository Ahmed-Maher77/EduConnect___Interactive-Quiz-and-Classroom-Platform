import TeamCard from "./TeamCard";
import { teamMembers } from "./teamData";
import "./TeamCards.scss";

const TeamCards = () => {
	return (
		<div className="Team-Cards">
			<div className="container">
				<div className="team-cards-grid">
					{teamMembers.map((member, index) => (
						<TeamCard
							key={member.id}
							member={member}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default TeamCards;
