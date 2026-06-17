// formDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	lname: "",
	fname: "",
	email: "",
	country: "",
	city: "",
	password: "",
	phone: "",
	sex: "",
	jobcategory: "",
	dob: "",
	refer:""
};
const jobDataSlice = createSlice({
	name: "jobData",
	initialState,
	reducers: {
		updateJobData: (state, action) => {
			const { field, value } = action.payload;
			if (field !== "") {
				state[field] = value;
			}
		},

		clearJobData: () => initialState
	}
});

export const { updateJobData, clearJobData } = jobDataSlice.actions;
export default jobDataSlice.reducer;
