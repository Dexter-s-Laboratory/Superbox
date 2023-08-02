import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';

import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import DynamicHeader from '../../globalComponents/Search.js';
import Search from '../../globalComponents/Search.js';

export default function PublicProfile() {

  const [data, setData] = useState(userData);
  const [isAdmin, setIsAdmin] = useState(true);
  const [banned, setBanned] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        style={styles.backgroundImage}
        resizeMode='contain'>

        <ScrollView style={styles.main}>

          <Text style={styles.mainHeading}>{data.userName}</Text>


          <View style={styles.sectionContainer}>
          <Text style={[styles.sectionHeading, {textDecorationLine: 'none'}]}>Average rating: {data.rating}</Text>


          </View>
          <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>Listings</Text>
            {data.listings.map((listing, i) => {
              return (
                <View key={i} style={styles.listing}>
                  <View style={styles.listingLeft}>
                    <Text style={styles.product}>{listing.product}</Text>
                    <Text style={styles.info}>{listing.info}</Text>
                  </View>

                  <Text>{listing.price}</Text>
                </View>
              );
            })}
            <TouchableOpacity style={styles.seeAll}>
            <Text style={styles.seeAllButton}>see all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={[styles.sectionHeading, { color: '#ef6461' }]}>Message User</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>Find a different user</Text>
          <Search />
          </View>


          {isAdmin && <View style={styles.sectionContainer}>
            {banned ? <TouchableOpacity style={styles.buttonContainer}>
              <Text style={[styles.sectionHeading, { color: '#ef6461' }]}>Unban User</Text>
            </TouchableOpacity>
              :
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={[styles.sectionHeading, { color: '#ef6461' }]}>Ban User</Text>
              </TouchableOpacity>}
          </View>}

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
  buttonContainer: {
    width: '45%',
  },
  buttonHeading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    left: '110%'
  },
  container: {
    flex: 1,
    backgroundColor: '#e4b363',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0dfd5',
    borderWidth: '.5%',
    borderRadius: 2,
    marginBottom: '2%',
    alignItems: 'center',
    padding: '2%'
  },
  infoType: {
    fontWeight: 'bold'
  },
  listing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0dfd5',
    padding: '1%',
    borderBottomWidth: '1%'
  },
  product: {
    fontWeight: 'bold'
  },
  main: {
    padding: '3%',
  },
  mainHeading: {
    fontSize: 45,
    color: '#313638',
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
  },
  subHeading: {
    fontSize: 24
  }
});