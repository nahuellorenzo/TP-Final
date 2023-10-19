import React, { createContext, useEffect, useState } from "react";
import { db } from "./../firebase/config"
import { collection, query, where, addDoc, writeBatch, documentId, getDocs, setDoc , doc} from "firebase/firestore"
import { LoginContext } from "./LoginContext";
import { useContext } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
  });

  const [currentScore, setCurrentScore] = useState([0]);

  const { user } = useContext(LoginContext)


  useEffect(() => {

    const fetchScores = async () => {
      if (user.uid) {
        const scoreRef = collection(db, 'score');
        const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
        const response = await getDocs(itemsRef);
        if (response.size > 0){
          

          const data = response.docs[0].data()
          console.log(data.scorecorrect)
          setScore({ correct: data.scorecorrect, incorrect: data.scoreincorrect })
        }
        else {
          setScore({ correct: 0, incorrect: 0 })
        }
      }
    };

    fetchScores();
  }, [user.uid]);

  const updateScore = async (correct, incorrect) => {
    const scoreRef = collection(db, 'score');
    const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
    const response = await getDocs(itemsRef);
    if (response.size > 0) {
      const doc = response.docs[0]
      const id = response.docs[0].id
      const batch = writeBatch(db);
      batch.update(doc.ref, { scorecorrect: correct, scoreincorrect: incorrect });
      await batch.commit();
      setScore({ correct: correct, incorrect: incorrect })
    }
    else {
      const scoreDocRef = doc(scoreRef, user.uid);
      await setDoc(scoreDocRef,{ scorecorrect: correct, scoreincorrect: incorrect, email: user.email})
    }
  }

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
        updateScore,
        currentScore,
        setCurrentScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};