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
    fecha: '',
    racha: 0,
    achievements: [],
  });
  console.log(score)

  const [currentScore, setCurrentScore] = useState({
    graph: [0],
    correct: 0,
  });


  const { user } = useContext(LoginContext)

  useEffect(() => {
    // Crear un nuevo objeto Date para obtener la fecha actual
    const fechaActual = new Date();
    
    // Obtener el día, el mes y el año actual
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Suma 1 porque enero es 0
    const anio = fechaActual.getFullYear();
    
    // Formatear la fecha en el formato deseado (puedes ajustar esto según tus preferencias)
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    // Actualizar el estado con la fecha actual
    setScore(prevScore => ({
      ...prevScore,
      fecha: fechaActual
    }));
    console.log(fechaActual.getFullYear())
    console.log(score.fecha)
    const updateFecha = async (correct, incorrect, fecha) => {
      const scoreRef = collection(db, 'score');
      const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
      const response = await getDocs(itemsRef);
      if (response.size > 0) {
        const doc = response.docs[0]
        const id = response.docs[0].id
        const data = response.docs[0].data()
        const batch = writeBatch(db);
        console.log(data.fecha.toDate())
        if (data.fecha){
          if ((data.fecha.toDate().getFullYear()!== score.fecha.getFullYear())||(data.fecha.toDate().getDate()!== score.fecha.getDate())||(data.fecha.toDate().getMonth()!== score.fecha.getMonth())){
            if(score.fecha.getDate()  ==data.fecha.toDate().getDate()+1){
              batch.update(doc.ref, { scorecorrect: correct, scoreincorrect: incorrect, fecha: fecha, racha: data.racha+1 });
              setScore(prevState => ({
                ...prevState,
                racha: data.racha + 1
              }));
            } else {
              batch.update(doc.ref, { scorecorrect: correct, scoreincorrect: incorrect, fecha: score.fecha, racha: 0 });
                setScore(prevState => ({
                  ...prevState,
                  racha: 0 
                }));
            } 
          }
          else {
            setScore(prevState => ({
              ...prevState,
              racha: 0 
            }));
          }
        }
        else {
          setScore(prevState => ({
            ...prevState,
            racha: 0 
          }));
          batch.update(doc.ref, { fecha: score.fecha, racha: 0 });
        }
        await batch.commit();
      }
      else {
        setScore(prevState => ({
          ...prevState,
          racha: 0 
        }));
        const scoreDocRef = doc(scoreRef, user.uid);
        await setDoc(scoreDocRef,{ scorecorrect: correct, scoreincorrect: incorrect, email: user.email, fecha: score.fecha, racha: 0})
      }
    } 
    updateFecha(score.correct, score.incorrect, fechaActual)
  }, [user.uid]);

  useEffect(() => {

    const fetchScores = async () => {
      if (user.uid) {
        const scoreRef = collection(db, 'score');
        const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
        const response = await getDocs(itemsRef);
        if (response.size > 0){
          

          const data = response.docs[0].data()
          console.log(data.scorecorrect)
          setScore({ correct: data.scorecorrect, incorrect: data.scoreincorrect, fecha:data.fecha.toDate(), racha: data.racha})
        }
        else {
          setScore({ correct: 0, incorrect: 0, fecha:new Date(), racha: 0})
        }
      }
    };

    fetchScores();
  }, [user.uid]);

  const updateScore = async (correct, incorrect, achievements) => {
    const scoreRef = collection(db, 'score');
    const itemsRef = query(scoreRef, where(documentId(), '==', user.uid));
    const response = await getDocs(itemsRef);
    if (response.size > 0) {
      const doc = response.docs[0]
      const id = response.docs[0].id
      const batch = writeBatch(db);
      batch.update(doc.ref, { scorecorrect: correct, scoreincorrect: incorrect, achievements: achievements });
      await batch.commit();
      setScore({ correct: correct, incorrect: incorrect, achievements: achievements })
    }
    else {
      const scoreDocRef = doc(scoreRef, user.uid);
      await setDoc(scoreDocRef,{ scorecorrect: correct, scoreincorrect: incorrect, achievements: achievements, email: user.email})
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