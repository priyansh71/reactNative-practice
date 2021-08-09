import React , {useState} from 'react';
import { Button, StyleSheet, Text, View ,TextInput } from 'react-native';


const Input = () => {

    const [name, setName] = useState("Priyansh")

return(


    <View>
        <Text style={styles.text}>Enter Name:</Text>
        <TextInput
         style= {styles.input} 
         placeholder= 'e.g. Priyansh'
         keyboardType='default'
         onChangeText= {
             (value) => setName(value)
         }
         />
         <Text style={styles.text}>
            The name is {name}
         </Text>
    </View>
    );
}


const styles = StyleSheet.create({
    input :{
        borderWidth : 1,
        borderColor : '#222',
        padding : 8,
        margin : 20,
        width : 200
     },
     text :{
         textAlign : 'center'
     }

  });
  

export default Input;