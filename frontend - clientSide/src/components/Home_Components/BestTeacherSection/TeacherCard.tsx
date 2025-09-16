import { Link } from "react-router-dom";

interface TeacherCardProps {
	teacher: {
		name: string;
		title: string;
		image?: string;
		rating: number;
		reviews: number;
		students: number;
		classes: number;
		specialization: string[];
		teacherId: string;
	};
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
	const {
		name,
		title,
		image,
		rating,
		reviews,
		students,
		classes,
		specialization,
		teacherId,
	} = teacher;

	return (
		<figure className="Teacher-Card white-bg rounded-lg shadow-md py-8 pb-6 group hover:translate-y-[-5px] trans-3">
			{/* ================== Teacher Image ================== */}
      <img
				className="w-[100px] h-[100px] rounded-full mx-auto object-cover group-hover:scale-105 trans-3"
				src={image}
				alt={`Teacher ${name}`}
			/>
			
			<figcaption className="px-4 text-center">
        {/* ================== Teacher Info ================== */}
        <div className="teacher-info my-3">
					<h3 className="text-xl font-bold">{name}</h3>
					<p className="text-sm dark4-gray-color">{title}</p>
				</div>

        {/* ================== Teacher Rating ================== */}
				<div className="rating flex items-center justify-center gap-1 my-3 text-yellow-500">
					<i className="fas fa-star text-sm"></i>
					<span>{rating} / 5.0</span>
					<span className="text-sm dark4-gray-color">
						({reviews} reviews)
					</span>
				</div>

        {/* ================== Teacher Stats ================== */}
				<div className="stats flex items-center justify-center gap-5 mt-2">
					<div className="flex items-center justify-center gap-1">
						<span className="font-bold dark-gray-color">
							{students}+
						</span>
						<span className="text-sm dark4-gray-color">
							Students
						</span>
					</div>
					<div className="flex items-center justify-center gap-1">
						<span className="font-bold dark-gray-color">
							{classes}
						</span>
						<span className="text-sm dark4-gray-color">
							Classes
						</span>
					</div>
				</div>

        {/* ================== Teacher Specialization ================== */}
				<div className="specialization flex items-center justify-center gap-2 mt-3 flex-wrap">
					{specialization.map((subject, index) => (
						<span
							key={index}
							className="rounded-full text-xs light4-gray-bg p-2 px-3"
						>
							{subject}
						</span>
					))}
				</div>

        {/* ================== Teacher Buttons ================== */}
				<div className="buttons flex items-center justify-center gap-4 mt-7">
					<Link to={`/teacher-profile/${teacherId}`} className="btn-main-gray p-2 px-4 w-full">
            View Profile
          </Link>
					<Link to={`/teacher-profile/classes/${teacherId}`} className="btn-main-blue text-[0.95rem] p-2 px-4 w-full">
						Join Class
					</Link>
				</div>
			</figcaption>
		</figure>
	);
};

export default TeacherCard;
