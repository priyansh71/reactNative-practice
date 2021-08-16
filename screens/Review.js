/** @format */

import React from "react";
import { View, Text ,Linking } from "react-native";
import styles from "../styles/styles";
import { AntDesign } from '@expo/vector-icons';
import Card from "../components/Card";
import _ from "lodash";

const Review = (props) => {
  const fields = [];

  const movieTitle = props.navigation.getParam("title")

  const openUrl = () => {
    Linking.openURL(`https://www.metacritic.com/movie/${_.kebabCase(movieTitle)}`)
  }

  for (let i = 1; i <=  props.navigation.getParam("rating"); i++) {
    fields.push(1);
}
  return (
    <View style={styles.container}>
    <Card>
      <Text style={styles.movieTitle}
      onPress={openUrl}
      >{movieTitle}</Text>
      <Text style={styles.title}>Review :</Text>
      <Text style={styles.paragraph}>{props.navigation.getParam("review")}</Text>
      <Text style={styles.title}>Rating :</Text>
      <View  style={styles.rating}>
      {
        fields.map((i,j) => <AntDesign name="star" size={24} color="gold" key={j}/>)
      }
      </View>
      <Text style={styles.headerText}>{props.navigation.getParam("rating")}/10</Text>
      <Text style={styles.title}>Written by :</Text>
      <Text style={styles.paragraph}>{props.navigation.getParam("author")}</Text>
      </Card>
    </View>
  );
};

export default Review;
