import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

// set state 
export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu
            }}
        >
            {/* always need to return the children in order to update */}
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)