import "./PagesNumbers.scss";

interface PagesNumbersProps {
    steps: { name: string; content: React.ReactNode }[];
    activeStep: number;
}

const PagesNumbers = ({ steps, activeStep }: PagesNumbersProps) => {
	return (
		<ul className="Pages-Numbers">
			{steps.map((step, i) => (
				<li key={i} className={`${activeStep === i ? "active" : activeStep > i ? "past-step" : ""}`}>
					<span className="page-number">{activeStep > i ? "✔" : i + 1}</span>
					<span className="page-title">{step.name}</span>
				</li>
			))}
		</ul>
	);
};

export default PagesNumbers;
