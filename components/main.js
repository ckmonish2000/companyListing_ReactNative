import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button} from 'react-native';

export default function Main() {
  const [next, setnext] = useState(10)
  const [prev, setprev] = useState(0)
  const [companies, setcompanies] = useState({})
  
  useEffect(()=>{
    fetch(`http://dev.meetworks.in:9000/companies/getallcompanies/${prev}/${next}`)
    .then(response=>{
      response.json().then(data=>setcompanies(data))})
      .catch(err=>console.log(err))
  },[next])

  console.log(companies)

  const handleNext=()=>{
    let prevs=next;
    let nexts=next+10;
    setnext(nexts);
    setprev(prevs);
  }

  const handlePrev=()=>{
    let nexts=prev;
    let prevs=prev-10;
    setnext(nexts);
    setprev(prevs);
  }


  return (
    <View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
      
      <View style={{justifyContent:"flex-end"}}>
        <View style={{margin:10,width:"50%"}}>
      <Button color="orange" onPress={handlePrev}  title={prev.toString()} />
        </View>
        <View style={{margin:10,width:"50%"}}>
      <Button color="orange" onPress={handleNext} title={next.toString()} />
      </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",
    justifyContent:"center",
    

    
  },
 
});
