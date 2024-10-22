import { TouchableOpacity, View, Linking } from "react-native";
import Spacing from "../constants/Spacing";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export async function playTutorial(juego: any) {
  let youtubeVideoURL = "";
  switch (juego) {
    case "memory_game":
      youtubeVideoURL = "https://youtu.be/a7O-G3lhkdM";
      break;
    default:
      throw new Error("Juego no soportado");
  }

  Linking.openURL(youtubeVideoURL).catch((err) =>
    console.error("Error al abrir el enlace: ", err)
  );
}

export const VideoTutorialComponent: React.FC<{ juego: string }> = ({
  juego,
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Spacing * 2.5,
      }}
    >
      <TouchableOpacity onPress={() => playTutorial(juego)}>
        <MaterialIcons name="video-library" size={38} color="blue" />
      </TouchableOpacity>
    </View>
  );
};
