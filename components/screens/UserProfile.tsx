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

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "UserProfile">;

function UserProfileScreen({ navigation: { navigate } }: Props) {
  const { logout, user } = useContext(LoginContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigate("Main")}
        style={{
          width: 40,
          height: 40,
          padding: Spacing / 4,
          backgroundColor: Colors.darkText,
          marginVertical: "center",
          borderRadius: Spacing,
          shadowColor: Colors.darkText,
          shadowOpacity: 0.3,
          shadowRadius: Spacing,
          alignItems: "center",
          justifyContent: "center",
          marginTop: Spacing * 2,
          marginLeft: Spacing * 2,
        }}
      >
        <Ionicons name="arrow-back" color={Colors.onPrimary} size={Spacing * 2} />
      </TouchableOpacity>

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
          Nivel del Usuario
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
          - 100
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
          - 5/5/2023
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
    </SafeAreaView>
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
