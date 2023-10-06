import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { ScoreContext } from "../context/ScoreContext";

type Props = NativeStackScreenProps<RootStackParamList, "EstadisticasJuego1">;
const EstadisticasJuego1Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

  const { score } = useContext(ScoreContext);


  return (
    <View>
      <Text>
        {score.correct}
        <TouchableOpacity
          onPress={() => navigate("MemoryGame")}
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing * 1.5,
            paddingHorizontal: Spacing * 2,
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
            Volver al Menu Principal
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};


export default EstadisticasJuego1Screen;