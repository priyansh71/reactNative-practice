import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Name from "./test/Name"
import Input from "./test/Input"
import List from "./test/List"
import List2 from "./test/List2"

const App = () => {

  return (
    <View style={styles.container} >
    {/* <Name /> */}
    {/* <Input /> */}
    {/* <List /> */}
    {/* <List2 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    margin : 10,
    padding: 10
  },
  body :{
    backgroundColor : 'pink',
    padding: 30,
    margin: 20,
    borderRadius : 15,
   },
   button : {
     marginTop : 20,
   }
});

export default App;