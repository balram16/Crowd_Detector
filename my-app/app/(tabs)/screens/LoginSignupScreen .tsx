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
    const route = isSignup ? 'auth/signup' : 'auth/login';
    const payload = isSignup
      ? { name, email, password, phone }
      : { email, password };

    try {
      const response = await fetch(`http://192.168.122.206:5000/${route}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Response Data:', data);

      if (data.success) {
        setUniqueCode(data.uniqueCode);
        Alert.alert(
          isSignup ? 'Signup Successful' : 'Login Successful',
          `Your Unique Code: ${data.uniqueCode}`
        );
        navigation.navigate('Home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {isSignup && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#000"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="#000"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title={isSignup ? 'Signup' : 'Login'} color="#000" onPress={handleSubmit} />
      <Text style={[styles.toggleText, { color: '#000' }]} onPress={handleToggle}>
  {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Signup'}
</Text>


      {uniqueCode ? (
        <Text style={styles.uniqueCodeText}>Your Unique Code: {uniqueCode}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#73828c',  // Light background to make elements stand out
  },
  input: {
    borderColor: '#73828c',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',  // White background for input fields
    color: '#333',            // Darker text color for input
  },
  toggleText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#8a8d72',
    fontSize: 16,
    fontWeight: '500',
  },
  uniqueCodeText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#4CAF50',   // Green for the unique code text
    fontWeight: 'bold',
  },
});

export default LoginSignupScreen;
