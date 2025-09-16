// ====================== Footer Data Configuration ======================
export interface NavigationLink {
	to: string;
	label: string;
}

export interface SocialLink {
	href: string;
	icon: string;
	ariaLabel: string;
}

export interface DeveloperInfo {
	name: string;
	portfolioUrl: string;
}

export interface FooterConfig {
	developerText: string;
}

// ====================== Navigation Links Data ======================
export const navigationLinks: NavigationLink[] = [
	{ to: "/", label: "Home" },
	{ to: "#about-developer", label: "About" },
	{ to: "/contact", label: "Contact" },
	{ to: "/dashboard", label: "Dashboard" },
	{ to: "/login", label: "Login" },
	{ to: "/complain", label: "Complain" },
];

// ====================== Social Media Links Data ======================
export const socialLinks: SocialLink[] = [
	{
		href: "https://www.linkedin.com/in/ahmed-maher-algohary",
		icon: "fa-brands fa-linkedin-in",
		ariaLabel: "LinkedIn Profile",
	},
	{
		href: "https://web.facebook.com/profile.php?id=100012154268952",
		icon: "fab fa-facebook",
		ariaLabel: "Facebook Profile",
	},
	{
		href: "https://github.com/Ahmed-Maher77",
		icon: "fab fa-github",
		ariaLabel: "GitHub Profile",
	},
];

// ====================== Developer Information ======================
export const developerInfo: DeveloperInfo = {
	name: "Ahmed Maher",
	portfolioUrl: "https://ahmedmaher-portfolio.vercel.app/",
};

// ====================== Footer Configuration ======================
export const footerConfig: FooterConfig = {
	developerText: "Designed and Developed with ❤️ by",
};
