import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Card from "../Components/Card";

class Characters extends Component {
  constructor() {
    super();
    this.state = {
        characters : []
    };

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ characters: data.results });
    })
    .catch((error) => {
      console.error("error", error);
    });

}
  render() {
    return (
      <View style={styles.container}>
        <Card characters={this.state.characters} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Characters;