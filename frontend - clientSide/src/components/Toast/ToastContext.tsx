import React, { createContext, useContext, useState, ReactNode } from "react";
import Toast from "./Toast";

interface ToastData {
	id: string;
	message: string;
	type: "success" | "error" | "warning" | "info";
	duration?: number;
}

interface ToastContextType {
	showToast: (
		message: string,
		type?: "success" | "error" | "warning" | "info",
		duration?: number
	) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
};

interface ToastProviderProps {
	children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	const [toasts, setToasts] = useState<ToastData[]>([]);

	const showToast = (
		message: string,
		type: "success" | "error" | "warning" | "info" = "info",
		duration: number = 4000
	) => {
		const id = Date.now().toString();
		const newToast: ToastData = { id, message, type, duration };

		setToasts((prev) => [...prev, newToast]);
	};

	const removeToast = (id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<div className="toast-container">
				{toasts.map((toast) => (
					<Toast
						key={toast.id}
						message={toast.message}
						type={toast.type}
						duration={toast.duration}
						show={true}
						onClose={() => removeToast(toast.id)}
					/>
				))}
			</div>
		</ToastContext.Provider>
	);
};
