import { createSlice } from "@reduxjs/toolkit";
import womanImage from "../../assets/images/woman.png";
import manImage from "../../assets/images/boy.png";

type initialStateType = { userInfo: any | null, isAuth: boolean };
// name: string;
// email: string;
// phone: string;
// address: string;
// city: string;
// state: string;
// zip: string;
// country: string;
// profilePicture?: string;
// role: string;
// status: string;
// createdAt: string;
// updatedAt: string;
// gender: string;
const initialState: initialStateType = { userInfo: null, isAuth: false };

const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
        setUserInfo: (state, action) => {
            const userData = action.payload;
            const profilePicture = userData.profilePicture || userData.gender === "male" ? manImage: womanImage;
            state.userInfo = {
                ...userData,
                profilePicture
            };
            console.log("User info set:", state.userInfo);
        },

        clearUserInfo: (state) => {
            state.userInfo = null;
            console.log("User info cleared:", state.userInfo);
            
        },
	},
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
