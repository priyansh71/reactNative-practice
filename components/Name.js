import React , {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Name = () => {

    const [person, setPerson] = useState({
      name: "Mario",
      age : 40
    })
  
    const handleperson = () =>{
      setPerson({
        name : "Luigi",
        age : 50
      })
    }
  
    return(
        <View>
    <View style = {styles.body} >

        <Text>
        His name is {person.name}.
    </Text>

    <Text>
        His age is {person.age}.
    </Text>
    </View>

    <View style={styles.button} >
        <Button title='Click me' onPress={handleperson}  />
    </View>
    </View>
    );
}


const styles = StyleSheet.create({
    body :{
      backgroundColor : 'pink',
      padding: 30,
      margin: 20,
      borderRadius : 15,
     },
     button : {
       marginTop : 20,
     }
  });
  

export default Name;