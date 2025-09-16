import ContactForm from "../../components/Contact_Components/ContactForm";
import ContactInfo from "../../components/Contact_Components/ContactInfo";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Contact = () => {
	return (
		<div className="Contact-Page main-page mt-[70px] my-[60px]">
			<div className="container">
				{/* Section Heading */}
        <SectionHeading
					title="Contact Us"
					subtitle="We're here to help you! Reach out to us for any questions or feedback."
					classNameTitle="page-title"
				/>

        {/* Main Content */}
        <main className="flex gap-10 my-7 max-lg:flex-wrap justify-between">
          <ContactInfo />
          <ContactForm />
        </main>

        {/* Location Section (Google Maps) */}
        <section className="location-section py-[60px]">
          <SectionHeading
            title="Our Location"
            subtitle="We're located in Cairo, Egypt."
            classNameTitle="page-title"
          />

          <GoogleMap />
        </section>

			</div>
		</div>
	);
};

export default Contact;
