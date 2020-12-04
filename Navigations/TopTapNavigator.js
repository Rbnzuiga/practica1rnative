import React from 'react';
import {createMatrtialTopTapNavigator} from '@react-navigation/material-top-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Screens/HomeScreen';
import AnotherScreen from '../Screens/AnotherScreen'; 
import Contacts from '../Screens/Contacts';
import { Settings } from 'react-native';
import toasts from '../Screens/AnotherScreen';

const Tab = createMatrtialTopTapNavigator();


export default function TopTapNavigator(){
return(
<Tab.Navigator>

<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
        tabBarLabel:"",
        tabBarIcon:({color})=>(
            <Ionicons name={"ios-home"} size={20} color={color}/>
        )     
    }
    }
    />
  
<Tab.Screen
    name="Another"
    component={toasts}
    options={{
        tabBarLabel:"",
        tabBarIcon:({color})=>(
            <Ionicons name={"logo-youtube"} size={20} color={color}/>
        )     
    }
    }
    />
<Tab.Screen
    name="Settings"
    component={SettingsScreen}
    options={{
        tabBarLabel:"",
        tabBarIcon:({color})=>(
            <Ionicons name={"ios-mail"} size={20} color={color}/>
        )     
    }
    }
    />
    <Tab.Screen
    name="Contacts"
    component={Contacts}
    options={{
        tabBarLabel:"",
        tabBarIcon:({color})=>(
            <Ionicons name={"ios-contacts"} size={20} color={color}/>
        )     
    }
    }
    />
    <Tab.Screen
    name="About"
    component={AboutScreen}
    options={{
        tabBarLabel:"",
        tabBarIcon:({color})=>(
            <Ionicons name={"ios-help-circle"} size={20} color={color}/>
        ) 
    }
    }
    />
   

</Tab.Navigator>

)


}