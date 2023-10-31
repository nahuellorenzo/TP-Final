import React, { useContext, useEffect, useState } from "react";
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
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { LoginContext } from "../context/LoginContext";
import { ScoreContext } from "../context/ScoreContext";
import Carru from "./Carru";
import { ScrollView } from "react-native-gesture-handler";
const { height } = Dimensions.get("window");

const { width } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "Again">;

const Again: React.FC<Props> = ({ navigation: { navigate }, route }) =>{
  const { logout, user } = useContext(LoginContext);
  const { score, updateScore } = useContext(ScoreContext)
  const { param1, param2 } = route.params;
  console.log(param1, param2);
  return (
    <ScrollView>
      <View>
        <Carru param1={param1} param2={param2} />
      </View>
      <View style={{backgroundColor:"white"}}>
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}
        >
          <Text
            style={{
              marginTop: Spacing*-4,
              fontSize: FontSize.xxLarge,
              color: Colors.primary,
              fontFamily: Fonts["Roboto-Bold"],
              textAlign: "center",
            }}
          >
            Deseas probar de nuevo?
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 4,
            flexDirection: "row",
            justifyContent: "space-between", // Agrega esta línea
          }}
        >
          {/* Botón "Si" */}
          <TouchableOpacity
            onPress={() => navigate("MemoryGame")}
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
              Si
            </Text>
          </TouchableOpacity>

          {/* Botón "No" */}
          <TouchableOpacity
            onPress={() =>{ 
              updateScore(score.correct, score.incorrect)
              navigate("EstadisticasJuego1")}}
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
              No
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: FontSize.large,
            color: Colors.primary,
            fontFamily: Fonts["Roboto-Bold"],
            textAlign: "center",
            paddingTop: Spacing,
            paddingBottom: Spacing * 4,
          }}
        >
          Puntaje actual: {score.correct}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Again;
