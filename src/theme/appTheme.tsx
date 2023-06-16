import { Dimensions, StyleSheet } from 'react-native';

const sW = Dimensions.get('window').width;

export const Colors = {
  gray: '#2d2d2d',
  lightGray: '#9b9b9b',
  orange: '#ff9427',
};

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  resultText: {
    color: 'white',
    fontSize: 60,
    marginBottom: 10,
    textAlign: 'right',
  },
  smallText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    height: (sW / 4) - 12,
    justifyContent: 'center',
    marginHorizontal: 6,
    width: (sW / 4) - 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
});
