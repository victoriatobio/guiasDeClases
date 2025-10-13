import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PressableBoton from '../components/PressableBoton';
import Contador from '../components/Contador';

function Home() {
        return(
            <View style={styles.container}> 
                <Text style={styles.text}> Hola mundo! </Text>
                <PressableBoton/>
                <Contador/>
            </View> 
        )
    }

const styles = StyleSheet.create(
    {
        container: {
            padding: 10 
        },
        text: {
            textAlign: "center"
        }
    }
)

export default Home;