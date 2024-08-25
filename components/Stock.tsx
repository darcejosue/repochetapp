
import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export function Stock({ articulo } : any ) {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.nombre}>Nombre del articulo  {articulo}</Text>
      <Text style={styles.cantidad}>cantidad del artiulo</Text>
      <Text style={styles.precio}>precio del artiulo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nombre: {
    fontSize: 24,
  },
  cantidad: {
    fontSize: 15,
  },
  precio: {
    fontSize: 12,
    color: "red",
  },
  conteiner: {
    padding:10,
    margin: 5,
    backgroundColor: "#ff8",
    borderRadius: 10,
  },
});
