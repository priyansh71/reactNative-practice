import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Review from "../screens/Review";

const screens = {
    HomeScreen : {
        screen : Home,
        navigationOptions : {
            title : 'CSS Frameworks'
        }
    },
    ReviewScreen : {
        screen : Review,
        navigationOptions : {
            title : 'Reviews'
        }
    }
    
}

const Homestack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerTintColor : '#333',
        headerStyle : {
            backgroundColor : '#eee',
            height : 100,
        }
    }
})

export default createAppContainer(Homestack)