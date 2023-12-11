import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../services/firebase";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true);


    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

  

    const userUpdate = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL : image
        })
    }


    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, async currentUser=> {
            setUser(currentUser);
            setLoading(false);
            if(currentUser?.email){
                console.log(currentUser);
                // await axios.post('/jwt', {email:userEmail});
            }else{
                console.log("user ni");
                // await axios.post('/logout',{email:userEmail});
            }
        });
        return () => {onSubscribe()};
    },[])

    const userInfo = {
        userUpdate,
        logOut,
        user,
        loginUser,
        createUser,
        loading,
    }
   
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;