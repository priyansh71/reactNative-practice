/** @format */

import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph} >
        This application allows user to review popular movies and
        give their comments, revealing things they like and dislike in each one of them.
      </Text>
      <Text style={styles.paragraph}>
        This app is written in JavaScript from scratch using the React-Native
        framework , under the Net Ninja Tutorial.
      </Text>
      <Text style={styles.paragraph}>Coded by me, Priyansh {"\u003B\u0029"}</Text>
    </View>
  );
};

export default About;
