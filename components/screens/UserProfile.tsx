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
  SectionList,
  FlatList
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
  const { score } = useContext(ScoreContext)
  const [modalVisible, setModalVisible] = useState(false);
  const total = score.correct + score.incorrect;
  const juegosPuntajes = [
    {
      title: 'Resultados Memory Game',
      data: ['Correctas: ' + score.correct , 'Incorrectas: ' + score.incorrect, 'Precisión: ' + (score.correct / total)*100 + '%']
    }
  ];
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );
  
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );
  return (
    <ScrollView>
      <ImageBackground
        style={{
          height: height / 5,
          marginVertical: Spacing * 2.3,
        }}
        resizeMode="contain"
        source={require("./../../assets/images/user.png")}
      />

      <View style={{ paddingHorizontal: Spacing * 4, justifyContent:'center'}}>

        <Text
          style={{
            fontFamily: Fonts["poppins-semiBold"],
            color: Colors.darkText,
            textAlign: "center",
            fontSize: FontSize.large,
          }}
        >
          {user.email}
        </Text>
        
        <View style={{marginTop: Spacing * 2}}>
          <FlatList
            data={juegosPuntajes}
            keyExtractor={(item, index) => item.title + index}
            renderItem={({ item }) => (
              <>
                <Text style={styles.header}>{item.title}</Text>
                  <View style={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                    <View style={styles.item}>
                      <text>Correctas</text>
                      <text>{score.correct}</text>
                    </View>
                    <View style={styles.item}>
                      <text>Incorrectas</text>
                      <text>{score.incorrect}</text>
                    </View>
                    <View style={styles.item}>
                      <text>Precisión</text>
                      <text>{(score.correct / total) * 100}%</text>
                    </View>
                  </View>
              </>
            )}
          />
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
            <Ionicons name="log-out" color={Colors.text} size={Spacing * 2}/>
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
    backgroundColor: "grey", 
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
  item: {
    justifyContent: 'center',
    backgroundColor: Color.gray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    fontFamily: Fonts["poppins-bold"],
    fontSize: 12,
    textAlign: 'center',
  },
  header: {
    fontSize: 18,
    backgroundColor: Color.primary,
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    borderRadius: Spacing,
    textAlign: "center",
    padding: Spacing * 2,   
  },
  title: {
    fontSize: FontSize.large,
    backgroundColor: Color.primary,
    fontFamily: Fonts["poppins-bold"],
  },
  list:{
    justifyContent: 'center',
  }
});
