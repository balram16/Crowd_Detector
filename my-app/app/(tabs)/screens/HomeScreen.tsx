import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Upper Right Corner Login/Signup Button */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('logout')} // Ensure this matches the screen name in your navigator
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Image source={require('../assets/images/favicon.png')} style={styles.logo} />
        <Text style={styles.appName}>Crowd Detector</Text>
      </View>

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
    paddingTop: 300,
    position: 'relative', 
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    fontSize: 50,
  },
  logo: {
    width: 50,
    height: 50,
  },
  appName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  box: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Only the background has opacity
    margin: 10,
    padding: 0,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 6,
    borderColor: '#fff',
  },
  
  boxText: {
    color: '#fff',
    padding:0,
    fontSize: 18,
    textAlign: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 40, 
    right: 20, 
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
