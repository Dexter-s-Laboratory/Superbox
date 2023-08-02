import React, { Component, useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Animated, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

const Messages = ({ currentUser, conversation, setConversation }) => {

  const [messagesArray, setMessagesArray] = useState([]);

  const messages = [
    { id: 1, content: 'Hello sir how are you', author_id: 1 },
    { id: 2, content: 'Good how are you', author_id: 2 },
    { id: 3, content: 'Very good.', author_id: 1 },
    { id: 4, content: 'This is a stimulating conversation.', author_id: 2 },
    { id: 5, content: 'What comics do you have?', author_id: 1 },
  ];

  useEffect(() => {
    if (!!conversation.conversation_id) {
      setMessagesArray(messages);
    } else {
      setMessagesArray([]);
    }
  }, [conversation]);


  // useEffect(() => {
  //   fetchMessages(currentUser.idToken);
  // }, []);

  // const fetchMessages = (idToken) => {
  //   axios.get(`/api/messages/${conversationId}`, {
  //     headers: {
  //       'authorization': IdToken
  //     }
  //   })
  //     .then((result) => {
  //       setMessagesArray(result);
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching messages:', err);
  //       setMessagesArray([]);
  //     });
  // };

  // const postMessage = (messageContent) => {
  //   axios.post('/api/messages', {
  //     'conversation_id': conversationId,
  //     'content': messageContent
  //   })
  //     .then((res) => {
  //       let copy = messagesArray.slice();
  //       copy.push(res.data);
  //       setMessagesArray(copy);
  //     })
  //     .catch((err) => {
  //       console.error('Error posting message:', err);
  //     })
  //     .finally(() => {
  //       setMessageContent('');
  //     });
  // };

  const renderMessages = ({ item }) => {
    return (
      <View style={styles.messageTextContainer}>
        <Text>
          {item.content}
        </Text>
      </View>
    );

  };

  if (!messagesArray.length) {
    <View>
      <Text>Loading...</Text>
    </View>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {conversation.user_1_username}
        </Text>
        <View style={styles.horizontalRule} />
        <View style={styles.messagesContainer}>
          <FlatList
            data={messagesArray}
            renderItem={renderMessages}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </View>
    );
  }

};

const styles = {
  container: {
    // alignItems: 'center',
    // justifyContent: 'flex-start'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  horizontalRule: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  messagesContainer: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    height: '100%'
  },
  messageTextContainer: {
    flex: 1
  }
};

export default Messages;