import SectionHeading from "../../SectionHeading/SectionHeading";
import TeamCards from "./TeamCards";

const OurTeamSection = () => {
	return (
		<div className="Our-Team-Section py-[60px] section-bg">
			<SectionHeading
				title="Meet Our Team"
				subtitle="Meet the team that makes EduConnect possible"
			/>

			<TeamCards />
		</div>
	);
};

export default OurTeamSection;
