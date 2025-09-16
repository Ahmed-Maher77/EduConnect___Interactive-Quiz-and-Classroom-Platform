interface ContactInfoItemProps {
	icon: string;
	title: string;
	value: string;
}

const ContactInfoItem = ({ icon, title, value }: ContactInfoItemProps) => {
	return (
		<li className="flex gap-3">
			<i className={`${icon} text-3xl main-color mt-1`}></i>
			<p className="flex flex-col gap-1">
				<span className="font-bold text-lg">{title}</span>
				<span className="text-gray-color">{value}</span>
			</p>
		</li>
	);
};

export default ContactInfoItem;
