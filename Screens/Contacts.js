import React from 'react';
import {StyleSheet, Text, View,  } from 'react-native'


export default function Contacts(){
    return(
<View style= {styles.container}>
    <Text>Contacts Screen</Text>
</View>
    )
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});
