import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch } from 'react-native';

import { userData } from '../../assets/dummy-data/userData.js';

const obscurePass = (password) => {
  let result = '';
  for (let index = 0; index < password.length; index++) {
    result += '*';
  }
  return result;
};

export default PersonalBlock = ({ data }) => {
  return (
    <View style={styles.sectionContainer}>

      <Text style={styles.sectionHeading}>Personal Information</Text>

      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Name: </Text>
          <Text style={styles.info}>{data.firstName} {data.lastName}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Email:</Text>
          <Text style={styles.info}>{data.email}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.infoBlock}>
                <View style={styles.infoLeft}>
                  <Text style={styles.infoType}>Password:</Text>
                  <Text style={styles.info}>{obscurePass(data.password)}</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
              </View> */}


      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Primary phone number:</Text>
          <Text style={styles.info}>{data.phone.slice(0, 3)}-{data.phone.slice(3, 6)}-{data.phone.slice(6, 10)}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBlock}>
        <View style={styles.infoLeft}>
          <Text style={styles.infoType}>Address:</Text>
          <Text style={[styles.line, styles.text]}>{data.address1}</Text>
          {data.address2 && <Text style={[styles.line, styles.text]}>{data.address2}</Text>}
          <Text style={[styles.line, styles.text]}>{data.city}, {data.state}</Text>
          <Text style={[styles.line, styles.text]}>{data.zip}</Text>
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