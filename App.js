import React from 'react';
import {StyleSheet, View , TouchableWithoutFeedback , Keyboard } from 'react-native';
import Header from './Components/Header';
import Lister from './Components/Lister';


const App = () => {

  return (
    <TouchableWithoutFeedback 
    onPress= {() => Keyboard.dismiss()}
    >
    <View style={styles.container} >
        <Header />
        <View style={styles.content} >
          <Lister />
        </View>     
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1
  },
  content :{
    padding : 40,
    flex : 1,
    marginBottom : 1
  }
});

export default App;