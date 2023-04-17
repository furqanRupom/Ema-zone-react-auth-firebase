import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useLocation } from 'react-router-dom';
export  const AuthContext = createContext();
const auth = getAuth(app)
const AuthProviders = ({children}) => {
   
    const [user,setUser] = useState('');
    const [loading,setLoading]= useState(true);

    // sign up
    const createUser = (email,password)=>{
      setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    // login
    const LogInUser = (email,password)=>{
      setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }

    // logout
    const logOut = ()=>{
       return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        LogInUser,
        logOut,
        loading
    }

    // observer
    useEffect(() => {
       const UnSubscribe =
         onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false);
         })

        return () => {
            UnSubscribe();
        };
    }, []);
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;