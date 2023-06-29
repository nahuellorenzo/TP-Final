import React, { createContext, useEffect, useState } from "react";
import { db } from "./../firebase/config"
import { collection, query, where, addDoc, writeBatch, documentId, getDocs } from "firebase/firestore"
import { LoginContext } from "./LoginContext";
import { useContext } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
  });

  const { user }  = useContext(LoginContext)


  useEffect(() => {
    
    const fetchScores = async () => {
      if (user.uid) {
        const scoreRef = collection(db, 'score');
        const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
        const response = await getDocs(itemsRef);

        const data = response.docs[0].data()
        console.log(data.scorecorrect)
        setScore({ correct: data.scorecorrect, incorrect: data.scoreincorrect })
        console.log("Entré al contexto de scores");
        
      }
    };
  
    fetchScores();
  }, [user.uid]);
  
  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};