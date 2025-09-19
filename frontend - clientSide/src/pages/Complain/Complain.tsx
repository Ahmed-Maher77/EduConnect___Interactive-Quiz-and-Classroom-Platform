
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ComplainForm from "../../components/Complain_Components/ComplainForm";

const Complain = () => {
	return (
		<div className="Complain-Page main-page  my-[60px]">
			<div className="container">
				<SectionHeading
					title="Submit a Complaint"
					subtitle="We'll get back to you as soon as possible."
					classNameTitle="page-title"
				/>

                <ComplainForm />
			</div>
		</div>
	);
};

export default Complain;
