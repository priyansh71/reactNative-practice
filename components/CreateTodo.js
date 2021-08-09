import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const CreateTodo = (props) =>{

    const [text, setText] = useState("")

    const handletodo = (value) =>{
        setText(value)
    }

    return(
        <View>
            <TextInput
                placeholder='Type here..'
                onChangeText={handletodo}
                style={styles.input}
             />
             <View style={styles.button}>
             <Button
                onPress={() => {
                    props.submitTodo(text)
                    }}
                title='Add todo'
                color='#F5116E'
                
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input :{
        marginBottom : 19,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomColor : '#111',
        borderBottomWidth : 2
    },
    button :{
        width : 200,
        marginLeft : 60,
        marginVertical : 10,
    }
  });
  
  export default CreateTodo;
  