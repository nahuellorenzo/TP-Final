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
export var dropdownValue1: string;
export var dropdownTimeValue1: number;
type Props = NativeStackScreenProps<RootStackParamList, "Information">;
const InformationScreen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

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
                        ¿Qué es la memoria del trabajo?
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.large,
                            color: Colors.primary,
                            fontFamily: Fonts["Roboto-light"],
                            textAlign: "left",
                        }}
                    >
                        Es la capacidad del cerebro de almacenar y manipular temporalmente información para el desempeño de tareas complejas. Funciona como una almacén temporal que mantiene información para actividades como resolver problemas, tomar decisiones o comprender situaciones complejas.
                    </Text>
                    <br></br>
                    <Text
                        style={{
                            fontSize: FontSize.large,
                            color: Colors.primary,
                            fontFamily: Fonts["poppins-bold"],
                            textAlign: "center",
                        }}
                    >
                        ¿Por qué importa la memoria del trabajo?
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.large,
                            color: Colors.primary,
                            fontFamily: Fonts["Roboto-light"],
                            textAlign: "left",
                        }}
                    >
                        Porque gracias a ella, podemos desarrollar tareas como: <br></br>
                        - Seguir el hilo de una conversación <br></br>
                        - Nos permite aprender algo y asociarlo con lo que ya sabemos <br></br>
                        - Mantener en la mente cierta información necesaria para el desarrollo de una tarea <br></br>
                        La memoria del trabajo es esencial en tareas como seguir los pasos de una receta o recordar lo que tenemos que comprar en el supermercado
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};


export default InformationScreen;
