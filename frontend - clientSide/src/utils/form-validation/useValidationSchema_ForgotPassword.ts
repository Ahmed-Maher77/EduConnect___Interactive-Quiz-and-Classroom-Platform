import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const submitSchema = Yup.object({
	emailOrId: Yup.string()
		.required("Email or User ID is required")
		.test(
			"email-or-id",
			"Enter a valid email or user ID",
			function (value) {
				if (!value) return false;
				// Check if it's an email
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (emailRegex.test(value)) return true;
				// Check if it's a numeric ID (at least 5 digits)
				const idRegex = /^[0-9]{5,}$/;
				if (idRegex.test(value)) return true;
				return false;
			}
		),
});

interface ForgotPasswordValues {
	emailOrId: string;
}

export const useValidationSchema_ForgotPassword = (
	onSubmit?: (
		values: ForgotPasswordValues,
		formikHelpers: FormikHelpers<ForgotPasswordValues>
	) => void
) => {
	return useFormik({
		initialValues: {
			emailOrId: "",
		},
		validationSchema: submitSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit:
			// (values, { resetForm }) => {
			//     console.log("Forgot Password:", JSON.stringify(values, null, 2));
			//     resetForm();
			// },
			onSubmit ||
			(() => {
				console.log("No submit handler provided");
			}),
	});
};
