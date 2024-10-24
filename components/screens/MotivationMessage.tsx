import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SoundComponentMotivation } from "../logic/audioMotivation";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = NativeStackScreenProps<RootStackParamList, "MotivationMessage">;

const MotivationMessageScreen: React.FC<Props> = ({
  navigation: { navigate },
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo_memorium_white.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Bienvenido a Memorium</Text>
        <Text style={styles.subtitle}>Tu viaje de entrenamiento mental</Text>
        <View id="motivation_1">
          <View style={styles.messageContainer}>
            <FontAwesome5 name="brain" size={30} color="white" />
            <Text style={styles.message}>
              Has dado el primer paso hacia el fortalecimiento de tu memoria.
              Así como ejercitamos nuestro cuerpo, nuestra mente también
              necesita mantenerse activa y en forma.
            </Text>
          </View>
          <SoundComponentMotivation number={"motivation_1"} />
        </View>
        <View id="motivation_2">
          <View style={styles.messageContainer}>
            <FontAwesome6 name="trophy" size={30} color="white" />
            <Text style={styles.message}>
              Con solo unos minutos al día, podrás notar mejoras en tu capacidad
              para recordar información, mantener la concentración y realizar
              tus actividades diarias con mayor confianza.
            </Text>
          </View>
          <SoundComponentMotivation number={"motivation_2"} />
        </View>
        <View id="motivation_3">
          <View style={styles.messageContainer}>
            <AntDesign name="heart" size={30} color="white" />
            <Text style={styles.message}>
              Recuerda: cada ejercicio que completes es un paso hacia adelante.
              No te preocupes por los errores; son parte natural del aprendizaje
              y te ayudan a crecer. Lo importante es la constancia y el
              compromiso con tu bienestar.
            </Text>
          </View>
          <SoundComponentMotivation number={"motivation_3"} />
        </View>
        <Text style={styles.subtitle}>
          El mejor momento para comenzar a cuidar tu memoria es ahora. ¡Estamos
          aquí para acompañarte en cada paso del camino!
        </Text>
        <SoundComponentMotivation number={"motivation_4"} />
        <TouchableOpacity
            onPress={() => navigate("Main")}
            style={{
              padding: Spacing * 3,
              backgroundColor: Colors.background,
              marginVertical: Spacing * 4,
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
                color: Colors.primary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Comenzar
            </Text>
          </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/image_brain.png")}
            style={styles.logo}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.active,
    padding: Spacing,
    flex: 1,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Spacing,
  },
  logo: {
    width: 65,
    height: 60,
  },
  title: {
    fontSize: FontSize.xLarge,
    color: Colors.background,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
    paddingTop: Spacing * 2,
  },
  subtitle: {
    fontSize: FontSize.large,
    color: Colors.background,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
    paddingBottom: Spacing,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: Spacing / 2,
    flex: 1,
    marginTop: Spacing,
    marginBottom: Spacing,
  },
  message: {
    fontSize: FontSize.medium,
    color: Colors.background,
    fontFamily: Fonts["poppins-regular"],
    textAlign: "left",
    paddingLeft: Spacing * 2,
    flex: 1,
    // paddingBottom: Spacing,
  },
});

export default MotivationMessageScreen;
