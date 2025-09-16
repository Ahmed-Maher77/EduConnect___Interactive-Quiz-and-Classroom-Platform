import type { DeveloperInfo } from "../../common/Footer/footerData";

interface DeveloperCreditProps {
	developer: DeveloperInfo;
	text: string;
	copyright: string;
}

const DeveloperCredit = ({
	developer,
	text,
	copyright,
}: DeveloperCreditProps) => {
	return (
		<div className="footer-bottom">
			<p className="copyright">{copyright}</p>
			<p className="developer-info">
				{text}{" "}
				<a
					href={developer.portfolioUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="developer-link"
					title={`${developer.name}'s Portfolio`}
				>
					{developer.name}
				</a>
			</p>
		</div>
	);
};

export default DeveloperCredit;
