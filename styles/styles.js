import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container :{
    padding : 24,
    flex : 1,
    backgroundColor : "rgb(250,250,250)",
    justifyContent : 'flex-start'
},
framework : {
  fontFamily : 'semibold',
    fontSize : 20,
    color : '#333',
    marginVertical : 2,
},
  title :{
    fontFamily : 'semibold',
    fontSize : 20,
    color : '#333',
    marginTop: 16,
    borderTopWidth: 1,
    paddingTop : 10,
    borderTopColor: '#eee',
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
    justifyContent : 'center',
    // margin : 0
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
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 12,
    marginTop: 12
  },
  toggle :{
    marginBottom : 6,
    borderWidth : 1,
    borderColor : "#f2f2f2",
    borderRadius : 10,
    alignSelf : 'center',
    padding : 12
  },
  close : {
    marginBottom : 0,
    marginTop : 10,
  },
  modalContent : {
    flex : 1,
    backgroundColor : "rgb(250,250,250)"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical : 15
  },
})

export default styles;