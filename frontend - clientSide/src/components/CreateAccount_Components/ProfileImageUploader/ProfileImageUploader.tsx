import { useRef, useState } from "react";
import Toast from "../../Toast/Toast";

interface ProfileImageUploaderProps {
	onImageChange?: (url: string | null) => void;
}

const ProfileImageUploader = ({ onImageChange }: ProfileImageUploaderProps) => {
	const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

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

	const handleOpenFilePicker = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const isValidType = /^image\/(png|jpe?g|webp|gif)$/i.test(file.type);
		const isValidSize = file.size <= 2 * 1024 * 1024; // 2MB
		if (!isValidType || !isValidSize) {
			showToast(
				"Please upload an image (PNG/JPG/WebP/GIF) up to 2MB.",
				"error"
			);
			return;
		}
		const objectUrl = URL.createObjectURL(file);
		setProfileImageUrl((prevUrl) => {
			if (prevUrl) URL.revokeObjectURL(prevUrl);
			return objectUrl;
		});
		onImageChange?.(objectUrl);
		showToast("Profile image uploaded successfully.", "success");
	};

	const handleRemoveImage = () => {
		setProfileImageUrl((prevUrl) => {
			if (prevUrl) URL.revokeObjectURL(prevUrl);
			return null;
		});
		if (fileInputRef.current) fileInputRef.current.value = "";
		onImageChange?.(null);
		showToast("Profile image removed.", "info");
	};

	return (
		<div className="flex flex-col gap-3">
			<Toast
				message={toastMessage}
				type={toastType}
				show={toastShow}
				onClose={() => setToastShow(false)}
			/>

			<div className="flex items-center gap-4">
				<div
					className="w-[88px] h-[88px] rounded-full overflow-hidden border border-gray-300 bg-[var(--light3-gray-color)] flex items-center justify-center"
					aria-label="Profile picture preview"
				>
					{profileImageUrl ? (
						<img
							src={profileImageUrl}
							alt="Profile preview"
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					) : (
						<i
							className="fa-regular fa-user text-[28px] text-[var(--icon-gray-color)]"
							aria-hidden="true"
						></i>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<button
							type="button"
							className="btn-main-blue px-4 py-2"
							onClick={handleOpenFilePicker}
						>
							Upload
						</button>
						{profileImageUrl && (
							<button
								type="button"
								className="btn-main-gray px-4 py-2"
								onClick={handleRemoveImage}
							>
								Remove
							</button>
						)}
					</div>
					<p className="text-sm text-[var(--dark3-gray-color)]">
						PNG, JPG, WebP, or GIF up to 2MB. Square images look
						best.
					</p>
				</div>
			</div>
			<p className="privacy-note" style={{ marginTop: "0px" }}>
				<i className="fa-solid fa-circle-info"></i>
				Adding a profile picture is optional but recommended to make
				your profile more recognizable.
			</p>
			<input
				ref={fileInputRef}
				type="file"
				accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
				className="hidden"
				onChange={handleFileChange}
			/>
		</div>
	);
};

export default ProfileImageUploader;
