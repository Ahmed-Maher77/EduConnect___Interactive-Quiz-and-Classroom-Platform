import React, { useEffect, useState, useCallback } from "react";
import "./Toast.scss";

interface ToastProps {
	message: string;
	type?: "success" | "error" | "warning" | "info";
	duration?: number;
	onClose?: () => void;
	show: boolean;
}

const Toast: React.FC<ToastProps> = ({
	message,
	type = "info",
	duration = 4500,
	onClose,
	show,
}) => {
	const [isVisible, setIsVisible] = useState(show);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleClose = useCallback(() => {
		setIsAnimating(false);
		setTimeout(() => {
			setIsVisible(false);
			onClose?.();
		}, 300); // Match animation duration
	}, [onClose]);

	useEffect(() => {
		if (show) {
			setIsVisible(true);
			setIsAnimating(true);

			const timer = setTimeout(() => {
				handleClose();
			}, duration);

			return () => clearTimeout(timer);
		}
	}, [show, duration, handleClose]);

	if (!isVisible) return null;

	const getIcon = () => {
		switch (type) {
			case "success":
				return "fa-solid fa-check-circle";
			case "error":
				return "fa-solid fa-exclamation-circle";
			case "warning":
				return "fa-solid fa-exclamation-triangle";
			default:
				return "fa-solid fa-info-circle";
		}
	};

	return (
		<div className={`toast ${type} ${isAnimating ? "show" : "hide"}`}>
			<div className="toast-content">
				<div className="toast-icon">
					<i className={getIcon()}></i>
				</div>
				<div className="toast-message">
					<span>{message}</span>
				</div>
				<button
					className="toast-close"
					onClick={handleClose}
					aria-label="Close notification"
				>
					<i className="fa-solid fa-times"></i>
				</button>
			</div>
			<div className="toast-progress">
				<div className="toast-progress-bar"></div>
			</div>
		</div>
	);
};

export default Toast;
