import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

export type PageSwapDirection = "left" | "right" | "up" | "down";

interface PageSwapProps {
	id: string;
	direction?: PageSwapDirection;
	children: React.ReactNode;
	className?: string;
}

const getAxis = (dir: PageSwapDirection) =>
	dir === "left" || dir === "right" ? "x" : "y";
const getDelta = (dir: PageSwapDirection) =>
	dir === "left" || dir === "up" ? -16 : 16;

const PageSwap: React.FC<PageSwapProps> = ({
	id,
	direction = "left",
	children,
	className,
}) => {
	const axis = getAxis(direction);
	const delta = getDelta(direction);

	const variants: Variants = {
		initial: {
			opacity: 0,
			...(axis === "x" ? { x: delta } : { y: delta }),
		},
		animate: {
			opacity: 1,
			...(axis === "x" ? { x: 0 } : { y: 0 }),
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 30,
				duration: 0.3,
			},
		},
		exit: {
			opacity: 0,
			...(axis === "x" ? { x: -delta * 0.5 } : { y: -delta * 0.5 }),
			transition: {
				duration: 0.15,
				ease: [0.4, 0, 0.2, 1],
			},
		},
	};

	return (
		<div className={className}>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={id}
					variants={variants}
					initial="initial"
					animate="animate"
					exit="exit"
					style={{ willChange: "transform, opacity" }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default PageSwap;
