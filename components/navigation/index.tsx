import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Color";
import LoginScreen from "../screens/signIn";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import MainScreen from "../screens/Main";
import UserProfileScreen from "../screens/UserProfile";
import { RootStackParamList } from "../../types";
import CategoriesScreen from "../screens/Categories";
import InstruccionesJuego2Screen from "../screens/InstructionsGame2";
import InstruccionesJuego1Screen from "../screens/InstruccionesJuego1";
import EstadisticasJuego1Screen from "../screens/StatisticsGame1";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import InformationScreen from "../screens/Information";
import Tutorial1Screen from "../screens/Tutorial1";
import InformationJuego1 from "../screens/InformationJuego1";
import InformationJuego2 from "../screens/InformationJuego2";
import InformationJuego3 from "../screens/InformationJuego3";
import MotivationMessageScreen from "../screens/MotivationMessage";
import VideoTutorialsScreen from "../screens/tutorials";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="InstruccionesJuego2" component={InstruccionesJuego2Screen} />
      <Stack.Screen name="InstruccionesJuego1" component={InstruccionesJuego1Screen} />
      <Stack.Screen name="EstadisticasJuego1" component={EstadisticasJuego1Screen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Tutorial1" component={Tutorial1Screen} />
      <Stack.Screen name="InformationJuego1" component={InformationJuego1} />
      <Stack.Screen name="InformationJuego2" component={InformationJuego2} />
      <Stack.Screen name="InformationJuego3" component={InformationJuego3} />
      <Stack.Screen name="MotivationMessage" component={MotivationMessageScreen} />
      <Stack.Screen name="VideoTutorials" component={VideoTutorialsScreen} />
    </Stack.Navigator>
  );
}