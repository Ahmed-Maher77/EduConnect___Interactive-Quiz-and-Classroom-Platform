import "./SectionSlider.scss";
// Import Swiper core and required modules
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { SectionSliderProps } from "../../common/Types/Interfaces";

const SectionSlider = ({
	scrollbar,
	breakpoints,
	autoplay,
	children,
	showPagination,
	classNames,
}: SectionSliderProps) => {
	return (
		<Swiper
			className={classNames}
			modules={[Navigation, Pagination, Scrollbar, Autoplay]}
			breakpoints={breakpoints}
			centeredSlides={false}
			freeMode={true}
			spaceBetween={50}
			slidesPerView={1}
			navigation={{
				nextEl: ".custom-nav-next",
				prevEl: ".custom-nav-prev",
			}}
			pagination={{
				clickable: true,
				type: "bullets",
				dynamicBullets: false,
			}}
			scrollbar={
				scrollbar && {
					draggable: scrollbar,
				}
			}
			loop={false}
			direction="horizontal"
			effect="slide"
			grabCursor={true}
			allowTouchMove={true}
			keyboard={{
				enabled: true,
				onlyInViewport: false,
			}}
			autoplay={
				autoplay && {
					delay: 4000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
					stopOnLastSlide: false,
				}
			}
		>
			{children}
			{/* Custom Navigation Controls */}
			<div className="custom-navigation">
				<button className="custom-nav-btn custom-nav-prev">
					<i className="fa-solid fa-arrow-left"></i>
				</button>
				<button className="custom-nav-btn custom-nav-next">
					<i className="fa-solid fa-arrow-right"></i>
				</button>
			</div>

			<div
				className={`swiper-pagination ${
					showPagination ? "show" : "hide"
				}`}
			></div>

			{/* Scrollbar */}
			{scrollbar && <div className="swiper-scrollbar"></div>}
		</Swiper>
	);
};

export default SectionSlider;
