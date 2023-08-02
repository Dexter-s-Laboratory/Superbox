import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { format, render, cancel, register } from 'timeago.js';
import Messages from './Messages';

// const Stack = createNativeStackNavigator();

const Conversations = ({ currentUser }) => {

  currentUser = { username: 'Patrick', idToken: 'hello' };

  const [conversationsArray, setConversationsArray] = useState([]);
  const [conversation, setConversation] = useState({});

  // useEffect(() => {
  //   fetchConversations(currentUser.idToken);
  // }, []);

  // const fetchConversations = (idToken) => {i
  //   axios.get('/api/converstaions/', {
  //     headers: {
  //       'authorization': idToken
  //     }
  //   })
  //     .then((result) => {
  //       setConversationsArray(result);
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching messages:', err);
  //       setConversationsArray([]);
  //     });
  // };



  const conversations = [
    { conversation_id: 1, user_1_id: 1, user_2_id: 2, user_1_username: 'Patrick', user_2_username: 'Biderman', content: 'This is a message', created_at: '2023-08-01 14:00:00' },
    { conversation_id: 1, user_1_id: 1, user_2_id: 3, user_1_username: 'Patrick', user_2_username: 'Oatman', content: 'This is a another message', created_at: '2023-08-01 13:00:00' },
    { conversation_id: 1, user_1_id: 4, user_2_id: 1, user_1_username: 'Slark Kent', user_2_username: 'Patrick', content: 'This is a much longer message', created_at: '2023-08-01 12:00:00' },
    { conversation_id: 1, user_1_id: 1, user_2_id: 5, user_1_username: 'Patrick', user_2_username: 'Neen Goblin', content: 'Something something something', created_at: '2023-08-01 11:00:00' },
    { conversation_id: 1, user_1_id: 6, user_2_id: 1, user_1_username: 'Illmatic', user_2_username: 'Patrick', content: 'Can I buy comic?', created_at: '2023-08-01 10:00:00' },
    { conversation_id: 1, user_1_id: 6, user_2_id: 1, user_1_username: 'AmI', user_2_username: 'Patrick', content: 'Can I buy Spiderman comic?', created_at: '2023-08-01 10:00:00' },
  ];

  const renderConversation = ({ item }) => {


    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let bgColors = ['reddish', 'reddish', 'reddish', 'orange', 'orange', 'grey', 'lightgrey'];

    let color = bgColors[getRandomInt(0, 6)];

    return (
      <TouchableOpacity style={styles.conversationContainer} onPress={() => setConversation(item)}>
        <View style={styles.iconContainer && styles[color]}>
          <Text style={styles.icon}>
            { item.user_1_username !== currentUser.username ? item.user_1_username.slice(0, 1) : item.user_2_username.slice(0, 1)}
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
              {format(item.created_at)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (!conversation.conversation_id) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Messages</Text>
        <View style={styles.horizontalRule} />
        <View style={styles.conversationsContainer}>
          <FlatList
            data={conversations}
            renderItem={renderConversation}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Messages currentUser={currentUser} conversation={conversation} setConversation={setConversation} />
      </View>
    );
  }

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

  },
  reddish: {
    backgroundColor: "#EF6461",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  grey: {
    backgroundColor: "#E0DFD5",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  orange: {
    backgroundColor: "#E4B363",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightgrey: {
    backgroundColor: "#E8E9Eb",
    width: 50,
    height: 50,
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
  },
});

export default Conversations;