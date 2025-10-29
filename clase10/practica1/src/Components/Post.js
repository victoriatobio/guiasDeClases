import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { db } from '../firebase/config';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    db.collection('posts').onSnapshot((docs) => {
        let postsActualizados = [];
        docs.forEach((doc) => {
          postsActualizados.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        this.setState({
          posts: postsActualizados,
          loading: false,
        });
      });
  }

  mostrarPublicacion({ item }) {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.email}>{item.owner}</Text>
        <Text style={styles.mensaje}>{item.mensaje}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="orange" />
        ) : (
          <FlatList
            data={this.state.posts}
            keyExtractor={(item) => item.id}
            renderItem={this.mostrarPublicacion}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#f8f8f8',
      paddingHorizontal: 10,
    },
    postContainer: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 10,
      alignSelf: 'center',
      width: '95%',   
    },
    email: {
      fontWeight: 'bold',
      color: '#4682b4', 
      fontSize: 16,
      marginBottom: 8,
    },
    mensaje: {
      fontSize: 18,
      marginBottom: 8,
    },
});

export default Post;