import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch } from 'react-native';

import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import PersonalBlock from './PersonalBlock.js';

export default function UserProfile({navigation}) {

  const [data, setData] = useState(userData);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        style={styles.backgroundImage}
        resizeMode='contain'>

        <ScrollView style={styles.main}>

          <Text style={styles.mainHeading}>Hi, {data.firstName}!</Text>

          <View style={styles.sectionContainer}>
            <View style={styles.buttonHeading}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={[styles.option, { color: '#ef6461' }]}>Inbox</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={[styles.option, { color: '#ef6461' }]}>Listings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text onPress={() => navigation.navigate('Purchases')}style={[styles.option, { color: '#ef6461' }]}>Purchases</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text onPress={() => navigation.navigate('Public Profile')}style={[styles.option, { color: '#ef6461' }]}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          <PersonalBlock data={data} />

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Settings</Text>
            <View style={styles.infoBlock}>
              <Text style={styles.setting}>Dark Mode</Text>
              <Switch style={styles.settingSwitch} />
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={[styles.sectionHeading, { color: '#ef6461' }]}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={[styles.sectionHeading, { color: '#ef6461' }]}>Log Out</Text>
            </TouchableOpacity>
          </View>

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
    left: '180%'
  },
  container: {
    flex: 1,
    backgroundColor: '#e4b363',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    color: '#ef6461',
    fontSize: 20,
  },
  infoLeft: {
    padding: '.5%'
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
  main: {
    padding: '3%',
  },
  mainHeading: {
    fontSize: 45,
    color: '#313638',
    marginBottom: 15
  },
  option: {
    textDecorationLine: 'underline',
    width: 80,
    textAlign: 'center'

  },
  sectionContainer: {
    borderRadius: '5',
    padding: '3%',
    marginBottom: '3%',
    backgroundColor: 'rgba(255, 255, 255, .9)'
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
    textDecorationLine: 'underline'
  },
  setting: {
    fontWeight: 'bold',
    fontSize: 17
  },
});