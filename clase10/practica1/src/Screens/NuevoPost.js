import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { db, auth } from '../firebase/config';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensaje: '',
            error: '',
        };
    }

    onSubmit() {
        if (this.state.mensaje.length === 0) {
            this.setState({ error: 'El mensaje no puede estar vacío' });
        } else {
            db.collection('posts').add({
                    owner: auth.currentUser.email,
                    mensaje: this.state.mensaje,
                    createdAt: Date.now(),
                })
                .then((response) => {
                    this.props.navigation.navigate('HomeMenu');
                })
                .catch((error) => {
                    this.setState({ error: 'Hubo un error al crear el post' });
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Nuevo Post</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribí tu mensaje..."
                    multiline={true}
                    onChangeText={(text) => this.setState({ mensaje: text })}
                    value={this.state.mensaje}
                />
                {this.state.error ? (
                    <Text style={styles.error}>{this.state.error}</Text>
                ) : null}
                <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}>Publicar</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 100,
        borderColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        textAlignVertical: 'top',
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default NewPost;