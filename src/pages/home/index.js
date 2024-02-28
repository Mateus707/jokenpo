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

  const [jogador, setJogador] = useState(0)
  const [computador, setComputador] = useState(0)
  const [placarJogador, setPlacarJogador] = useState(0)
  const [placarComputador, setPlacarComputador] = useState(computador)



  function jogar(valor) {

    let maquina;


    maquina = Math.floor(Math.random() * 3) + 1;
    setJogador(valor);
    setComputador(maquina);






    if (valor == 1 && maquina == 2 || valor == 3 && maquina == 1 || valor == 2 && maquina == 3) {

      setPlacarComputador(placarComputador + 1)
    }
    if (valor == 2 && maquina == 1 || valor == 1 && maquina == 3 || valor == 3 && maquina == 2) {
      setPlacarJogador(placarJogador + 1)
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
         
          <Text style={styles.placar_text}>{placarComputador}</Text>
        </View>
     
      
     

      <View style={styles.BoxImg}>
        
        {exibirPapeisPedras(jogador)}
        <Image source={vs} style={styles.imgVS} ></Image>
        {exibirPapeisPedras(computador)}
      </View>

      <View style={styles.boxVS}>
      <Pressable  style={styles.buttonNP} 
        >
        <Text style={styles.textoNP}>Nova Partida</Text>
        </Pressable >
      </View>

      <View style={styles.pedrapapeltesoura}>

        <Pressable  style={styles.button} onPress={()=>jogar(1)}
        >
          <Image source={pedra} style={styles.imgPPT} ></Image>
        </Pressable >

        <Pressable  style={styles.button} onPress={()=>jogar(2)}
        >
          <Image source={papel} style={styles.imgPPT} ></Image>
       </Pressable >

       <Pressable  style={styles.button} onPress={()=>jogar(3)}
        >
        <Image source={tesoura} style={styles.imgPPT} ></Image>
       </Pressable >
      </View>
      
      
    </View>
  );
}

