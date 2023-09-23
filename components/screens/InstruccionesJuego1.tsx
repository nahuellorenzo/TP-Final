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
import DropdownComponent from "./Dropdown";
export var dropdownValue1: string;
type Props = NativeStackScreenProps<RootStackParamList, "InstruccionesJuego1">;
const InstruccionesJuego1Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

    const [dropdownValue, setDropdownValue] = useState<string | null>(null);

  const handleDropdownChange = (value: string | null) => {
    setDropdownValue(value);
    dropdownValue1 = value;
  };

    return (
        <ScrollView>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        marginVertical: Spacing * 2,
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
                        El siguiente juego es para trabajar tu memoria a corto plazo, se te mostrarán imágenes cada 2 segundos y debés recordar cuál era, para marcar si la segunda imagen es igual a la primera
                    </Text>

                    <Text
                        style={{
                            fontSize: FontSize.large,
                            color: Colors.primary,
                            fontFamily: Fonts["poppins-bold"],
                            textAlign: "center",
                            paddingTop: Spacing * 2.5
                        }}
                    >
                        Selecciona la dificultad del juego
                    </Text>

                    <DropdownComponent onValueChange={handleDropdownChange} />

                    <TouchableOpacity
                        onPress={() => navigate("Categories")}
                        disabled={!dropdownValue}
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
            </View>
        </ScrollView>
    );
};


export default InstruccionesJuego1Screen;
