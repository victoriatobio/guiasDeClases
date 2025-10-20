import React from 'react';
import { Text, View, Pressable } from 'react-native';

function Profile(props) {
        return(
            <View> 
                <Text style={styles.texto} > Profile </Text>
                <Pressable  style={styles.clickeable} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.texto2} >Desloguearse</Text>
                </Pressable>
            </View> 
        )
    }


const styles = {
        clickeable: {
            padding: 15, 
            backgroundColor: "lightblue",
            marginBottom: 10,
            borderRadius: 4, 
            width: 150, 
            marginLeft: 10, 
            textAlign: "center",
        },
        texto: {
            fontWeight: 'bold', 
            fontSize: 40, 
            marginBottom: 10,
            marginLeft: 10
        },
        texto2: {
            fontSize: 17
        }
    }


export default Profile;