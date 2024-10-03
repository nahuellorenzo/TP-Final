import React, { useEffect, useState, useContext } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SoundComponent } from "../logic/audioInstructions";

type Props = NativeStackScreenProps<RootStackParamList, "InstruccionesJuego2">;
const InstruccionesJuego2Screen: React.FC<Props> = ({
  navigation: { navigate },
}: Props) => {
  return (
    <ScrollView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.large,
              color: Colors.primary,
              fontFamily: Fonts["poppins-bold"],
              textAlign: "center",
            }}
          >
            El siguiente juego es para trabajar tu memoria a corto plazo, se
            mostrará una serie de números por “x” segundos y luego deberas
            repetir la secuencia de números en el orden correcto.
          </Text>

          <SoundComponent juego={"numerium"} />

          <TouchableOpacity
            onPress={() => navigate("NumberGame")}
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
          >
            <Text
              style={{
                fontFamily: Fonts["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Comenzar
            </Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer_Boton}>
            <TouchableOpacity onPress={() => navigate("InformationJuego2")}>
              <Entypo name="info-with-circle" size={24} color="grey" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigate("Tutorial1")}
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
          >
            <Text
              style={{
                fontFamily: Fonts["Roboto-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Ver Tutorial
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default InstruccionesJuego2Screen;

const styles = StyleSheet.create({
  buttonContainer_Boton: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 20,
  },
});
