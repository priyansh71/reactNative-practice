/** @format */

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const Home = (props) => {
  const [reviews, setReviews] = useState([
    {
      title: "Bootstrap",
      rating: 8,
      body: "Too much forced similar-looking components. Customization is difficult. But it is rigid.",
      key: "1",
    },
    {
      title: "TailwindCSS",
      rating: 9,
      body: "Lots of customization is enabled but even building the smallest components takes a lot of time. Brilliant framework overall.",
      key: "2",
    },
    {
      title: 'BulmaCSS',
      rating: 3,
      body: "Really light and works amazing in small projects. But it is toll flexible and solving issues is difficult sometimes.",
      key: "7.5",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ReviewScreen", item);
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
