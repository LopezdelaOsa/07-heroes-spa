import { types } from "../types/types";


export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                //nameU: action.payload
                user: action.payload
            }

        case types.logout:
            return {
                logged: false,
            }

        default:
            return state
    }

}