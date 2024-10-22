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
        <Text
          style={{
            fontSize: FontSize.xLarge,
            color: Colors.background,
            fontFamily: Fonts["poppins-bold"],
            textAlign: "center",
            paddingTop: Spacing * 2,
            paddingBottom: Spacing * 2,
          }}
        >
          Bienvenido a Memorium
        </Text>

        <Image
          source={require("../../assets/images/log-PhotoRoom.png-PhotoRoom.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
    </View>
    </ScrollView>
  );
};

export default MotivationMessageScreen;
