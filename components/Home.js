import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
    return (
        <View>
            <View style = {{flexDirection: "row", padding: 10}}>
                <FontAwesome  name="book" size={20} color="orange" />
                <Text style={{color:"white"}}>BOOK</Text>
            </View>
            <View style = {{flexDirection: "row", backgroundColor: "white", padding: 10,marginVertical: 10, borderRadius: 10, height: 50, alignItems:"center"}}>
                <FontAwesome  name="search" size={20} color="orange" />
                <TextInput placeholder="Search…" />
            </View>
            <View style = {{flexDirection: "row", padding: 10, justifyContent:"space-between"}}>
                <Text style={{color:"white", fontSize:20}}>My Book</Text>
                <Text style={{color:"white", fontSize:14}}>See all</Text>
            </View>
            <View style = {{flexDirection: "row", padding: 10}}>
                <View style={{flexDirection: "column", backgroundColor: "white", width: 110, height: 200, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                    <Image style={{width:110, height:140}} source={require("../assets/home/book.jpg")}/>
                    <Text style={{textAlign:"center"}}>The Midnight Museum</Text>
                    <Text style={{textAlign:"center", color:"gray", fontSize:12}}>Lenny Wen</Text>
                </View>
                <View style={{flexDirection: "column", backgroundColor: "white", marginLeft:15 ,width: 110, height: 200, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                    <Image style={{width:110, height:140}} source={require("../assets/home/book2.jpg")}/>
                    <Text style={{textAlign:"center"}}>MOMO</Text>
                    <Text style={{textAlign:"center", color:"gray", fontSize:12}}>Lenny Wen</Text>
                </View>  
            </View>
            <View style = {{flexDirection: "row", padding: 10, justifyContent:"space-between"}}>
                <Text style={{color:"white", fontSize:20}}>Continue Reading</Text>
            </View>
            <View style = {{flexDirection: "row", padding: 10}}>
                <View style={{flexDirection: "row", backgroundColor: "white", width: 350, height: 180, borderRadius:10}}>
                    <Image style={{marginLeft:10, marginTop:10, borderRadius:10, width:110, height:160,}} source={require("../assets/home/book.jpg")}/>
                </View>
                <View style={{flexDirection: "row", backgroundColor: "white", marginLeft:15, width: 350, height: 180, borderRadius:10}}>
                    <Image style={{marginLeft:10, marginTop:10, borderRadius:10, width:110, height:160,}} source={require("../assets/home/book2.jpg")}/>
                </View>
            </View>
            <View style = {{flexDirection: "row", padding: 10, justifyContent:"space-between"}}>
                <Text style={{color:"white", fontSize:20}}>New Arrival</Text>
                <Text style={{color:"white", fontSize:14}}>See all</Text>
            </View>
            <View style = {{flexDirection: "row", padding: 10}}>
                <View style={{flexDirection: "column", backgroundColor: "white", width: 110, height: 180, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <Image style={{width:110, height:140}} source={require("../assets/home/book3.jpg")}/>
                    <Text>Book</Text>
                </View>
                <View style={{flexDirection: "column", backgroundColor: "white", marginLeft:15, width: 110, height: 180, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                    <Image style={{width:110, height:140}} source={require("../assets/home/book4.jpg")}/>
                    <Text>Book</Text>
                </View>
                <View style={{flexDirection: "column", backgroundColor: "white", marginLeft:15, width: 110, height: 180, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                    <Image style={{width:110, height:140}} source={require("../assets/home/book5.jpg")}/>
                    <Text>Book</Text>
                </View>
                <View style={{flexDirection: "column", backgroundColor: "white", marginLeft:15, width: 110, height: 180, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <Image style={{width:110, height:140}} source={require("../assets/home/book6.jpg")}/>
                    <Text>Book</Text>
                </View>
            </View>
        </View>
    );
}