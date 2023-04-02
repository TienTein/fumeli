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
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.search = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
