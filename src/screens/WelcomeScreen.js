import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomButton from '../components/CustomButton';
import WelcomeLogo from '../images/WelcomePic.png';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={WelcomeLogo}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to App</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus
        Neque at felis pulvinar malesuada varius egestas dis cras.{' '}
      </Text>
      <CustomButton
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <CustomButton
        title="Register"
        isSignUp={true}
        onPress={() => navigation.navigate('Register')}
      />
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
  image: {
    width: 350,
    height: 350,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#14171D',
    marginBottom: 20,
  },
  login: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  signup: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
