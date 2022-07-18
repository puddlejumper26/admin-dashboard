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
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu,
                isClicked: isClicked,
                setIsClicked: setIsClicked,
                handleClick: handleClick
            }}
        >
            {/* always need to return the children in order to update */}
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)