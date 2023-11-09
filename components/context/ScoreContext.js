import React, { createContext, useEffect, useState } from "react";
import { db } from "./../firebase/config"
import { collection, query, where, addDoc, writeBatch, documentId, getDocs, setDoc, doc } from "firebase/firestore"
import { LoginContext } from "./LoginContext";
import { useContext } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
    scoreToday: 0,
    fecha: '',
    racha: 0,
    achievements: [],
  });
  console.log(score)

  const [currentScore, setCurrentScore] = useState([0]);

  const { user } = useContext(LoginContext)


  useEffect(() => {

    const fechaActual = new Date();

    // Obtener el día, el mes y el año actual
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Suma 1 porque enero es 0
    const anio = fechaActual.getFullYear();

    setScore(prevScore => ({
      ...prevScore,
      fecha: fechaActual
    }));

    const fetchScores = async (fecha) => {
      if (user.uid) {
        const scoreRef = collection(db, 'score');
        const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
        const response = await getDocs(itemsRef);
        if (response.size > 0) {
          const data = response.docs[0].data()
          const doc = response.docs[0]
          const batch = writeBatch(db);
          console.log("data");
          console.log(data);
          setScore(prevScore => ({
            ...prevScore, correct: data.scorecorrect, incorrect: data.scoreincorrect, scoreToday: data.scoreToday, racha: data.racha, achievements: data.achievements
          }))
          if (data.fecha) {
            if ((data.fecha.toDate().getFullYear() !== score.fecha.getFullYear()) || (data.fecha.toDate().getDate() !== score.fecha.getDate()) || (data.fecha.toDate().getMonth() !== score.fecha.getMonth())) {
              if (score.fecha.getDate() == data.fecha.toDate().getDate() + 1) {
                batch.update(doc.ref, { fecha: fecha, racha: data.racha + 1 });
                setScore(prevScore => ({
                  ...prevScore, fecha: score.fecha, racha: data.racha + 1
                }))
                console.log("Entraste ayer, tu racha sube en 1")
              } else {
                batch.update(doc.ref, { fecha: fecha, racha: 0 });
                setScore(prevScore => ({
                  ...prevScore, fecha: score.fecha, racha: 0
                }))
                console.log("No entraste ayer, tu racha vuelve a 0")
              }
            }
            else {
              batch.update(doc.ref, { fecha: fecha });
              setScore(prevScore => ({
                ...prevScore, fecha: score.fecha
              }))
              console.log("ya entraste hoy")
            }
          }
          else {
            console.log("Sos un usuario nuevo, tu racha comienza en 0")
            setScore(prevScore => ({
              ...prevScore, fecha: score.fecha, racha: 0
            }))
            batch.update(doc.ref, { fecha: fecha, racha: 0 });
          }
          await batch.commit();

        }
        else {
          setScore({ correct: 0, incorrect: 0, fecha: new Date(), racha: 0, achievements: [], scoreToday: 0 })
          const scoreDocRef = doc(scoreRef, user.uid);
          await setDoc(scoreDocRef, { fecha: score.fecha, racha: 0, email: user.email })
        }
      }
    };

    fetchScores(fechaActual);
  }, [user.uid]);

  const updateScore = async (correct, incorrect, achievements, scoreToday) => {
    const scoreRef = collection(db, 'score');
    const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
    const response = await getDocs(itemsRef);
    if (response.size > 0) {
      const doc = response.docs[0]
      const id = response.docs[0].id
      const batch = writeBatch(db);
      batch.update(doc.ref, { scorecorrect: correct, scoreincorrect: incorrect, achievements: achievements, scoreToday: scoreToday });
      await batch.commit();
      setScore(prevScore => ({
        ...prevScore, correct: correct, incorrect: incorrect
      }))
    }
    else {
      const scoreDocRef = doc(scoreRef, user.uid);
      await setDoc(scoreDocRef, { scorecorrect: correct, scoreincorrect: incorrect, email: user.email })
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