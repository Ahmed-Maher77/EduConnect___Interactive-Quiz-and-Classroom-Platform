import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

export type SwapDirection = "left" | "right";

interface SwapPresenceProps {
	id: string;
	direction: SwapDirection;
	children: React.ReactNode;
	className?: string;
}

/**
 * SwapPresence wraps content and animates swaps with a slide+fade without affecting layout.
 * Place it inside a relatively positioned container with fixed height to avoid layout shifts.
 */
const SwapPresence: React.FC<SwapPresenceProps> = ({
	id,
	direction,
	children,
	className,
}) => {
	const variants: Variants = {
		initial: {
			opacity: 0,
			x: direction === "left" ? -16 : 16,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
		},
		exit: {
			opacity: 0,
			x: direction === "left" ? 16 : -16,
			transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
		},
	};

	return (
		<div className={className} style={{ position: "relative" }}>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={id}
					style={{ position: "absolute", inset: 0 }}
					variants={variants}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default SwapPresence;
