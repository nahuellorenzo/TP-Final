import React, { useEffect, useState } from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    ScrollView,
    Dimensions,
    ToastAndroid,
} from "react-native";
import DraggableFlatList, { ScaleDecorator } from "react-native-draggable-flatlist";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import Toast from 'react-native-root-toast';
import ModalOrderium from "./ModalOrderium";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "OrderiumGame">;

// Simulación de JSON que usarás para cargar los datos
const dataJSON = {
    "Ordenar las palabras alfabeticamente": [
        { "Pala": 2, "Auto": 1, "Trompeta": 3 },
        { "Boleto": 1, "Pedal": 3, "Faro": 2 }
    ],
    "Ordenar la fecha en orden cronologico": [
        { "12/12/2021": 1, "12/12/2024": 2, "12/12/2025": 3 },
        { "12/12/2019": 2, "12/12/2017": 1, "12/12/2020": 3 }
    ]
};

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const OrderiumGame: React.FC<Props> = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [correctOrder, setCorrectOrder] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    // Cargar una tarea aleatoria del JSON al iniciar
    useEffect(() => {
        loadRandomTask();
    }, []);

    const loadRandomTask = () => {
        const categories = Object.keys(dataJSON);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const task = dataJSON[randomCategory][Math.floor(Math.random() * dataJSON[randomCategory].length)];
        const taskArray = Object.entries(task); // Convertimos en array
        const correct = taskArray.slice().sort((a, b) => Number(a[1]) - Number(b[1])); // Ordenamos por valor
        setCorrectOrder(correct);

        const shuffled = shuffleArray(taskArray.slice()); // Desordenamos
        const formattedData = shuffled.map((item, index) => ({
            key: index.toString(),
            label: item[0],
        }));
        setData(formattedData);
    };

    const handleSubmit = () => {
        const isCorrect = data.every(
            (item, index) => item.label === correctOrder[index][0]
        );

        if (isCorrect) {
            showToastCorrect();
            handleModalVisible();
        } else {
            showToastInCorrect();
        }
    };

    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
      };

    const showToastCorrect = () => {
        Toast.show('Respuesta correcta!', {
          duration: Toast.durations.LONG,
          animation: true,
          backgroundColor: Colors.primary,
          textColor: Colors.onPrimary,
          hideOnPress: true,
          shadow: true,
        });
      };
    
      const showToastInCorrect = () => {
        Toast.show('Respuesta incorrecta, Vuelve a intentarlo!', {
          duration: Toast.durations.LONG,
          animation: true,
          backgroundColor: Colors.primary,
          textColor: Colors.onPrimary,
          hideOnPress: true,
          shadow: true,
        });
      };

    const renderItem = ({ item, drag, isActive }) => {
        return (
            <ScaleDecorator>
                <View style={[styles.item, { backgroundColor: isActive ? "#ccc" : "#D3D3D3" }]}>
                    <Text style={styles.itemText}>
                        {item.label}
                    </Text>
                    <TouchableOpacity onPressIn={drag} style={styles.dragHandle}>
                        <Text style={styles.dragHandleText}>≡</Text>
                    </TouchableOpacity>
                </View>
            </ScaleDecorator>
        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Ordena las palabras</Text>

                <DraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => setData(data)} // Se actualiza el estado al soltar
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />

                {/* Botón de validación */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Hecho</Text>
                </TouchableOpacity>

                <ModalOrderium
          isVisible={modalVisible}
          navigation={navigation}
        />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: FontSize.xLarge,
        color: Colors.primary,
        fontFamily: Fonts["poppins-bold"],
        textAlign: "left",
        marginBottom: Spacing * 2,
    },
    item: {
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemText: {
        fontSize: 18,
    },
    dragHandle: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // Fondo de la parte derecha para el ícono de drag
        borderRadius: 5,
    },
    dragHandleText: {
        color: "#fff",
        fontSize: 20, // Tamaño del ícono de drag (tres líneas)
    },
    submitButton: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: Spacing * 2,
    },
    submitButtonText: {
        fontSize: FontSize.large,
        color: "#fff",
        fontFamily: Fonts["poppins-bold"],
    },
});

export default OrderiumGame;
