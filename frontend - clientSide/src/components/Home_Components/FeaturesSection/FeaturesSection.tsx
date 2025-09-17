import { NavLink } from "react-router-dom";
import SectionHeading from "../../SectionHeading/SectionHeading";
import FeatureCards from "./FeatureCards";
import { createRouteScrollHandler } from "../../../utils/functions/smoothScroll";
import { useNavigate } from "react-router-dom";
import { featuresData } from "./featuresData";

const FeaturesSection = ({
	length = featuresData.length,
	id,
	bg,
    title,
    subtitle,
}: {
	length?: number;
	id?: string;
	bg?: string;
    title?: string;
    subtitle?: string;
}) => {
	const navigate = useNavigate();
	const features = featuresData.slice(0, length);

	return (
		<section className={`Features-Section py-[55px] ${bg}`} id={id}>
			<div className="container">
				<SectionHeading
					title={title ?? "Features"}
					subtitle={subtitle ?? "EduConnect offers a wide range of features to enhance your teaching experience and student engagement."}
				/>

				<FeatureCards features={features} />

				{/* See More Features Button */}
				{length < featuresData.length && (
					<div className="text-center mt-12 w-fit mx-auto">
						<NavLink
							to="/about"
							onClick={createRouteScrollHandler(
								"/about",
								"main-features",
								90,
								navigate
							)}
							className="btn-main-blue p-3 px-7 font-semibold flex items-center justify-center gap-2"
						>
							<i className="fa-solid fa-rocket"></i>
							See More Features
						</NavLink>
					</div>
				)}
			</div>
		</section>
	);
};

export default FeaturesSection;
