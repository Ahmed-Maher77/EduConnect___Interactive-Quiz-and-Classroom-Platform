import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const location = useLocation();
	const [isScrolling, setIsScrolling] = useState(false);
	const prevLocationRef = useRef<string>("");

	useEffect(() => {
		const currentLocation = `${location.pathname}${location.search}`;
		const prevLocation = prevLocationRef.current;

		// Skip on initial mount
		if (prevLocation === "") {
			prevLocationRef.current = currentLocation;
			return;
		}

		// Check if role parameter was removed (had ?role= before, now doesn't)
		const hadRole = prevLocation.includes("role=");
		const hasRole = currentLocation.includes("role=");
		const roleRemoved = hadRole && !hasRole;

		// Check if it's a different route
		const isDifferentRoute = currentLocation !== prevLocation;

		// Trigger scroll animation on route change OR when role is removed
		if (isDifferentRoute || roleRemoved) {
			console.log("ScrollToTop triggered:", {
				isDifferentRoute,
				roleRemoved,
				prevLocation,
				currentLocation,
			});

			setIsScrolling(true);

			// Scroll to top with smooth animation
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});

			// Reset animation state after scroll completes
			const timer = setTimeout(() => {
				setIsScrolling(false);
			}, 800);

			// Update the ref for next comparison
			prevLocationRef.current = currentLocation;

			return () => clearTimeout(timer);
		}

		// Update the ref even if no scroll was triggered
		prevLocationRef.current = currentLocation;
	}, [location.pathname, location.search, location.hash]);

	return (
		<AnimatePresence>
			{isScrolling && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-2 rounded-full shadow-lg"
				>
					<motion.i
						className="fa-solid fa-arrow-up"
						animate={{ y: [-2, 2, -2] }}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
