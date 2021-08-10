import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Entypo } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const CreateTodo = (props) =>{

    const [text, setText] = useState("")

    const handletodo = (value) =>{
        setText(value)
    }

    let [fontsLoaded] = useFonts({
        'Font': require('../assets/Architects_Daughter/font.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
      else{

    return(
        <View>
            <TextInput
                placeholder='Type here..'
                onChangeText={handletodo}
                style={styles.input}
             />
             <View style={styles.button}>
                <Entypo name="add-to-list" size={30} color='#F5116E' onPress={() => {
                    props.submitTodo(text)
                    }} />
            </View>
        </View>
    )}
}


const styles = StyleSheet.create({
    input :{
        marginBottom : 19,
        paddingHorizontal : 8,
        paddingVertical : 8,
        borderBottomColor : '#111',
        borderBottomWidth : 2,
        fontFamily : 'Font',
        fontWeight: '500',
        fontSize : 17
    },
    button :{
        marginRight : 5,
        marginVertical : 10,
        flexDirection : "row-reverse"
    }
  });
  
  export default CreateTodo;
  