import { useState, useEffect, useRef } from "react";

interface UseCountAnimationProps {
	end: number;
	duration?: number;
	startOnView?: boolean;
	threshold?: number;
}

export const useCountAnimation = ({
	end,
	duration = 2000,
	startOnView = true,
	threshold = 0.5,
}: UseCountAnimationProps) => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);
	const [isCounting, setIsCounting] = useState(false);
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!startOnView || hasAnimated) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setIsVisible(true);
					setHasAnimated(true);
				}
			},
			{ threshold }
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => observer.disconnect();
	}, [startOnView, hasAnimated, threshold]);

	useEffect(() => {
		if (!isVisible) return;

		setIsCounting(true);
		let startTime: number;
		let animationFrame: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min((currentTime - startTime) / duration, 1);

			// Easing function for smooth animation
			const easeOutQuart = 1 - Math.pow(1 - progress, 4);
			const currentCount = Math.floor(end * easeOutQuart);

			setCount(currentCount);

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			} else {
				setIsCounting(false);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
			setIsCounting(false);
		};
	}, [isVisible, end, duration]);

	return { count, isCounting, elementRef };
};
