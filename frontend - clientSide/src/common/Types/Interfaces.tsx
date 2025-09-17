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

// CallToActionSection component props
export interface CallToActionSectionProps {
	title: string;
	subtitle: string;
	studentButtonText: string;
	teacherButtonText: string;
	bg?: string;
}

// TestimonialsCards component props
export interface Testimonial {
	id: number;
	quote: string;
	name: string;
	role: string;
	department: string;
	avatar: string;
}

// SectionSlider component props
export interface SectionSliderProps {
	scrollbar: boolean;
	breakpoints: {
		[key: number]: { slidesPerView: number; spaceBetween: number };
	};
	autoplay: boolean;
	children: React.ReactNode | React.ReactNode[];
	showPagination: boolean;
	classNames?: string;
}

// TeamMember component props
export interface TeamMember {
	id: number;
	name: string;
	title: string;
	avatar: string;
	description?: string;
}
