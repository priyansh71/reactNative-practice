import React from 'react';
import { View ,Text  } from 'react-native';
import styles from "../styles/styles"

const Review = (props) => {

  return (
    <View style= {styles.container}>
        <Text style={styles.title}>{props.navigation.getParam('title')}</Text>
        <Text style={styles.title}>{props.navigation.getParam('body')}</Text>
        <Text style={styles.title}>{props.navigation.getParam('rating')}</Text>
    </View>
  );
}

export default Review;