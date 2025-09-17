import { useState, useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import type { FormikHelpers } from "formik";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import BackButton from "../../components/BackButton/BackButton";
import { useValidationSchema_ForgotPassword } from "../../utils/form-validation/useValidationSchema_ForgotPassword";
import PageSwap from "../../common/Animations/PageSwap";
import ForgotPasswordContent from "../../components/ForgotPassword_Components/ForgotPasswordContent/ForgotPasswordContent";
import SuccessCard from "../../components/ForgotPassword_Components/SuccessCard/SuccessCard";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [resetMethod, setResetMethod] = useState<"email" | "id">("email");
	const [searchParams] = useSearchParams();
	const role = searchParams.get("role");
	const [prevRole, setPrevRole] = useState<string | null>(null);
	const [isInitialLoad, setIsInitialLoad] = useState(true);

	const handleSubmit = async (
		values: { emailOrId: string },
		{ resetForm }: FormikHelpers<{ emailOrId: string }>
	) => {
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log("Reset password request:", values);
			setIsSubmitted(true);
			resetForm();
		} catch (error) {
			console.error("Error sending reset link:", error);
		}
	};

	const formik = useValidationSchema_ForgotPassword(handleSubmit);

	// Track role changes for PageSwap animation
	useEffect(() => {
		if (role) {
			setPrevRole(role);
		}
	}, [role]);

	// Handle initial load animation
	useEffect(() => {
		if (isInitialLoad) {
			const timer = setTimeout(() => {
				setIsInitialLoad(false);
			}, 100); // Small delay to ensure smooth initial animation
			return () => clearTimeout(timer);
		}
	}, [isInitialLoad]);

	// Determine PageSwap direction based on role order (same as Login component)
	const order = ["teacher", "student", "admin"] as const;
	const pageDirection = (() => {
		if (isInitialLoad) return "left" as const; // Initial load always slides from left
		if (!role || !prevRole) return "left" as const;
		const a = order.indexOf(prevRole as (typeof order)[number]);
		const b = order.indexOf(role as (typeof order)[number]);
		if (a === -1 || b === -1) return "left" as const;
		return b > a ? "left" : "right"; // slide direction
	})();

	if (!role) {
		return <Navigate to="/login" />;
	}

	if (isSubmitted) {
		return (
			<div className="Forgot-Password-Page main-page  my-[60px]">
				<div className="container relative">
					<PageSwap
						id={isInitialLoad ? "loading-success" : "success"}
						direction="left"
					>
						{/* Back Button */}
						<div className="back-button-container absolute top-[-55px] lg:top-[-30px] left-0">
							<BackButton to="/login" text="Back to Login" />
						</div>
						<div className="forgot-password-content mx-auto">
							<SuccessCard />
						</div>
					</PageSwap>
				</div>
			</div>
		);
	}

	return (
		<div className="Forgot-Password-Page main-page  my-[60px]">
			<div className="container relative">
				<PageSwap
					id={isInitialLoad ? "loading" : `forgot-${role}`}
					direction={pageDirection}
				>
					{/* Back Button */}
					<div className="back-button-container absolute top-[-55px] lg:top-[-30px]">
						<BackButton to="/login" text="Back to Login" />
					</div>

					{/* Header */}
					<header className="text-center mb-8">
						<SectionHeading
							title="Forgot Your Password?"
							subtitle="No worries, we'll send you reset instructions"
							classNameTitle="page-title"
							maxWidth="700px"
						/>
					</header>

					{/* Forgot Password Content */}
					<ForgotPasswordContent
						formik={formik}
						resetMethod={resetMethod}
						onResetMethodChange={setResetMethod}
						role={role}
					/>
				</PageSwap>
			</div>
		</div>
	);
};

export default ForgotPassword;
