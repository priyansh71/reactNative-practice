/** @format */

import React, { useState ,useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../components/Card";
import Reviews from "../assets/Reviews";
import styles from "../styles/styles";
import Form from "./Form";

const Home = (props) => {
  const [reviews, setReviews] = useState(Reviews);
  const [modal, setModal] = useState(false);

  const addreview = (review) => {
    review.key = Math.random().toString()
    setReviews((prev) => {
      return (
        [review, ...prev]
      )
    })
  }
  useEffect(() => {
    setModal(false)
  }, [reviews])

  return (
    <View style={styles.container}>
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              color="#111"
              style={{ ...styles.toggle, ...styles.close }}
              onPress={() => setModal(false)}
            />
            <Form add={addreview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="playlist-add"
        size={30}
        color="black"
        style={styles.toggle}
        onPress={() => setModal(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ReviewScreen", item);
            }}
          >
            <Card>
              <Text style={styles.framework}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
