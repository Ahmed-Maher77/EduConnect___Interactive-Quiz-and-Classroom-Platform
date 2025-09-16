import type { SectionHeadingProps } from "../../common/Types/Interfaces";
import "./SectionHeading.scss";

const SectionHeading = ({
	title,
	subtitle,
	classNameTitle,
	maxWidth,
}: SectionHeadingProps) => {
	return (
		<div
			className="section-heading text-center mb-[50px] mx-auto w-full"
			style={{ maxWidth: maxWidth || "700px" }}
		>
			<h2
				className={`black-color text-3xl xl:text-4xl font-bold ${
					classNameTitle === "page-title"
						? "xl:text-5xl page-title"
						: classNameTitle ?? ""
				}`}
			>
				{title}
			</h2>

			{subtitle && (
				<p className="xl:text-lg dark2-gray-color w-[90%] mx-auto mt-3">
					{subtitle}
				</p>
			)}
		</div>
	);
};

export default SectionHeading;
