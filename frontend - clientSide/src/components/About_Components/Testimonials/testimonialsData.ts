import type { Testimonial } from "../../../common/Types/Interfaces";
import avatar1 from "../../../assets/images/testimonial-person-1.jpg";
import avatar2 from "../../../assets/images/testimonial-person-2.jpg";
import avatar3 from "../../../assets/images/testimonial-person-3.jpg";
import avatar4 from "../../../assets/images/testimonial-person-4.jpg";
import avatar5 from "../../../assets/images/testimonial-person-5.jpg";
import avatar6 from "../../../assets/images/testimonial-person-6.jpg";
import avatar7 from "../../../assets/images/testimonial-person-7.jpg";
import avatar8 from "../../../assets/images/testimonial-person-8.jpg";
import avatar9 from "../../../assets/images/testimonial-person-9.jpg";



export const testimonialsData: Testimonial[] = [
	{
		id: 1,
		quote: "EduConnect has transformed my learning experience. The interactive quizzes and real-time feedback have helped me understand concepts better and stay motivated.",
		name: "Sarah",
		role: "Student",
		department: "Computer Science Major",
		avatar: avatar1,
	},
	{
		id: 2,
		quote: "As a teacher, EduConnect makes managing classes and engaging students easier. The progress tracking helps me quickly spot students needing extra support.",
		name: "Mr. Ahmed",
		role: "Teacher",
		department: "High School Mathematics",
		avatar: avatar2,
	},
	{
		id: 3,
		quote: "The platform's analytics and reporting tools have given me insights into student performance that I never had before. It's revolutionized how I approach teaching.",
		name: "Dr. Emily",
		role: "Professor",
		department: "University Physics",
		avatar: avatar3,
	},
	{
		id: 4,
		quote: "The collaborative features in EduConnect have made group projects so much easier. We can share resources, communicate effectively, and track our progress.",
		name: "Michael",
		role: "Student",
		department: "Business Administration",
		avatar: avatar4,
	},
	{
		id: 5,
		quote: "I love how EduConnect adapts to different learning styles. The multimedia content and interactive elements keep my students engaged throughout the entire lesson.",
		name: "Ms. Rodriguez",
		role: "Teacher",
		department: "Elementary Education",
		avatar: avatar5,
	},
	{
		id: 6,
		quote: "The assessment tools are incredibly comprehensive. I can create custom quizzes, track student progress, and provide personalized feedback efficiently.",
		name: "Dr. Johnson",
		role: "Professor",
		department: "Psychology",
		avatar: avatar6,
	},
	{
		id: 7,
		quote: "EduConnect has made remote learning feel personal and interactive. The virtual classroom features are amazing and help maintain student engagement.",
		name: "Alex",
		role: "Student",
		department: "Engineering",
		avatar: avatar7,
	},
	{
		id: 8,
		quote: "The parent communication features are fantastic. I can easily share updates about my child's progress and stay connected with their teachers.",
		name: "Mrs. Thompson",
		role: "Parent",
		department: "Parent Portal User",
		avatar: avatar8,
	},
	{
		id: 9,
		quote: "As an administrator, EduConnect's reporting dashboard gives me complete visibility into our institution's performance and helps make data-driven decisions.",
		name: "Dr. Williams",
		role: "Administrator",
		department: "Academic Affairs",
		avatar: avatar9,
	},
];