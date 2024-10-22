import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "MotivationMessage">;
const MotivationMessageScreen = ({ navigation: { navigate } }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: Colors.active,
        }}
      >
            <View style={{ justifyContent: "center", alignItems: "center", paddingTop: Spacing }}>
              <Image
                source={require("../../assets/images/logo_memorium_white.png")}
                style={{ width: 65, height: 60 }}
              />
            </View>
        <Text
          style={{
            fontSize: FontSize.xLarge,
            color: Colors.background,
            fontFamily: Fonts["poppins-bold"],
            textAlign: "center",
            paddingTop: Spacing * 2,
          }}
        >
          Bienvenido a Memorium
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            color: Colors.background,
            fontFamily: Fonts["poppins-regular"],
            textAlign: "center",
            paddingBottom: Spacing,
          }}
        >
          Tu viaje de entrenamiento mental
        </Text>
      </View>
    </ScrollView>
  );
};

export default MotivationMessageScreen;
