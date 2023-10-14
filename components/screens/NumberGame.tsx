import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Loader from "./Loader";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "NumberGame">;
const NumberGame: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);
    const [loader, setLoader] = useState(false);
    const [ultimo, setUltimo] = useState(false);

    useEffect(() => {
        setNumber(Math.floor(Math.random() * 10));

        
        const numero1 = setTimeout(() => {
            setNumber(Math.floor(Math.random() * 10));
            setLoader(true);
        }, 2000);

        const numero2 = setTimeout(() => {
            setLoader(false);
            setNumber2(Math.floor(Math.random() * 10));
        }, 4000);
        return () => {clearTimeout(numero1);
            clearTimeout(numero2)}

    }, []);

    return (
        <ScrollView>
            <View>
        {
          loader === true ? (<View>
            <View
              style={{
                paddingHorizontal: Spacing * 4,
                paddingTop: Spacing * 4,
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.xxLarge,
                  color: Colors.primary,
                  fontFamily: Fonts["Roboto-Bold"],
                  textAlign: "center",
                }}
              >
                No te olvides la imagen!
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: Spacing * 4,
                paddingTop: Spacing * 10,
              }}>
              <Loader />
            </View>
          </View>
          ) :
      (
      <View>
        {ultimo === false ? (
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                fontFamily: Fonts["Roboto-Bold"],
                textAlign: "center",
              }}
            >
              Recuerda esta imagen!
            </Text>
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                fontFamily: Fonts["Roboto-Bold"],
                textAlign: "center",
              }}
            >
              ¿Es la misma imagen?
            </Text>
          </View>
        )}
        <View
        style={{
          
        }}>
        <Text
          style={{
            height: height / 2.5,
            width: width / 1.5,
            marginTop: Spacing * 4,
            alignSelf: "center",
          }}
        >
            {number}
        </Text>
        </View>
    </View>
    )}
    </View>
    </ScrollView>
    );
};


export default NumberGame;