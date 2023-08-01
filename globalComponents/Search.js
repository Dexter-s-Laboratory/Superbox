import * as React from 'react';
import { Text, View, StyleSheet, Animated, TextInput, Keyboard, Button } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";

const Header_Max_Height = 70;
const Header_Min_Height = 0;

export default function DynamicHeader({animHeaderValue}) {
  const searchBarPadding = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [10, 0],
    extrapolate: 'clamp'
  })

  const animateHeaderHeight =  animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height , Header_Min_Height],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View
        style={[
          styles.header,
          {
            height: animateHeaderHeight,
          }

        ]}
      >
      <Animated.View style={[
        styles.searchBar,
        {
          padding:searchBarPadding,
        }
      ]
      }>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={    {fontSize: 20,
            marginLeft: 10,
            width: "90%",}}
          placeholder="Search"
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 10
  },
  searchBar: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    }
});
