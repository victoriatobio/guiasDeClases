import React, {Component} from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { auth } from '../firebase/config';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            loggedIn: false,
            error: "",
        }
    }

    onSubmit (){
        if (this.state.email.includes("@") == false) {
        
            this.setState({ error: "Email mal formateado" });
          } 
        else if (this.state.password.length < 6) {
            this.setState({ error: "La contraseña debe tener al menos 6 caracteres" });
          } 
        else {
            auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                this.props.navigation.navigate('HomeMenu');
            })
            .catch(error => {
                console.log('Error al loguear:', error.message);
                this.setState({error: error.message});
            })
      }}

    render(){
        return (
            <View style={styles.container}> 
                <Text style={styles.title}> Login </Text>
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
                    placeholder='Password'
                    secureTextEntry={true} 
                    onChangeText={ text => this.setState({password:text}) }
                    value={this.state.password}
                /> 
                <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}> Login </Text> 
                </Pressable> 
                <Pressable style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.buttonText}> Ir al registro</Text>
                </Pressable>
                <Text style={styles.errorText}>{this.state.error}</Text>
            
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
        width: '40%', 
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
        width: '40%', 
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

export default Login;