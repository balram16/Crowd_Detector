// src/navigation/types/navigation.d.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  LoginSignup: undefined; // No params
  Home: undefined; // No params
  LocationTracker: undefined; // No params
  CrowdDetection: undefined; // No params
  TrafficAlert: undefined; // No params
  EmergencyService: undefined; // No params
};

export type LoginSignupScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoginSignup'
>;

export type LoginSignupScreenRouteProp = RouteProp<
  RootStackParamList,
  'LoginSignup'
>;

export type Props = {
  navigation: LoginSignupScreenNavigationProp;
  route: LoginSignupScreenRouteProp;
};
