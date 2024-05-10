import { configureStore } from "@reduxjs/toolkit"
//@ts-ignore
import todoReducer from "./features/todoSlice.js"

export const store = configureStore({ reducer: todoReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
