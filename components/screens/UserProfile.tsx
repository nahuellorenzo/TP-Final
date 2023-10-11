import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import AppTextInput from "../AppTextInput";
import { LoginContext } from "../context/LoginContext";
import { ScoreContext } from "../context/ScoreContext";
import Color from "../constants/Color";

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "UserProfile">;

function UserProfileScreen({ navigation: { navigate } }: Props) {
  const { logout, user } = useContext(LoginContext);
  const { score } = useContext(ScoreContext);
  const [modalVisible, setModalVisible] = useState(false);
  const total = score.correct + score.incorrect;
  const juegosPuntajes = [
    {
      title: 'Resultados Memory Game',
      data: ['Correctas: ' + score.correct, 'Incorrectas: ' + score.incorrect, 'Precisión: ' + Math.trunc((score.correct / total) * 100) + '%']
    }
  ];
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          height: height / 5,
          marginVertical: Spacing * 2.3,
          marginBottom: Spacing
        }}
        resizeMode="contain"
        source={require("./../../assets/images/user.png")}
      />

      <View style={styles.content}>
        <Text
          style={{
            fontFamily: Fonts["Roboto-Light"],
            color: Colors.darkText,
            textAlign: "center",
            fontSize: FontSize.large,
            marginTop: Spacing,
          }}
        >
          {user.email}
        </Text>

        <View style={{ marginTop: Spacing * 2 }}>
          <Text style={styles.header}>Resultados Memory Game</Text>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Text>Acertadas</Text>
              <Text>{score.correct}</Text>
            </View>
            <View style={styles.item}>
              <Text>Erradas</Text>
              <Text>{score.incorrect}</Text>
            </View>
            <View style={styles.item}>
              <Text>Precisión</Text>
              <Text>{Math.trunc((score.correct / total) * 100)}%</Text>
            </View>
          </View>
        </View>

          <View  
            style={{
            marginTop: Spacing,
          }}>
            <Text>
              Juega desde {`- ${user.creacion.substring(user.creacion.indexOf(",") + 2, user.creacion.lastIndexOf("GMT") - 9)}`}
            </Text>
          </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.logoutButton}
          >
            <Ionicons name="log-out" color={Colors.text} size={Spacing * 2} />
          </TouchableOpacity>
        </View>

        <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
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
                          onPress={logout}
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
    </SafeAreaView>
  );
}

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
    fontFamily: "Roboto-Bold"
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing * 4,
    justifyContent: 'center',
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'center',
    backgroundColor: Color.gray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    fontFamily: Fonts["Roboto-Bold"],
    fontSize: 12,
    textAlign: 'center',
    flex: 1,
  },
  header: {
    fontSize: 18,
    backgroundColor: Color.primary,
    fontFamily: Fonts["Roboto-Bold"],
    color: Colors.onPrimary,
    borderRadius: Spacing,
    textAlign: "center",
    padding: Spacing * 2,
  },
  logoutButton: {
    marginVertical: Spacing * 2,
    padding: Spacing,
    backgroundColor: Colors.red,
    borderRadius: Spacing / 2,
    marginRight: 16,
    marginBottom: 16,
  },
});

export default UserProfileScreen;
