import React from 'react';
import { Text, View } from 'react-native';
import DynamicForm from '../Components/DynamicForm';

function Home() {
        return(
            <View> 
                <Text style={styles.texto}> Home </Text>
                <DynamicForm/>
            </View> 
        )
}

const styles = {
    texto: {
        fontWeight: 'bold', 
        fontSize: 40, 
        marginBottom: 10,
        marginLeft: 10
    }
}
export default Home;