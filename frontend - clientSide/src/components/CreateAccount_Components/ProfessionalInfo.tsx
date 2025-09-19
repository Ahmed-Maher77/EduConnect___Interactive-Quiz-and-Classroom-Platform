import { useState } from "react";
import ChipInput from "../ChipInput/ChipInput";
import FormField from "./FormField/FormField";
import FormSection from "./FormSection/FormSection";
import NumberField from "./NumberField/NumberField";
import DateField from "./DateField/DateField";
import TextAreaField from "./TextAreaField/TextAreaField";
import {
	useAppDispatch,
	useAppSelector,
} from "../../utils/redux-toolkit/hooks";
import {
	setProfessional,
	setPersonal,
} from "../../utils/redux-toolkit/registrationSlice";

interface Chip {
	id: string;
	label: string;
}

const ProfessionalInfo = () => {
	const dispatch = useAppDispatch();
	const registration = useAppSelector((s) => s.registration);
	const [teachingSubjects, setTeachingSubjects] = useState<Chip[]>(
		(registration.professional.subjects || []).map((label, idx) => ({
			id: String(idx),
			label,
		}))
	);

	const handleSubjectsChange = (chips: Chip[]) => {
		setTeachingSubjects(chips);
		dispatch(setProfessional({ subjects: chips.map((c) => c.label) }));
	};

	return (
		<div className="Professional-Info flex flex-col gap-8">
			{/* Basic Information Section */}
			<FormSection columns={1}>
				<FormField
					id="title"
					name="title"
					label="Title"
					type="text"
					placeholder="Enter your title (e.g., Math Teacher, Physics Instructor, etc.)"
					required={true}
					value={registration.professional.title}
					onChange={(e) =>
						dispatch(setProfessional({ title: e.target.value }))
					}
				/>
			</FormSection>

			{/* Teaching Subjects Section */}
			<FormSection columns={1}>
				<fieldset>
					<label
						className="main-label input-required-label"
						htmlFor="teachingSubjects"
					>
						Teaching Subjects
					</label>
					<ChipInput
						value={teachingSubjects}
						onChange={handleSubjectsChange}
						placeholder="Type subject and press Enter (e.g., Math, Science, English)"
						className="w-full"
						maxChips={8}
						suggestions={[
							"Mathematics",
							"Science",
							"English",
							"History",
							"Geography",
							"Physics",
							"Chemistry",
							"Biology",
							"Computer Science",
							"Art",
							"Music",
							"Physical Education",
							"Literature",
							"Economics",
							"Psychology",
						]}
					/>
					{/* Hidden input to maintain form compatibility */}
					<input
						type="hidden"
						name="teachingSubjects"
						value={teachingSubjects
							.map((chip) => chip.label)
							.join(",")}
					/>
				</fieldset>
			</FormSection>

			{/* Experience and Personal Details Section */}
			<FormSection columns={2}>
				<NumberField
					id="yearsOfExperience"
					name="yearsOfExperience"
					label="Years of Experience"
					placeholder="Enter your years of experience"
					required={true}
					min={0}
					max={50}
					value={registration.professional.yearsOfExperience}
					onChange={(e) =>
						dispatch(
							setProfessional({
								yearsOfExperience: (
									e.target as HTMLInputElement
								).value,
							})
						)
					}
				/>
				<DateField
					id="dateOfBirth"
					name="dateOfBirth"
					label="Date of Birth"
					placeholder="Enter your date of birth"
					required={true}
					value={registration.personal.dateOfBirth}
					onChange={(e) =>
						dispatch(
							setPersonal({
								dateOfBirth: (e.target as HTMLInputElement)
									.value,
							})
						)
					}
				/>
			</FormSection>

			{/* Bio Section */}
			<FormSection columns={1}>
				<TextAreaField
					id="shortBio"
					name="shortBio"
					label="Short Bio / Introduction"
					placeholder="Tell us a bit about yourself and your teaching philosophy"
					required={true}
					maxLength={400}
					rows={5}
					value={registration.professional.shortBio}
					onChange={(e) =>
						dispatch(setProfessional({ shortBio: e.target.value }))
					}
				/>
			</FormSection>
		</div>
	);
};

export default ProfessionalInfo;
