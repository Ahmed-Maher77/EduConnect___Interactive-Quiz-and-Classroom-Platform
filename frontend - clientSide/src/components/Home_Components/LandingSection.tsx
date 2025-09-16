const LandingSection = () => {
	return (
		<main className="landing-section flex justify-center items-center">
			<div className="container main-page flex flex-col gap-3 justify-center items-center text-center px-4">
				{/* Title */}
				<h2 className="white-fixed-color text-3xl lg:text-4xl xl:text-5xl font-bold">
					Elevate Your Teaching, Empower Your Students
				</h2>
				
				{/* Description */}
				<p className="white-fixed-color text-lg lg:text-xl light-gray-color w-[90%] max-w-[800px] my-6">
					Create engaging quizzes, manage classes effortlessly, and
					track student progress in real-time. Available in English
					and Arabic.
				</p>
				
				{/* Buttons */}
				<div className="home-buttons flex gap-5 flex-wrap justify-center">
					<button className="btn-main-blue p-3 px-7 font-semibold flex items-center justify-center gap-2">
						<i className="fa-solid fa-rocket"></i>
						Get Started
					</button>
					<button className="btn-white font-semibold text-lg p-3 px-5 flex items-center justify-center gap-2">
						<i className="fa-solid fa-download main-color"></i>
						Install App
					</button>
				</div>
			</div>
		</main>
	);
};

export default LandingSection;
