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

// ComplainForm component props
export interface ComplainFormValues {
	complainTitle: string;
	complainSubject: string;
	name: string;
	email: string;
	role: string;
	userId: string;
}


// CountrySelect component props
// CountryOption component props
export interface CountryOption {
	code: string;
	name: string;
}
export interface CountrySelectProps {
	id: string;
	name: string;
	value: string; // country code or name depending on usage; here we'll use country name
	onChange: (newValue: string) => void;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
}

// Confirmation component props
type ConfirmationSection = "personal" | "professional" | "documents";
export interface ConfirmationProps {
	onEditSection?: (section: ConfirmationSection) => void;
	data?: {
		personal?: {
			firstName?: string;
			lastName?: string;
			email?: string;
			phone?: string;
			dateOfBirth?: string;
		};
		professional?: {
			title?: string;
			yearsOfExperience?: string;
			subjects?: string[];
			shortBio?: string;
		};
		documents?: {
			idDocumentName?: string | null;
			certificateName?: string | null;
			country?: string;
		};
	};
}