import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
const initReducer = {
    exampleReducer
}

const reducer = combineReducers(initReducer)
export { reducer }