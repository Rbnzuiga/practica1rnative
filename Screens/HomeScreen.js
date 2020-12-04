import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container2}>
        

            
            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                <Image style={styles.imagesize}
                    source={require('../assets/koffing.png')}
                />
            </TouchableOpacity>



        </View>

    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagesize: {
        width: 150,
        height: 150,
    },
})