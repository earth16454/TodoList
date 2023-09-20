import { setIsActive } from "../reducer/exampleReducer";

export const ActiveAction = (status) => {
    return dispatch => {
        dispatch(setIsActive(status))
    }
}