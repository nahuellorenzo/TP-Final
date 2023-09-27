import React, { useEffect, useState, useContext } from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ToastAndroid,
    ImageBackground,
    ScrollView
} from "react-native";
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

type Props = NativeStackScreenProps<RootStackParamList, "Categories">;
const CategoriesScreen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

    if (dropdownValue1 == "Facil") {
        var nombresCatTotales: string[] = Object.keys(nivelesCat.Facil)
    }
    else if ( dropdownValue1 == "Intermedio") {
        var nombresCatTotales: string [] = Object.keys(nivelesCat.Intermedio)
    }
    else if (dropdownValue1 == "Dificil") { 
        var nombresCatTotales: string [] = Object.keys(nivelesCat.Dificil)
    }

    const nombresCategorias: string[] = ["Entrenamiento", "Banderas", "Paisajes", "Peliculas", "Personas", "Camisetas de Futbol"];
    
    return (
        <ScrollView>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        marginVertical: Spacing * 3,
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
                        Seleccione una categoría
                    </Text>


                    <TouchableOpacity
                        onPress={() =>
                            {navigate("MemoryGame")
                            bandera=1}}
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
                                fontFamily: Fonts["Roboto-Bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Entrenamiento
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            {navigate("MemoryGame")
                            bandera=2}}
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
                                fontFamily: Fonts["Roboto-Bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Banderas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            {navigate("MemoryGame")
                            bandera=3}}
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
                                fontFamily: Fonts["Roboto-Bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Paisajes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            {navigate("MemoryGame")
                            bandera=4}}
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
                                fontFamily: Fonts["Roboto-Bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Peliculas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            {navigate("MemoryGame")
                            bandera=5}}
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
                                fontFamily: Fonts["Roboto-Bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Personas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            {navigate("MemoryGame")
                            bandera=6}}
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
                                fontFamily: Fonts["Roboto-Bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Camisetas de Futbol
                        </Text>
                    </TouchableOpacity>

                    {
                        nombresCatTotales.length > 0 ? (nombresCatTotales.map((nombreCategoria, index) => (
                            <TouchableOpacity key={index}
                                onPress={() => {
                                    navigate("MemoryGame")
                                    bandera = nombreCategoria
                                }}
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
                                        fontFamily: Fonts["Roboto-Bold"],
                                        color: Colors.onPrimary,
                                        textAlign: "center",
                                        fontSize: FontSize.large,
                                    }}
                                >
                                    {nombreCategoria}
                                </Text>
                            </TouchableOpacity>
                        )))
                            : (
                                <Text>No hay nombres para mostrar.</Text>
                            )
                    }

                </View>
            </View>
        </ScrollView>
    );
};


export default CategoriesScreen;


