import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import AppTextInput from "../AppTextInput";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Loader from "./Loader";
import { ScoreContext } from "../context/ScoreContext";
import Toast from 'react-native-root-toast';
import DogLoader from "./Loader2";
import NewLoader from "./Loader3";
import ModalGoNoGo from "./ModalGoNoGo";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "GonoGoGame">;
const GonoGoGame: React.FC<Props> = ({ navigation }) => {

  const [data, setData] = useState({
    key1: false,
    key2: true,
    key3: false
  });

  const [modalVisible, setModalVisible] = useState(false);
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const handlePress = (key: string) => {
    if (!data[key]) {
      // Actualizar el estado para eliminar la clave si es false
      const updatedData = { ...data };
      delete updatedData[key];
      setData(updatedData);
      showToastInCorrect();
    }
    else {
      showToastCorrect();
      handleModalVisible();
    }
  };

  const showToastCorrect = () => {
    try {
      Toast.show('Respuesta correcta!', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Colors.primary,
        textColor: Colors.onPrimary,
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
        backgroundColor: Colors.primary,
        textColor: Colors.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch (error) {
      console.log(error)
    }
  }


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
          Oscuro
        </Text>
      </View>
      <View
        style={{
          marginVertical: Spacing * 3,
          padding: Spacing * 2,
        }}>
        {Object.keys(data).map((key) => (
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
        )
        )}

        <ModalGoNoGo
          isVisible={modalVisible}
          navigation={navigation}
        />

      </View>
    </ScrollView>
  );
};


export default GonoGoGame;