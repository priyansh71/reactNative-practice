/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const List = () => {
  const [people, setName] = useState([
    { name: "shaun", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "mario", key: "3" },
    { name: "luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "toad", key: "6" },
    { name: "bower", key: "7" },
    { name: "crazy", key: "8" },
  ]);

  return (
    <ScrollView>
      {people.map((object) => (
        <View key={object.key}>
          <Text style={styles.text}>{object.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});

export default List;
