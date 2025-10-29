import React, {Component} from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { db } from "../firebase/config";


class Usuarios extends Component{
    constructor(props){
        super(props);
        this.state={
            usuarios: [],
            loading: true,
        }
    }

    componentDidMount(){
        db.collection('users').onSnapshot((docs) => {
            let usuarios = [];
            docs.forEach(doc => {
                usuarios.push({
                    id: doc.id,
                    data: doc.data()
                })
            this.setState({
                usuarios: usuarios,
                loading: false
            })
            })
        })
    }

    render(){
        return(
            <View>
                <Text>Usuarios</Text>
                {console.log(this.state.usuarios)}

                {this.state.loading ? (
                    <ActivityIndicator size="large" color="#0df055ff" />
                ) : (
                    <FlatList
                        data={this.state.usuarios}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => ( <Text> {item.data.email} </Text>)}
                    />
                )}
            </View>
        )
    }
}

export default Usuarios;