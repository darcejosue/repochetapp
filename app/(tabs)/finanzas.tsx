import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Finanzas() {
  const [maping, setMaping] = useState([1,2,3,4 ,5,6,7,8,9,10,11,12,13,14,15]) 

  return (
    <View style={styles.conteiner}>

      <View>
      <Text>Compras</Text>
      <TextInput style={styles.input} placeholder='C$'/>
      <Pressable >
        <Text style={styles.buttonMinus}>-</Text>
      </Pressable>
      </View>

      <View>
      <Text>Reparaciones</Text>
      <TextInput style={styles.input} placeholder='C$'/>
      <Pressable >
        <Text style={styles.buttonPlus}>+</Text>
      </Pressable>
      </View>

      <ScrollView>
      {
        maping.map((mapping) => <Text style={styles.card}
        key={mapping}>Holanda</Text>)
      }
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  buttonPlus:{
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#008f39',
    borderRadius:10,
    textAlign: 'center',
    color:'#fff',
    fontSize:20
  },
  buttonMinus:{
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F10',
    borderRadius:10,
    textAlign: 'center',
    color: '#fff',
    fontSize:20
  },
  conteiner: {
    padding:10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:10,
    marginBottom:10,
    textAlign: 'center',
    width:280
  },
  card:{
    padding:15,
    borderWidth:1,
    borderRadius:5,
    marginBottom:10,
    width:280
  }
});
