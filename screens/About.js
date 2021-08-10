import React from 'react';
import { View ,Text } from 'react-native';
import styles from "../styles/styles"


const About = () => {

  return (
    <View style= {styles.container}>
        <Text style={styles.paragraph}>This application allows user to review some popular CSS Frameworks and give their opinions, things they like, things they find exhausting about each one of them.
        </Text>
        <Text style={styles.paragraph}>
          This app is written in 100% JavaScript using the React-Native framework and under the Net Ninja React-bNative Tutorial.
        </Text>
    </View>
  );
}

export default About;