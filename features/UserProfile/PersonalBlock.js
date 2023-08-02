import React from 'react';
const axios = require('axios');
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch, Modal } from 'react-native';

// import requestHelpers from '../../lib/requestHelpers.js';

const obscurePass = (password) => {
  let result = '';
  for (let index = 0; index < password.length; index++) {
    result += '*';
  }
  return result;
};

export default PersonalBlock = ({ profile, handleProfileUpdate }) => {

  // const handleUpdate = (field, newData) => {
  //   return axios.put(`/api/u/users/${profile.user_id}/profile`, {[field]: newData})
  //   .then(() => {
  //     handleProfileUpdate()
  //   })
  // };



  return (
    <View style={styles.sectionContainer}>

      <Text style={styles.sectionHeading}>Personal Information</Text>

      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Name: </Text>
          <Text style={styles.info}>{profile.firstName} {profile.lastName}</Text>
        </View>

        <TouchableOpacity onPress={handleProfileUpdate}style={styles.buttonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Email:</Text>
          <Text style={styles.info}>{profile.email}</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.infoBlock}>
                <View style={styles.infoLeft}>
                  <Text style={styles.infoType}>Password:</Text>
                  <Text style={styles.info}>{obscurePass(profile.password)}</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
              </View> */}


      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Primary phone number:</Text>
          <Text style={styles.info}>{profile.phone.slice(0, 3)}-{profile.phone.slice(3, 6)}-{profile.phone.slice(6, 10)}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Address:</Text>
          <Text style={[styles.line, styles.text]}>{profile.address1}</Text>
          {profile.address2 && <Text style={[styles.line, styles.text]}>{profile.address2}</Text>}
          <Text style={[styles.line, styles.text]}>{profile.city}, {profile.state}</Text>
          <Text style={[styles.line, styles.text]}>{profile.zip}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: '1%',
    alignItems: 'center',
    minWidth: '15%'
  },
  editButton: {
    color: '#ef6461',
    fontSize: '15',
    textDecorationLine: 'underline'
  },
  line: {
    marginBottom: '3%',
    fontSize: '15',
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

  },
  infoType: {
    fontWeight: 'bold'
  },
  sectionContainer: {
    borderRadius: '5',
    padding: '3%',
    marginBottom: '3%',
    backgroundColor: 'rgba(255, 255, 255, .92)'
  },
  sectionHeading: {
    fontSize: '20',
    marginBottom: 8,
    textDecorationLine: 'underline'
  },
  text: {
    marginBottom: 0
  }
});