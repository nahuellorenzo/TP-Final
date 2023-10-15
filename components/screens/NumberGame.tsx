import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import AppTextInput from "../AppTextInput";
import { useIsFocused } from "@react-navigation/native";
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
  let arregloNumeros: number[] = [];
  const [miArreglo, setMiArreglo] = useState([]);
  const [number2, setNumber2] = useState<Number>(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [loader, setLoader] = useState(false);
  const [ultimo, setUltimo] = useState(false);
  const isFocused = useIsFocused();
  const [finalNumber, setFinalNumber] = useState(0);
  const [resultado, setResultado] = useState(false);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 10);
    setNumber(randomNumber);
    arregloNumeros.push(randomNumber);
    const numero1 = setTimeout(() => {
      setLoader(true);
      randomNumber = Math.floor(Math.random() * 10);
      setNumber(randomNumber);
      arregloNumeros.push(randomNumber);
    }, 200);

    const numero2 = setTimeout(() => {
      setLoader(false);
      console.log("numero2")
    }, 500);

    const numero3 = setTimeout(() => {
      setLoader(true);
      randomNumber = Math.floor(Math.random() * 10);
      setNumber(randomNumber);
      arregloNumeros.push(randomNumber);
      console.log("numero3")
    }, 1000);

    const numero4 = setTimeout(() => {
      setLoader(false);
      console.log("numero4")
    }, 1500);

    const numero5 = setTimeout(() => {
      setLoader(true);
      randomNumber = Math.floor(Math.random() * 10);
      setNumber(randomNumber);
      arregloNumeros.push(randomNumber);
    }, 2000);

    const numero6 = setTimeout(() => {
      setLoader(false);
      console.log("numero6")
    }, 2500);

    const numero7 = setTimeout(() => {
      setUltimo(true);
      setMiArreglo([...arregloNumeros]);
      console.log(arregloNumeros)
    }, 3000);

    return () => {
      clearTimeout(numero1);
      clearTimeout(numero2);
      clearTimeout(numero3);
      clearTimeout(numero4);
      clearTimeout(numero5);
      clearTimeout(numero6);
      clearTimeout(numero7);
    }
  }, [valor,setValor]);

  const handleInputChange = (text) => {
    setNumber2(parseInt(text));
  };

  const handleProbar = () => { // Reemplaza con el número correcto
    const concatenatedNumber = miArreglo.map(String).join("");
    if (number2 === parseInt(concatenatedNumber, 10)) {
      setResultado(true);
      console.log("entre")
    } else {
      setResultado(false);
      console.log("entre")
    }
  };

  const reiniciarComponente = () => {
    setNumber(0);
    setMiArreglo([]);
    setNumber2(0);
    setNumber3(0);
    setNumber4(0);
    setLoader(false);
    setUltimo(false);
    setFinalNumber(0);
    setResultado(false);
    setValor(0);
  };

  function NumberDisplay({ numbers }) {
    const concatenatedNumber = miArreglo.map(String).join("");
    const finalNumber = parseInt(concatenatedNumber, 10);

    return (
      <View>
        {resultado && (
        <Text style={{
          fontSize: FontSize.xxLarge,
          color: Colors.primary,
          fontFamily: Fonts["Roboto-Bold"],
          textAlign: "center",
          marginTop: Spacing * 4,
        }}>
          El numero era: {finalNumber}
        </Text>)}
      </View>
    );
  }

  function JugarDenuevo() {
    return(
      <View>
        <View
            style={{
              paddingHorizontal: Spacing * 2,
              paddingTop: Spacing * 6,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                reiniciarComponente();
              }}
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
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
                  fontFamily: Fonts["Roboto-Bold"],
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Juegar de Nuevo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setLoader(false);
                setUltimo(false);
                setResultado(false);
                window.location.reload();
              }}
              style={{
                paddingVertical: Spacing * 1.5,
                paddingHorizontal: Spacing * 2,
                width: "48%",
                borderRadius: Spacing,
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
                  fontFamily: Fonts["Roboto-Bold"],
                  color: Colors.text,
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Salir
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

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
                      Recuerda este Numero!
                    </Text>
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
                      ¿Cual es el numero?
                    </Text>
                    <NumberDisplay numbers={arregloNumeros} />
                    <View
                      style={{
                        marginVertical: Spacing * 3,
                      }}
                    >
                      <AppTextInput
                        placeholder="Numero"
                        keyboardType="numeric"
                        onChangeText={(text) => handleInputChange(text)}
                      />
                      <TouchableOpacity 
                        onPress={handleProbar}
                        disabled={resultado}
                        style={{
                          padding: Spacing * 2,
                          backgroundColor: Colors.primary,
                          marginVertical: Spacing * 3,
                          borderRadius: Spacing,
                          shadowColor: resultado ? Colors.gray : Colors.primary,
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
                          Probar
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {resultado && (
                      <JugarDenuevo />)}
                  </View>
                )}
              </View>
            )}
      </View>
    </ScrollView>
  );
};


export default NumberGame;