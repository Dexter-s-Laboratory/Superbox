import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import Search from '../../globalComponents/Search.js';

export default function UserProfile() {

  const [data, setData] = useState(userData);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        style={styles.backgroundImage}
        resizeMode='contain'>

        <ScrollView style={styles.main}>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Your Purchases</Text>
            {data.purchases.map((purchase, i) => {
              return (
                <View key={i} style={styles.listing}>
                  <View style={styles.listingLeft}>
                    <Text style={styles.product}>{purchase.product}</Text>
                    <Text style={styles.product}>{purchase.price}</Text>
                    <Text style={styles.info}>{purchase.info}</Text>
                  </View>
                  <View style={styles.listingLeft}>

                    <Text style={styles.product}>{purchase.date}</Text>
                  </View>
                </View>
              );
            })}
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllButton}>see all</Text>

            </TouchableOpacity>
          </View>

          {/* <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Find a purchase</Text>
            <Search />
          </View> */}

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '95%',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#e4b363',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0dfd5',
    padding: '1%',
    borderBottomWidth: '1%'
  },
  main: {
    padding: '3%',
  },
  product: {
    fontWeight: 'bold'
  },
  sectionContainer: {
    borderRadius: '5',
    padding: '3%',
    marginBottom: '3%',
    backgroundColor: 'rgba(255, 255, 255, .9)'
  },
  sectionHeading: {
    fontSize: 22,
    marginBottom: 8,
    textDecorationLine: 'underline'
  },
  seeAll: {
    marginTop: '2%',
    maxWidth: '13%'
  },
  seeAllButton: {
    fontSize: 15,
    color: '#ef6461',
    textDecorationLine: 'underline',
  }
});