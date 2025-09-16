import type { FormikProps } from "formik";
import ForgotPasswordForm from "../ForgotPasswordForm/ForgotPasswordForm";
import FormFooter from "../FormFooter/FormFooter";

interface ForgotPasswordContentProps {
	formik: FormikProps<{ emailOrId: string }>;
	resetMethod: "email" | "id";
	onResetMethodChange: (method: "email" | "id") => void;
	role: string;
}

const ForgotPasswordContent = ({
	formik,
	resetMethod,
	onResetMethodChange,
	role,
}: ForgotPasswordContentProps) => {
	return (
		<div className="forgot-password-content mx-auto">
			<ForgotPasswordForm
				formik={formik}
				resetMethod={resetMethod}
				onResetMethodChange={onResetMethodChange}
			/>

			<FormFooter role={role} />
		</div>
	);
};

export default ForgotPasswordContent;
