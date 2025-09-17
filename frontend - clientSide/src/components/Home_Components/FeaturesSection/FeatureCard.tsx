import type { FeatureCardProps } from "../../../common/Types/Interfaces";

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="Feature-Card white-bg p-4 xl:px-6 py-7 rounded light-shadow text-center flex flex-col items-center gap-3 hover:translate-y-[-5px] trans-3">
            <span className="body-bg-color rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <i className={`${icon} text-2xl main-color`}></i>
            </span>
            <h3 className="text-xl font-bold mt-3">{title}</h3>
            <p className="text-sm dark2-gray-color">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
