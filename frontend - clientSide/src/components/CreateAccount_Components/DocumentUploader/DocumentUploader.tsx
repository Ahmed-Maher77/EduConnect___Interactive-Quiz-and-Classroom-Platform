import { useCallback, useRef, useState } from "react";
import Toast from "../../Toast/Toast";
import "./DocumentUploader.scss";

interface DocumentUploaderProps {
	label: string;
	required?: boolean;
	accept?: string; // e.g., "image/*,application/pdf"
	maxSizeMB?: number; // default 5
	name: string;
	onFileChange?: (file: File | null) => void;
	note?: string;
	optional?: boolean;
}

const DocumentUploader = ({
	label,
	required = false,
	accept = "image/*,application/pdf",
	maxSizeMB = 5,
	name,
	onFileChange,
	note,
	optional = false,
}: DocumentUploaderProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [fileName, setFileName] = useState<string>("");
	const [isDragging, setIsDragging] = useState(false);

	// Toast state
	const [toastShow, setToastShow] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState<
		"success" | "error" | "warning" | "info"
	>("info");

	const showToast = (
		message: string,
		type: "success" | "error" | "warning" | "info" = "info"
	) => {
		setToastMessage(message);
		setToastType(type);
		setToastShow(true);
	};

	const openPicker = () => inputRef.current?.click();

	const validateFile = (file: File) => {
		const sizeOK = file.size <= maxSizeMB * 1024 * 1024;
		if (!sizeOK) {
			showToast(`File must be ≤ ${maxSizeMB}MB.`, "error");
			return false;
		}
		// Basic type guard using accept; browsers already filter, but dragged files may bypass
		const acceptList = accept.split(",").map((s) => s.trim());
		const typeOK = acceptList.some((pattern) => {
			if (pattern === "*/*") return true;
			if (pattern.endsWith("/*")) {
				const prefix = pattern.replace("/*", "");
				return file.type.startsWith(prefix + "/");
			}
			// exact mime or extension
			return (
				file.type === pattern ||
				file.name.toLowerCase().endsWith(pattern.toLowerCase())
			);
		});
		if (!typeOK) {
			showToast("Unsupported file type.", "error");
			return false;
		}
		return true;
	};

	const handleFiles = (files: FileList | null) => {
		const file = files?.[0];
		if (!file) return;
		if (!validateFile(file)) return;
		setFileName(file.name);
		onFileChange?.(file);
		showToast("File uploaded successfully.", "success");
	};

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleFiles(e.target.files);
	};

	const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);
		handleFiles(e.dataTransfer.files);
	}, []);

	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const onDragLeave = () => setIsDragging(false);

	const clearFile = () => {
		setFileName("");
		if (inputRef.current) inputRef.current.value = "";
		onFileChange?.(null);
		showToast("File removed.", "info");
	};

	return (
		<fieldset>
			<Toast
				message={toastMessage}
				type={toastType}
				show={toastShow}
				onClose={() => setToastShow(false)}
			/>
			<label
				className={`main-label flex items-center gap-2 ${
					required ? "input-required-label" : ""
				}`}
			>
				{label}
				{optional && (
					<span className="text-sm text-[var(--dark3-gray-color)]">
						(Optional)
					</span>
				)}
			</label>
			<div
				className={`drag-drop-area ${
					isDragging ? "ring-2 ring-[var(--main-blue-color)]" : ""
				} ${fileName ? "has-file" : ""}`}
				onClick={openPicker}
				onDrop={onDrop}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				role="button"
				aria-label={`${label} upload area`}
			>
				<i
					className={`fa-solid ${
						fileName ? "fa-file-circle-check" : "fa-cloud-arrow-up"
					}`}
				></i>
				{fileName ? (
					<p>{fileName}</p>
				) : (
					<>
						<p className="upload-cta">
							<span className="link-blue">Upload a file</span>
							<span> or drag and drop</span>
						</p>
						<p className="hint">
							PNG, JPG, PDF up to {maxSizeMB}MB
						</p>
					</>
				)}
			</div>
			<div className="file-input-container">
				<input
					ref={inputRef}
					type="file"
					id={name}
					name={name}
					accept={accept}
					onChange={onInputChange}
				/>
				<label htmlFor={name}>Browse</label>
				{fileName && (
					<button
						type="button"
						className="btn-main-gray px-3 py-2 ml-2"
						onClick={clearFile}
					>
						Remove
					</button>
				)}
			</div>
			{note && (
				<p
					className="text-sm text-[var(--dark3-gray-color)]"
					style={{ marginTop: "6px" }}
				>
					{note}
				</p>
			)}
		</fieldset>
	);
};

export default DocumentUploader;
