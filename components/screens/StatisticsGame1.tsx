import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { ScoreContext } from "../context/ScoreContext";
import {
  LineChart,
} from "react-native-chart-kit";


type Props = NativeStackScreenProps<RootStackParamList, "EstadisticasJuego1">;
const EstadisticasJuego1Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

  const { score, currentScore, setCurrentScore } = useContext(ScoreContext);

  const labels = score.correctAnswers ? Array.from({ length: score.correctAnswers.length }, (_, i) => (i + 1).toString()) : [];

  return (
    <View>
        {score.correct}
        {score.correctAnswers}
        <View>
          <LineChart
            data={{
              labels: [],
              datasets: [
                {
                  data: currentScore,
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate("Main");
            setCurrentScore([]);}}
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
    </View>
  );
};


export default EstadisticasJuego1Screen;