// LocationTrackerScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// 
const TrafficAlert = () => (
  <View style={styles.container}>
    <Text style={styles.text}>TrafficAlert Screen</Text>
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

export default TrafficAlert;
