import React,{useState} from 'react'
import {View,ScrollView,Image,Text,TouchableOpacity} from "react-native"


export default function List(props) {
  const data=Array.from(props.list)
//   data.map(e=>{
//       console.log(e)
//   })
    return (
        <ScrollView >
            {data.map((e,idx)=>{
                if(e.company_image_url===""){console.log(e)}
               return(  
                   <TouchableOpacity onPress={()=>{console.log(e.company_name)}}>
               <View style={{flexDirection:"row",borderTopColor:"grey",borderWidth:0.5}} key={e.company_id+Math.random()}>
               <Image style={{padding:20,marginLeft:10}} source={{
                    uri:e.company_image_url,
                    height:40,
                    width:20
                }}/>
                <View>
            <Text style={{marginLeft:20}} numberOfLines={0.5}>{e.company_name}</Text>
            
                </View>
                </View>
                </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}
