import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground,
    Dimensions,
  } from "react-native";
  import React from "react";
  import {Alert, Modal, Pressable} from 'react-native';
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Color";
  import Fonts from "../constants/Fonts";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
  import AppTextInput from "../AppTextInput";
  import { useContext } from "react";
  import { LoginContext } from "../context/LoginContext";
  import {useState} from 'react';
  const { height } = Dimensions.get("window");
  
  type Props = NativeStackScreenProps<RootStackParamList, "UserProfile">;
  
  function UserProfileScreen({ navigation: { navigate } }) {
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
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: Spacing * 2,
          marginLeft: Spacing * 2,
        }}
      >
        <Ionicons
          name="arrow-back"
          color={Colors.onPrimary}
          size={Spacing * 2} />
      </TouchableOpacity>

      <ImageBackground
        style={{
          height: height / 5,
          marginVertical: Spacing * 1.2,
        }}
        resizeMode="contain"
        source={require("./../../assets/images/user.png")} />
      <View
        style={{
          paddingHorizontal: Spacing * 4,
          paddingTop: Spacing * 4,
        }}
      >

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
            alignItems: "flex-end", // Cambiamos a "flex-end"
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
            <Ionicons
              name="log-out"
              color={Colors.text}
              size={Spacing * 2} />
          </TouchableOpacity>
        </View>
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        } }>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  

