import React from "react";
import {Image } from 'react-native';
import { StyleSheet } from 'react-native';

function Imagee() {
    return <Image style={styles.image} 
            source={require('../../assets/zonaMedia.jpeg')}
            resizeMode='contain'/>
  }
  
  const styles = StyleSheet.create({
     image: {
      height: 400,
      marginTop: 20,
    },
  }) 

  export default Imagee;