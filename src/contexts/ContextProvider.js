import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// set state
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    // cause initialState is an object, so has to be ...
    // only the clicked value turns to be trye
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu: activeMenu,
        setActiveMenu: setActiveMenu,
        isClicked: isClicked,
        setIsClicked: setIsClicked,
        handleClick: handleClick,
        screenSize: screenSize,
        setScreenSize: setScreenSize,
      }}
    >
      {/* always need to return the children in order to update */}
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
