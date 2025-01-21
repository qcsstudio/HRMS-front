"use client"
import { createContext, useState } from "react"

const AuthIntialData = {}

export const AuthDataContext = createContext(AuthIntialData);

export const AuthDataContextProvider = ({ children }) => {

  return (
    <AuthDataContext.Provider value={{ }}>
      {children}
    </AuthDataContext.Provider>
  );
};