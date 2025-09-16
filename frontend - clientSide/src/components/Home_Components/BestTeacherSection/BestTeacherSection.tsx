import SectionHeading from "../../SectionHeading/SectionHeading";
import TeacherCards from "./TeacherCards";

const BestTeacherSection = () => {
    return (
        <div className="Best-Teacher-Section py-[60px]">
            <div className="container">
                <SectionHeading
                    title="Best Teachers"
                    subtitle="Meet Our Best Teachers"
                />

                <TeacherCards />
            </div>
        </div>
    );
};

export default BestTeacherSection;
