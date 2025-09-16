import React, { useState, useRef, useEffect } from "react";
import "./LanguageSwitcher.scss";
import { useAppDispatch } from "../../../utils/redux-toolkit/hooks";
import { changeLang } from "../../../utils/redux-toolkit/globalStates_Slice";

interface Language {
	code: string;
	name: string;
}

const LanguageSwitcher = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useAppDispatch();
	const [currentLanguage, setCurrentLanguage] = useState<Language>({
		code: "en",
		name: "EN",
	});

	const dropdownRef = useRef<HTMLDivElement>(null);

	const languages: Language[] = [
		{ code: "en", name: "EN" },
		{ code: "ar", name: "عربي" },
	];

	const handleLanguageChange = (language: Language) => {
		setCurrentLanguage(language);
		setIsOpen(false);
		dispatch(changeLang(language));
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="language-switcher" ref={dropdownRef}>
			<button
				className="language-switcher-trigger"
				onClick={toggleDropdown}
				aria-label="Select language"
				aria-expanded={isOpen}
			>
				<svg
					className="language-icon"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
						fill="currentColor"
					/>
				</svg>
				<span className="current-language">{currentLanguage.name}</span>
				<svg
					className={`dropdown-arrow ${isOpen ? "open" : ""}`}
					width="12"
					height="8"
					viewBox="0 0 12 8"
					fill="none"
				>
					<path
						d="M1 1.5L6 6.5L11 1.5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="language-dropdown">
					<div className="dropdown-content">
						{languages.map((language) => (
							<button
								key={language.code}
								className={`language-option ${
									currentLanguage.code === language.code
										? "active"
										: ""
								}`}
								onClick={() => handleLanguageChange(language)}
							>
								<span className="option-name">
									{language.name}
								</span>
								{currentLanguage.code === language.code && (
									<svg
										className="checkmark"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M13.5 4.5L6 12L2.5 8.5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default LanguageSwitcher;
