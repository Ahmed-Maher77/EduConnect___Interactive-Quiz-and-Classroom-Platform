import type { SocialLink } from "../../common/Footer/footerData";

interface SocialLinksProps {
	links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
	return (
		<div className="footer-social">
			{links.map((link, index) => (
				<a
					key={index}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon"
					aria-label={link.ariaLabel}
				>
					<i className={link.icon}></i>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
