import React, {Component} from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            username: "",
            password: "",
        }
    }

    onSubmit(){
        console.log('Datos del usuario:')
        console.log('Email:', this.state.email)
        console.log('Usuario:', this.state.username)
        console.log('Contraseña:', this.state.password)
    }

    render(){
        return (
            <View style={styles.container}> 
                <Text style={styles.title}>Register</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    placeholder='Email'
                    onChangeText={ text => this.setState({email:text}) }
                    value={this.state.email} 
                />
                <TextInput  
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Username'
                    onChangeText={ text => this.setState({username:text}) }
                    value={this.state.username}
                /> 
                <TextInput  
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Password'
                    secureTextEntry={true} 
                    onChangeText={ text => this.setState({password:text}) }
                    value={this.state.password}
                /> 
                <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}> Submit </Text> 
                </Pressable> 
                <Pressable style={styles.button} onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText} >Ir al Login</Text>
                </Pressable>
            </View>
          );
       }
    
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    input: {
        width: '40%', // Changed from '100%' to '80%'
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        padding: 10, 
        backgroundColor: 'lightblue',
        borderRadius: 10,
        width: '40%', // Changed from '100%' to '80%'
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
    }
}

export default Register;
