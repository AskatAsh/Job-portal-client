import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebaseConfig";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in existing user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in or sign up with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout or sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      if (currentUser?.email) {
        setUser(currentUser);
        // set jwt in cookie after login or signup
        const userInfo = { email: currentUser.email };
        axios
          .post(`${import.meta.env.VITE_SERVER}/jwt`, userInfo, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          .then((res) => {
            console.log("logged in user: ", res.data);
            setLoading(false);
          });
      } else {
        // clear cookie after logout
        axios
          .post(
            `${import.meta.env.VITE_SERVER}/logout`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("Logout user: ", res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      observer();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    googleSignIn,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
