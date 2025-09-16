interface ContactFormHeaderProps {
	title?: string;
}

const ContactFormHeader = ({
	title = "Send Us a Message",
}: ContactFormHeaderProps) => {
	return <h2 className="text-3xl font-bold mb-7">{title}</h2>;
};

export default ContactFormHeader;
