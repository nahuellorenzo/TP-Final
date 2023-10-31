/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Main: undefined;
  UserProfile: undefined;
  MemoryGame: undefined;
  Again: {
    param1: string;
    param2: string;
  };
  Categories: undefined;
  InstruccionesJuego2: undefined;
  InstruccionesJuego1: undefined;
  EstadisticasJuego1: undefined;
  ForgotPassword: undefined;
  NumberGame:undefined;
  Information:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;