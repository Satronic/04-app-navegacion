import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string}
    | { type: 'signOut'}
    | { type: 'changeUserName', payload: string}

// El reducer genera un nuevo estado dependiendo de la accion lanzada
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'not-username'
            }

        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            }
    
        case "signOut":
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }

        case "changeUserName":
            return {
                ...state,
                userName: action.payload
            }

        default:
            return state;
    }
}