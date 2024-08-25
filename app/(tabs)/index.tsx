import { Image, StyleSheet, Platform, Pressable, Text } from 'react-native';

import { useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import { Stock } from '@/components/Stock';

export default function Inventario() {
  const [maping, setMaping] = useState([1,2,3,4 ,5,6,7,8,9,10,11,12,13,14,15])
    return (
        <View style={styles.container}>
        <TextInput placeholder='Buscar..'
        style={styles.input}/>
        <ScrollView>
            {
             maping.map((mapping)=> <Stock articulo={maping[mapping-1]}
             key={mapping}/>)
            }
        </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input:{
    borderColor: '#666',
    fontSize:20,
    alignContent:'flex-start',
    borderBottomWidth:1,
    width:270,
    marginBottom:30
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
