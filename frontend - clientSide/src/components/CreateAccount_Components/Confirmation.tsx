import React from "react";
import type { ConfirmationProps } from "../../common/Types/Interfaces";
import Row from "./Confirmation/Row";
import SectionHeader from "./Confirmation/SectionHeader";
import { useAppSelector } from "../../utils/redux-toolkit/hooks";

const Divider = () => (
	<hr className="my-4 border-t border-[var(--light-gray-color-2)]" />
);

const Confirmation: React.FC<ConfirmationProps> = ({ onEditSection, data }) => {
	const registration = useAppSelector((s) => s.registration);
	const fallback = {
		personal: {
			firstName: registration.personal.firstName,
			lastName: registration.personal.lastName,
			email: registration.personal.email,
			phone: registration.personal.phone,
			dateOfBirth: registration.personal.dateOfBirth,
		},
		professional: {
			title: registration.professional.title,
			yearsOfExperience: registration.professional.yearsOfExperience,
			subjects: registration.professional.subjects,
			shortBio: registration.professional.shortBio,
		},
		documents: {
			idDocumentName: registration.documents.idDocumentName,
			certificateName: registration.documents.certificateName,
			country: registration.documents.country,
		},
	};

	const effective = data ?? fallback;
	const personal = effective.personal ?? {};
	const professional = effective.professional ?? {};
	const documents = effective.documents ?? {};
	const fullName =
		[personal.firstName, personal.lastName].filter(Boolean).join(" ") ||
		undefined;

	return (
		<div className="Confirmation">
			<h3 className="text-center text-[20px] sm:text-[22px] font-extrabold mb-4">
				Review & Confirm Your Details
			</h3>

			<section className="bg-[var(--white-color)] rounded-xl p-4 sm:p-6 shadow-sm border border-[var(--border-gray-color)]">
				{/* Personal Information */}
				<SectionHeader
					title="Personal Information"
					onEdit={
						onEditSection
							? () => onEditSection("personal")
							: undefined
					}
				/>
				<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
					<Row label="Full Name" value={fullName || "—"} />
					<Row label="Email" value={personal.email || "—"} />
					<Row label="Phone Number" value={personal.phone || "—"} />
					<Row
						label="Date of Birth"
						value={personal.dateOfBirth || "—"}
					/>
					{/* For security, we do NOT display password fields */}
				</div>

				<Divider />

				{/* Professional Information */}
				<SectionHeader
					title="Professional Information"
					onEdit={
						onEditSection
							? () => onEditSection("professional")
							: undefined
					}
				/>
				<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
					<Row label="Title" value={professional.title || "—"} />
					<Row
						label="Years of Experience"
						value={professional.yearsOfExperience || "—"}
					/>
					<div className="sm:col-span-2">
						<Row
							label="Subjects"
							value={
								professional.subjects &&
								professional.subjects.length
									? professional.subjects.join(", ")
									: "—"
							}
						/>
					</div>
					<div className="sm:col-span-2">
						<Row
							label="Short Bio"
							value={professional.shortBio || "—"}
						/>
					</div>
				</div>

				<Divider />

				{/* Verification & Documents */}
				<SectionHeader
					title="Verification & Documents"
					onEdit={
						onEditSection
							? () => onEditSection("documents")
							: undefined
					}
				/>
				<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="flex items-start gap-2">
						<span className="text-green-600 mt-[2px]">
							<i className="fa-solid fa-circle-check" />
						</span>
						<Row
							label="ID Document:"
							value={documents.idDocumentName || "—"}
						/>
					</div>
					<div className="flex items-start gap-2">
						<span className="text-green-600 mt-[2px]">
							<i className="fa-solid fa-circle-check" />
						</span>
						<Row
							label="Certification:"
							value={documents.certificateName || "—"}
						/>
					</div>
					<div className="sm:col-span-2">
						<Row
							label="Location / Country:"
							value={documents.country || "—"}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Confirmation;
