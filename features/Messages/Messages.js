import React, { Component, useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Animated, ScrollView } from 'react-native';
import axios from 'axios';

const Messages = ({ currentUser, conversationId }) => {

  const [messagesArray, setMessagesArray] = useState([]);
  const [messageContent, setMessageContent] = useState('');

  useEffect(() => {
    fetchMessages(currentUser.idToken);
  }, []);

  const fetchMessages = (idToken) => {
    axios.get(`/api/messages/${conversationId}`, {
      headers: {
        'authorization': IdToken
      }
    })
      .then((result) => {
        setMessagesArray(result);
      })
      .catch((err) => {
        console.error('Error fetching messages:', err);
        setMessagesArray([]);
      });
  };

  const postMessage = (messageContent) => {
    axios.post('/api/messages', {
      'conversation_id': conversationId,
      'content': messageContent
    })
      .then((res) => {
        let copy = messagesArray.slice();
        copy.push(res.data);
        setMessagesArray(copy);
      })
      .catch((err) => {
        console.error('Error posting message:', err);
      })
      .finally(() => {
        setMessageContent('');
      });
  };

  return (
    <></>
  );
};