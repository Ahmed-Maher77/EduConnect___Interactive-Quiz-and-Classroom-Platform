import SectionHeading from "../../SectionHeading/SectionHeading";
import { useCountAnimation } from "../../../common/Animations/useCountAnimation";
import "./OurImpactSection.scss";

const OurImpactSection = () => {
	const impactData = [
		{
			number: 500,
			label: "Teachers",
			icon: "fa-chalkboard-teacher",
		},
		{
			number: 10000,
			label: "Students",
			icon: "fa-graduation-cap",
		},
		{
			number: 2000,
			label: "Classes",
			icon: "fa-book",
		},
		{
			number: 1500,
			label: "Quizzes",
			icon: "fa-question-circle",
		},
		{
			number: 3000,
			label: "Lessons",
			icon: "fa-play-circle",
		},
	];

	// Create animated counters for each impact item
	const AnimatedImpactCard = ({ item }: { item: (typeof impactData)[0] }) => {
		const { count, isCounting, elementRef } = useCountAnimation({
			end: item.number,
			duration: 2000,
			startOnView: true,
			threshold: 0.3,
		});

		return (
			<div ref={elementRef} className="impact-card">
				<div className="impact-icon">
					<i className={`fas ${item.icon}`}></i>
				</div>
				<div
					className={`impact-number ${isCounting ? "counting" : ""}`}
				>
					{count.toLocaleString()}+
				</div>
				<div className="impact-label">{item.label}</div>
			</div>
		);
	};

	return (
		<div className="our-impact-section section-bg py-[60px]">
			<div className="container">
				<SectionHeading
					title="Our Impact"
					subtitle="Making a difference in education worldwide"
				/>

				<div className="impact-cards">
					{impactData.map((item, index) => (
						<AnimatedImpactCard key={index} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OurImpactSection;
