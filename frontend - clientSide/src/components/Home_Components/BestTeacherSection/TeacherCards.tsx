import TeacherCard from "./TeacherCard";
import SectionSlider from "../../Swiper/SectionSlider";
import { SwiperSlide } from "swiper/react";

const teachersData = [
	{
		name: "Ms. Sarah",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaa2nnb5bFMAV7c6LmVMF4sODF-9G6VQDF4LBTHRCvHJb6bsSW1Vvi_5z6mnAKlg_h3L0d4pSSPjZ48koWxBfNA0U2jeQo0FNISWhSvEIiEGHK9lq_6l2_Q5RsMqv6L2L9nrLTpiZpPcRiP09eQsv3a6kQuTyC9rEd78bJnpTmOmrvye1pfGpYpdQFjWUhwYySENMakzDSCTxcrlxR7psROD6ePNERTqAjcW2HqoKttad4pWmKCa3egvjGr_5YPF7934MFewA-9qD4",
		title: "Mathematics Specialist",
		rating: 4.8,
		reviews: 100,
		students: 1200,
		classes: 15,
		specialization: ["Algebra", "Calculus"],
		teacherId: "1",
	},
	{
		name: "Ms. Sarah",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaa2nnb5bFMAV7c6LmVMF4sODF-9G6VQDF4LBTHRCvHJb6bsSW1Vvi_5z6mnAKlg_h3L0d4pSSPjZ48koWxBfNA0U2jeQo0FNISWhSvEIiEGHK9lq_6l2_Q5RsMqv6L2L9nrLTpiZpPcRiP09eQsv3a6kQuTyC9rEd78bJnpTmOmrvye1pfGpYpdQFjWUhwYySENMakzDSCTxcrlxR7psROD6ePNERTqAjcW2HqoKttad4pWmKCa3egvjGr_5YPF7934MFewA-9qD4",
		title: "Mathematics Specialist",
		rating: 4.8,
		reviews: 100,
		students: 1200,
		classes: 15,
		specialization: ["Algebra", "Calculus", "Geometry", "Trigonometry"],
		teacherId: "2",
	},
	{
		name: "Ms. Sarah",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaa2nnb5bFMAV7c6LmVMF4sODF-9G6VQDF4LBTHRCvHJb6bsSW1Vvi_5z6mnAKlg_h3L0d4pSSPjZ48koWxBfNA0U2jeQo0FNISWhSvEIiEGHK9lq_6l2_Q5RsMqv6L2L9nrLTpiZpPcRiP09eQsv3a6kQuTyC9rEd78bJnpTmOmrvye1pfGpYpdQFjWUhwYySENMakzDSCTxcrlxR7psROD6ePNERTqAjcW2HqoKttad4pWmKCa3egvjGr_5YPF7934MFewA-9qD4",
		title: "Mathematics Specialist",
		rating: 4.8,
		reviews: 100,
		students: 1200,
		classes: 15,
		specialization: ["Algebra", "Calculus"],
		teacherId: "3",
	},
	{
		name: "Ms. Sarah",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaa2nnb5bFMAV7c6LmVMF4sODF-9G6VQDF4LBTHRCvHJb6bsSW1Vvi_5z6mnAKlg_h3L0d4pSSPjZ48koWxBfNA0U2jeQo0FNISWhSvEIiEGHK9lq_6l2_Q5RsMqv6L2L9nrLTpiZpPcRiP09eQsv3a6kQuTyC9rEd78bJnpTmOmrvye1pfGpYpdQFjWUhwYySENMakzDSCTxcrlxR7psROD6ePNERTqAjcW2HqoKttad4pWmKCa3egvjGr_5YPF7934MFewA-9qD4",
		title: "Mathematics Specialist",
		rating: 4.8,
		reviews: 100,
		students: 1200,
		classes: 15,
		specialization: ["Algebra", "Calculus"],
		teacherId: "4",
	},
	{
		name: "Ms. Sarah",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaa2nnb5bFMAV7c6LmVMF4sODF-9G6VQDF4LBTHRCvHJb6bsSW1Vvi_5z6mnAKlg_h3L0d4pSSPjZ48koWxBfNA0U2jeQo0FNISWhSvEIiEGHK9lq_6l2_Q5RsMqv6L2L9nrLTpiZpPcRiP09eQsv3a6kQuTyC9rEd78bJnpTmOmrvye1pfGpYpdQFjWUhwYySENMakzDSCTxcrlxR7psROD6ePNERTqAjcW2HqoKttad4pWmKCa3egvjGr_5YPF7934MFewA-9qD4",
		title: "Mathematics Specialist",
		rating: 4.8,
		reviews: 100,
		students: 1200,
		classes: 15,
		specialization: ["Algebra", "Calculus"],
		teacherId: "5",
	},
];

const sliderBreakpoints = {
	320: {
		slidesPerView: 1,
		spaceBetween: 10,
	},
	640: {
		slidesPerView: 2,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 3,
		spaceBetween: 15,
	},
	1350: {
		slidesPerView: 4,
		spaceBetween: 15,
	},
};

const TeacherCards = () => {
	return (
		<SectionSlider scrollbar={false} breakpoints={sliderBreakpoints} autoplay={true} showPagination={false}>
			{teachersData.map((teacher) => (
				<SwiperSlide key={teacher.teacherId}>
					<TeacherCard key={teacher.teacherId} teacher={teacher} />
				</SwiperSlide>
			))}
		</SectionSlider>
	);
};

export default TeacherCards;
