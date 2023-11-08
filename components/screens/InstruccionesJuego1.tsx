import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import DropdownComponent from "./Dropdown";
export var dropdownValue1: string;
export var dropdownTimeValue1: number;
export var dropdownTimeInicialValue1: number;
import ModalOpcionesMemorium from "./ModalOpcionesMemorium";

type Props = NativeStackScreenProps<RootStackParamList, "InstruccionesJuego1">;
const InstruccionesJuego1Screen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

    //Dropdown Categories
    const [dropdownValue, setDropdownValue] = useState<string | null>(null);
    const handleDropdownChange = (value: string | null) => {
        setDropdownValue(value);
        dropdownValue1 = value;
    };

    //Dropdown Time Inicial
    const [dropdownTimeInicialValue, setDropdownTimeInicialValue] = useState(4000);
    dropdownTimeInicialValue1 = dropdownTimeInicialValue; //para poder almacenar el valor por defecto
    const handleDropdownTimeInicialChange = (value: number) => {
        setDropdownTimeInicialValue(value);
        dropdownTimeInicialValue1 = value;
    };

    //Dropdown Time entre imagenes
    const [dropdownTimeValue, setDropdownTimeValue] = useState(2000);
    dropdownTimeValue1 = dropdownTimeValue; //para poder almacenar el valor por defecto
    const handleDropdownTimeChange = (value: number) => {
        setDropdownTimeValue(value);
        dropdownTimeValue1 = value;
    };

    //Modal opciones avanzadas
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
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
                            fontFamily: Fonts["Roboto-Bold"],
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

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={handleModalVisible}
                            style={{
                                paddingTop: Spacing * 2.5
                              }}
                            >
                            <Text
                            style={{
                                fontSize: FontSize.medium,
                                color: Colors.primary,
                                fontFamily: Fonts["poppins-bold"],
                                textAlign: "center",
                            }}
                            >
                                Opciones avanzadas
                            </Text>
                        </TouchableOpacity>
                        
                            <ModalOpcionesMemorium
                                isVisible={modalVisible}
                                closeModal={handleModalVisible}
                                dropdownTimeValue={dropdownTimeValue}
                                dropdownTimeInicialValue={dropdownTimeInicialValue}
                                onDropdownTimeChange={handleDropdownTimeChange}
                                onDropdownTimeInicialChange={handleDropdownTimeInicialChange}
                            />
                        
                    </View>

                    <TouchableOpacity
                        onPress={() => navigate("Categories")}
                        disabled={!dropdownValue}
                        style={{
                            padding: Spacing * 2,
                            backgroundColor: !dropdownValue ? Colors.second_gray : Colors.primary,
                            marginVertical: Spacing * 2, 
                            borderRadius: Spacing,
                            shadowColor: !dropdownValue ? Colors.gray : Colors.primary,
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
