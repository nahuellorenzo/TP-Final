import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import ModalOpcionesNumerium from "./ModalNumerium";

const InstruccionesJuego2Screen = ({ navigation: { navigate } }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dropdownTimeValue, setDropdownTimeValue] = useState(2000); // Valor inicial
  const [dropdownTimeInicialValue, setDropdownTimeInicialValue] = useState(2000); // Valor inicial
  const [dropdownDigitsValue, setDropdownDigitsValue] = useState(3); // Cantidad de dígitos inicial

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >

          <Text
            style={{
              fontSize: FontSize.large,
              color: Colors.primary,
              fontFamily: Fonts["poppins-bold"],
              textAlign: "center",
            }}
          >
             El siguiente juego es para trabajar tu memoria a corto plazo, se mostrará una serie de números por “x” segundos y luego deberás repetir la secuencia de números en el orden correcto.
          </Text>

          <TouchableOpacity
                        onPress={() => navigate("Tutorial1")}
                        style={{
                            padding: Spacing * 2,
                            backgroundColor: Colors.primary,
                            marginVertical: Spacing * 2, 
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
                                fontFamily: Fonts["Roboto-bold"],
                                color: Colors.onPrimary,
                                textAlign: "center",
                                fontSize: FontSize.large,
                            }}
                        >
                            Ver Tutorial
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                           onPress={openModal} // Abre el modal
                            style={{
                                paddingTop: Spacing * 2.5
                              }}
                            >
                            <Text
                            style={{
                                fontSize: FontSize.medium,
                                color: Colors.primary,
                                fontFamily: Fonts["poppins-bold"],
                                textAlign: "center",
                            }}
                            >
                                Opciones avanzadas
                            </Text>
                        </TouchableOpacity>
                        
                        <ModalOpcionesNumerium 
            isVisible={isModalVisible} 
            closeModal={closeModal}
            dropdownTimeValue={dropdownTimeValue}
            dropdownTimeInicialValue={dropdownTimeInicialValue}
            dropdownDigitsValue={dropdownDigitsValue}
            onDropdownTimeChange={setDropdownTimeValue}
            onDropdownTimeInicialChange={setDropdownTimeInicialValue}
            onDropdownDigitsChange={setDropdownDigitsValue}
          />
                        
                    </View>

                    <TouchableOpacity
            onPress={() => navigate("NumberGame", { 
              digitDisplayTime: dropdownTimeInicialValue, 
              distractorTime: dropdownTimeValue, 
              numberOfDigits: dropdownDigitsValue 
            })}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 2, 
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
              Comenzar
            </Text>
          </TouchableOpacity>
                </View>

      </View>
    </ScrollView>
  );
};

export default InstruccionesJuego2Screen;