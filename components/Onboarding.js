import React, {useState, useRef} from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import slides from "../slides";
import OnboardingItem from "./OnboardingItem";

let Onboarding;
export default Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreCoveragePercentThreshould: 50}).current;

    return (
        <View style={styles.container}>
            <View style={{flex: 3}}>
            <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})