
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
	phone: "",
	appType: "",
	sportcategory: "",
	sex: "",
	dob: "",
};
const sportsDataSlice = createSlice({
	name: "sportsData",
	initialState,
	reducers: {
		updateSportsData: (state, action) => {
			const { field, value } = action.payload;
			if (field !== "") {
				state[field] = value;
			}
            
		},

		clearFormData: () => initialState
	}
});

export const { updateSportsData , clearFormData } = sportsDataSlice.actions;

export const selectSportsData = (state) => state.sportsData;

export default sportsDataSlice.reducer;
