import SectionHeading from "../../SectionHeading/SectionHeading";
import RoleChoiceCard from "../RoleChoiceCard/RoleChoiceCard";
// Images
import teacherImage from "../../../assets/images/teacher.png";
import studentImage from "../../../assets/images/student.png";
import adminImage from "../../../assets/images/admin.png";

const roles = [
	{
		role: "Teacher",
		roleImage: teacherImage,
		roleDescription: "Teach & Manage Classes",
		roleIcon: "fa-solid fa-user-graduate",
	},
	{
		role: "Student",
		roleImage: studentImage,
		roleDescription: "Learn & Take Quizzes & Track Progress",
		roleIcon: "fa-solid fa-user",
	},
	{
		role: "Admin",
		roleImage: adminImage,
		roleDescription: "Manage Platform",
		roleIcon: "fa-solid fa-user-shield",
	},
];

const RoleSelector = ({ handleSelectRole }: { handleSelectRole: (role: string) => void }) => {
	return (
		<div className="Role-Selector">
			<SectionHeading
				title="Choose Your Role"
				subtitle="Continue as a Teacher, Student, or Admin"
				classNameTitle="page-title"
			/>

			<main className="role-choices grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 pb-[50px]">
				{roles.map((role) => (
					<RoleChoiceCard
						key={role.role}
						role={role.role}
						roleImage={role.roleImage}
						roleDescription={role.roleDescription}
						roleIcon={role.roleIcon}
						onSelectRole={handleSelectRole}
					/>
				))}
			</main>
		</div>
	);
};

export default RoleSelector;
