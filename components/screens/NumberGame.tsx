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
type Props = NativeStackScreenProps<RootStackParamList, "NumberGame">;
const NumberGame: React.FC<Props> = ({ navigation: { navigate } }: Props) => {
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

                   
                </View>
            </View>
        </ScrollView>
    );
};


export default NumberGame;