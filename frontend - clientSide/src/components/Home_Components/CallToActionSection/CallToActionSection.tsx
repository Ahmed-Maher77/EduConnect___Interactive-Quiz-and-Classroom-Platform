import { Link } from "react-router-dom";
import "./CallToActionSection.scss";

const CallToActionSection = () => {
	return (
		<section className="Call-To-Action-Section">
			<div className="container">
				<div className="cta-content">
					{/* Title */}
                    <h2 className="cta-title">
						Ready to Start Your Learning Journey?
					</h2>
					
                    {/* Subtitle */}
                    <p className="cta-subtitle">
						Join thousands of students and teachers today.
					</p>
                    
                    {/* Buttons */}
					<div className="cta-buttons">
						<Link to="/signup?role=student" className="cta-btn cta-btn-primary">
							Sign Up as a Student
						</Link>
						<Link to="/signup?role=teacher" className="cta-btn cta-btn-secondary">
							Become a Teacher
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToActionSection;
