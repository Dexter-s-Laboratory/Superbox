import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet, View } from 'react-native';

import DynamicHeader from '../../globalComponents/Search.js';
import ProductCard from '../../globalComponents/ProductCard.js';

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
        <View style={{height: 400}}>
          <ProductCard />
        </View>
        <View style={{height: 400}}>
          <ProductCard />
        </View>
        <View style={{height: 400}}>
          <ProductCard />
        </View>
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