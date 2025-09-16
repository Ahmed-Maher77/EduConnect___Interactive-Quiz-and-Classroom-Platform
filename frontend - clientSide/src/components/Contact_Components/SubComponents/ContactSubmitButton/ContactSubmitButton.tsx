interface ContactSubmitButtonProps {
	isSubmitting: boolean;
	text?: string;
	loadingText?: string;
	className?: string;
}

const ContactSubmitButton = ({
	isSubmitting,
	text = "Send Message",
	loadingText = "Sending...",
	className = "btn-main-blue p-3 px-6 mt-5",
}: ContactSubmitButtonProps) => {
	return (
		<button type="submit" className={className} disabled={isSubmitting}>
			{isSubmitting ? (
				<>
					<i className="fa-solid fa-spinner fa-spin mr-2"></i>
					{loadingText}
				</>
			) : (
				text
			)}
		</button>
	);
};

export default ContactSubmitButton;
