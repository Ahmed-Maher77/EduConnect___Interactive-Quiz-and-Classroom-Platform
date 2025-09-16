const Logo = () => {
	return (
		<div className="logo flex items-center md:gap-2 gap-1">
			<svg
				className="h-7 w-7 main-color"
				fill="none"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
					fill="currentColor"
				></path>
			</svg>
			<h1 className="text-xl md:text-[1.4rem] font-extrabold letter-spacing-tight">
				EduConnect
			</h1>
		</div>
	);
};

export default Logo;