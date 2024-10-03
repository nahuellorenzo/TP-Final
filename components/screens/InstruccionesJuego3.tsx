import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { SoundComponent } from "../logic/audioInstructions";

type Props = NativeStackScreenProps<RootStackParamList, "InstruccionesJuego3">;
const InstruccionesJuego3Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {
    return (
        <ScrollView>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        marginVertical: Spacing * 1,
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
                       El siguiente juego es para trabajar tu memoria a corto plazo
                    </Text>

                    <Text
                        style={{
                            fontSize: FontSize.large,
                            color: Colors.primary,
                            fontFamily: Fonts["poppins-bold"],
                            textAlign: "center",
                            paddingTop: Spacing * 2,
                        }}
                    >
                       Se te mostrara una palabra junto a 4 opciones de respuesta posibles y deberas seleccionar la respuesta cuyo significado es lo contrario a la palabra inicial
                    </Text>

                    <Text
                        style={{
                            fontSize: FontSize.large,
                            color: Colors.primary,
                            fontFamily: Fonts["poppins-bold"],
                            textAlign: "center",
                            paddingTop: Spacing * 2,
                        }}
                    >
                       Ademas cuentas con una bomba que te permitira eliminar una de las opciones incorrectas en caso de que tengas dudas. Usala sola cuando creas necesaria
                    </Text>

                    <SoundComponent juego={"go_no_go"}/>
                    

                    <TouchableOpacity
                        onPress={() => navigate("GonoGoGame")}
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
                </View>
                <View style={styles.buttonContainer_Boton}>
            <TouchableOpacity onPress={() => navigate("InformationJuego3")}>
              <Entypo name="info-with-circle" size={24} color="grey" />
            </TouchableOpacity>
          </View>
            </View>
        </ScrollView>
    );
};


export default InstruccionesJuego3Screen;

const styles = StyleSheet.create({
    buttonContainer_Boton: {
      flexDirection: "column",
      alignItems: "flex-end",
      marginTop: 20,
    },
  });
  