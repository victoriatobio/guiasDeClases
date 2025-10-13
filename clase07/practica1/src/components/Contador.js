import React, {Component} from "react";
import { Pressable, Text, View } from "react-native";

class Contador extends Component {
    constructor(props){
        super(props);
        this.state={
            contador: 0
        }
    }

    AumentarContador(){
        this.setState({contador: this.state.contador + 1})
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text2}> Cantidad de clicks: {this.state.contador} </Text>
                <Pressable onPress={() => this.AumentarContador()} style={styles.zonaClickeable}> 
                   <Text style={styles.text1}> Click aquí para contar </Text>  
                </Pressable>
            </View>
        )
    } 
}

const styles = {

    container:{
        marginVertical: 5
    }, 

    zonaClickeable: {
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius: 4,
        fontWeight: 'bold'
    },
    text1:{
        textAlign: "center"
    },
    text1:{
        textAlign: "center",
        fontWeight: "bold"
    }
    

}

export default Contador;