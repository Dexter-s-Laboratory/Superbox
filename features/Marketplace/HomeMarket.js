import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet } from 'react-native';


// You can import from local files
import DynamicHeader from '../../globalComponents/Search.js';

export default function App() {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}
      >
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0
  },
  scrollText: {
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000'
  }
});