import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container :{
    padding : 24,
    flex : 1,
    backgroundColor : "rgb(250,250,250)",
    justifyContent : 'flex-start'
},
  title :{
    fontFamily : 'semibold',
    fontSize : 20,
    color : '#333',
    marginVertical : 3
  },
  paragraph : {
      marginVertical : 15,
      fontFamily : 'light',
      fontSize: 17
  },
  header :{
    width : '100%',
    height : '100%', //of deafult stack header
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  headerText :{
    fontWeight: '700',
    letterSpacing : 0.3,
    color : "#333",
    fontSize : 24
  },
  icon : {
    position : 'absolute',
    left : 10
  },
  card: {
    borderRadius: 6,
    elevation: 2,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  }
});

export default styles;