import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    ToastAndroid,
  } from "react-native";
  import React from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Color";
  import Fonts from "../constants/Fonts";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../../types";
  import AppTextInput from "../AppTextInput";
import Color from "../constants/Color";
import Toast from 'react-native-root-toast';

  type Props = NativeStackScreenProps<RootStackParamList, "Main">;

  const showToast1 = () => {
    try{
      Toast.show('El juego estará disponible proximamente', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Color.primary,
        textColor: Color.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch(error){
      console.log(error)
    }
  }

  const MainScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
      <ScrollView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >  
          <View
            style={{
              marginVertical: Spacing*0.1,
            }}
          >

        <TouchableOpacity
          onPress={() => navigate("InstruccionesJuego1")}
            style={{
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
            }}
          >
            <Text
              style={{
                fontFamily: Fonts["Roboto-Bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Memory Game 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => showToast1()}
            style={{
              padding: Spacing * 3,
              backgroundColor: Colors.second_gray,
              marginVertical: Spacing * 4,
              borderRadius: Spacing,
              shadowColor: Colors.gray,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
              display:"flex",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
            }}
          >
            <Ionicons
                  name="lock-closed"
                  color={Colors.onPrimary}
                  size={Spacing * 4}
                  style={{textAlign:"justify"}}
                />
            <Text
              style={{
                fontFamily: Fonts["Roboto-Bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
                paddingLeft: Spacing*6,
              }}
            >
                Juego 2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => showToast1()}
            style={{
              padding: Spacing * 3,
              backgroundColor: Colors.second_gray,
              marginVertical: Spacing * 4,
              borderRadius: Spacing,
              shadowColor: Colors.gray,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
              display:"flex",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
            }}
          >
            <Ionicons
                  name="lock-closed"
                  color={Colors.onPrimary}
                  size={Spacing * 4}
                  style={{textAlign:"justify"}}
                />
            <Text
              style={{
                fontFamily: Fonts["Roboto-Bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
                paddingLeft:Spacing*6,
              }}
            >
              Juego 3
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  
  export default MainScreen;
  
  const styles = StyleSheet.create({});

