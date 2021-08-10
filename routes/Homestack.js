/** @format */

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Review from "../screens/Review";
import Header from "../shared/Header";

const screens = {
  HomeScreen: {
    screen: Home,
    navigationOptions:  (props) => {
      return {
        headerTitle : () => <Header navigation={props.navigation} title="StyleZone." />

        }
      }
    },
  ReviewScreen: {
    screen: Review,
    navigationOptions: {
      title: "Reviews",
    },
  },
};

const Homestack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#333",
    headerStyle: {
      backgroundColor: "#eee",
      height: 100,
    },
  },
});

export default Homestack;
