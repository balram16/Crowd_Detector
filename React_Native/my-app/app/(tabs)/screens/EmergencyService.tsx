// LocationTrackerScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmergencyService = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Emergency Service Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
});

export default EmergencyService;
