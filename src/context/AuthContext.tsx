import React, { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

// Definir que información tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined
}

// Definir que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOut: () => void;
    changeFavIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor del estado
export const AuthProvider = ({ children }: any) => {

    // const [state, dispatch] = useReducer(reducer, initialState)
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({
            type: 'signIn'
        })
    }

    const signOut = () => {
        dispatch({
            type: "signOut"
        })
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({
            type: "changeFavIcon",
            payload: iconName
        })
    }

    const changeUserName = (userName: string) => {
        dispatch({
            type: "changeUserName",
            payload: userName
        })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            signOut,
            changeFavIcon,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}