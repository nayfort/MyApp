import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {checkConfirmationCode} from '../services/api';
import ConfirmationCodeInput from './ConfirmationCodeInput';

const ConfirmationScreen = ({navigation}) => {
  const [code, setCode] = useState('');

  const handleSignUp = async () => {
    if (code.trim() === '') {
      Alert.alert('Ошибка', 'Пожалуйста, введите код подтверждения');
      return;
    }

    try {
      const response = await checkConfirmationCode(code);

      if (response.valid) {
        Alert.alert('Успех', 'Код подтверждения верен');
        navigation.navigate('Login');
      } else {
        Alert.alert('Ошибка', 'Неверный код подтверждения');
      }
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось проверить код подтверждения');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to App</Text>
      <Text style={styles.subtitle}>Enter the confirmation code that will be sent to you by SMS</Text>
      <ConfirmationCodeInput value={code} setValue={setCode} />
      <CustomButton title="Sign up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    letterSpacing: 10,
  },
});

export default ConfirmationScreen;
