import React, { createContext, useEffect, useState } from "react";
import { signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signInWithRedirect, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth, provider, provider2 } from "../firebase/config";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
    uid: null,
  });

  const googleLogin = () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const facebookLogin = () => {
    signInWithRedirect(auth, provider2)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .catch((error) => {
        console.log(error);
      });
  };

  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({
          email: null,
          logged: false,
          uid: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser({
          email: user.email,
          logged: true,
          uid: user.uid,
        });
      } else {
        logout();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        googleLogin,
        facebookLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};