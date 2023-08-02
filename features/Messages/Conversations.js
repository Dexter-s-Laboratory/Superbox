import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { format, render, cancel, register } from 'timeago.js';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

const Conversations = () => {

  const currentUser = { idToken: 'hello' };

  const [ conversationsArray, setConversationsArray ] = useState([]);

  useEffect(() => {
    fetchConversations(currentUser.idToken);
  }, []);

  const fetchConversations = (idToken) => {
    axios.get('/api/converstaions/', {
      headers: {
        'authorization': idToken
      }
    })
      .then((result) => {
        setConversationsArray(result);
      })
      .catch((err) => {
        console.error('Error fetching messages:', err);
        setConversationsArray([]);
      });
  };

  const conversations = [
    { id: 1, content: 'This is a message' },
    { id: 2, content: 'This is another message This is another message This is another message This is another message This is another message ' }
  ];

  const renderConversation = ({ item }) => {
    let timeAgo = format('2022-01-01T10:10:45Z', 'en_US');

    return (
      <TouchableOpacity style={styles.conversationContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>
            P
          </Text>
        </View>
        <View style={styles.messageContent}>
          <View style={styles.contentContainer}>
            <Text numberOfLines={1} style={styles.conversationContent}>
              {item.content}
            </Text>
          </View>
          <View style={styles.elapsedTimeContainer}>
            <Text style={styles.elapsedTimeText}>
              {timeAgo}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <View style={styles.horizontalRule} />
      <View style={styles.conversationsContainer}>
        <FlatList
          data={conversations}
          renderItem={renderConversation}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  horizontalRule: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  conversationsContainer: {
    flex: 1,
  },
  conversationContainer: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  conversationContent: {
    fontSize: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#EF6461',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 40,
  },
  messageContent: {
    paddingLeft: 10,
    width: 311,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contentContainer: {
    width: 200,
  },
  elapsedTimeContainer: {
    width: 50
  },
  elapsedTimeText: {
    fontSize: 10,
  }
});

export default Conversations;