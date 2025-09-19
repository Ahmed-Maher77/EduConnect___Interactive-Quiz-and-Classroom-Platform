import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type RegistrationState = {
	personal: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		dateOfBirth: string;
		password: string;
		confirmPassword: string;
	};
	professional: {
		title: string;
		yearsOfExperience: string;
		subjects: string[];
		shortBio: string;
	};
	documents: {
		idDocumentName: string | null;
		certificateName: string | null;
		country: string;
	};
};

const initialState: RegistrationState = {
	personal: {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		dateOfBirth: "",
		password: "",
		confirmPassword: "",
	},
	professional: {
		title: "",
		yearsOfExperience: "",
		subjects: [],
		shortBio: "",
	},
	documents: {
		idDocumentName: null,
		certificateName: null,
		country: "",
	},
};

const registrationSlice = createSlice({
	name: "registration",
	initialState,
	reducers: {
		setPersonal(
			state,
			action: PayloadAction<Partial<RegistrationState["personal"]>>
		) {
			state.personal = { ...state.personal, ...action.payload };
		},
		setProfessional(
			state,
			action: PayloadAction<Partial<RegistrationState["professional"]>>
		) {
			state.professional = { ...state.professional, ...action.payload };
		},
		setDocuments(
			state,
			action: PayloadAction<Partial<RegistrationState["documents"]>>
		) {
			state.documents = { ...state.documents, ...action.payload };
		},
		resetRegistration() {
			return initialState;
		},
	},
});

export const { setPersonal, setProfessional, setDocuments, resetRegistration } =
	registrationSlice.actions;
export default registrationSlice.reducer;
