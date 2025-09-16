import SectionHeading from "../../SectionHeading/SectionHeading";
import FAQCards from "./FAQCards";

const FAQSection = () => {
	return (
		<section className="FAQ-Section section-bg py-[60px]">
			<div className="container">
				<SectionHeading
					title="FAQ"
					subtitle="Frequently Asked Questions"
				/>

				<FAQCards />
			</div>
		</section>
	);
};

export default FAQSection;
