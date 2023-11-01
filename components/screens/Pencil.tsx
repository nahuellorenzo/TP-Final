import React from 'react';
import { StyleSheet, View, Image, Animated } from 'react-native';

const DogLoader = () => {
    const animatedValue = new Animated.Value(0);

    const startAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            animatedValue.setValue(0);
            startAnimation();
        });
    };

    React.useEffect(() => {
        startAnimation();
    }, []);

    const rotate = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../assets/images/dog.png')}
                style={[styles.image, { transform: [{ rotate }] }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default DogLoader;
