import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const submitSchema = Yup.object({
	email: Yup.string()
		.email("Enter a valid email")
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			"Enter a valid email with a top-level domain (e.g., .com, .net)"
		)
		.required("Email is required"),
	subject: Yup.string()
		.min(3, "Subject must be at least 3 characters")
		.max(100, "Subject must be less than 100 characters")
		.required("Subject is required"),
	message: Yup.string()
		.min(10, "Message must be at least 10 characters")
		.max(1000, "Message must be less than 1000 characters")
		.required("Message is required"),
});

interface ContactFormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export const useValidationSchema_ContactForm = (
	onSubmit?: (
		values: ContactFormValues,
		formikHelpers: FormikHelpers<ContactFormValues>
	) => void
) => {
	return useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validationSchema: submitSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit:
			onSubmit ||
			(() => {
				console.log("No submit handler provided");
			}),
	});
};
