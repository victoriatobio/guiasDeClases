import React, {Component} from "react";
import { Pressable, Text } from "react-native";

class PressableBoton extends Component {
    Clickear(){
        console.log("me clickearon")
    }
    
    render(){
        return(
            <Pressable onPress={()=> this.Clickear()} style={styles.clickeable}> 
                <Text style={styles.text}> clickeame </Text>
            </Pressable>
        )
    } 
}

const styles = {
    clickeable:{
        padding: 4, 
        backgroundColor: "#CCC",
        marginBottom: 10,
        borderRadius: 4
    },
    text:{
        textAlign: "center",
        fontWeight: 'bold'
    }
}

export default PressableBoton;