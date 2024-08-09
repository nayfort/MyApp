import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, isSignUp }) => {
  return (
    <TouchableOpacity
      style={isSignUp ? styles.signupbtn : styles.button}
      onPress={onPress}
    >
      <Text style={isSignUp ? styles.signupText : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#30B0C7',
    padding: 10,
    boxSizing: 'border-box',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
    height: 44,
  },
  signupbtn: {
    backgroundColor: 'white',
    padding: 10,
    boxSizing: 'border-box',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C5C6',
    alignItems: 'center',
    width: '100%',
    height: 44,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText: {
    color: '#14171D',
    fontSize: 16,
  },
});

export default CustomButton;
