import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LocationTracker = () => {
  const [uniqueId, setUniqueId] = useState('');

  const handleSubmit = () => {
    // Handle the unique ID submission, e.g., store it, and navigate to the map.
    console.log('Unique ID:', uniqueId);
    // Add navigation logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the Unique ID"
        value={uniqueId}
        onChangeText={setUniqueId}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default LocationTracker;
