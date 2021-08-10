/** @format */

import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/styles";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

const Form = (props) => {
  values = {
    title: "",
    body: "",
    rating: "",
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          props.add(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Framework Name"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder="Comments"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />

            <TextInput
              style={styles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="phone-pad"
            />

            <MaterialIcons
              name="done-all"
              size={40}
              color="black"
              onPress={props.handleSubmit}
              style={styles.toggle}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
