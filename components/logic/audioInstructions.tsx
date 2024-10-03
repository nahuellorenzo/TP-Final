import { Audio } from "expo-av";
import { TouchableOpacity, View } from "react-native";
import Spacing from "../constants/Spacing";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export async function playSound(juego) {
  let sound;
  switch (juego) {
    case "memory_game":
      sound = require("../../assets/audio/instrucciones_memory_game.mp3");
      break;
    case "numerium":
      sound = require("../../assets/audio/instrucciones_numerium.mp3");
      break;
    case "go_no_go":
      sound = require("../../assets/audio/instrucciones_go_no_go.mp3");
      break;
    case "informacion_memory_game":
      sound = require("../../assets/audio/informacion_memory_game.mp3");
      break;
    case "informacion_numerium":
      sound = require("../../assets/audio/informacion_numerium.mp3");
      break;
    case "informacion_go_no_go":
      sound = require("../../assets/audio/informacion_go_no_go.mp3");
      break;
    default:
      throw new Error("Juego no soportado");
  }

  const { sound: loadedSound } = await Audio.Sound.createAsync(sound);
  await loadedSound.playAsync();
}

export const SoundComponent: React.FC<{ juego: string }> = ({ juego }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Spacing * 2.5,
      }}
    >
      <TouchableOpacity onPress={() => playSound(juego)}>
        <AntDesign name="sound" size={50} color="blue" />
      </TouchableOpacity>
    </View>
  );
};
