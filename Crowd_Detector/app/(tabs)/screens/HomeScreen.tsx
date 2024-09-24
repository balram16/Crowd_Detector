
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  console.log(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate('Location Tracker')}
        >
          <Text style={styles.boxText}>Location Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate('Crowd Detection')}
        >
          <Text style={styles.boxText}>Crowd Detection</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate('Traffic Alert')}
        >
          <Text style={styles.boxText}>Traffic Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate('Emergency Service')}
        >
          <Text style={styles.boxText}>Emergency Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#73828c',
    paddingTop: 150,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  box: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a8d72',
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 6,
    borderColor: '#5b6d8d',
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
