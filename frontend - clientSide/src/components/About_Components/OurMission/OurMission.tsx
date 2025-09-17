import SectionHeading from "../../SectionHeading/SectionHeading";

const OurMission = () => {
	return (
		<section className="my-[60px]">
			{/* Section Heading */}
			<SectionHeading
				title="Our Mission"
				subtitle="What drives us forward every day."
			/>

			{/* Our Mission Content */}
			<p className="dark-gray-color text-lg w-[90%] mx-auto mt-3 max-w-[800px] text-center">
				Our mission is to revolutionize education by providing a
				seamless, intuitive platform that enhances teaching and
				learning. We aim to empower educators with dynamic tools and
				provide students with a personalized, interactive experience.
			</p>
		</section>
	);
};

export default OurMission;
