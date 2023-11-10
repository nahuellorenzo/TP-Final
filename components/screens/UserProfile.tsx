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

const { height, width } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "UserProfile">;

function UserProfileScreen({ navigation: { navigate } }: Props) {
  const { logout, user } = useContext(LoginContext);
  const { score } = useContext(ScoreContext);
  const [modalVisible, setModalVisible] = useState(false);
  const total = score.correct + score.incorrect;
  console.log(score)
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
              <Text>Racha de dias Jugados:</Text>
              <Text>{score.racha}</Text>
            </View>
            <View style={styles.item}>
              <Text>Juega desde:</Text>
              <Text>{`${user.creacion.substring(user.creacion.indexOf(",") + 2, user.creacion.lastIndexOf("GMT") - 9)}`}</Text>
            </View>
          </View>
        </View> 

        <View style={styles.buttonContainer_Boton}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.logoutButton}
          >
            <Ionicons name="log-out" color={Colors.text} size={Spacing * 2} />
          </TouchableOpacity>
        </View>
        <View style={styles.centeredView}>
        <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
              }}
            >
               <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>¿Desea cerrar la sesión actual?</Text>
                    <View style={styles.buttonContainer_Modal}>
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
                          <Text style={styles.textStyle_2}>Cancelar</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                  </View>
        </Modal>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    backgroundColor: Color.onPrimary, 
    borderRadius: 5,
    width: width - Spacing*10,
  },
  modalView: {
    backgroundColor: Color.onPrimary,
    borderRadius: 7,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonContainer_Modal: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonContainer_Boton: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },  
  buttonWrapper: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    marginHorizontal: Spacing * 2
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 90,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: Color.second_gray,
  },
  buttonClose: {
    backgroundColor: "#FF0000",
  },
  textStyle: {
    color: "white",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  textStyle_2: {
    color: Color.text,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: Color.primary,
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
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
  },
});

export default UserProfileScreen;
