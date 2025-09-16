import SectionHeading from "../../SectionHeading/SectionHeading";
import "./AboutDeveloper.scss";

const AboutDeveloper = () => {
	return (
		<div
			className="About-Developer section-bg py-[60px]"
			id="about-developer"
		>
			<div className="container">
				{/* Section Heading */}
				<SectionHeading
					title="About The Developer"
					subtitle="Get to know the person behind EduConnect"
				/>

				{/* Developer Card */}
				<div className="developer-card">
					<div className="developer-info">
						{/* Developer Description */}
						<p className="developer-description">
							I'm Ahmed Maher, a passionate full-stack developer
							with a Bachelor's in Computer and Control Systems
							Engineering. Specialized in creating dynamic,
							responsive, and accessible web applications that
							bring ideas to life. Feel free to reach out with any
							questions or feedback.
						</p>

						{/* Divider */}
						<div className="divider"></div>

						{/* Contact Details */}
						<div className="contact-details">
							<div className="contact-item">
								<span className="contact-label">Name</span>
								<span className="contact-value">
									Ahmed Maher
								</span>
							</div>

							{/* Contact Item */}
							<div className="contact-item">
								<span className="contact-label">Title</span>
								<span className="contact-value">
									Full-Stack Developer
								</span>
							</div>

							{/* Contact Item */}
							<div className="contact-item">
								<span className="contact-label">Contact</span>
								<div className="contact-methods">
									<a
										href="mailto:ahmedmaher.dev1@gmail.com"
										className="contact-value contact-link"
									>
										ahmedmaher.dev1@gmail.com
									</a>
									<div className="social-links">
										<a
											href="https://ahmedmaher-portfolio.vercel.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="social-link"
											title="Portfolio"
										>
											<i className="fa-solid fa-globe"></i>
										</a>
										<a
											href="https://linkedin.com/in/ahmedmaher-dev"
											target="_blank"
											rel="noopener noreferrer"
											className="social-link"
											title="LinkedIn"
										>
											<i className="fa-brands fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutDeveloper;
