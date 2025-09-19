import React from "react";

const Row = ({ label, value }: { label: string; value?: React.ReactNode }) => (
	<div className="flex flex-col gap-1 min-w-[240px]">
		<span className="text-[13px] text-[var(--dark3-gray-color)]">
			{label}
		</span>
		<span className="text-[15px] text-[var(--dark-gray-color)] font-medium">
			{value ?? "—"}
		</span>
	</div>
);

export default Row;
