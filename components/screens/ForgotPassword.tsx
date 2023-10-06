import {Dimensions} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { useIsFocused } from "@react-navigation/native";
import { ScoreContext } from "../context/ScoreContext";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
export var bandera: string;
import { dropdownValue1 } from "./InstruccionesJuego1";
import nivelesCat from "./../Similar/similar.json";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const changePassword = () => {
    if (email.trim() === "") {
      alert();
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert();
      })
      .catch((error) => {
        alert();
        console.error(error);
      });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            placeholder="Email de su cuenta"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <TouchableOpacity
          onPress={changePassword}
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
          <Text style={{ color: "white", textAlign: "center" }}>
            Recuperar Contraseña
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({});