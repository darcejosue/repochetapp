import { Children, PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export function Card({ argumento } : any ) {
  return (
   <Text style={styles.card}>
    {argumento}
   </Text>
  );
}

const styles = StyleSheet.create({
    card:{
        padding:15,
        borderWidth:1,
        borderRadius:5,
        marginBottom:10,
        width:280,
        textAlign: 'center'
      }
});
