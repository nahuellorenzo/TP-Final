import React, { useState, useCallback } from "react";
import { Alert, View, TouchableOpacity, Text, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { StyleSheet } from "react-native";
import Spacing from "../constants/Spacing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Color from "../constants/Color";
import Fonts from "../constants/Fonts";
import FontSize from "../constants/FontSize";

type Props = NativeStackScreenProps<RootStackParamList, "VideoTutorials">;

const VideoTutorialsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { juego } = route.params;

  const [playing, setPlaying] = useState(false);
  let youtubeVideoId = "";

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("El video ha terminado de reproducirse!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  switch (juego) {
    case "memory_game":
      youtubeVideoId = "a7O-G3lhkdM";
      break;
    case "numerium":
      youtubeVideoId = "fvhIj9yVP4g";
      break;
    case "contrarium":
      youtubeVideoId = "IxeTPgcmhOI";
      break;
    default:
      throw new Error("Juego no soportado");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {juego === "memory_game"
          ? "Memory Game"
          : juego === "numerium"
          ? "Numerium"
          : "Contrarium"}
      </Text>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={youtubeVideoId}
        onChangeState={onStateChange}
      />
      <TouchableOpacity onPress={togglePlaying} style={styles.button}>
        <Text style={styles.buttonText}>{playing ? "Pausar" : "Iniciar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoTutorialsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Spacing * 3,
  },
  button: {
    padding: Spacing * 3,
    backgroundColor: Color.primary,
    marginVertical: Spacing * 4,
    borderRadius: Spacing,
    shadowColor: Color.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: Fonts["Roboto-Bold"],
    color: Color.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
  text: {
    fontFamily: Fonts["Roboto-Bold"],
    color: Color.primary,
    textAlign: "center",
    fontSize: FontSize.xxLarge,
    marginBottom: Spacing * 2,
  }
});
