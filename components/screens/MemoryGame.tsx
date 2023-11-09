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
import { imagePaths7 } from "../constants/images7";
import { imagePaths8 } from "../constants/images8";
import { imagePaths9 } from "../constants/images9";
import { imagePaths10 } from "../constants/images10";
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
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { withSpring } from 'react-native-reanimated';
export var confetti: boolean;

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

  const ANCHO_IMAGEN = width;
  const ALTO_IMAGEN = width;

  const escalaImg = useSharedValue(1);
  const focoX = useSharedValue(0);
  const focoY = useSharedValue(0);

  const pinchazoPantalla = Gesture.Pinch()
    .onStart((e) => {
      focoX.value = e.focalX;
      focoY.value = e.focalY;
    })
    .onUpdate((e) => {
      escalaImg.value = e.scale;
    })
    .onEnd(() => {
      escalaImg.value = withTiming(1, { duration: 0 });
    });

  const centroImagen = {
    x: ANCHO_IMAGEN / 2,
    y: ALTO_IMAGEN / 2,
  };

  const estiloAnimado = useAnimatedStyle(() => ({
    transform: [
      { translateX: focoX.value },
      { translateY: focoY.value },
      { translateX: -centroImagen.x },
      { translateY: -centroImagen.y },
      { scale: escalaImg.value },
      { translateX: -focoX.value },
      { translateY: -focoY.value },
      { translateX: centroImagen.x },
      { translateY: centroImagen.y },
    ],
  }));

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const showToastCorrect = () => {
    try {
      Toast.show('Respuesta correcta!', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Color.primary,
        textColor: Color.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  const showToastInCorrect = () => {
    try {
      Toast.show('Respuesta incorrecta, Vuelve a intentarlo!', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Color.primary,
        textColor: Color.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  const [currentImage, setCurrentImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);
  const isFocused = useIsFocused();
  const [loader, setLoader] = useState(false);
  const { score, currentScore, setScore, setCurrentScore } = useContext(ScoreContext);
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  //Manejo del tiempo de mostrar imagenes
  const tiempoPrimerImagen = 4000;
  const tiempoTotal = tiempoPrimerImagen + dropdownTimeValue1;

  useEffect(() => {
    escalaImg.value = withSpring(1); // Restablece la escala a 1
  }, [currentImage]);

  useEffect(() => {
    setPreviousImage(null);
    setCurrentImage(null);
    if (bandera == "Entrenamiento") {
      console.log(dropdownTimeValue1);
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Entrenamiento.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Entrenamiento[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Entrenamiento[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths1[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);


      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Entrenamiento[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Entrenamiento[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths1[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

    else if (bandera == "Banderas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Banderas.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Banderas[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Banderas[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths2[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Banderas[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Banderas[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths2[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1);
        clearTimeout(numero2)
      }
    }

    else if (bandera == "Paisajes") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Paisajes.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Paisajes[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Paisajes[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths3[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);
      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Paisajes[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Paisajes[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths3[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1);
        clearTimeout(numero2)
      }
    }

    else if (bandera == "Peliculas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Peliculas.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Peliculas[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Peliculas[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths4[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Peliculas[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Peliculas[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths4[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

    else if (bandera == "Personas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Personas.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Personas[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Personas[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths5[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Personas[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Personas[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths5[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

    else if (bandera == "Camisetas de Futbol") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Camisetas de Futbol"].length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Camisetas de Futbol"][randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1]["Camisetas de Futbol"][randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths6[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Camisetas de Futbol"][randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1]["Camisetas de Futbol"][randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths6[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

    else if (bandera == "Oficios") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Oficios.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Oficios[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Oficios[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths7[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Oficios[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Oficios[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths7[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

    else if (bandera == "Figuras Geométricas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Figuras Geométricas"].length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Figuras Geométricas"][randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1]["Figuras Geométricas"][randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths8[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1]["Figuras Geométricas"][randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1]["Figuras Geométricas"][randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths8[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

    else if (bandera == "Lugares") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Lugares.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Lugares[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Lugares[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths9[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Lugares[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Lugares[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths9[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

    else if (bandera == "Frutas") {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * nivelesCat[dropdownValue1].Frutas.length);
      const numrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Frutas[randomImageIndex].imagen.length);
      const randomImagePathJson = nivelesCat[dropdownValue1].Frutas[randomImageIndex].imagen[numrandom];
      const randomImagePath = imagePaths10[parseInt(randomImagePathJson.replace(/[^\d]/g, '')) - 1]

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, tiempoPrimerImagen);

      const numero1 = setTimeout(() => {
        const newnumrandom = Math.floor(Math.random() * nivelesCat[dropdownValue1].Frutas[randomImageIndex].imagen.length);
        const newrandomImagePathJson = nivelesCat[dropdownValue1].Frutas[randomImageIndex].imagen[newnumrandom];
        const newrandomImagePath = imagePaths10[parseInt(newrandomImagePathJson.replace(/[^\d]/g, '')) - 1]

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, tiempoTotal);
      return () => {
        clearTimeout(numero1)
        clearTimeout(numero2)
      };
    }

  }, [isFocused]);



  const handleOptionSelected = (isSameImage: boolean) => {
    if (isSameImage) {
      console.log("Bien es lo correcto");
      // showToastCorrect();
      Vibration.vibrate(0.5 * ONE_SECOND_IN_MS)

      setCurrentScore(prevState => {
        const nextCorrect = prevState.correct + 1;
        let achievements = [];
        switch (nextCorrect) {
          case 1:
            achievements.push('1stToday');
            break;
          case 10:
            achievements.push('10thToday');
            break;
          case 25:
            achievements.push('25thToday');
            break;
          case 50:
            achievements.push('50thToday');
            break;
          default:
            break;
        }
        switch (nextCorrect) {
          case 50:
            achievements.push('50Total');
            break;
          case 150:
            achievements.push('150Total');
            break;
          case 500:
            achievements.push('500Total');
            break;
          case 1000:
            achievements.push('1000Total');
            break;
          default:
            break;
        }
        setScore(scorePrevState => ({
          ...scorePrevState,
          achievements: [...scorePrevState.achievements, ...achievements],
        }));
        return {
          ...prevState,
          correct: nextCorrect,
          graph: [...prevState.graph, nextCorrect],
        };
      });

      setScore(prevState => ({
        ...prevState,
        correct: prevState.correct + 1,
      }));

      playSound("correcta");
      confetti = true;
      showToastCorrect();

    } else {
      console.log("Te equivocaste, no es lo correcto");
      // showToastIncorrect();
      Vibration.vibrate(0.5 * ONE_SECOND_IN_MS)
      setScore(prevState => ({
        ...prevState,
        incorrect: prevState.incorrect + 1,
      }));
      setCurrentScore(prevState => {
        return {
          ...prevState,
          graph: [...prevState.graph, prevState.correct],
        };
      });
      confetti = false;
      showToastInCorrect();
    }
    navigate("Again", { param1: previousImage, param2: currentImage });
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
                  {
                    Platform.OS == 'web' ? (<Image
                      style={{
                        height: height / 2.5,
                        width: width / 1.5,
                        marginTop: Spacing * 4,
                        borderRadius: Math.min(height, width) / 5,
                        alignSelf: "center",
                      }}
                      resizeMode="contain"
                      source={currentImage}
                    />) :
                      (
                        <GestureHandlerRootView>
                          <GestureDetector gesture={pinchazoPantalla} userSelect="none">
                            <Animated.Image
                              style={[estiloAnimado, {
                                height: height / 2.5,
                                width: width / 1.5,
                                marginTop: Spacing * 4,
                                borderRadius: Math.min(height, width) / 5,
                                alignSelf: "center",
                              }]}
                              resizeMode="contain"
                              source={currentImage}
                            />
                          </GestureDetector>
                        </GestureHandlerRootView>
                      )
                  }
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
