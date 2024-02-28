import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    img:{ 
      width: 290,
      height: 150,
    },
    imgPPT:{
      width:120,
      height: 90,
    },
    placar_text:{
      textAlign: 'center',
      flex:1,
      width:'100',
      fontSize: 24, 
      fontWeight:'bold'
    },
    boxInicio:{
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex:1,
      width:'100'
    },
    BoxImg:{
      flexDirection:'row',
      justifyContent: 'space-between',
      flex:1,
      width:'100'
    },
    boxVS:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      width:'100'
    },
    boxPlacar:{
     
      justifyContent:'center',
      alignItems:'center',
      flex:0.5,
        width:'100',
      },
      boxNumeracao:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        flex:0.5,
        width:'100',
      },
   
    button:{
      justifyContent:'center',
      alignItems:'center',
    },
    buttonNP:{
      backgroundColor: '#808080',
      width: 200,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 2,
      borderColor: '#000'

     
  
    },
    pedrapapeltesoura:{
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    imgCaixa:{
      width:100,
      height:100,
    },
    imgVS:{
      width:160,
      height:100,
    },
    textoNP:{
      textAlign:'center',
      textTransform:'uppercase',
      fontWeight: 'bold'
  },
  modal:{
    flex: 0.25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignContent:'center'
  
  },
  modalText:{
    flex:1,
    color:'white',
    
  }
  
  });