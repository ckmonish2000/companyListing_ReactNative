import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Dimensions} from 'react-native';
import {Link} from "react-router-native"
import List from "./List";

export default function Main({navigation}) {
  const [next, setnext] = useState(20)
  const [prev, setprev] = useState(0)
  const [companies, setcompanies] = useState({})
  
  useEffect(()=>{
    fetch(`http://dev.meetworks.in:9000/companies/getallcompanies/${prev}/${next}`)
    .then(response=>{
      response.json().then(data=>setcompanies(data))})
      .catch(err=>console.log(err))
  },[next])

  // console.log(companies)



  const navi=(name,img,desc)=>{
    navigation.navigate("tester",{img:img,name:name,desc:desc})
  }
  const incrnxt=()=>{
    setnext(next+10)
  }

  return (
    <View style={styles.container}>
      
     
      <View style={{height:Dimensions.get('window').height-80,width:Dimensions.get('window').width}}>
      <List list={companies} navi={navi} incr={incrnxt}/>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center" ,
    justifyContent:"center"   
  },
 
});
