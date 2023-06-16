/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Colors, styles } from '../theme/appTheme';

interface Props {
  text: string;
  bgColor?: string;
  larger?: Boolean;
  onPress: (action: string) => void;
}

const sW = Dimensions.get('window').width;

const ButtonCalc = ({ text, bgColor, larger = false, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)} activeOpacity={0.5}>
      <View style={{
        ...styles.button,
        backgroundColor: bgColor || Colors.gray,
        width: larger ? (sW / 4 - 12) * 2 : (sW / 4 - 12),
      }}>
        <Text style={{
          ...styles.buttonText,
          color: (bgColor === Colors.lightGray) ? 'black' : 'white',
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
