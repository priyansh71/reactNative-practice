/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My To-do's</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 38,
    backgroundColor: "#F5116E",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
    paddingBottom: 13,
    fontWeight: "bold",
  },
});

export default Header;
