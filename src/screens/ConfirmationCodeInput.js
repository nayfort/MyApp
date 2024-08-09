import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

const ConfirmationCodeInput = ({ value, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Secure Code</Text>
      <CodeField
        value={value}
        onChangeText={setValue}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              symbol && styles.filledCell,
            ]}>
            <Text style={[styles.text, !symbol && styles.placeholderText]}>
              {symbol || (isFocused ? <Cursor /> : '0')}
            </Text>
          </View>
        )}
      />
      <Text style={styles.resendText}>Resend the Code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
  },
  codeFieldRoot: {
    marginBottom: 20,
  },
  cell: {
    width: 52,
    height: 64,
    borderWidth: 2,
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: '#EEE8F0',
  },
  focusCell: {
    borderColor: '#A180DC',
  },
  filledCell: {
    borderColor: '#A180DC',
    color: '#30B0C7',
  },
  text: {
    fontSize: 40,
    color: '#30B0C7',
    marginVertical: 5,
  },
  placeholderText: {
    color: '#C4C5C6',
    lineHeight: 48,
    fontSize: 40,
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 5,
  },
  resendText: {
    textAlign: 'center',
    color: '#00D1AC',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default ConfirmationCodeInput;
