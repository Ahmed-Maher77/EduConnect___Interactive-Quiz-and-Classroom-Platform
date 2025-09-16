import type { ContactFormValues } from "../../common/Types/Interfaces";
import { useValidationSchema_ContactForm } from "../../utils/form-validation/useValidationSchema_ContactForm";
import type { FormikHelpers } from "formik";
import ContactFormHeader from "./SubComponents/ContactFormHeader/ContactFormHeader";
import ContactFormField from "./SubComponents/ContactFormField/ContactFormField";
import ContactSubmitButton from "./SubComponents/ContactSubmitButton/ContactSubmitButton";

const ContactForm = () => {
	const handleSubmit = async (
		values: ContactFormValues,
		{ resetForm }: FormikHelpers<ContactFormValues>
	) => {
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log(
				"Contact form submitted:",
				JSON.stringify(values, null, 2)
			);
			alert("Message sent successfully!");
			resetForm();
		} catch (error) {
			console.error("Error sending message:", error);
			alert("Failed to send message. Please try again.");
		}
	};

	const formik = useValidationSchema_ContactForm(handleSubmit);

	// Form fields configuration
	const formFields = [
		{
			fieldName: "name" as keyof ContactFormValues,
			label: "Name",
			type: "text" as const,
			placeholder: "Your Name",
			required: false,
		},
		{
			fieldName: "email" as keyof ContactFormValues,
			label: "Email",
			type: "email" as const,
			placeholder: "Your Email",
			required: true,
		},
		{
			fieldName: "subject" as keyof ContactFormValues,
			label: "Subject",
			type: "text" as const,
			placeholder: "Your Subject",
			required: true,
		},
		{
			fieldName: "message" as keyof ContactFormValues,
			label: "Message",
			type: "textarea" as const,
			placeholder: "Your Message",
			required: true,
			rows: 5,
		},
	];

	return (
		<div className="Contact-Form white-bg p-8 rounded-lg light-shadow relative  w-full max-w-[700px] mx-auto">
			<ContactFormHeader />

			<form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
				{/* ===================== Form Fields ===================== */}
				{formFields.map((field) => (
					<ContactFormField
						key={field.fieldName}
						formik={formik}
						fieldName={field.fieldName}
						label={field.label}
						type={field.type}
						placeholder={field.placeholder}
						required={field.required}
						rows={field.rows}
					/>
				))}

				{/* ===================== Submit Button ===================== */}
				<ContactSubmitButton isSubmitting={formik.isSubmitting} />
			</form>
		</div>
	);
};

export default ContactForm;
