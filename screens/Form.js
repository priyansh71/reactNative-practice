/** @format */

import React from "react";
import { View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/styles";
import ReviewSchema from "../components/ReviewSchema";

const Form = (props) => {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema = {ReviewSchema}
        initialValues={{ title: "", review: "", rating: "" }}
        onSubmit={(values, actions) => {
          props.add(values);
          actions.resetForm();
        }}
      >
        {(Fprops) => {
          return(
          <View>
            <TextInput
              style={styles.input}
              placeholder="Framework Name"
              onBlur={Fprops.handleBlur('title')}
              onChangeText={Fprops.handleChange("title")}
              value={Fprops.values.title}
            />

            <Text style={styles.error}>
              {Fprops.touched.title && Fprops.errors.title}
            </Text>

            <TextInput
              style={styles.input}
              multiline
              placeholder="Comments"
              onBlur={Fprops.handleBlur('review')}
              onChangeText={Fprops.handleChange("review")}
              value={Fprops.values.review}
            />

            <Text style={styles.error}>
              {Fprops.touched.review && Fprops.errors.review}
            </Text> 

            <TextInput
              style={styles.input}
              placeholder="Rating (1 - 5)"
              onBlur={Fprops.handleBlur('rating')}
              onChangeText={Fprops.handleChange("rating")}
              value={Fprops.values.rating}
              keyboardType="phone-pad"
            />

            <Text style={styles.error}>
              {Fprops.touched.rating && Fprops.errors.rating}
            </Text> 

            <MaterialIcons
              name="done-all"
              size={40}
              color="#111"
              onPress={Fprops.handleSubmit}
              style={styles.toggle}
            />
          </View>
        )}}
      </Formik>
    </View>
  );
};

export default Form;
