import React, { createContext, useEffect, useState } from "react";
import { signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signInWithRedirect, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth, provider, provider2 } from "../firebase/config";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import "expo-dev-client";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
    uid: null,
    creacion:null,
  });

  const [logueo, setLogueo] = useState(true);

  //Google
  const [request, response, googleLogin] = Google.useAuthRequest({
    expoClientId: "872329099948-6dqa522jgp06g7e48p3rng6nqb7tha3v.apps.googleusercontent.com",
    androidClientId: "872329099948-1l2f7t659vu1mpu2i84qa8v132fildko.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    if (response?.type === "success"){
      const {id_token} = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

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
    .then(() => {
      setLogueo(true);
    })
      .catch((error) => {
        console.log(error);
        setLogueo(false);
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
          creacion:null,
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
          creacion: user.metadata.creationTime,
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
        logueo,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};