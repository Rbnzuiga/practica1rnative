import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import AnotherScreen from '../Screens/AnotherScreen'; 

const Stack = createStackNavigator();

export default function StackNavigation1(){
return(

<Stack.Navigator>
    <Stack.Screen name="HomeScreen" component ={HomeScreen}/>
    <Stack.Screen name="DetailsScreen" component ={DetailsScreen}/>
    <Stack.Screen name="AnotherScreen" component ={AnotherScreen}/>

</Stack.Navigator>

)
    
}