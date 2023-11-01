import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Fonts from "../constants/Fonts";
import DropdownTime from './DropdownTime';
import DropdownTimeInicial from './DropdownTimeInicial';
export var dropdownTimeValue1: number;
export var dropdownTimeInicialValue1: number;

const ModalOpcionesMemorium = ({ isVisible, closeModal }) => {
    //Dropdown Time
    const [dropdownTimeValue, setDropdownTimeValue] = useState(2000);
    dropdownTimeValue1 = dropdownTimeValue; //para podeer almacenar el valor por defecto
    const handleDropdownTimeChange = (value: number) => {
        setDropdownTimeValue(value);
        dropdownTimeValue1 = value;
    };

    //Dropdown Time
    const [dropdownTimeInicialValue, setDropdownTimeInicialValue] = useState(4000);
    dropdownTimeInicialValue1 = dropdownTimeInicialValue; //para podeer almacenar el valor por defecto
    const handleDropdownTimeInicialChange = (value: number) => {
        setDropdownTimeInicialValue(value);
        dropdownTimeInicialValue1 = value;
    };

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
          <Text>Opciones Avanzadas</Text>
          
            <Text
                style={{
                fontSize: FontSize.large,
                color: Colors.primary,
                fontFamily: Fonts["poppins-bold"],
                textAlign: "center",
                paddingTop: Spacing * 2.5,
                }}
            >
                Selecciona el tiempo de la primer imagen
            </Text>
            <DropdownTimeInicial onValueChange={handleDropdownTimeInicialChange} />

            <Text
                style={{
                fontSize: FontSize.large,
                color: Colors.primary,
                fontFamily: Fonts["poppins-bold"],
                textAlign: "center",
                paddingTop: Spacing * 2.5,
                }}
            >
                Selecciona el tiempo entre imágenes
            </Text>
             <DropdownTime onValueChange={handleDropdownTimeChange} />

          
          <TouchableOpacity onPress={closeModal}>
            <Text>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalOpcionesMemorium;
