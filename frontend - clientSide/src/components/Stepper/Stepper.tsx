import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Stepper.scss";
import PagesNumbers from "./PagesNumbers/PagesNumbers";
import NavigationBtns from "./NavigationBtns/NavigationBtns";

interface StepperProps {
	steps: { name: string; content: React.ReactNode }[];
}

const Stepper = ({ steps }: StepperProps) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const getInitialStep = () => {
		const stepParam = searchParams.get("step");
		const parsed = stepParam ? parseInt(stepParam, 10) : 1; // 1-based in URL
		const oneBased = Number.isNaN(parsed) ? 1 : parsed;
		const zeroBased = oneBased - 1;
		return Math.min(Math.max(zeroBased, 0), steps.length - 1);
	};

	const [activeStep, setActiveStep] = useState<number>(getInitialStep());

	useEffect(() => {
		const current = searchParams.get("step");
		const desired = String(activeStep + 1); // write 1-based to URL
		if (current !== desired) {
			const next = new URLSearchParams(searchParams);
			next.set("step", desired);
			setSearchParams(next, { replace: true });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeStep]);

	const handleNext = () => {
		if (activeStep < steps.length - 1) {
			setActiveStep((prev) => prev + 1);
		} else {
			const event = new CustomEvent("registration:submit");
			window.dispatchEvent(event);
		}
	};

	const handlePrevious = () =>
		setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));

	return (
		<div className="Stepper">
			<PagesNumbers steps={steps} activeStep={activeStep} />
			{/* =========== Content =========== */}
			<main>{steps[activeStep].content}</main>
			<NavigationBtns
				activeStep={activeStep}
				lastStep={activeStep >= steps.length - 1}
				handlePrevious={handlePrevious}
				handleNext={handleNext}
				lastStepText="Create Account"
				prevStepTextInLastStep="Back"
			/>
		</div>
	);
};

export default Stepper;
