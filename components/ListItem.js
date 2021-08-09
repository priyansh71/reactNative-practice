/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ListItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.deleteTodo(props.todo.key);
      }}
    >
      <Text style={styles.item}>{props.todo.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default ListItem;
