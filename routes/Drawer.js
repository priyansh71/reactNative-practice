import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Homestack from "./Homestack"
import Aboutstack from "./Aboutstack"

const screens = {
    Home : {
        screen : Homestack
    },
    About : {
        screen : Aboutstack
    }
}

const rootDrawer = createDrawerNavigator(screens)

export default createAppContainer(rootDrawer);