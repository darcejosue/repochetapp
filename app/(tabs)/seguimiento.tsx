import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useState } from 'react';
import { Card } from '@/components/Card';

export default function Documentacion() {
  const [maping, setMaping] = useState([1,2,3,4 ,5,6,7,8,9,10,11,12,13,14,15]) 
    
  return(
   <View style={styles.conteiner}>
    <TextInput 
    placeholder='Nombre del cliente'
    style={styles.input}
    />
    <TextInput 
    placeholder='Reparación y/o pieza'
    style={styles.input}
    />
    <Pressable style={styles.button}>
        <Text>Agregar</Text>
    </Pressable>
    {
        maping.map((mapping) => <Card key={mapping} argumento="HoliWIS"/>)
    }
   </View>
  );
}

const styles = StyleSheet.create({
  button:{
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F84',
    borderRadius:10
  },
  conteiner: {
    padding:10,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:10,
    marginBottom:10,
    textAlign: 'center',
  }
});
