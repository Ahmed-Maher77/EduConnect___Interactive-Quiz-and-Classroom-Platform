import AboutDeveloper from "../../components/Home_Components/AboutDeveloper/AboutDeveloper";
import BestTeacherSection from "../../components/Home_Components/BestTeacherSection/BestTeacherSection";
import CallToActionSection from "../../components/Home_Components/CallToActionSection/CallToActionSection";
import FAQSection from "../../components/Home_Components/FAQSection/FAQSection";
import FeaturesSection from "../../components/Home_Components/FeaturesSection/FeaturesSection";
import LandingSection from "../../components/Home_Components/LandingSection";
import OurImpactSection from "../../components/Home_Components/OurImpactSection/OurImpactSection";
import "./Home.scss";

const Home = () => {
	return (
		<div className="Home-Page">
			<LandingSection />
			
            <FeaturesSection length={6} />
			
            <OurImpactSection />
			
            <BestTeacherSection />
			
            <AboutDeveloper />
			
            <CallToActionSection
				title="Ready to Start Your Learning Journey?"
				subtitle="Join thousands of students and teachers today."
				studentButtonText="Sign Up as a Student"
				teacherButtonText="Become a Teacher"
                bg="blue"
			/>
			
            <FAQSection />
		</div>
	);
};

export default Home;
