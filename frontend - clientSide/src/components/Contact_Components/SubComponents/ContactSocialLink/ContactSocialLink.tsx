interface ContactSocialLinkProps {
	href: string;
	title: string;
	icon: string;
}

const ContactSocialLink = ({ href, title, icon }: ContactSocialLinkProps) => {
	return (
		<a
			className="w-[50px] h-[50px] social-link-1"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			title={title}
		>
			<i className={`${icon} text-[1.3rem]`}></i>
		</a>
	);
};

export default ContactSocialLink;
