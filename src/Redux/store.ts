import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {cardsReducer} from "./cardsReducer";
import {paramsReducer} from "./paramsReducer";



export const rootReducer = combineReducers({
    cardsReducer,
    paramsReducer
})


export const store = configureStore({
    reducer: rootReducer
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
