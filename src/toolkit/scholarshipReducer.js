import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  apply: false,
};

const scholarshipSlice = createSlice({
  name: "scholarship",
  initialState,
  reducers: {
    fetchScholarship: (state, action) => {
      state.data = action.payload;
    },
    clearScholarships: (state, action) => {
      state.data = [];
    },
    setApply: (state, { payload }) => {
      state.apply = payload;
    },
  },
});

// Export actions
export const { fetchScholarship, clearScholarships, setApply } =
  scholarshipSlice.actions;

// Export the reducer
export default scholarshipSlice.reducer;
