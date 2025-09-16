import { useNavigate } from "react-router-dom";
import "./BackButton.scss";

interface BackButtonProps {
	to?: string;
	text?: string;
	className?: string;
	onClick?: () => void;
}

const BackButton = ({
	to = "/login",
	text = "Back",
	className = "",
	onClick,
}: BackButtonProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (onClick) {
			onClick();
		} else {
			navigate(to);
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`back-button ${className}`}
			aria-label="Go back"
		>
			<div className="back-button-content">
				<i className="fa-solid fa-arrow-left back-button-icon"></i>
				<span className="back-button-text">{text}</span>
			</div>
		</button>
	);
};

export default BackButton;
