import React, { useEffect, useState } from "react";
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
const { height } = Dimensions.get("window");

const { width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Again">;

const Again: React.FC = ({ navigation: { navigate } }: Props) => {
    
    return (
        <SafeAreaView>
            <View>
                <View
                    style={{
                        paddingHorizontal: Spacing * 4,
                        paddingTop: Spacing * 4,
                    }}
                >
                    <Text
                        style={{
                            marginTop: Spacing * 10,
                            fontSize: FontSize.xxLarge,
                            color: Colors.primary,
                            fontFamily: Fonts["poppins-bold"],
                            textAlign: "center",
                        }}
                    >
                        Deseas probar de nuevo?
                    </Text>
                </View> 
                <View
                    style={{
                        paddingHorizontal: Spacing * 2,
                        paddingTop: Spacing * 6,
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigate("MemoryGame")}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "48%",
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
                                fontSize: FontSize.large,
                                textAlign: "center",
                            }}
                        >
                            Si
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate("Main")}
                        style={{
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "48%",
                            borderRadius: Spacing,
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
                                color: Colors.text,
                                fontSize: FontSize.large,
                                textAlign: "center",
                            }}
                        >
                            No
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Again;

