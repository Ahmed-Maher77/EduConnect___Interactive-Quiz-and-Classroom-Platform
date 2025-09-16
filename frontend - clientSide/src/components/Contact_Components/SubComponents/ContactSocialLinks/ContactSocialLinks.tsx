import ContactSocialLink from "../ContactSocialLink/ContactSocialLink";

interface SocialLink {
	href: string;
	title: string;
	icon: string;
}

interface ContactSocialLinksProps {
	title?: string;
	socialLinks?: SocialLink[];
}

const ContactSocialLinks = ({
	title = "Follow Us",
	socialLinks = [
		{
			href: "https://ahmedmaher-portfolio.vercel.app/",
			title: "Portfolio",
			icon: "fa-solid fa-briefcase",
		},
		{
			href: "https://www.linkedin.com/in/ahmedmaheralgohary",
			title: "LinkedIn",
			icon: "fa-brands fa-linkedin-in",
		},
		{
			href: "https://www.facebook.com/ahmedmaheralgohary",
			title: "Facebook",
			icon: "fa-brands fa-facebook-f",
		},
		{
			href: "https://github.com/Ahmed-Maher77",
			title: "GitHub",
			icon: "fa-brands fa-github",
		},
	],
}: ContactSocialLinksProps) => {
	return (
		<div className="Social-Links mt-5 flex flex-col gap-2 items-start">
			<h3 className="font-bold text-lg mb-2 text-start">{title}</h3>
			<div className="links flex gap-2">
				{socialLinks.map((link, index) => (
					<ContactSocialLink
						key={index}
						href={link.href}
						title={link.title}
						icon={link.icon}
					/>
				))}
			</div>
		</div>
	);
};

export default ContactSocialLinks;
