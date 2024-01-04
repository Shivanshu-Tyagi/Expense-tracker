import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Load state from local storage on component mount
  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("transaction"));
    if (storedState) {
      dispatch({ type: "SET_STATE", payload: storedState });
    }
  }, []);

  // Save state to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(state));
  }, [state]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transaction: state.transaction, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
