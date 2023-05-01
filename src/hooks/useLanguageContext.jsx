import { LangContext } from "../context/LanguageContext";
import { useContext } from "react";

export const useLanguageContext = () => {
    const context = useContext(LangContext);

    if (!context)
        throw Error("useAuthContext must be used inside an AuthContextProvider");

    return context;
}