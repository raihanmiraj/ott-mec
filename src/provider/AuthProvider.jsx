import AuthContext from "@/context/AuthContext";
import auth,{ googleProvider } from '@/firebase/firebase.auth'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'
import { useEffect, useState } from "react";
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = async (updateUser = {})=>{
        setLoading(true)
        await updateProfile(auth, updateProfile)
        setUser((preUser)=>({...preUser, ...updateUser}))
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        });

    }, []);

    const value = {
        user, 
        loading, 
        createUser,
        singIn,
        profileUpdate,
        googleLogin,
        logOut
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}
export default AuthProvider;