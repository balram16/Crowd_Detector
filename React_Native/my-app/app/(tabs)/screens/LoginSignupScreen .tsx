import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const LoginSignupScreen = ({ navigation }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [uniqueCode, setUniqueCode] = useState('');

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = async () => {
    const route = isSignup ? 'auth/signup' : 'auth/login'; // Updated endpoint
    const payload = isSignup
      ? { name, email, password, phone }
      : { email, password };

    try {
      const response = await fetch(`http://192.168.1.107:5000/${route}`, {  // Use your local IP here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Response Data:', data); // Log the entire response data for debugging

      if (data.success) {
        setUniqueCode(data.uniqueCode); // Set the unique code from the backend response
        Alert.alert(
          isSignup ? 'Signup Successful' : 'Login Successful',
          `Your Unique Code: ${data.uniqueCode}` // Show the unique code in an alert
        );
        navigation.navigate('Home');  // Ensure you have a Home screen in your navigator
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
// Improved error message
    }
  };

  return (
    <View style={styles.container}>
      {isSignup && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title={isSignup ? 'Signup' : 'Login'} onPress={handleSubmit} />
      <Text style={styles.toggleText} onPress={handleToggle}>
        {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Signup'}
      </Text>

      {/* Display Unique Code */}
      {uniqueCode ? (
        <Text style={styles.uniqueCodeText}>Your Unique Code: {uniqueCode}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  toggleText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
  uniqueCodeText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default LoginSignupScreen;
