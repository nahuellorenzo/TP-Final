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
  
  type Props = NativeStackScreenProps<RootStackParamList, "Main">;
  const showToast = () => {
    ToastAndroid.show('El juego estará disponible proximamente', ToastAndroid.SHORT);
  };
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
          onPress={() => navigate("Categories")}
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
                fontFamily: Fonts["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Memory Game 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => showToast()}
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
                fontFamily: Fonts["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
                paddingLeft:"4rem",
              }}
            >
                Juego 2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => showToast()}
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
                fontFamily: Fonts["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
                paddingLeft:"4rem",
              }}
            >
              Juego 3
            </Text>
          </TouchableOpacity>
            
            <View
              style={{
                marginTop: Spacing,
                flexDirection: "row",
                justifyContent: "space-between", // Cambiamos a "space-between"
                alignItems: "flex-end", // Cambiamos a "flex-end"
              }}
            >
              <TouchableOpacity
              onPress={() => navigate("UserProfile")}
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginLeft: 16, // Cambiamos a "marginLeft"
                  marginBottom: 16,
                }}
              >
                <Ionicons
                  name="person"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginRight: 16, // Cambiamos a "marginRight"
                  marginBottom: 16,
                }}
              >
                <Ionicons
                  name="settings"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  
  export default MainScreen;
  
  const styles = StyleSheet.create({});

