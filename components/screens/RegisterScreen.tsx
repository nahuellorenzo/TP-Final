import {
    SafeAreaView,
    StyleSheet,
    Text,
    ScrollView,
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
  import { LoginContext } from './../context/LoginContext'
  import { useContext, useState } from 'react'
  
  type Props = NativeStackScreenProps<RootStackParamList, "Register">;
  
  const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {

    const { register, googleLogin, facebookLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (name, value) => {
      setValues({
        ...values,
        [name]: value,
      });
    };
    const handleSubmit = () => {
      // Realizar validaciones si es necesario
      console.log(values)
      register(values);
    };
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: Fonts["poppins-bold"],
                marginVertical: Spacing * 3,
              }}
            >
              Crea tu cuenta
            </Text>
            <Text
              style={{
                fontFamily: Fonts["poppins-regular"],
                fontSize: FontSize.small,
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              Crea una cuenta asi podes disfrutar de los mejores juegos
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <AppTextInput
              value={values.email}
              onChangeText={(text) => handleInputChange("email", text)} 
              placeholder="Email" />
            <AppTextInput 
              placeholder="Password"
              secureTextEntry
              value={values.password}
              onChangeText={(text) => handleInputChange("password", text)} />
            <AppTextInput 
              placeholder="Password"
              secureTextEntry
              value={values.password}
              onChangeText={(text) => handleInputChange("password", text)} />
          </View>
  
          <TouchableOpacity
          onPress={handleSubmit}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
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
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={{
              padding: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Fonts["poppins-semiBold"],
                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Ya tengo una cuenta
            </Text>
          </TouchableOpacity>
  
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <Text
              style={{
                fontFamily: Fonts["poppins-semiBold"],
                color: Colors.primary,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Or continue with
            </Text>
  
            <View
              style={{
                marginTop: Spacing,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
                onPress={googleLogin}
              >
                <Ionicons
                  name="logo-google"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-apple"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={facebookLogin}
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-facebook"
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
  
  export default RegisterScreen;