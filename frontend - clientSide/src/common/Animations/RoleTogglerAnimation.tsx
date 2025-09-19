import { motion } from "framer-motion";
import {
	togglerVariants,
	contentVariants,
	roleContentVariants,
} from "./RoleTogglerVariants";

// Reusable animated toggler container component
interface AnimatedTogglerContainerProps {
	children: React.ReactNode;
}

export const AnimatedTogglerContainer = ({
	children,
}: AnimatedTogglerContainerProps) => {
	return (
		<motion.div
			className="toggler-container"
			variants={togglerVariants}
			initial="initial"
			animate="animate"
		>
			{children}
		</motion.div>
	);
};

// Reusable animated toggler button component
interface AnimatedTogglerButtonProps {
	role: string;
	currentRole: string;
	onClick: () => void;
	children: React.ReactNode;
}

export const AnimatedTogglerButton = ({
	role,
	currentRole,
	onClick,
	children,
}: AnimatedTogglerButtonProps) => {
	return (
		<motion.button
			className={`role-toggler ${currentRole === role ? "active" : ""}`}
			onClick={onClick}
			variants={togglerVariants}
			whileHover="hover"
			whileTap="tap"
		>
			{children}
		</motion.button>
	);
};

// Reusable animated content wrapper
interface AnimatedContentWrapperProps {
	role: string;
	children: React.ReactNode;
}

export const AnimatedContentWrapper = ({
	role,
	children,
}: AnimatedContentWrapperProps) => {
	return (
		<motion.div
			key={role}
			className="create-account-content"
			variants={contentVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{children}
		</motion.div>
	);
};

// Reusable animated role content
interface AnimatedRoleContentProps {
	children: React.ReactNode;
}

export const AnimatedRoleContent = ({ children }: AnimatedRoleContentProps) => {
	return (
		<motion.div
			className="role-content"
			variants={roleContentVariants}
			initial="initial"
			animate="animate"
		>
			{children}
		</motion.div>
	);
};
