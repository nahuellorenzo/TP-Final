import React, { useEffect, useState, useContext  } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import Toast from 'react-native-root-toast';
import ModalGoNoGo from "./ModalGoNoGo";
import palabras from "./../Similar/gonogo.json";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { ScoreContext } from "../context/ScoreContext";

type Props = NativeStackScreenProps<RootStackParamList, "GonoGoGame">;

const { height, width } = Dimensions.get("window");

const GonoGoGame: React.FC<Props> = ({ navigation }) => {

  const [currentWord, setCurrentWord] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [facilitationsLeft, setFacilitationsLeft] = useState<number>(3); // Permite usar hasta 3 veces
  const [modalVisible, setModalVisible] = useState(false);
  const { score, setScore, updateScore } = useContext(ScoreContext);

  useEffect(() => {
    selectRandomWord();
  }, []);

  const selectRandomWord = () => {
    const keys = Object.keys(palabras);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentWord(randomKey);
    const optionKeys = Object.keys(palabras[randomKey]);
    setOptions(shuffleArray(optionKeys));
    setFacilitationsLeft(3); // Resetear el contador de facilitaciones
  };

  const resetGonoGoData = () => {
    setScore(prevScore => ({
      ...prevScore,
      gonoGo: {
        attempts: 0,
        facilitations: 0,
      }
    }));
  };

  const shuffleArray = (array: string[]) => {
    // Algoritmo Fisher-Yates para mezclar un array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handlePress = (key: string) => {
    setScore(prevScore => ({
      ...prevScore,
      gonoGo: {
        ...prevScore.gonoGo,
        attempts: score.gonoGo.attempts + 1,
      }
    }));
    if (!palabras[currentWord][key]) {
      showToastInCorrect();
    } else {
      showToastCorrect();
      handleCorrectAnswer();
    }
  };

  const handleFacilitate = () => {

    setScore(prevScore => ({
      ...prevScore,
      gonoGo: {
        ...prevScore.gonoGo,
        facilitations: score.gonoGo.facilitations + 1,
      }
    }));

    if (facilitationsLeft > 0 && options.length > 2) {
      const incorrectOptions = options.filter(option => !palabras[currentWord][option]);
      if (incorrectOptions.length > 0) {
        const optionToRemove = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
        setOptions(options.filter(option => option !== optionToRemove));
        setFacilitationsLeft(facilitationsLeft - 1);
      }
    }

  };

  const handleCorrectAnswer = () => {
    setScore(prevScore => ({
      ...prevScore,
      correct: score.correct + 1,
      gonoGo: {
        ...prevScore.gonoGo,
      }
    }));
    handleModalVisible();
  };

  const handleModalVisible = () => {
    
    setModalVisible(!modalVisible);
  };

  const showToastCorrect = () => {
    Toast.show('Respuesta correcta!', {
      duration: Toast.durations.LONG,
      animation: true,
      backgroundColor: Colors.primary,
      textColor: Colors.onPrimary,
      hideOnPress: true,
      shadow: true,
    });
  };

  const showToastInCorrect = () => {
    Toast.show('Respuesta incorrecta, Vuelve a intentarlo!', {
      duration: Toast.durations.LONG,
      animation: true,
      backgroundColor: Colors.primary,
      textColor: Colors.onPrimary,
      hideOnPress: true,
      shadow: true,
    });
  };

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontFamily: Fonts["Roboto-Bold"],
            color: Colors.text,
            fontSize: FontSize.large,
            textAlign: "center",
          }}>
          {currentWord}
        </Text>
      </View>
      <View
        style={{
          marginVertical: Spacing * 3,
          padding: Spacing * 2,
        }}>
        {options.map((key) => (
          <TouchableOpacity
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 2,
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
            key={key}
            onPress={() => handlePress(key)}
          >
            <Text
              style={{
                fontFamily: Fonts["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}>
              {key}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: facilitationsLeft > 0 && options.length > 2 ? Colors.primary : Colors.primary,
            marginVertical: Spacing * 2,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={handleFacilitate}
          disabled={facilitationsLeft <= 0 || options.length <= 2}
        >
          <Text
            style={{
              fontFamily: Fonts["poppins-bold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}>
            Facilitar
          </Text>
        </TouchableOpacity>

        <ModalGoNoGo
          isVisible={modalVisible}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default GonoGoGame;
