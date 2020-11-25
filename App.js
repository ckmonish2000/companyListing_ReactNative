import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Dimensions} from 'react-native';
import List from "./components/List";
import Main from "./components/main";
import Test from "./components/test"
import {NativeRouter, Route} from "react-router-native"
import "react-native-gesture-handler"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const stack=createStackNavigator();
export default function App(){
  return(
    // <View style={styles.container}>
    // <Main/>
    // </View>
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Home" component={Main} options={{title:"Welcome"}}/>
      <stack.Screen name="tester" component={Test} options={{title:"test"}}/>
    </stack.Navigator>
    </NavigationContainer>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center" ,
    justifyContent:"center"   
  },
 
});
