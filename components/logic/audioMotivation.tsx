import { Audio } from "expo-av";
import { TouchableOpacity, View } from "react-native";
import Spacing from "../constants/Spacing";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export async function playSound(number) {
  let sound;
  switch (number) {
    case "motivation_1":
      sound = require("../../assets/audio/audio_motivation_1.mp3");
      break;
    case "motivation_2":
      sound = require("../../assets/audio/audio_motivation_2.mp3");
      break;
    case "motivation_3":
      sound = require("../../assets/audio/audio_motivation_3.mp3");
      break;
    case "motivation_4":
      sound = require("../../assets/audio/audio_motivation_4.mp3");
      break;
    default:
      throw new Error("number no soportado");
  }

  const { sound: loadedSound } = await Audio.Sound.createAsync(sound);
  await loadedSound.playAsync();
}

export const SoundComponentMotivation: React.FC<{ number: string }> = ({
  number,
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Spacing * 2.5,
      }}
    >
      <TouchableOpacity onPress={() => playSound(number)}>
        <AntDesign name="sound" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
};
