import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import AppTextInput from "../AppTextInput";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Loader from "./Loader";
import { ScoreContext } from "../context/ScoreContext";
import Toast from 'react-native-root-toast';
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "NumberGame">;
const NumberGame: React.FC<Props> = ({ navigation: { navigate } }: Props) => {

  const [number, setNumber] = useState(0);
  let arregloNumeros: number[] = [];
  const [miArreglo, setMiArreglo] = useState([]);
  const [number2, setNumber2] = useState<Number>(0);
  const [contadorFalldios, setContadorFallidos] = useState(0);
  const [loader, setLoader] = useState(false);
  const [ultimo, setUltimo] = useState(false);
  const [finalNumber, setFinalNumber] = useState(0);
  const [resultado, setResultado] = useState(false);
  const [valor, setValor] = useState(0);
  const { score, updateScore, setScore } = useContext(ScoreContext)

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 10);
    setNumber(randomNumber);
    arregloNumeros.push(randomNumber);
    const numero1 = setTimeout(() => {
      setLoader(true);
      randomNumber = Math.floor(Math.random() * 10);
      setNumber(randomNumber);
      arregloNumeros.push(randomNumber);
    }, 500);

    const numero2 = setTimeout(() => {
      setLoader(false);
    }, 1000);

    const numero3 = setTimeout(() => {
      setLoader(true);
      randomNumber = Math.floor(Math.random() * 10);
      setNumber(randomNumber);
      arregloNumeros.push(randomNumber);
    }, 1500);

    const numero4 = setTimeout(() => {
      setLoader(false);
    }, 2000);

    const numero5 = setTimeout(() => {
      setLoader(true);
      randomNumber = Math.floor(Math.random() * 10);
      setNumber(randomNumber);
      arregloNumeros.push(randomNumber);
    }, 2500);

    const numero6 = setTimeout(() => {
      setLoader(false);
    }, 3000);

    const numero7 = setTimeout(() => {
      setUltimo(true);
      setMiArreglo([...arregloNumeros]);
      console.log(arregloNumeros)
    }, 3500);

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

  const showToastCorrect = () => {
    try{
      Toast.show('Respuesta correcta!', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Colors.primary,
        textColor: Colors.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch(error){
      console.log(error)
    }
  }

  const showToastInCorrect = () => {
    try{
      Toast.show('Respuesta incorrecta, Vuelve a intentarlo!', {
        duration: Toast.durations.LONG,
        animation: true,
        backgroundColor: Colors.primary,
        textColor: Colors.onPrimary,
        hideOnPress: true,
        shadow: true,
      });
    }
    catch(error){
      console.log(error)
    }
  }

  const handleProbar = () => {
    const concatenatedNumber = miArreglo.map(String).join("");
    if (number2 === parseInt(concatenatedNumber, 10)) {
      setResultado(true);
      showToastCorrect();
      setScore({
        correct: score.correct + 1,
        incorrect: score.incorrect,
      });
    } else {
      setResultado(false);
      showToastInCorrect();
      setScore({
        correct: score.correct,
        incorrect: score.incorrect + 1,
      });
      setContadorFallidos(contadorFalldios + 1)
    }
    console.log("actualice")
  };

  const reiniciarComponente = () => {
    setNumber(0);
    setMiArreglo([]);
    setNumber2(0);
    setContadorFallidos(0);
    setLoader(false);
    setUltimo(false);
    setFinalNumber(0);
    setResultado(false);
    setValor(valor+1);
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
    updateScore(score.correct, score.incorrect);
    return(
      <View
        style={{
          marginTop: Spacing*-2,
        }}>
        <View
            style={{
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
                navigate("Main");
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
                justifyContent: "center", 
                alignItems: "center",
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
                No te olvides el numero!
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: Spacing * 4,
                paddingTop: Spacing * 10,
              }}>
                <Loader/>
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
                        paddingHorizontal: Spacing * 4,
                        paddingTop: Spacing,
                      }}>
                      <Text
                        style={{
                          color: Colors.primary,
                          fontSize: FontSize.xxLarge*5,
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
                      {!resultado && (
                      <AppTextInput
                        editable={!resultado}
                        placeholder="Numero"
                        keyboardType="numeric"
                        onChangeText={(text) => handleInputChange(text)}
                      />)}
                      <TouchableOpacity 
                        onPress={handleProbar}
                        disabled={resultado}
                        style={{
                          padding: Spacing * 2,
                          backgroundColor: resultado ? Colors.second_gray : Colors.primary,
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
                      {contadorFalldios > 4 &&(
                        <TouchableOpacity 
                        onPress={reiniciarComponente}
                        disabled={resultado}
                        style={{
                          padding: Spacing * 2,
                          backgroundColor: resultado ? Colors.second_gray : Colors.primary,
                          marginVertical: Spacing * 2,
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
                          Probar con otro numero
                        </Text>
                      </TouchableOpacity>
                      )}
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