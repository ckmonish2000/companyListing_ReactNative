import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Dimensions} from 'react-native';
import List from "./components/List";

export default function App() {
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
  }

  const handlePrev=()=>{
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
      
      <View style={{height:Dimensions.get('window').height-130,width:Dimensions.get('window').width}}>
      <List list={companies}/>
      </View>

      <View style={{flexDirection:"row",position:"absolute",bottom:10,padding:10}}>
        <View style={{margin:10,width:"50%"}}>
      <Button color="orange"disabled={prev===0}  onPress={handlePrev}  title={prev.toString()} />
        </View>
        <View style={{margin:10,width:"50%"}}>
      <Button color="orange"  onPress={handleNext} title={next.toString()} />
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
