import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.auth;

// export const filterStatusSelector = (state) => state.filter.status;

// export const filterPrioritiesSelector = (state) => state.filter.priorities;

// export const todoListSelector = (state) => state.todoList;

// export const todoRemainingSelector = createSelector(
//   todoListSelector,
//   searchTextSelector,
//   filterStatusSelector,
//   filterPrioritiesSelector,
//   (todoList, searchText, status, priorities) => {
//     return todoList.filter((todo) => {
//       if (status === "all") {
//         return priorities.length
//           ? todo.name.includes(searchText) && priorities.includes(todo.priority)
//           : todo.name.includes(searchText);
//       }
//       return (
//         todo.name.includes(searchText) &&
//         (status === "completed" ? todo.completed : !todo.completed) &&
//         (priorities.length ? priorities.includes(todo.priority) : true)
//       );
//     });
//   }
// );
