import SectionHeading from "../../SectionHeading/SectionHeading";
import TestimonialsCards from "./TestimonialsCards";

const TestimonialsSection = () => {
	return (
		<section className="testimonials-section py-[60px]">
			<div className="container">
				<SectionHeading
					title="Testimonials"
					subtitle="What our users say and how we’ve helped them"
				/>

				<TestimonialsCards />
			</div>
		</section>
	);
};

export default TestimonialsSection;
