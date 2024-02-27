import { StatusBar } from 'expo-status-bar';
import { Text, View,Pressable,Image } from 'react-native';
import imge from '../../../assets/img/dennys.png';
import papel from '../../../assets/img/papel.png';
import pedra from '../../../assets/img/pedra.png';
import tesoura from '../../../assets/img/tesoura.png';
import caixa from '../../../assets/img/caixa.png';
import vs from '../../../assets/img/vs.png';
import styles from './style';
import { useState } from 'react';

export default function App() {

  const [jogador,setJogador] = useState(0);
  const [robo,setRobo] = useState(0);
  const [placarRobo,setPlacarRobo] = useState(0);
  const [placarJogador,setPlacarJogador] = useState(0);


  
  
  function pegadorDeNumero(valor){
    setJogador(valor);
    let maquina = Math.floor(Math.random()*3)+1;
    setRobo(maquina);
    placar();
   
    
  }
function placar(){
  if((jogador==1 && robo==2) || (jogador==2 && robo==3) || (jogador==1 && robo==3)){
    setPlacarRobo(placarRobo + 1)
    console.log(placarRobo)
   }
   else if((jogador==3 && robo==1) || (jogador==2 && robo==1) || (jogador==2 && robo==1)){
     setPlacarJogador(placarJogador + 1)
     console.log(placarJogador)
   }
   else{
    setPlacarJogador(placarJogador + 0)
    setPlacarRobo(placarRobo + 0)
    console.log(placarJogador)
    console.log(placarRobo)
   }
}

  function exibirPapeisPedras(valor){
   if(valor == 1){
    return  <Image source={pedra} style={styles.imgPPT} ></Image>
   }
   if(valor == 2){
    return <Image source={papel} style={styles.imgPPT} ></Image>

   }
   if(valor == 3){
    return <Image source={tesoura} style={styles.imgPPT} ></Image>
   }
   if(valor == 0){
    return <Image source={caixa} style={styles.imgCaixa}></Image>

   }

   
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.boxInicio}>
          <Image source={imge} style={styles.img} ></Image>
      </View>

   
      <View style={styles.boxPlacar}>
        <Text style={styles.placar_text}>Placar</Text>
      </View>
        <View style={styles.boxNumeracao}>
          <Text style={styles.placar_text}>{placarJogador}</Text>
         
          <Text style={styles.placar_text}>{placarRobo}</Text>
        </View>
     
      
     

      <View style={styles.BoxImg}>
        
        {exibirPapeisPedras(jogador)}
        <Image source={vs} style={styles.imgVS} ></Image>
        {exibirPapeisPedras(robo)}
      </View>

      <View style={styles.boxVS}>
      <Pressable  style={styles.buttonNP} 
        >
        <Text style={styles.textoNP}>Nova Partida</Text>
        </Pressable >
      </View>

      <View style={styles.pedrapapeltesoura}>

        <Pressable  style={styles.button} onPress={()=>pegadorDeNumero(1)}
        >
          <Image source={pedra} style={styles.imgPPT} ></Image>
        </Pressable >

        <Pressable  style={styles.button} onPress={()=>pegadorDeNumero(2)}
        >
          <Image source={papel} style={styles.imgPPT} ></Image>
       </Pressable >

       <Pressable  style={styles.button} onPress={()=>pegadorDeNumero(3)}
        >
        <Image source={tesoura} style={styles.imgPPT} ></Image>
       </Pressable >
      </View>
      
      
    </View>
  );
}

