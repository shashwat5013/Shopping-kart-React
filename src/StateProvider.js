import React, { useContext, useReducer, createContext } from 'react'
//Prepares the Data Layer
export const StateContext = createContext();

//Provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from data layer
export const useStateValue = () => useContext(StateContext);
