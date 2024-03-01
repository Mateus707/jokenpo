import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    img:{ 
      width: 290,
      height: 150,
    },
    imgPPT:{
      width:97,
      height: 80,
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
      backgroundColor: 'white',
      width: 200,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 2,
      borderColor: 'gold',
      color: 'gold',
      fontSize: '18pt',
    },
    pedrapapeltesoura:{
      flexDirection:'row',
      justifyContent: "space-evenly",
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
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent:'center',
    padding: 40,
  },
  modalText:{
    flex:1,
  },

  boxModal: {
    flex: 0.33,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'gold',
    backgroundColor: 'white',
  
  },

  textFinal: {
    fontSize: 24,
    color: 'gold',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  }
  
  });