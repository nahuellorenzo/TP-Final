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
import { useIsFocused } from "@react-navigation/native"
const { height } = Dimensions.get("window");

const { width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "MemoryGame">;

const MemoryGame: React.FC = ({ navigation: { navigate } }: Props) => {
    const [currentImage, setCurrentImage] = useState(null);
    const [previousImage, setPreviousImage] = useState(null);
    const isFocused = useIsFocused();

    useEffect(() => {
        // Simulación de carga de la imagen por 10 segundos
        setPreviousImage(null);
        const imagen = require(`./../../assets/imagesGame/image${Math.floor(Math.random() * 5) + 1}.png`);
        setCurrentImage(imagen);
        console.log(currentImage);
        console.log(require("./../../assets/imagesGame/image1.png"))
        const timer = setTimeout(() => {
            // Obtener una nueva imagen al azar de la carpeta de imágenes
            const newImage = require(`./../../assets/imagesGame/image${Math.floor(Math.random() * 5) + 1}.png`);
            setPreviousImage(imagen);
            setCurrentImage(newImage);
        
        }, 2000);

        return () => clearTimeout(timer);
    }, [isFocused]);

    const handleOptionSelected = (isSameImage: boolean) => {
        if (isSameImage) {
            console.log("Bien es lo correcto")
        } else {
            console.log("Te equivocaste, no es lo correta")
        }
        navigate("Again");
    };
    
    return (
        <SafeAreaView>
            <View>
                {
                    previousImage === null ? <View
                    style={{
                        paddingHorizontal: Spacing * 4,
                        paddingTop: Spacing * 4,
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xxLarge,
                            color: Colors.primary,
                            fontFamily: Fonts["poppins-bold"],
                            textAlign: "center",
                        }}
                    >
                        Recuerda esta imagen!
                    </Text>
                </View> : 
                <View
                style={{
                    paddingHorizontal: Spacing * 4,
                    paddingTop: Spacing * 4,
                }}
            >
                <Text
                    style={{
                        fontSize: FontSize.xxLarge,
                        color: Colors.primary,
                        fontFamily: Fonts["poppins-bold"],
                        textAlign: "center",
                    }}
                >
                    Es la misma Imagen?
                </Text>
            </View>
                }
                <ImageBackground
                    style={{
                        height: height / 2.5,
                        marginTop: Spacing * 4,
                    }}
                    resizeMode="contain"
                    source={currentImage}
                />
                {
                    previousImage && (
                        <View
                    style={{
                        paddingHorizontal: Spacing * 2,
                        paddingTop: Spacing * 6,
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => handleOptionSelected(currentImage === previousImage)}
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
                            Es la misma
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "48%",
                            borderRadius: Spacing,
                        }}
                    >
                        <Text
                            onPress={() => handleOptionSelected(currentImage !== previousImage)}
                            style={{
                                fontFamily: Fonts["poppins-bold"],
                                color: Colors.text,
                                fontSize: FontSize.large,
                                textAlign: "center",
                            }}
                        >
                            Es diferente
                        </Text>
                    </TouchableOpacity>
                </View>
                    )
                }
            </View>
        </SafeAreaView>
    );
};

export default MemoryGame;

