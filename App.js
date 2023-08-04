import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeMarket from "./features/Marketplace/HomeMarket.js";
import Signin from "./features/LoginSignup/Signin.js";
import Cart from './features/Cart/CartPage.js';
import UserProfile from './features/UserProfile/UserProfile.js';
import SignIn from "./features/LoginSignup/Signin.js";
import MyListings from './features/MyListings/MyListings.js';
import PublicProfile from './features/UserProfile/PublicProfile.js';
import Purchases from './features/UserProfile/Purchases.js';
import Product from './features/Listing/ProductPage.js';
import Messages from './features/Messages/Messages.js';
import Conversations from './features/Messages/Conversations.js';
import {userData} from './assets/dummy-data/userData.js';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Marketplace" component={HomeMarket} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="My Listings" component={MyListings} />
      <Stack.Screen name="Public Profile" component={PublicProfile} />
      <Stack.Screen name="Purchases" component={Purchases} />
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}

export default function App() {

  const [profile, setProfile] = useState('');
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">

        <Tab.Screen name="Home" component={HomeStack}  options={{ headerShown: false }}/>
        <>
        <Tab.Screen
          name="User Profile"
          options={{
            tabBarLabel: 'User Profile',
          }}
        >
          {({ navigation }) => (
            <UserProfile
              profile={profile}
              setProfile={setProfile}
              navigation={navigation} // Pass the navigation prop here
            />
          )}
        </Tab.Screen>
        </>
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen
          name="SignIn"
          options={{
            tabBarLabel: 'Sign In',
          }}
          children={() => <SignIn profile={profile} setProfile={setProfile} />}
        />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

