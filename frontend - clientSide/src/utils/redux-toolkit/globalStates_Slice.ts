import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
	themeMode: string;
	lang: { code: string; name: string };
	currentYear: number;
};
const initialState: initialStateType = {
	themeMode: "light",
	lang: { code: "en", name: "English" },
	currentYear: new Date().getFullYear(),
};

const globalStates_Slice = createSlice({
	name: "globalStates",
	initialState,
	reducers: {
		changeThemeMode: (state, action) => {
			state.themeMode = action.payload;
		},
		changeLang: (state, action) => {
			state.lang = action.payload;
			console.log("Language changed to:", action.payload);
		},
	},
});

export const { changeThemeMode, changeLang } = globalStates_Slice.actions;
export default globalStates_Slice.reducer;
