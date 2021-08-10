/** @format */

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from "../shared/Card";
import Reviews from "../assets/Reviews";
import styles from "../styles/styles";

const Home = (props) => {
  const [reviews, setReviews] = useState(Reviews);

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
          <Card>
            <Text style={styles.title}>{item.title}</Text>
          </Card>
          </TouchableOpacity>

        )}
      />
    </View>
  );
};

export default Home;
