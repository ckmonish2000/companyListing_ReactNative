import React from 'react'
import {View,Text, Button,Dimensions,Image,StyleSheet} from "react-native"


export default function Test({navigation,route}) {
    return (
      <View style={styles.container} >
        <View style={{padding:20,justifyContent:"center",alignItems:"center"}}>
      <Image  source={{
                    uri:route.params.img,
                    height:Dimensions.get("window").height-500,
                    width:Dimensions.get('window').width
                }}/>
        </View>
                <View style={{padding:10,margin:20,borderRadius:20,backgroundColor:"white"}}>
                  <Text>Description</Text>
                  <Text>{route.params.desc}</Text>
                </View>
                {/* <Text>test</Text> */}
      </View>
    )
  }

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    alignContent:"center"
  }
})
