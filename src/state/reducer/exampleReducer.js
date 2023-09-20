import { createAction, createReducer } from "redux-act";

const initState = {
    isActive: false
}

export const setIsActive = createAction("ActiveState")

export default createReducer({
    [setIsActive]: (state, payload) => {
        return { ...state, isActive: payload }
    }
},initState)