import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import io from "socket.io-client";

const Messages = () => {
  let [message, setMessage] = useState("")
  let [messages, setMessages] = useState([])

  useEffect(() => {
    console.log("connect")
    this.socket = io("http://192.168.42.15:3000")
    this.socket.on("message", msg => {
      setMessages(messages => [...messages, msg])
    })
  }, [])

  function submitChat() {
    this.socket.emit("message", message)
    setMessage("")
  }

  const chatMessages = messages.map(chatMessage => (
    <Text key={chatMessage + Math.random()}>{chatMessage}</Text>
  ));
  return (
    <View style={styles.container}>
      {chatMessages}
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        value={message}
        onSubmitEditing={() => submitChat()}
        onChangeText={message => {
          setMessage(message)
        }} />
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderWidth: 2
  }
})
