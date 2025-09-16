import SectionHeading from "../../SectionHeading/SectionHeading";
import FeatureCards from "./FeatureCards";

const FeaturesSection = () => {
    return (
        <section className="Features-Section py-[55px]">
            <div className="container">
                <SectionHeading
                    title="Features"
                    subtitle="EduConnect offers a wide range of features to enhance your teaching experience and student engagement."
                />

                <FeatureCards />
            </div>
        </section>
    );
};

export default FeaturesSection;
