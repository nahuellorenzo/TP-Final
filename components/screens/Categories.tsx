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
export var bandera=0;
type Props = NativeStackScreenProps<RootStackParamList, "Categories">;
const CategoriesScreen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {
    return (
        <SafeAreaView>
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
                            fontFamily: Fonts["poppins-bold"],
                            textAlign: "center",
                        }}
                    >
                        El siguiente juego es para trabajar tu memoria a corto plazo, se te mostrarán imágenes cada 2 segundos y debés recordar cuál era, para marcar si la segunda imagen es igual a la primera
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
                                fontFamily: Fonts["poppins-bold"],
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
                                fontFamily: Fonts["poppins-bold"],
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
                                fontFamily: Fonts["poppins-bold"],
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
                                fontFamily: Fonts["poppins-bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Peliculas
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default CategoriesScreen;


