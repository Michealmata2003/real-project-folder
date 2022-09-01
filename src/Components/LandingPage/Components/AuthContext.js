import React, {useEffect, useState} from 'react';

import { useContext, createContext } from "react";
import { auth } from "./firebase";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

const [user, setUser] = useState({})
  const signInWithGoogle = () => {
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider);
  };
  const LogOut = () => {
    signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        console.log('user', currentUser)
    })
    return() => {
        unsubscribe()
    }
       
    
  }, []);
  return (
    <AuthContext.Provider value={{ signInWithGoogle,LogOut, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
