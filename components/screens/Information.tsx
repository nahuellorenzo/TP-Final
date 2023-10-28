import * as React from 'react';
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
import { StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

type Props = NativeStackScreenProps<RootStackParamList, "Information">;
const InformationScreen: React.FC<Props> = ({ navigation: { navigate } }: Props) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({ isPlaying: false });
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
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                        }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        onPlaybackStatusUpdate={status => {
                            if ('isLoaded' in status && status.isLoaded) {
                                setStatus({ isPlaying: status.isPlaying });
                            } else if ('error' in status) {
                                console.error(`Error: ${status.error}`);
                            }
                        }}

                    />
                    <View style={styles.buttons}>
                        <Button
                            title={status.isPlaying ? 'Pausar' : 'Reproducir'}
                            color={Colors.primary}
                            onPress={() =>
                                status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
                            }
                        />
                    </View>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
        marginBottom: Spacing,
        marginTop: Spacing
    },
    buttons: {
        padding: Spacing * 3,
        backgroundColor: Colors.primary,
        marginVertical: Spacing * 4,
        borderRadius: Spacing,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: Spacing,
        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});