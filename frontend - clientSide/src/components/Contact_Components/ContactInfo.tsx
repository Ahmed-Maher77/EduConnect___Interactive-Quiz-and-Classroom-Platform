import ContactInfoItem from "./SubComponents/ContactInfoItem/ContactInfoItem";
import ContactSocialLinks from "./SubComponents/ContactSocialLinks/ContactSocialLinks";

const ContactInfo = () => {
	// Contact information configuration
	const contactItems = [
		{
			icon: "fa-solid fa-envelope",
			title: "Email",
			value: "ahmedmaher.dev1@gmail.com",
		},
		{
			icon: "fa-brands fa-whatsapp",
			title: "WhatsApp",
			value: "(+20)-1150-3834-16",
		},
		{
			icon: "fa-solid fa-location-dot",
			title: "Address",
			value: "Cairo, Egypt",
		},
	];

	return (
		<section className="Contact-Info flex flex-col gap-5 items-start w-full lg:mt-3">
			<ul className="flex flex-col gap-5">
				{contactItems.map((item, index) => (
					<ContactInfoItem
						key={index}
						icon={item.icon}
						title={item.title}
						value={item.value}
					/>
				))}
			</ul>

			<ContactSocialLinks />
		</section>
	);
};

export default ContactInfo;
