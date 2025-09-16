interface SubmitButtonProps {
	isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
	return (
		<button
			type="submit"
			className="btn-main-blue submit-btn p-3 mt-10"
			disabled={isSubmitting}
		>
			{isSubmitting ? (
				<>
					<i className="fa-solid fa-spinner fa-spin"></i>
					Sending...
				</>
			) : (
				"Send Reset Link"
			)}
		</button>
	);
};

export default SubmitButton;
