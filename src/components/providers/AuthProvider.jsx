import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const createUser = (email,password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () => {
        setLoading(true);

        return signInWithPopup(auth,googleAuthProvider);
    }

    const passwordResetEmail = (email) => {
        return sendPasswordResetEmail(auth,email);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();
            
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        passwordResetEmail,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;