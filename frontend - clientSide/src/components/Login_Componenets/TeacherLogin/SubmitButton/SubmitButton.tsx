interface SubmitButtonProps {
	isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
	return (
		<button
			type="submit"
			className="btn-main-blue trans-3 p-2 mt-10 text-[19px]"
			disabled={isSubmitting}
		>
			{isSubmitting ? "Submitting..." : "Login"}
		</button>
	);
};

export default SubmitButton;
