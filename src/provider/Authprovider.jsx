import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const Authcontext=createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const auth=getAuth(app);

const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
     const [loading,setloading]=useState(true);

    // console.log(user);

    const createuser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
      const signin=(email,password)=>{
            setloading(true);
            return signInWithEmailAndPassword(auth,email,password);
        }

         const updateuser=(updateddata)=>{
                return updateProfile(auth.currentUser, updateddata)
            }
    const logout=()=>{
        return signOut(auth);
    }
       useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
                setuser(currentuser);
                setloading(false);
            });
            return ()=>{
                unsubscribe();
            }
        })
    const authdata={
        user,
        setuser,
        createuser,
        logout,
        signin,
        loading,
        setloading,
        updateuser,
    }
    return <Authcontext value={authdata}>{children}</Authcontext>
};

export default Authprovider;