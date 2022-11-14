import React from "react";
import logo from "../utils/icons/logo.svg";
import profilephoto from "../utils/images/portrait.svg";

export const ContextData = React.createContext();

function ContextProvider({children}) {
    return(
        <ContextData.Provider value={{logo, profilephoto}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;