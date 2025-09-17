import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const StatItem = ({
	target,
	label,
	suffix,
}: {
	target: number;
	label: string;
	suffix?: string;
}) => {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLDivElement | null>(null);
	const hasAnimatedRef = useRef(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimatedRef.current) {
						hasAnimatedRef.current = true;
						const duration = 1500; // ms
						const start = performance.now();
						const from = 0;
						const to = target;

						const step = (now: number) => {
							const elapsed = now - start;
							const progress = Math.min(1, elapsed / duration);
							const eased = easeOutCubic(progress);
							setCount(Math.round(from + (to - from) * eased));
							if (progress < 1) requestAnimationFrame(step);
						};
						requestAnimationFrame(step);
					}
				});
			},
			{ threshold: 0.4 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [target]);

	return (
		<div ref={ref} className="flex flex-col items-center justify-center">
			<p className="white-fixed-color text-5xl font-extrabold tracking-tight">
				{count.toLocaleString()}
				{suffix ? <span>{suffix}</span> : null}
			</p>
			<p className="white-fixed-color mt-2 text-lg opacity-90">{label}</p>
		</div>
	);
};

export default StatItem;
