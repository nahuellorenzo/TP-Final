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
    Modal,
    Pressable,
    ScrollView
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
const [modalVisible, setModalVisible] = useState(false);
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
                        onPress={() => setModalVisible(true)}
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
                <View style={styles.centeredView}>
  <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.modalBackdrop}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Desea cerrar sesión?</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={navigate("Main")}
              >
                <Text style={styles.textStyle}>Salir</Text>
              </Pressable>
            </View>
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  </Modal>
</View>
            </View>
        </SafeAreaView>
    );
};

export default Again;

const styles = StyleSheet.create({
    modalContent: {
      backgroundColor: "grey", // Cambia el color de fondo aquí
      borderRadius: 5,
      padding: 30,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  
    modalBackdrop: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      height: "50%"
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
    },
    modalView: {
      margin: 20,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: 5,
      padding: 50,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: 20,
    },
    buttonWrapper: {
      flex: 1,
      marginHorizontal: 10,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: 90,
      alignSelf: "stretch",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonOpen: {
      backgroundColor: "#1F41BB",
    },
    buttonClose: {
      backgroundColor: "#FF0000",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "white",
      fontWeight: "bold"
    },
  });
  
