import "./NavigationBtns.scss";

interface NavigationBtnsProps {
    activeStep: number;
    lastStep: boolean;
    handlePrevious: () => void;
    handleNext: () => void;
	lastStepText?: string;
	prevStepTextInLastStep?: string;
}

const NavigationBtns = ({ activeStep, lastStep, handlePrevious, handleNext, lastStepText, prevStepTextInLastStep }: NavigationBtnsProps) => {
	return (
		<div className="Navigation-Btns">
			<button className="prev-btn flex items-center gap-2 justify-center" type="button" onClick={handlePrevious} disabled={activeStep === 0}>
				<i className="fa-solid fa-arrow-left"></i>
				{ prevStepTextInLastStep && lastStep ? prevStepTextInLastStep : "Previous"}
				</button>
			<button className="next-btn flex items-center gap-2 justify-center" type="button" onClick={handleNext}>
				{lastStep? lastStepText || "Finish" : "Next"}
				<i className="fa-solid fa-arrow-right"></i>
			</button>
		</div>
	);
};

export default NavigationBtns;
