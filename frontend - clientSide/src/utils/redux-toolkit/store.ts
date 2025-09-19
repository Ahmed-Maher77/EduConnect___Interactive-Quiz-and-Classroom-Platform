import { configureStore } from "@reduxjs/toolkit";
import globalStatesReducer from "./globalStates_Slice";
import userInfoReducer from "./userInfo";
import registrationReducer from "./registrationSlice";

export const store = configureStore({
	reducer: {
		globalStates: globalStatesReducer,
		userInfo: userInfoReducer,
		registration: registrationReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
