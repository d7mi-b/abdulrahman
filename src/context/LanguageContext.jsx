import { createContext, useEffect, useReducer } from "react";

export const LangContext = createContext();

export const LangReducer = (state, action) => {
    switch (action.type) {
        case 'AR':
            return { lang: 'AR' };
        case 'EN':
            return { lang: 'EN' };
        default:
            return state;
    }
}

export const LanguageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LangReducer, {
        lang: 'AR'
    });

    useEffect(() => {
        const lang = localStorage.getItem('lang');

        if (lang)
            dispatch({ type: "AR", payload: lang });

    }, [])

    return (
        <LangContext.Provider value={{...state, dispatch}}>
            { children }
        </LangContext.Provider>
    )
}