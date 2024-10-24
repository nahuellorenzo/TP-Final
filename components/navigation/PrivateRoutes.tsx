/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

/* import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react"; */
import Colors from "../constants/Color";
import MainScreen from "../screens/Main";
import UserProfileScreen from "../screens/UserProfile";

import { RootStackParamList } from "../../types";
import MemoryGame from "../screens/MemoryGame";
import Again from "../screens/Again";
import CategoriesScreen from "../screens/Categories";
import IntruccionesJuego2Screen from "../screens/InstructionsGame2";
import InstruccionesJuego1Screen from "../screens/InstruccionesJuego1";
import InstruccionesJuego3Screen from "../screens/InstruccionesJuego3";
import InstruccionesJuegoOrderiumScreen from "../screens/InstruccionesJuegoOrderium";
import EstadisticasJuego1Screen from "../screens/StatisticsGame1";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import NumberGame from "../screens/NumberGame";
import GonoGoGame from "../screens/GonoGoGame";
import OrderiumGame from "../screens/OrderiumGame";
import InformationScreen from "../screens/Information";
import Tutorial1Screen from "../screens/Tutorial1";
import InformationJuego1 from "../screens/InformationJuego1";
import InformationJuego2 from "../screens/InformationJuego2";
import InformationJuego3 from "../screens/InformationJuego3";
import TutorialOrderium from "../screens/TutorialOrderium";
import TutorialGoNoGo from "../screens/TutorialGoNoGo";
import VideoTutorials from "../screens/tutorials"; // Ensure this path is correct



/* const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
}; */

/* export default function NavigationPrivate() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigatorPrivate />
    </NavigationContainer>
  );
} */

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */


/* function RootNavigatorPrivate() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="MemoryGame" component={MemoryGame} />
      <Stack.Screen name="Again" component={Again} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="InstruccionesJuego1" component={InstruccionesJuego1Screen} />
    </Stack.Navigator>
  );
} */

import 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPassword from "../screens/ForgotPassword";
import MotivationMessageScreen from "../screens/MotivationMessage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: { backgroundColor: '#1F41BB' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontFamily: 'Roboto-Bold' },
      }}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ title: 'Perfil' }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'Categorias' }}
      />
      <Stack.Screen
        name="InstruccionesJuego1"
        component={InstruccionesJuego1Screen}
        options={{ title: 'Instrucciones' }}
      />
      <Stack.Screen
        name="InstruccionesJuego2"
        component={IntruccionesJuego2Screen}
        options={{ title: 'Instrucciones' }}
      />
      <Stack.Screen
        name="InstruccionesJuego3"
        component={InstruccionesJuego3Screen}
        options={{ title: 'Instrucciones' }}
      />
      <Stack.Screen
        name="InstruccionesJuegoOrderium"
        component={InstruccionesJuegoOrderiumScreen}
        options={{ title: 'Instrucciones' }}
      />
      <Stack.Screen
        name="MemoryGame"
        component={MemoryGame}
        options={{ title: 'Memory Game' }}
      />
      <Stack.Screen
        name="Again"
        component={Again}
        options={{ title: 'Adivina!' }}
      />
      <Stack.Screen
      name="EstadisticasJuego1"
      component={EstadisticasJuego1Screen}
      options={{ title: 'Resultado!' }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Recuperar Contraseña' }}
      />
      <Stack.Screen
        name="NumberGame"
        component={NumberGame}
        options={{ title: 'Numerium' }}
      />
      <Stack.Screen
        name="GonoGoGame"
        component={GonoGoGame}
        options={{ title: 'Contrarium' }}
      />
      <Stack.Screen
        name="OrderiumGame"
        component={OrderiumGame}
        options={{ title: 'Orderium' }}
      />
      <Stack.Screen
        name="Information"
        component={InformationScreen}
        options={{ title: 'Information' }}
      />
      <Stack.Screen
        name="Tutorial1"
        component={Tutorial1Screen}
        options={{ title: 'Tutorial 1' }}
      />
      <Stack.Screen
        name="InformationJuego1"
        component={InformationJuego1}
        options={{ title: 'Información' }}
      />
      <Stack.Screen
        name="InformationJuego2"
        component={InformationJuego2}
        options={{ title: 'Información' }}
      />
      <Stack.Screen
        name="InformationJuego3"
        component={InformationJuego3}
        options={{ title: 'Información' }}
      />
      <Stack.Screen
        name="TutorialOrderium"
        component={TutorialOrderium}
        options={{ title: 'Tutorial' }}
      />
      <Stack.Screen
        name="TutorialGoNoGo"
        component={TutorialGoNoGo}
        options={{ title: 'Tutorial' }}
      />
      <Stack.Screen
        name="MotivationMessage"
        component={MotivationMessageScreen}
        options={{ title: 'Mensaje Motivacional' }}
      />
      <Stack.Screen
        name="VideoTutorials"
        component={VideoTutorials}
        options={{ title: 'Video Tutorials' }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="UserProfile"
      screenOptions={{
        headerStyle: { backgroundColor: '#1F41BB' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontFamily: 'Roboto-Bold' },
      }}>
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ title: 'User Page' }}
      />
    </Stack.Navigator>
  );
}

function RootNavigatorPrivate() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#1F41BB',
        }}>
        <Tab.Screen
          name="Hola"
          component={HomeStack}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigatorPrivate;
