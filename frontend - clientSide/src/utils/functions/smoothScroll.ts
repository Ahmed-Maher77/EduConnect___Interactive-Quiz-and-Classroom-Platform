// Smooth scroll utility function
export const smoothScrollTo = (targetId: string, offset: number = 90) => {
	// If no targetId provided, scroll to top of page
	if (!targetId) {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		return;
	}

	const element = document.getElementById(targetId);
	if (element) {
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
};

// Creates a smooth scroll handler for anchor links
export const createSmoothScrollHandler = (
	targetId: string,
	offset: number = 90
) => {
	return (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		smoothScrollTo(targetId, offset);
	};
};

// Creates a handler that navigates to home first, then scrolls
export const createHomeScrollHandler = (
	targetId: string,
	offset: number = 90,
	navigate: (path: string) => void
) => {
	return (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		// Check if we're already on the home page
		if (window.location.pathname === "/") {
			// If on home page, just scroll to the section
			setTimeout(() => smoothScrollTo(targetId, offset), 100);
		} else {
			// If not on home page, navigate to home first
			navigate("/");
			// Wait for navigation to complete, then scroll
			setTimeout(() => {
				smoothScrollTo(targetId, offset);
			}, 500);
		}
	};
};
