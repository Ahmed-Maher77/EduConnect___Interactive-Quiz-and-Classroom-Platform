import "./Footer.scss";
import NavigationLinks from "../../components/Footer_Components/NavigationLinks";
import SocialLinks from "../../components/Footer_Components/SocialLinks";
import DeveloperCredit from "../../components/Footer_Components/DeveloperCredit";
import {
	navigationLinks,
	socialLinks,
	developerInfo,
	footerConfig,
} from "./footerData";
import { useAppSelector } from "../../utils/redux-toolkit/hooks";

// ====================== Main Footer Component ======================
const Footer = () => {
	const currentYear = useAppSelector(
		(state) => state.globalStates.currentYear
	);

	return (
		<footer className="Footer">
			<div className="container">
				{/* ========================= Navigation Links ========================= */}
				<NavigationLinks links={navigationLinks} />

				{/* ========================= Social Media Icons ========================= */}
				<SocialLinks links={socialLinks} />

				{/* ========================= Copyright and Developer Info ========================= */}
				<DeveloperCredit
					developer={developerInfo}
					text={footerConfig.developerText}
					copyright={`© ${currentYear} EduConnect. All rights reserved.`}
				/>
			</div>
		</footer>
	);
};

export default Footer;
