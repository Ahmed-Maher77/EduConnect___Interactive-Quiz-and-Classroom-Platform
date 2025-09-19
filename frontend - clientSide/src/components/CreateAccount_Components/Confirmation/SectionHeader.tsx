const SectionHeader = ({
	title,
	onEdit,
}: {
	title: string;
	onEdit?: () => void;
}) => (
	<div className="flex items-center justify-between">
		<h4 className="text-[18px] font-extrabold text-[var(--fixed-black-color)]">
			{title}
		</h4>
		{onEdit && (
			<button
				type="button"
				className="text-[var(--main-blue-color)] text-[14px] font-semibold hover:underline"
				onClick={onEdit}
			>
				<i className="fa-regular fa-pen-to-square mr-1" /> Edit
			</button>
		)}
	</div>
);

export default SectionHeader;
