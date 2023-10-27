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
                            fontFamily: Fonts["Roboto-Bold"],
                            textAlign: "center",
                        }}
                    >
                        ¿Qué es la memoria del trabajo?
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.medium,
                            color: Colors.primary,
                            fontFamily: Fonts["Roboto-Bold"],
                            textAlign: "center",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga id quae nostrum dicta, assumenda consectetur odit beatae ex modi neque esse, adipisci, quisquam laudantium cumque veritatis quas itaque laboriosam.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};


export default InformationScreen;
