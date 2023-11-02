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

const ModalOpcionesMemorium = ({ isVisible, closeModal, dropdownTimeValue, dropdownTimeInicialValue, onDropdownTimeChange, onDropdownTimeInicialChange,}) => {
  
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
            <DropdownTimeInicial value={dropdownTimeInicialValue} onValueChange={onDropdownTimeInicialChange} />

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
             <DropdownTime value={dropdownTimeValue} onValueChange={onDropdownTimeChange} />

          
          <TouchableOpacity onPress={closeModal}>
            <Text>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalOpcionesMemorium;
