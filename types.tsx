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
  Again: undefined;
  Categories: undefined;
  IntruccionesJuego1: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;