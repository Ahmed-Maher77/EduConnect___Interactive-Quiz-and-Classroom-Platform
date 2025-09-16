import type { MobileMenuButtonProps } from "../../Types/Interfaces";

const MobileMenuButton = ({ isOpen, onToggle }: MobileMenuButtonProps) => {
	return (
		<button
			className="mobile-menu-btn lg:hidden"
			onClick={onToggle}
			aria-label="Toggle menu"
		>
			<span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
			<span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
			<span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
		</button>
	);
};

export default MobileMenuButton;
