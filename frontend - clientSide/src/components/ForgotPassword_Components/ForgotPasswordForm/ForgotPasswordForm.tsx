import { useEffect, useRef } from "react";
import type { FormikProps } from "formik";
import ResetMethodToggle from "../ResetMethodToggle/ResetMethodToggle";
import ResetField from "../ResetField/ResetField";
import FormIcon from "../FormIcon/FormIcon";
import SubmitButton from "../SubmitButton/SubmitButton";

interface ForgotPasswordFormProps {
	formik: FormikProps<{ emailOrId: string }>;
	resetMethod: "email" | "id";
	onResetMethodChange: (method: "email" | "id") => void;
}

const ForgotPasswordForm = ({
	formik,
	resetMethod,
	onResetMethodChange,
}: ForgotPasswordFormProps) => {
	const prevResetMethodRef = useRef<boolean | null>(null);

	const isEmail = resetMethod === "email";

	// Determine animation direction based on previous value for input field toggle
	const swapDirection = (() => {
		const prev = prevResetMethodRef.current;
		if (prev === null) return "left";
		if (isEmail && prev === false) return "left"; // ID → Email: left
		if (!isEmail && prev === true) return "right"; // Email → ID: right
		return "left";
	})();

	useEffect(() => {
		prevResetMethodRef.current = isEmail;
	}, [isEmail]);

	return (
		<form
			className="forgot-password-form light-shadow"
			onSubmit={formik.handleSubmit}
		>
			<FormIcon />

			<ResetMethodToggle
				resetMethod={resetMethod}
				onToggle={onResetMethodChange}
			/>

			<ResetField
				resetMethod={resetMethod}
				value={formik.values.emailOrId}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.errors.emailOrId}
				touched={formik.touched.emailOrId}
				swapDirection={swapDirection}
			/>

			<SubmitButton isSubmitting={formik.isSubmitting} />
		</form>
	);
};

export default ForgotPasswordForm;
