// Animation variants for role toggler
export const togglerVariants = {
	initial: { scale: 0.9, opacity: 0 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring" as const,
			stiffness: 400,
			damping: 25,
			duration: 0.3,
		},
	},
	hover: {
		scale: 1.05,
		transition: { duration: 0.2 },
	},
	tap: {
		scale: 0.95,
		transition: { duration: 0.1 },
	},
};

// Animation variants for content transitions
export const contentVariants = {
	initial: {
		opacity: 0,
		y: 20,
		scale: 0.95,
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 30,
			duration: 0.4,
		},
	},
	exit: {
		opacity: 0,
		y: -20,
		scale: 0.95,
	},
};

// Animation variants for role content
export const roleContentVariants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { delay: 0.2, duration: 0.4 },
	},
};
