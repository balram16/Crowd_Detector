import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LocationTracker = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For showing loading state

  // Function to submit data
  const submitData = async () => {
    if (!uniqueId) {
      Alert.alert('Validation Error', 'Unique ID is required');
      return;
    }

    setIsLoading(true); // Start loading spinner

    try {
      const response = await axios.post('http://192.168.1.107:5000/api/users', {
        uniqueId: uniqueId,
      });

      // Show success message and reset form fields
      Alert.alert('Success', 'Unique ID submitted successfully!');
      console.log('Response:', response.data);

      setUniqueId('');
    } catch (error) {
      console.error('Error submitting data:', error);
      Alert.alert('Error', 'Failed to submit data. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Tracker</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Unique ID"
        value={uniqueId}
        onChangeText={setUniqueId}
      />

      <Button
        title={isLoading ? 'Submitting...' : 'Submit'}
        onPress={submitData}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default LocationTracker;
