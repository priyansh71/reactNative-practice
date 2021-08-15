/** @format */

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../components/Header";

const screens = {
  AboutScreen: {
    screen: About,
    navigationOptions: (props) => {
      return {
        headerTitle: () => <Header navigation={props.navigation} title="About" />,
      };
    },
  },
};

const Aboutstack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#333",
    headerStyle: {
      backgroundColor: "#eee",
      height: 100,
    },
  },
});

export default Aboutstack;
