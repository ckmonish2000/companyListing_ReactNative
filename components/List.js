import React,{useState} from 'react'
import {View,ScrollView,Image,Text} from "react-native"


export default function List(props) {
  const data=Array.from(props.list)
  data.map(e=>{
      console.log(e)
  })
    return (
        <ScrollView >
            {data.map((e,idx)=>{
               return(  
               <View style={{flexDirection:"row",marginBottom:5}} key={e.company_id+Math.random()}>
               <Image source={{
                    uri:e.company_image_url,
                    height:40,
                    width:40
                }}/>
                <View>
            <Text style={{marginLeft:20}} numberOfLines={0.5}>{e.company_name}</Text>
            
                </View>
                </View>
                )
            })}
        </ScrollView>
    )
}
