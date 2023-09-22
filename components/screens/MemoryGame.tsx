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

  useEffect(() => {
    setPreviousImage(null);
    setCurrentImage(null);
    if (bandera == 1) {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * imagePaths1.length);
      const randomImagePath = imagePaths1[randomImageIndex];
      console.log(randomImagePath)
      const newrandomImageIndex = Math.floor(Math.random() * imagePaths1.length);
      const newrandomImagePath = imagePaths1[newrandomImageIndex];
      setCurrentImage(randomImagePath);

        const numero2 = setTimeout(() => {
          setPreviousImage(null);
          setCurrentImage(null);
          console.log("Entre")
          setLoader(true);
        }, 4000);

      
      const numero1 = setTimeout(() => {
        console.log(newrandomImagePath)
        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, 6000);
      return () => {clearTimeout(numero1)
      clearTimeout(numero2)};
    }

    else if (bandera == 2) {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * imagePaths2.length);
      const randomImagePath = imagePaths2[randomImageIndex];
      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, 4000);

      const numero1 = setTimeout(() => {
        const newRandomImageIndex = Math.floor(Math.random() * imagePaths2.length);
        const newRandomImagePath = imagePaths2[newRandomImageIndex];

        setPreviousImage(randomImagePath);
        setCurrentImage(newRandomImagePath);
        setLoader(false);
      }, 6000);
      return () => {clearTimeout(numero1);
        clearTimeout(numero2)}
    }

    else if (bandera == 3) {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * imagePaths3.length);
      const randomImagePath = imagePaths3[randomImageIndex];
      setCurrentImage(randomImagePath);

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, 4000);
      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * imagePaths3.length);
        const newrandomImagePath = imagePaths3[newrandomImageIndex];
        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, 6000);
      return () => {clearTimeout(numero1);
        clearTimeout(numero2)}
    }

    else if (bandera == 4) {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * imagePaths4.length);
      const randomImagePath = imagePaths4[randomImageIndex];

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, 4000);

      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * imagePaths4.length);
        const newrandomImagePath = imagePaths4[newrandomImageIndex];

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, 6000);
      return () => {clearTimeout(numero1)
      clearTimeout(numero2)};
    }

    else if (bandera == 5) {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * imagePaths5.length);
      const randomImagePath = imagePaths5[randomImageIndex];

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, 4000);

      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * imagePaths5.length);
        const newrandomImagePath = imagePaths5[newrandomImageIndex];

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, 6000);
      return () => {clearTimeout(numero1)
      clearTimeout(numero2)};
    }

    else if (bandera == 6) {
      setPreviousImage(null);
      const randomImageIndex = Math.floor(Math.random() * imagePaths6.length);
      const randomImagePath = imagePaths6[randomImageIndex];

      setCurrentImage(randomImagePath);

      const numero2 = setTimeout(() => {
        setPreviousImage(null);
        setCurrentImage(null);
        console.log("Entre")
        setLoader(true);
      }, 4000);

      const numero1 = setTimeout(() => {
        const newrandomImageIndex = Math.floor(Math.random() * imagePaths6.length);
        const newrandomImagePath = imagePaths6[newrandomImageIndex];

        setPreviousImage(randomImagePath);
        setCurrentImage(newrandomImagePath);
        setLoader(false);
      }, 6000);
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
