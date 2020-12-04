import React from  'react'
import {StyleSheet, Text, View, Button } from 'react-native'


const DetailsScreen = ({navigation}) => {
return(
<View style={styles.container}>
<Text>Details Screen</Text>

<Button title="vamos a la otra pantalla"
onPress = {()=>navigation.navigate ('AnotherScreen') }

/>
<Button title="Regresamos a home"
onPress = {()=>navigation.goBack()}
/>

</View>
 

)

}
export default DetailsScreen 

const styles = StyleSheet.create(
{
    container: {
     flex:1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'space-around',   
  
    },
}
);


