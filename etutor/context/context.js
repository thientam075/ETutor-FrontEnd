import React, { useContext, useReducer, useCallback } from "react";
import { reducer, initialState } from './reducer';

export const AppContext = React.createContext();

export const AppProvider = ({ children, initState = initialState }) => {
  const [stateData, dispatch] = useReducer(reducer, initState);

  const setAction = useCallback((action, payload) => {
    dispatch({ type: action, payload });
  }, []);

  const providerValue = { stateData, setAction };

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppSelector = (selector) => {
  const { stateData } = useContext(AppContext);
  return selector(stateData);
}