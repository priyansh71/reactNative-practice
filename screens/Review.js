/** @format */

import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";
import { AntDesign } from '@expo/vector-icons';
import Card from "../components/Card";

const Review = (props) => {
  const fields = [];

  for (let i = 1; i <=  props.navigation.getParam("rating"); i++) {
    fields.push(1);
}
  return (
    <View style={styles.container}>
    <Card>
      <Text style={styles.headerText}>{props.navigation.getParam("title")}</Text>
      <Text style={styles.title}>Review :</Text>
      <Text style={styles.paragraph}>{props.navigation.getParam("review")}</Text>
      <Text style={styles.title}>Rating :</Text>
      <View  style={styles.rating}>
      {
        fields.map((i,j) => <AntDesign name="star" size={24} color="black" key={j}/>)
      }
      </View>
      </Card>
    </View>
  );
};

export default Review;
