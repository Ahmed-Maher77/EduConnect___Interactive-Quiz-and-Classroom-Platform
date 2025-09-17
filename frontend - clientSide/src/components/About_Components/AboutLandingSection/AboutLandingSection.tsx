import "./AboutLandingSection.scss";
import SectionHeading from "../../SectionHeading/SectionHeading";

const AboutLandingSection = () => {
	return (
		<section className="about-landing-section landing-section flex justify-center items-center">
			<div className="container">
				{/* Section Heading */}
				<SectionHeading
					title="About Our Platform"
					subtitle="EduConnect is a cutting-edge educational platform designed to bridge the gap between teachers and students, fostering a collaborative and engaging learning environment."
					classNameTitle="page-title"
					maxWidth="850px"
				/>
			</div>
		</section>
	);
};

export default AboutLandingSection;
