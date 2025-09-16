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
            <FeaturesSection />
            <OurImpactSection />
            <BestTeacherSection />
            <AboutDeveloper />
            <CallToActionSection />
            <FAQSection />
        </div>
    );
};

export default Home;
