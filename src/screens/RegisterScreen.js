import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {checkPhoneNumber} from '../services/api';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleContinue = async () => {
    try {
      const response = await checkPhoneNumber(phone);
      console.log('Response from server:', response);

      if (response.valid) {
        navigation.navigate('Confirmation');
      } else {
        Alert.alert('Ошибка', 'Неверный номер телефона');
      }
    } catch (error) {
      console.error('Ошибка проверки номера телефона:', error);
      Alert.alert('Ошибка', 'Ошибка проверки номера телефона');
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to App</Text>
      <Text style={styles.subtitle}>Please enter your details.</Text>
      <Text style={styles.field}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.field}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Text style={styles.field}>Phone number</Text>
      {/*format: +380 67 000 00 00*/}
      <TextInput
        style={styles.input}
        placeholder="+33 222 111 2222"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <CustomButton title="Continue" onPress={handleContinue} />
      <Text style={styles.loginSuggest}>
        Do you have an account?{' '}
        <Text style={styles.toLoginText} onPress={handleLoginPress}>
          Login
        </Text>
      </Text>
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
  field: {
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginSuggest: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  toLoginText: {
    textAlign: 'center',
    color: '#00D1AC',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default RegisterScreen;
