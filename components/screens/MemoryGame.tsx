import React, { useEffect, useState, useContext } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  ImageBackground,
  Platform,
  Vibration,
  ScrollView,
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { useIsFocused } from "@react-navigation/native";
import { ScoreContext } from "../context/ScoreContext";
import { imagePaths1 } from "../constants/Images1";
import { imagePaths2 } from "../constants/Images2";
import { imagePaths3 } from "../constants/images3";
import { imagePaths4 } from "../constants/images4";
import { imagePaths5 } from "../constants/images5";
import { imagePaths6 } from "../constants/images6";
import { Button, StatusBar } from 'react-native';
import Color from "../constants/Color";
import { bandera } from "./Categories";
import { Audio } from 'expo-av';
import Loader from "./Loader";
import Toast from 'react-native-root-toast';
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
import nivelesCat from "./../Similar/similar.json";
import { dropdownValue1 } from "./InstruccionesJuego1";
import { dropdownTimeValue1 } from "./InstruccionesJuego1";

type Props = NativeStackScreenProps<RootStackParamList, "MemoryGame">;
const Separator = () => {
  return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};
const MemoryGame: React.FC = ({ navigation: { navigate } }: Props) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound(respuesta: String) {
    console.log('Loading Sound');
    const { sound: audioSound } = await Audio.Sound.createAsync(
      respuesta === "correcta" ? require('./../../assets/audio/correct-ding.mp3') : require('./../../assets/audio/error-fallo-1.mp3')
    );
    setSound(audioSound);

    console.log('Playing Sound');
    await audioSound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const showToastCorrect = () => {
    try{
      Toast.show('Respuesta correcta!', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Color.primary,
        textColor: Color.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch(error){
      console.log(error)
    }
  }

  const showToastInCorrect = () => {
    try{
      Toast.show('Respuesta incorrecta, Vuelve a intentarlo!', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Color.primary,
        textColor: Color.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch(error){
      console.log(error)
    }
  }

  const [currentImage, setCurrentImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);
  const isFocused = useIsFocused();
  const [loader, setLoader] = useState(false);
  const { score, setScore } = useContext(ScoreContext);
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  //Manejo del tiempo de mostrar imagenes
  const tiempoPrimerImagen= 4000;
  const tiempoTotal = tiempoPrimerImagen + dropdownTimeValue1;

  useEffect(() => {
    setPreviousImage(null);
    setCurrentImage(null);
    if (bandera == "Entrenamiento") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Entrenamiento.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Entrenamiento[randomImageIndex].imagen;
      const randomImagePath = imagePaths1[parseInt(randomImagePathJson.replace(/[^\d]/g, ''))-1]
      const newrandomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Entrenamiento.length);
      const newrandomImagePathJson = nivelesCat[dropdownValue1].Entrenamiento[newrandomImageIndex].imagen;
      const newrandomImagePath = imagePaths1[parseInt(newrandomImagePathJson.replace(/[^\d]/g, ''))-1]
      setCurrentImage(randomImagePath);

        const numero2 = setTimeout(() => {
          setPreviousImage(null);
          setCurrentImage(null);
          console.log("Entre")
          setLoader(true);
        }, tiempoPrimerImagen);

      
      const numero1 = setTimeout(() => {
        console.log(newrandomImagePath)
        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {clearTimeout(numero1)
      clearTimeout(numero2)};
    }

    else if (bandera == "Banderas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Banderas.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Banderas[randomImageIndex].imagen;
      const randomImagePath = imagePaths2[parseInt(randomImagePathJson.replace(/[^\d]/g, ''))-1]
      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newRandomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Banderas.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Banderas[newRandomImageIndex].imagen;
        const newRandomImagePath = imagePaths2[parseInt(newrandomImagePathJson.replace(/[^\d]/g, ''))-1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newRandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {clearTimeout(numero1);
        clearTimeout(numero2)}
    }

    else if (bandera == "Paisajes") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Paisajes.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Paisajes[randomImageIndex].imagen;
      const randomImagePath = imagePaths3[parseInt(randomImagePathJson.replace(/[^\d]/g, ''))-1]
      setCurrentImage(randomImagePath);
      console.log(randomImagePath)

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);
      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Paisajes.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Paisajes[newrandomImageIndex].imagen;
        const newrandomImagePath = imagePaths3[parseInt(newrandomImagePathJson.replace(/[^\d]/g, ''))-1]
        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {clearTimeout(numero1);
        clearTimeout(numero2)}
    }

    else if (bandera == "Peliculas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Peliculas.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Peliculas[randomImageIndex].imagen;
      const randomImagePath = imagePaths4[parseInt(randomImagePathJson.replace(/[^\d]/g, ''))-1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Peliculas.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Peliculas[newrandomImageIndex].imagen;
        const newrandomImagePath = imagePaths4[parseInt(newrandomImagePathJson.replace(/[^\d]/g, ''))-1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {clearTimeout(numero1)
      clearTimeout(numero2)};
    }

    else if (bandera == "Personas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Personas.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Personas[randomImageIndex].imagen;
      const randomImagePath = imagePaths5[parseInt(randomImagePathJson.replace(/[^\d]/g, ''))-1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Personas.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Personas[newrandomImageIndex].imagen;
        const newrandomImagePath = imagePaths5[parseInt(newrandomImagePathJson.replace(/[^\d]/g, ''))-1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {clearTimeout(numero1)
      clearTimeout(numero2)};
    }

    else if (bandera == "Camisetas de Futbol") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Camisetas de Futbol"].length);
      const randomImagePathJson = nivelesCat[dropdownValue1]["Camisetas de Futbol"][randomImageIndex].imagen;
      const randomImagePath = imagePaths6[parseInt(randomImagePathJson.replace(/[^\d]/g, ''))-1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Camisetas de Futbol"].length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1]["Camisetas de Futbol"][newrandomImageIndex].imagen;
        const newrandomImagePath = imagePaths6[parseInt(newrandomImagePathJson.replace(/[^\d]/g, ''))-1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {clearTimeout(numero1)
      clearTimeout(numero2)};
    }
  }, [isFocused]);

  

  const handleOptionSelected = (isSameImage: boolean) => {
    if (isSameImage) {
      console.log("Bien es lo correcto");
      // showToastCorrect();
      Vibration.vibrate(0.5 * ONE_SECOND_IN_MS)
      setScore({
        correct: score.correct + 1,
        incorrect: score.incorrect,
      });
      playSound("correcta");
      showToastCorrect();

    } else {
      console.log("Te equivocaste, no es lo correcto");
      // showToastIncorrect();
      Vibration.vibrate(0.5 * ONE_SECOND_IN_MS)
      setScore({
        correct: score.correct,
        incorrect: score.incorrect + 1,
      });
      playSound("incorrecta");
      showToastInCorrect();
    }
    navigate("Again");
  };

  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';
  return (
    <ScrollView>
      <View>
        {
          loader === true ? (<View>
            <View
              style={{
                paddingHorizontal: Spacing * 4,
                paddingTop: Spacing * 4,
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.xxLarge,
                  color: Colors.primary,
                  fontFamily: Fonts["Roboto-Bold"],
                  textAlign: "center",
                }}
              >
                No te olvides la imagen!
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: Spacing * 4,
                paddingTop: Spacing * 10,
              }}>
              <Loader />
            </View>
          </View>
          ) :
      (
      <View>
        {previousImage === null ? (
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                fontFamily: Fonts["Roboto-Bold"],
                textAlign: "center",
              }}
            >
              Recuerda esta imagen!
            </Text>
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                fontFamily: Fonts["Roboto-Bold"],
                textAlign: "center",
              }}
            >
              ¿Es la misma imagen?
            </Text>
          </View>
        )}
        <View
        style={{
          
        }}>
        <Image
          style={{
            height: height / 2.5,
            width: width / 1.5,
            marginTop: Spacing * 4,
            borderRadius:  Math.min(height, width)/5,
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={currentImage}
        />
        </View>
        <Text
          style={{
            fontSize: FontSize.large,
            color: Colors.primary,
            fontFamily: Fonts["Roboto-Bold"],
            textAlign: "center",
          }}
        >
          Puntaje actual: {score.correct}
        </Text>
        {previousImage !== null && (
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              paddingTop: Spacing * 6,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => handleOptionSelected(currentImage === previousImage)}
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: Fonts["Roboto-Bold"],
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Es la misma
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleOptionSelected(currentImage !== previousImage)}
              style={{
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: Fonts["Roboto-Bold"],
                  color: Colors.text,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Es diferente
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>)}
    </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default MemoryGame;
