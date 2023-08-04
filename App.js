import React, { useState, createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
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
// import {userData} from './assets/dummy-data/userData.js';
export const UserProfileContext = React.createContext();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMarket" component={HomeMarket} options={{
          headerRight: () => <CartIcon />,
        }}  />
            <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerRight: () => <CartIcon /> }}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

function ListingsStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="My Listings" component={MyListings} />
    </Stack.Navigator>
    );
}


function ProfileStack() {
  return (
  <Stack.Navigator>
  <Stack.Screen name="Profile" component={UserProfile}/>
  <Stack.Screen name="Public Profile" component={PublicProfile} />
  <Stack.Screen name="Purchases" component={Purchases} />
  <Stack.Screen name="My Listings" component={MyListings} />
  <Stack.Screen name="Conversations" component={Conversations} options={{ headerShown: false }}/>
  </Stack.Navigator>
  );
}

function CartIcon() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{marginRight: 48}}>
      <Icon
        name="shopping-cart"
        size={38}
        color="#000"
      />
    </TouchableOpacity>
  );
}


export default function App() {

  const [profile, setProfile] = useState(userData);
  return (
    <UserProfileContext.Provider value={{ profile, setProfile}}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Marketplace'>

        <Tab.Screen name="Marketplace" component={HomeStack}  options={{ headerShown: false }}/>
        { profile ?
        <>
        <Tab.Screen
        name="Listings"
        component={ListingsStack}
        options={{
          tabBarLabel: 'My Listings',
          headerShown: false
        }}
      >
      </Tab.Screen>
        <Tab.Screen
          name="My Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: 'User Profile',
            headerShown: false
          }}
        >
        </Tab.Screen>
        </>
        :
        <Tab.Screen
          name="SignIn"
          options={{
            tabBarLabel: 'Sign In',
            headerShown: false,
          }}
          children={() => <SignIn profile={profile} setProfile={setProfile} />}
        />}

      </Tab.Navigator>
    </NavigationContainer>
    </UserProfileContext.Provider>

  );
}