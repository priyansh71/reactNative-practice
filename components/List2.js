/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList , TouchableOpacity } from "react-native";

const List2 = () => {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toads", id: "6" },
    { name: "bower", id: "7" },
    { name: "crazy", id: "8" },
  ]);

  const pressHanlder = (id) =>{
    console.log(id)
    setPeople((prev) => {
      return prev.filter(person =>
        person.id != id)
    })
  }

  return (
    <View>
    <FlatList 
    numColumns={1}
    data={people} 
    keyExtractor={(item) => item.id }
    renderItem={
      ({item}) => (
        <TouchableOpacity onPress={
          () => pressHanlder(item.id)
        }>
       <Text style={styles.text}>{item.name} </Text>
        </TouchableOpacity>
      )
    }  />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 30,
    backgroundColor: "#B670F3",
    fontSize: 24,
    // marginHorizontal: 10,
    marginTop : 24,
    borderRadius : 5
  },
});

export default List2;
