import Stepper from "../Stepper/Stepper";
import Confirmation from "./Confirmation";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import Verification from "./Verification";



const steps = [
	{ name: "Personal Info", content: <PersonalInfo /> },
	{ name: "Professional Info", content: <ProfessionalInfo /> },
	{ name: "Verification", content: <Verification /> },
	{ name: "Confirmation", content: <Confirmation /> },
];

const TeacherRegistration = () => {
  return (
    <section className='Teacher-Registration'>
      <Stepper steps={steps} />
    </section>
  )
}

export default TeacherRegistration
