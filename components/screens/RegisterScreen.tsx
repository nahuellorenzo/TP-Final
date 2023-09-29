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
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingresar correo valido")
    .required('Se requiere correo electronico'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "La clave necesita al menos una minuscula")
    .matches(/\w*[A-Z]\w*/, "La clave necesita al menos una mayuscula")
    .matches(/\d/, "La clave necesita al menos un numero")
    .min(8, ({ min }) => `La clave necesita al menos ${min} caracteres`)
    .required('Clave es requerida'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las claves no coinciden')
    .required('Confirmar clave'),
});

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {

  const { register, googleLogin, facebookLogin } = useContext(LoginContext)

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const clearError = (name) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
    clearError(name);
  };

  const handleSubmit = async (Formvalues) => {
    try {
      await validationSchema.validate(Formvalues, { abortEarly: false });
      setErrors({
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("Form data:", Formvalues);
      register(Formvalues);
    } catch (error) {
      if (error.inner) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...newErrors,
        }));
      }
      console.error("Validation error:", error.message);
    }
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
            placeholder="Correo electronico"
          />

          {errors.email.length > 0 && <Text style={{ color: "red", fontFamily: Fonts["poppins-semiBold"], fontSize: FontSize.small, marginTop: 5 }}>{errors.email}</Text>}


          <AppTextInput
            placeholder="Clave"
            secureTextEntry
            value={values.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
          {errors.password.length > 0 && <Text style={{ color: "red", fontFamily: Fonts["poppins-semiBold"], fontSize: FontSize.small, marginTop: 5 }}>{errors.password}</Text>}

          <AppTextInput
            placeholder="Confirmar clave"
            secureTextEntry
            value={values.confirmPassword}
            onChangeText={(text) => handleInputChange("confirmPassword", text)}
          />

          {errors.confirmPassword.length > 0 && <Text style={{ color: "red", fontFamily: Fonts["poppins-semiBold"], fontSize: FontSize.small, marginTop: 5 }}>{errors.confirmPassword}</Text>}

        </View>

        <TouchableOpacity
          onPress={() => handleSubmit(values)}
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
            Registrarse
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
              fontFamily: Fonts["Roboto-Light"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Continuar
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