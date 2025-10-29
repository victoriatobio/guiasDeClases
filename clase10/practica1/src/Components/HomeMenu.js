import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Usuarios from "../Screens/Usuarios"; 
import NuevoPost from "../Screens/NuevoPost";


function HomeMenu() {
  return (
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen name="Home" component={ Home }  options={{ tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }} />
            <Tab.Screen name="Profile" component={ Profile } options={{ tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" /> }} />
            <Tab.Screen name="Usuarios" component={Usuarios} options={{ tabBarIcon: () => <Feather name="users" size={24} color="black" /> }}  />      
            <Tab.Screen name="NuevoPost" component={ NuevoPost } options={{ tabBarIcon: () => <MaterialIcons name="post-add" size={24} color="black" /> }} />
        </Tab.Navigator>
  )
}
export default HomeMenu;