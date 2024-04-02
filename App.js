import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [numeros, setNumeros] = useState([]);

  const gerarNumeroAleatorio = () => {
    const novosNumeros = [];
    for (let i = 0; i < 6; i++) {
      novosNumeros.push(Math.floor(Math.random() * 100)); 
    }
    return novosNumeros

  };
  const alterarEstado = () =>{
    const geraNumberoAleatorio  = gerarNumeroAleatorio()
    setNumeros(geraNumberoAleatorio)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Gerar Números" onPress={alterarEstado} />
      {numeros.length > 0 && numeros.map((numero, index) => (
        <Text key={index}>{numero}</Text>
      ))}
    </View>
  );
}
