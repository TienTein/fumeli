// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state.todoList, action.payload];

//     default:
//       return state;
//   }
// };

// export default todoListReducer;
const initState = [
  {
    id: 1,
    name: "abc",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "xyz",
    completed: true,
    priority: "low",
  },
  {
    id: 3,
    name: "nvm",
    completed: false,
    priority: "high",
  },
];

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});
