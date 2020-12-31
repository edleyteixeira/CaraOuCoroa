import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image,Button } from 'react-native';

export default function App() {

  const moedas = [
    require('./imagens/m1.png'),
    require('./imagens/m5.png'),
    require('./imagens/m1.png'),
    require('./imagens/m5.png'),
    require('./imagens/m1.png'),
    require('./imagens/m5.png'),
    require('./imagens/m1.png'),
    require('./imagens/m5.png'),
    require('./imagens/m1.png'),
    require('./imagens/m5.png')

  ]
  let iMoeda = 0
  const maxGiros = 20

  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda])

  async  function espera(tmp){
    function tempo(ms){
      return new Promise(resolve=>setTimeout(resolve,ms))
    }
    await tempo(tmp)
  }

  async function girarMoeda(){
    iMoeda = 2
    tempo = 1000
    for(let i=0; i < (maxGiros*8); i++){
      iMoeda++
      if(iMoeda>9){
        iMoeda=2
      }
      setMoedaAtual(moedas[iMoeda])
           
      await espera(tempo)

      if (tempo > 100)
        tempo = tempo-50 
      else
        tempo = tempo-10
    }
    let res=Math.floor(Math.random()*10)+1;
    if(res <= 5)
    res = 0
    else
    res=1
    setMoedaAtual(moedas[res])
  }
  return (

    <SafeAreaView style={estilos.container}>
     
        <Text>Cara ou Coroa?</Text>
        <Image source={moedaAtual}/>
        <Button
        title="Girar"
        onPress={()=>{girarMoeda()}} />
    </SafeAreaView>
    
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
