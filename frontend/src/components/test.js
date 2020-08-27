import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Test = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have clicked the button {count} times.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setCount(count - 1)}
          style={[styles.button, styles.minusButton]}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={[styles.button, styles.plusButton]}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#424242'
  },
  text: {
    fontSize: 25,
    color: '#e0e0e0',
    marginBottom: 25
  },
  buttonContainer: {
    width: 200,
    flexDirection:  "row",
    justifyContent: "space-between"
  },
  button: {
    width: 80,
    height: 25,
    borderRadius: 10,
    color: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center"
  },
  minusButton: {
    backgroundColor: "red"
  },
  plusButton: {
    backgroundColor: "#29e81c"
  }
})
