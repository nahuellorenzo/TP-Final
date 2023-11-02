import React from "react";
import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions } from "react-native";
import Spacing from "../components/constants/FontSize.ts";
import FontSize from "../components/constants/FontSize";
import Colors from "../components/constants/Color";
import Fonts from "../components/constants/Fonts";
let OnboardingItem;
export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 500, 
        height: 500, 
        resizeMode: 'contain',
    },
    title: {
        fontSize: FontSize.large,
        color: Colors.primary,
        fontFamily: Fonts["Roboto-Bold"],
        textAlign: "center",
    },
    description: {
        fontSize: FontSize.large,
        color: Colors.primary,
        fontFamily: Fonts["Roboto-Bold"],
        textAlign: "center",
    }
})