import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, Text, TextInput, FlatList, } from "react-native";

export default function Cover(props) {
    const continues = [
        { "id": "1", "title": "24 of 240", "uri": "https://i.pinimg.com/564x/36/a0/85/36a085785eabcc6add04d35e8c97be37.jpg" },
        { "id": "2", "title": "36 of 360", "uri": "https://i.pinimg.com/564x/e8/a3/43/e8a3438695addeaccc69be70eb7fb501.jpg" },
        { "id": "3", "title": "48 of 480", "uri": "https://i.pinimg.com/564x/d5/90/44/d59044c137c86e37dddfeb6b115f43d4.jpg" },
        { "id": "4", "title": "50 of 500", "uri": "https://i.pinimg.com/564x/12/4a/b4/124ab4c1c218a7d2fb979021898924e0.jpg" },
        { "id": "5", "title": "28 of 280", "uri": "https://i.pinimg.com/564x/32/65/b7/3265b7b34eede667d41e269f917bb12c.jpg" }
    ];

    return (        
        <View style={props.style}>
            <View style={{padding:10 ,flexDirection:'row'}}>
                <FontAwesome style={{marginTop:10, marginLeft:5}} name="bars" size={24} color="#eeeeee" />
                <View style={{flexDirection:'row',marginHorizontal: 20, marginTop: 5, backgroundColor: '#424242', padding: 5, borderRadius: 10, width:320}}>
                    <TextInput style={{ fontSize: 14 }} placeholder="What're you looking for ?" />
                </View>
                <FontAwesome style={{marginLeft:-10,marginTop:10}} name="search" size={24} color="#eeeeee" />
                <FontAwesome style={{marginLeft: 10,marginTop:10}} name="bell" size={24} color="#eeeeee" />
            </View>
            <FlatList style={{borderTopWidth: 1, borderColor:'#eeeeee'}}
                horizontal={true}
                // data={tours}
                data={continues}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{marginTop: 2, marginLeft:20 }}>
                                <View style={{ alignItems:'center', marginTop: 10 }}>
                                    <Image style={{ width: 410, height: 200, borderRadius: 10 }} source={{ uri: item.uri }} />
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

<View style={{marginTop:5, flexDirection:'row'}}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }} source={require("../assets/home/bookcover.jpg")} />
            </View>
