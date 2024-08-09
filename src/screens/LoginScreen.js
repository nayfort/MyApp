import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    Alert.alert('Успешно', 'Вы успешно вошли в систему');
  };

  const handleSignUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to App</Text>
      <Text style={styles.subtitle}>Please enter your details.</Text>
      <Text style={styles.field}>Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="+33 222 111 2222"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <Text style={styles.signupSuggest}>
        Don't have an account?{' '}
        <Text style={styles.toSignUpText} onPress={handleSignUpPress}>
          Sign up
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
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  field: {
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  signupSuggest: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  toSignUpText: {
    textAlign: 'center',
    color: '#00D1AC',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default LoginScreen;
