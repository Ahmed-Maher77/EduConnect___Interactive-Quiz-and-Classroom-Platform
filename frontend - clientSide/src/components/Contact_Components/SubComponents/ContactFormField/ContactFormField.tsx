import type { FormikProps } from "formik";
import type { ContactFormValues } from "../../../../common/Types/Interfaces";

interface ContactFormFieldProps {
	formik: FormikProps<ContactFormValues>;
	fieldName: keyof ContactFormValues;
	label: string;
	type?: "text" | "email" | "textarea";
	placeholder: string;
	required?: boolean;
	rows?: number;
}

const ContactFormField = ({
	formik,
	fieldName,
	label,
	type = "text",
	placeholder,
	required = false,
	rows = 5,
}: ContactFormFieldProps) => {
	const isError = formik.touched[fieldName] && formik.errors[fieldName];
	const errorMessage = formik.errors[fieldName];

	return (
		<fieldset>
			{/* Label */}
            <label htmlFor={fieldName} className="block mb-[0.35rem]">
				{label} {required && <span className="text-red-500">*</span>}
			</label>

			{/* Textarea */}
			{type === "textarea" ? (
				<textarea
					className={`resize-x-none border-gray-main input-bg-color rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
						isError ? "border-red-500" : ""
					}`}
					id={fieldName}
					name={fieldName}
					placeholder={placeholder}
					rows={rows}
					value={formik.values[fieldName]}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			) : (
				// Input Field 
				<input
					className={`border-gray-main input-bg-color outline-none rounded-md p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 trans-3 ${
						isError ? "border-red-500" : ""
					}`}
					type={type}
					id={fieldName}
					name={fieldName}
					placeholder={placeholder}
					value={formik.values[fieldName]}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			)}

			{/* Error Message */}
			{isError && errorMessage && (
				<div
					style={{
						color: "red",
						fontSize: "0.9rem",
						marginTop: "6px",
						display: "flex",
						alignItems: "center",
						gap: "5px",
					}}
				>
					<i className="fa-solid fa-circle-exclamation"></i>
					{errorMessage}
				</div>
			)}
		</fieldset>
	);
};

export default ContactFormField;
