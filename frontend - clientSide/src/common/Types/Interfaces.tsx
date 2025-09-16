// ThemeSwitcher component props
export interface ThemeSwitcherProps {
    isDarkMode: boolean;
    screen: "desktop" | "mobile";
}

// SectionHeading component props
export interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    classNameTitle?: string;
    maxWidth?: string;
}

// FeatureCard component props
export interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

// RoleChoiceCard component props
export interface RoleChoiceCardProps {
	role: string;
    roleImage: string;
    roleDescription: string;
    roleIcon: string;
    onSelectRole: (role: string) => void;
}

// MobileMenuButton component props
export interface MobileMenuButtonProps {
	isOpen: boolean;
	onToggle: () => void;
}

// ContactForm component props
export interface ContactFormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}