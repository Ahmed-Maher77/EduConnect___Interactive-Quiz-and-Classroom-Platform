import { useState } from "react";
import { useAppDispatch } from "../../utils/redux-toolkit/hooks";
import { setDocuments } from "../../utils/redux-toolkit/registrationSlice";
import DocumentUploader from "./DocumentUploader/DocumentUploader";
import CountrySelect from "./CountrySelect/CountrySelect";

const Verification = () => {
	const dispatch = useAppDispatch();
	const [country, setCountry] = useState("");
	const handleNationalId = (file: File | null) => {
		dispatch(setDocuments({ idDocumentName: file ? file.name : null }));
		if (file) {
			console.log("National ID selected:", file.name);
		}
	};

	const handleCertificate = (file: File | null) => {
		dispatch(setDocuments({ certificateName: file ? file.name : null }));
		if (file) {
			console.log("Certificate selected:", file.name);
		}
	};

	return (
		<div className="Verification flex flex-col gap-8">
			{/* National ID / Passport */}
			<DocumentUploader
				label="Upload your National ID / Passport"
				required
				name="nationalId"
				accept="image/*,application/pdf"
				maxSizeMB={10}
				onFileChange={handleNationalId}
				note="Accepted formats: PNG, JPG, or PDF. Max size 10MB."
			/>

			{/* Certificate */}
			<DocumentUploader
				label="Upload Certificate"
				optional={true}
				name="certificate"
				accept="image/*,application/pdf"
				maxSizeMB={5}
				onFileChange={handleCertificate}
				note="Optional supporting certificate."
			/>

			{/* Country of Residence */}
			<fieldset>
				<label className="main-label input-required-label">
					Country of Residence
				</label>
				<CountrySelect
					id="country"
					name="country"
					value={country}
					onChange={(v) => {
						setCountry(v);
						dispatch(setDocuments({ country: v }));
					}}
					placeholder="Select your country"
				/>
			</fieldset>

			{/* Terms & Conditions */}
			<fieldset className="flex items-center gap-2">
				<input
					className="w-4 h-4 cursor-pointer"
					type="checkbox"
					id="terms"
					name="terms"
				/>
				<label
					className="main-label input-required-label cursor-pointer"
					style={{ marginBottom: "0px" }}
					htmlFor="terms"
				>
					I agree to the Terms & Conditions and Privacy Policy
				</label>
			</fieldset>
		</div>
	);
};

export default Verification;
