import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Colors, styles } from '../theme/appTheme';
import ButtonCalc from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    clean,
    erase,
    positiveNegative,
    createNumber,
    buttonAdd,
    buttonSubtract,
    buttonMultiply,
    buttonDivide,
    calculate,
  } = useCalculator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && <Text style={styles.smallText}>{previousNumber}</Text>}

      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={styles.resultText}
      >
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" bgColor={Colors.lightGray} onPress={clean} />
        <ButtonCalc text="+/-" bgColor={Colors.lightGray} onPress={positiveNegative} />
        <ButtonCalc text="del" bgColor={Colors.lightGray} onPress={erase} />
        <ButtonCalc text="/" bgColor={Colors.orange} onPress={buttonDivide} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" onPress={createNumber} />
        <ButtonCalc text="8" onPress={createNumber} />
        <ButtonCalc text="9" onPress={createNumber} />
        <ButtonCalc text="X" bgColor={Colors.orange} onPress={buttonMultiply} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" onPress={createNumber} />
        <ButtonCalc text="5" onPress={createNumber} />
        <ButtonCalc text="6" onPress={createNumber} />
        <ButtonCalc text="-" bgColor={Colors.orange} onPress={buttonSubtract} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" onPress={createNumber} />
        <ButtonCalc text="2" onPress={createNumber} />
        <ButtonCalc text="3" onPress={createNumber} />
        <ButtonCalc text="+" bgColor={Colors.orange} onPress={buttonAdd} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" larger onPress={createNumber} />
        <ButtonCalc text="." onPress={createNumber} />
        <ButtonCalc text="=" bgColor={Colors.orange} onPress={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

