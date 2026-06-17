// formDataSlice.js

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
	subject: "",
	dob: "",
	refer: "",
	preferedCountry:""
};
const formDataSlice = createSlice({
	name: "formData",
	initialState,
	reducers: {
		updateFormData: (state, action) => {
			const { field, value } = action.payload;
			if (field !== "") {
				state[field] = value;
			}
		},

		clearFormData: () => initialState
	}
});

export const { updateFormData, clearFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
