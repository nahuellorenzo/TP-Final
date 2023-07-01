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
  ScrollView
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

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "UserProfile">;

function UserProfileScreen({ navigation: { navigate } }: Props) {
  const { logout, user } = useContext(LoginContext);
  const { score } = useContext(ScoreContext)
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <ImageBackground
        style={{
          height: height / 5,
          marginVertical: Spacing * 1.2,
        }}
        resizeMode="contain"
        source={require("./../../assets/images/user.png")}
      />

      <View style={{ paddingHorizontal: Spacing * 4, paddingTop: Spacing * 4 }}>
        <Text
          style={{
            marginVertical: Spacing,
            fontFamily: Fonts["poppins-semiBold"],
            color: Colors.primary,
            textAlign: "left",
            fontSize: FontSize.large,
          }}
        >
          Email del Usuario
        </Text>

        <Text
          style={{
            marginVertical: Spacing,
            fontFamily: Fonts["poppins-semiBold"],
            color: Colors.darkText,
            textAlign: "left",
            fontSize: FontSize.large,
          }}
        >
          {user.email}
        </Text>

        <Text
          style={{
            marginVertical: Spacing,
            fontFamily: Fonts["poppins-semiBold"],
            color: Colors.primary,
            textAlign: "left",
            fontSize: FontSize.large,
          }}
        >
          Puntaje correctas del usuario
        </Text>

        <Text
          style={{
            marginVertical: Spacing,
            fontFamily: Fonts["poppins-semiBold"],
            color: Colors.darkText,
            textAlign: "left",
            fontSize: FontSize.large,
          }}
        >
          - {score.correct}
        </Text>

        <Text
          style={{
            marginVertical: Spacing,
            fontFamily: Fonts["poppins-semiBold"],
            color: Colors.primary,
            textAlign: "left",
            fontSize: FontSize.large,
          }}
        >
          Fecha de Creación Usuario
        </Text>

        <Text
          style={{
            marginVertical: Spacing,
            fontFamily: Fonts["poppins-semiBold"],
            color: Colors.darkText,
            textAlign: "left",
            fontSize: FontSize.large,
          }}
        >
          {`- ${user.creacion.substring(user.creacion.indexOf(",") + 2, user.creacion.lastIndexOf("GMT") - 1)}`}
        </Text>

        <View>
          <Text
            style={{
              fontFamily: Fonts["poppins-semiBold"],
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Olvidaste tu contraseña?
          </Text>
        </View>

        <View
          style={{
            marginTop: Spacing,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              marginVertical: Spacing * 2,
              padding: Spacing,
              backgroundColor: Colors.red,
              borderRadius: Spacing / 2,
              marginRight: 16,
              marginBottom: 16,
            }}
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
      </View>
    </ScrollView>
  );
}

export default UserProfileScreen;

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
