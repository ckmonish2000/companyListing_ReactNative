import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Dimensions} from 'react-native';
import {Link} from "react-router-native"
import List from "./List";

export default function Main({navigation}) {
  const [prevPg, setprevPg] = useState(0)
  const [nextPg, setnextPg] = useState(1)
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

  const handleNext=()=>{
    let prevs=next;
    let nexts=next+10;
    setnext(nexts);
    setprev(prevs);
    setprevPg(nextPg);
    setnextPg(nextPg+1);
  }

  const handlePrev=()=>{
    setnextPg(prevPg)
    setprevPg(prevPg-1)
    if(prev===10){
      let nexts=20;
    let prevs=0;
    setnext(nexts);
    setprev(prevs);
    }else{
    let nexts=prev;
    let prevs=prev-10;
    setnext(nexts);
    setprev(prevs);
  }
  }


  return (
    <View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="test" onPress={()=>{navigation.navigate("tester")}}/>
      <View style={{height:Dimensions.get('window').height-100,width:Dimensions.get('window').width}}>
      <List list={companies}/>
      </View>

      <View style={{flexDirection:"row",position:"absolute",bottom:1,padding:10}}>
        <View style={{margin:10,width:"50%"}}>
      <Button color="orange"disabled={prevPg===0}  onPress={handlePrev}  title={prevPg.toString()} />
        </View>
        <View style={{margin:10,width:"50%"}}>
      <Button color="orange"  onPress={handleNext} title={nextPg.toString()} />
      </View>
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
