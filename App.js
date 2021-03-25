import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [numero, setNumero] = useState(0);

  function handleNumero(){

    const novo_numero = Math.floor(Math.random() * 100);

    setNumero(novo_numero);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.logo}>Gerador de números aleatórios</Text>

      <Text style={styles.numero}>{numero}</Text>
      
      <TouchableOpacity onPress={handleNumero} style={styles.botao}>
        <Text>
          Gerar
        </Text>
      </TouchableOpacity>
    </View>
    /*
    <View>
      <TouchableOpacity>
        <Text>
          Gerar
        </Text>
      </TouchableOpacity>
    </View>
    */
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 20,
    color: '#202421',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    fontSize: 36,
    color: '#202421',
    fontWeight: 'bold',
    paddingTop: 30
  },
  botao: {
    backgroundColor: '#32a852',
    width: '70%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
});