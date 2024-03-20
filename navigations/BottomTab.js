import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import Home from '../components/Home';
import Listbook from '../components/Listbook';
import Main from '../screens/Main';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray' }}>
          <Tab.Screen
            name="Main"
            component={Main}
            options={{
              tabBarLabel: "หน้าหลัก",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="Listbook"
            component={Listbook}
            options={{
              tabBarLabel: "อ่านต่อ",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="book" color={color} size={size} /> ),
            }}
          />
        </Tab.Navigator>
      );
}