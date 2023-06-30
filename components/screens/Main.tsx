import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
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
  
  type Props = NativeStackScreenProps<RootStackParamList, "Main">;
  
  const MainScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
      <SafeAreaView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >  
          <View
            style={{
              marginVertical: Spacing * 3,
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
              Juego 1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigate("Main")}
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
              Juego 2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigate("Main")}
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
      </SafeAreaView>
    );
  };
  
  
  export default MainScreen;
  
  const styles = StyleSheet.create({});

