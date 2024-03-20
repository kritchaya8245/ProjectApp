import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, Text, } from "react-native";

export default function Cover() {
    return (        
        <View>
            <View style={{padding:10 ,flexDirection:'row', justifyContent:'space-between'}}>
                <FontAwesome name="bars" size={30} color="#f5f5f5" />
                <View style={{alignContent:'center',flexDirection:'row'}}>
                    <FontAwesome name="book" size={30} color="#f5f5f5"/>
                    <Text style={{marginTop:2, marginLeft:5,fontSize:20, color:"#f5f5f5"}}>BOOK</Text>
                </View>
                <FontAwesome name="user" size={30} color="#f5f5f5" />
            </View>
            <View style={{marginTop:5, flexDirection:'row'}}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }} source={require("../assets/home/bookcover.jpg")} />
            </View>
        </View>
    );
}