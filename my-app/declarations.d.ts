declare module 'expo-location' {
    export function requestForegroundPermissionsAsync(): Promise<{ status: string }>;
    export function getCurrentPositionAsync(options?: any): Promise<{ coords: { latitude: number; longitude: number } }>;
  }
  
  declare module 'react-native-maps' {
    export const Marker: any;
    export const MapView: any;
  }
  