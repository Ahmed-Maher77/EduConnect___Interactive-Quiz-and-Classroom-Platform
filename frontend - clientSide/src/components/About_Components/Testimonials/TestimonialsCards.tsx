import { SwiperSlide } from "swiper/react";
import type { Testimonial } from "../../../common/Types/Interfaces";
import SectionSlider from "../../Swiper/SectionSlider";
import { testimonialsData } from "./testimonialsData";

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

const TestimonialsCards = () => {
	return (
		<div className="Testimonials-Cards">
			<SectionSlider
				scrollbar={false}
				breakpoints={sliderBreakpoints}
				autoplay={true}
				showPagination={false}
				classNames="testimonials-slider"
			>
				{testimonialsData.map((testimonial) => (
					<SwiperSlide key={testimonial.id}>
						<TestimonialCard
							key={testimonial.id}
							testimonial={testimonial}
						/>
					</SwiperSlide>
				))}
			</SectionSlider>
		</div>
	);
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
	return (
		<div className="Testimonial-Card white-bg p-6 pb-[75px] rounded-lg card-shadow card-shadow-hover duration-300 relative min-h-[255px]">
			{/* ================== Quote ================== */}
			<blockquote className="quote-text-color italic text-base leading-relaxed mb-6">
				"{testimonial.quote}"
			</blockquote>

			{/* ================== Author Info ================== */}
			<div className="flex items-center gap-4 absolute bottom-[1.5rem] right-auto left-[1.5rem]">
				{/* Avatar */}
				<div className="flex-shrink-0">
					<img
						src={testimonial.avatar}
						alt={`${testimonial.name} avatar`}
						className="w-12 h-12 rounded-full object-cover"
					/>
				</div>

				{/* ================== Name and Role ================== */}
				<div className="flex-1 min-w-0">
					<h4 className="font-semibold testimonials-text-color text-sm">
						{testimonial.name}, {testimonial.role}
					</h4>
					<p className="text-gray-color text-sm truncate">
						{testimonial.department}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCards;
