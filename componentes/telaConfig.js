import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import Globais from './globais';

export default function telaConfig(){

    const [giros, setGiros]=useState(Globais.qtdeGiros)
    const [tempo, setTempo]=useState(Globais.tempEspera)

    const setaGiros=(v)=>{
        Globais.qtdeGiros=parseInt(v)
        setGiros(v)
    }

    const setarTempo=(v)=>{
        Globais.tempEspera=parseInt(v)
        setTempo(v)
    }

    return (
        <View>
            <Text>Quantidade de Giros</Text>
            <TextInput
            value={String(giros)}
            onChangeText={(valor)=>{setarGiros(valor)}}/>
        </View>
    )
}