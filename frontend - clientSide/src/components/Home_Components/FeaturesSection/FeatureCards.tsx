import FeatureCard from "./FeatureCard";

const features = [
    { icon: "fa-regular fa-circle-question", title: "Create Quizzes", description: "Create engaging quizzes for your students to practice and test their knowledge." },
    { icon: "fa-regular fa-file-lines", title: "Assignments", description: "Design and assign homework or projects to your students with ease." },
    { icon: "fa-regular fa-comments", title: "Discussion Forums", description: "Foster a collaborative learning environment with class discussion forums." },
    { icon: "fa-regular fa-chart-bar", title: "Track Progress", description: "Monitor student progress and provide feedback to enhance learning outcomes." },
    { icon: "fa-regular fa-comment-dots", title: "Live Chat", description: "Facilitate real-time communication between students and instructors." },
    { icon: "fa-regular fa-circle-dot", title: "Offline Support (PWA)", description: "Provide a seamless offline experience for users on any device." },
    { icon: "fa-regular fa-moon", title: "Light/Dark Mode", description: "Allow users to switch between light and dark themes for better readability." },
    { icon: "fa-solid fa-language", title: "Multilingual Support", description: "Enable users to switch between multiple languages for better accessibility and wider reach." },
    { icon: "fa-regular fa-user", title: "User-Friendly Interface", description: "Design a user-friendly interface that is easy to navigate and understand." },
]

const FeatureCards = () => {
    return (
        <div className="Feature-Cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            { features.map((feature, index) => (
                <FeatureCard 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
};

export default FeatureCards;
