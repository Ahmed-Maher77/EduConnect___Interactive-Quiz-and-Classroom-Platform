import { useState } from "react";
import "./FAQCards.scss";

interface FAQItem {
	id: number;
	question: string;
	answer: string;
}
const faqData: FAQItem[] = [
    {
        id: 1,
        question: "How do I create a quiz?",
        answer: "Creating a quiz is simple! Just log in to your teacher account, click 'Create Quiz,' and follow the intuitive steps to add questions, answers, and set time limits.",
    },
    {
        id: 2,
        question: "Can I track student progress?",
        answer: "Yes! Our platform provides comprehensive analytics to track student performance, quiz completion rates, and learning progress over time.",
    },
    {
        id: 3,
        question: "Is EduConnect available in Arabic?",
        answer: "Absolutely! EduConnect supports both English and Arabic languages. You can switch between languages using the language switcher in the navigation bar.",
    },
    {
        id: 4,
        question: "How secure is student data?",
        answer: "We take data security seriously. All student information is encrypted and stored securely, complying with international data protection standards.",
    },
    {
        id: 5,
        question: "Can students access quizzes on mobile devices?",
        answer: "Yes! EduConnect is fully responsive and works seamlessly on desktop, tablet, and mobile devices for both teachers and students.",
    },
];

const FAQCards = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);


	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="FAQ-Cards">
			{faqData.map((item, index) => (
				<div
					key={item.id}
					className={`FAQ-Card ${
						activeIndex === index ? "active" : ""
					}`}
					onClick={() => toggleAccordion(index)}
				>
					<div className="FAQ-Question">
						<h3>{item.question}</h3>
						<div className="FAQ-Icon">
							<i
								className={`fas ${
									activeIndex === index
										? "fa-chevron-up"
										: "fa-chevron-down"
								}`}
							></i>
						</div>
					</div>
					<div
						className={`FAQ-Answer ${
							activeIndex === index ? "show" : ""
						}`}
					>
						<p>{item.answer}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default FAQCards;
