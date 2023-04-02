// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//     todoList: todoListSlice.reducer,
//   },
// });

// export default store;

// store.ts

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../logic/authSlice";
import todoListSlice from "../logic/todoListSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
