import FeatureCard from "./FeatureCard";

interface FeatureCardsProps {
    features: {
        icon: string;
        title: string;
        description: string;
    }[];
}

const FeatureCards = ({ features }: FeatureCardsProps) => {
    
	return (
		<div className="Feature-Cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{features.map((feature, index) => (
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
