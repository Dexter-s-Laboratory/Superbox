import React, { useState } from 'react';
const axios = require('axios');
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch, Modal, TextInput } from 'react-native';

import { GlobalViewFlat, GlobalText, GlobalTitle, GlobalCartButton, GlobalCartButtonText } from '../../globalComponents/globalStyles.js';
import { updatePersonal } from '../../lib/userRequestHelpers.js';

export default PhoneModal = ({phone, setPhone, phoneModalOpen, setPhoneModalOpen}) => {

  const closeModal = () => {
    setPhoneModalOpen(false);
  };

  return (
    <Modal
        visible={phoneModalOpen}
        onRequestClose={closeModal}
      >
        <GlobalViewFlat style={styles.modalContainer}>
          <GlobalViewFlat style={styles.modalContent}>
            <GlobalText style={styles.sectionHeading}>Update phone number</GlobalText>
            <TextInput onChangeText={(text) => setPhone(text)} autoFocus={true} style={styles.findUser}></TextInput>
            <GlobalViewFlat style={styles.buttons}>
              <GlobalCartButton style={styles.button}>
                <GlobalCartButtonText onPress={closeModal}>Cancel</GlobalCartButtonText>
              </GlobalCartButton>
              <GlobalCartButton onPress={() => {
                updatePersonal('phone', phone);
                closeModal();
              }} style={[styles.button, { backgroundColor: '#e4b363' }]}>
                <GlobalCartButtonText>Continue</GlobalCartButtonText>
              </GlobalCartButton>
            </GlobalViewFlat>
          </GlobalViewFlat>
        </GlobalViewFlat>
      </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 90,
    elevation: 0,
    paddingHorizontal: '2%',
    paddingVertical: '2%'
  },
  buttons: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row'
  },
  findUser: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 26,
    borderRadius: 20,
    borderWidth: 1,
    width: 300,
    padding: 5
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    width: '100%',
    maxHeight: '90%',
    height: 200,
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
  },
});