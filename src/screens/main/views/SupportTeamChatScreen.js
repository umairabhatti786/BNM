import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
import HeaderComponent from '../../../components/HeaderComponent';
import { colors, dimensions } from '../../../styles/constants';

export default function SupportTeamChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: "Great! Just a moment while we connect you...", time: "10:20 am", sentByUser: false, seen: false },
    { id: '2', text: "What's your next availability", time: "10:10 am", sentByUser: true, seen: true },
    { id: '3', text: "Elementum et mi augue", time: "10:20 am", sentByUser: true, seen: false },
    { id: '4', text: "Magna et sed dictum tellus", time: "10:30 am", sentByUser: true, seen: false }
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sentByUser ? styles.userMessage : styles.supportMessage]}>
      <Text style={[styles.messageText, item.sentByUser ? styles.userMessageText : styles.supportMessageText]}>
        {item.text}
      </Text>
      <View style={styles.messageFooter}>
        <Text style={styles.messageTime}>{item.time}</Text>
        {item.sentByUser && item.seen && (
         <Image
         source={require('../../../assets/webp/seenIcon.webp')}
         style={[styles.seenIcon, { tintColor: colors.white }]}
       />
        )}
      </View>
    </View>
  );

  const handleSend = () => {
    if (newMessage.trim().length > 0) {
      const message = {
        id: (messages.length + 1).toString(),
        text: newMessage,
        time: new Date().toLocaleTimeString(),
        sentByUser: true,
        seen: false
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleFilePicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
      // Handle the picked file (e.g., send it to the server or add to messages)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={[styles.container]}>
      <HeaderComponent title="Support Team Live Chat" />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.chatList}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity 
        style={styles.uploadButton} 
        // onPress={handleFilePicker}
        >
          <Image
            source={require('../../../assets/webp/uploadIcon.webp')}
            style={styles.uploadIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Image
            source={require('../../../assets/webp/sendIcon.webp')}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chatList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageContainer: {
    marginVertical: 8,
    padding: dimensions.paddingLevel2,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  supportMessage: {
    alignSelf: 'flex-start',
    backgroundColor: "lightgray",
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: colors.white,
  },
  supportMessageText: {
    color: "gray",
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  messageTime: {
    fontSize: 12,
    color:"lightgray",
  },
  seenIcon: {
    width: 14,
    height: 14,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  uploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  uploadIcon: {
    width: 50,
    height: 50,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  sendButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 50,
    height: 50,
  },
});
