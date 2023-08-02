import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import HomeMarket from "./features/Marketplace/HomeMarket.js";
import Signin from "./features/LoginSignup/Signin.js";
import Cart from './features/Cart/CartPage.js';
import UserProfile from './features/UserProfile/UserProfile.js';
import SignIn from "./features/LoginSignup/Signin.js";
import MyListings from './features/MyListings/MyListings.js';
import PublicProfile from './features/UserProfile/PublicProfile.js';
import Purchases from './features/UserProfile/Purchases.js';
import Conversations from './features/Messages/Conversations.js';

import {userData} from './assets/dummy-data/userData.js';
const Tab = createBottomTabNavigator();

export default function App() {

  const [profile, setProfile] = useState(userData);
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">

        <Tab.Screen name="Home" component={HomeMarket} />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: 'Settings',
          }}
          children={() => <SignIn profile={profile} setProfile={setProfile} />}
        />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen
          name="User Profile"
          options={{
            tabBarLabel: 'User Profile',
          }}
          children={() => <UserProfile profile={profile} setProfile={setProfile} />}
        />
        <Tab.Screen name="My Listings" component={MyListings} />
        <Tab.Screen name="Public Profile" component={PublicProfile} />
        <Tab.Screen name="Purchases" component={Purchases} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E4B363',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

