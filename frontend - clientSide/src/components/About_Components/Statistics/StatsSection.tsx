import StatItem from "./StateItem";

const stats = [
	{ value: 5000, suffix: "+", label: "Active Students" },
	{ value: 1000, suffix: "+", label: "Courses Available" },
	{ value: 500, suffix: "+", label: "Expert Teachers" },
];

const StatsSection = () => {
	return (
		<section
			className="stats-section py-[60px]"
			style={{ backgroundColor: "var(--main-blue-color)" }}
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
					{stats.map((item) => (
						<StatItem
							key={item.label}
							target={item.value}
							label={item.label}
							suffix={item.suffix}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
