import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#424242'
  },
  text: {
    color: '#e0e0e0'
  }
});

export default App;
