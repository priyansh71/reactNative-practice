/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const ListItem = (props) => {

  let [fontsLoaded] = useFonts({
    'Font': require('../assets/Architects_Daughter/font.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else{

  return (
      <View  style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          props.deleteTodo(props.todo.key);
        }}
      >
      <AntDesign name="delete" size={20} color="#444" />
      </TouchableOpacity>
      <Text style={styles.text}>{props.todo.text}</Text>
      </View>

  );
      }
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection : "row"
  },
  text:{
    marginLeft : 20,
    fontFamily : 'Font',
    fontSize : 15,
    fontWeight : '600'
  }
});

export default ListItem;
