/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList ,Alert } from "react-native";
import ListItem from "./ListItem";
import CreateTodo from "./CreateTodo";

const Lister = () => {
  const [todos, setTodos] = useState([
    { text: "Complete CS253", key: "1" },
    { text: "Start React-Native", key: "2" },
    { text: "Watch Beware the Batman", key: "3" },
    { text: "Make the Core-Project", key: "4" },
  ]);

  const presshandle = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };

  const submithandle = (text) => {
    if (text.length > 3){
    setTodos((prev) => {
      return [
        {text : text , key: Math.random().toString()},
        ...prev
      ]  
  })}
  else{
    Alert.alert('Oops!', "To-dos must be over 3 characters long.", [
      {text : "Understood", onPress : ()=> console.log("Closed.")}
    ])
  }
}

  return (
    <View style={styles.list}>
      <CreateTodo  submitTodo = {submithandle}
 />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <ListItem todo={item}
           deleteTodo={presshandle} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flex :1
  },
});

export default Lister;
