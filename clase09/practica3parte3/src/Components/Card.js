import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <FlatList
      data={props.characters}
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatlist}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>Especie: {item.species}</Text>
          <Text style={styles.price}>Género: {item.gender}</Text>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center", 

  },
  description: {
    fontSize: 15,
    marginBottom: 5,
    color: "#333",
    textAlign: "center", 
  },
  price: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: "center", 
  },
});

export default Card;