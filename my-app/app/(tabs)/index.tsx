import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';  // Make sure you have this screen
import LoginSignupScreen from './screens/LoginSignupScreen ';
import LocationTracker from './screens/LocationTracker'; // Ensure these screens are defined
import CrowdDetection from './screens/CrowdDetection';
import TrafficAlert from './screens/TrafficAlert';
import EmergencyService from './screens/EmergencyService';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Emergency Service">
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
        <Stack.Screen name="Location Tracker" component={LocationTracker} />
        <Stack.Screen name="Crowd Detection" component={CrowdDetection} />
        <Stack.Screen name="Traffic Alert" component={TrafficAlert} />
        <Stack.Screen name="Emergency Service" component={EmergencyService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
