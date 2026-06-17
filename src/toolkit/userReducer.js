import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	lname: "",
	fname: "",
	email: "",
	country: "",
	city: "",
	password: "",
	scholarshipStart: "",
	educationlevel: "",
	degree: "",
	phone: "",
	appType: "",
	scholarshipcategory: "",
	refer:""
};
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		regUser: (state, action) => {
			return { ...state, ...action.payload };
		},
		resetUser: () => {
			return {
				lname: "",
				fname: "",
				email: "",
				country: "",
				city: "",
				password: "",
				scholarshipStart: "",
				educationlevel: "",
				degree: "",
				phone: "",
				appType: "",
				scholarshipcategory: "",
				refer:"",
			};
		},
	},
});

// Export actions
export const { regUser, resetUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
