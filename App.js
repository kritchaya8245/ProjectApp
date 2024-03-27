import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main';
import BottomTab from './navigations/BottomTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
       <BottomTab />
    </NavigationContainer>
  );
}
