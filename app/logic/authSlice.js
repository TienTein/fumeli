// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const authReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/prioritiesFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "auth",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    setUserLoading: (state) => {
      state.loading = true;
    },
    setUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});
