import AboutLandingSection from "../../components/About_Components/AboutLandingSection/AboutLandingSection";
import OurMission from "../../components/About_Components/OurMission/OurMission";
import OurTeamSection from "../../components/About_Components/OurTeam/OurTeamSection";
import StatsSection from "../../components/About_Components/Statistics/StatsSection";
import TestimonialsSection from "../../components/About_Components/Testimonials/TestimonialsSection";
import CallToActionSection from "../../components/Home_Components/CallToActionSection/CallToActionSection";
import FeaturesSection from "../../components/Home_Components/FeaturesSection/FeaturesSection";
import "./About.scss";


const About = () => {
	return (
		<div className="About-Page main-page">
			<AboutLandingSection />

			<OurMission />

			<FeaturesSection
				id="main-features"
				bg="section-bg"
				title="Key Features"
				subtitle="Discover the key features that make EduConnect stand out"
			/>

			<StatsSection />

			<TestimonialsSection />

			<OurTeamSection />

			<CallToActionSection
				title="Ready to Get Started?"
				subtitle="Join our community and start your journey today."
				studentButtonText="Sign Up as a Student"
				teacherButtonText="Become a Teacher"
			/>
		</div>
	);
};

export default About;
