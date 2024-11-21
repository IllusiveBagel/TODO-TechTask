import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "../types/todoType";

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: Math.random() * 100,
        title: action.payload,
        completed: false,
      };

      state.todos.push(todo);
    },
    // This is currently unused but with more time this would be part of an edit menu
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setCompleted: (state, action: PayloadAction<number>) => {
      const objIndex = state.todos.findIndex(
        (obj) => obj.id === action.payload,
      );
      state.todos[objIndex].completed = true;
    },
  },
});

export const { addTodo, removeTodo, setCompleted } = todoSlice.actions;
export default todoSlice.reducer;
