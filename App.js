import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldTex}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
<Text style={styles.bodycontainer}>This is sample text</Text>
<Text>This is sample text</Text>
<Text>This is sample text</Text>
<Text>This is sample text</Text>
<Text>This is sample text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding : 20,
  },
  boldTex:{
    fontWeight : 'bold',
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20,
  },
  bodycontainer:{
padding : 20,
fontSize: 16,
color:'red'
  }

});
