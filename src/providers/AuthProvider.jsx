import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Manage User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }

    }, [])

    //Google Authentication
    const signinGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Email & password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=> {
       return signOut(auth)
    }

    const authInfo = { user, loading, signinGoogle, createUser, signInUser, logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;