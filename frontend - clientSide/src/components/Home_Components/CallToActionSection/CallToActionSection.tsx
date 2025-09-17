import { Link } from "react-router-dom";
import "./CallToActionSection.scss";
import type { CallToActionSectionProps } from "../../../common/Types/Interfaces";


const CallToActionSection = ({ title, subtitle, studentButtonText, teacherButtonText, bg }: CallToActionSectionProps) => {
	return (
		<section className={`Call-To-Action-Section ${bg}`}>
			<div className="container">
				<div className="cta-content">
					{/* Title */}
                    <h2 className="cta-title">
						{title}
					</h2>
					
                    {/* Subtitle */}
                    <p className="cta-subtitle">
						{subtitle}
					</p>
                    
                    {/* Buttons */}
					<div className="cta-buttons">
						<Link to="/create-account?role=student" className="cta-btn cta-btn-primary">
							{studentButtonText}
						</Link>
						<Link to="/create-account?role=teacher" className="cta-btn cta-btn-secondary">
							{teacherButtonText}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToActionSection;
