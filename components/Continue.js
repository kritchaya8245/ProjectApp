import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text, FlatList, Dimensions } from "react-native";

export default function Continue(props) {
    const continues = [
        { "id": "1", "title": "The Bass Rock", "page": "24 of 240", "writer": "Max Poster", "uri": "https://i.pinimg.com/564x/f4/44/77/f44477b725256dae83e268a933c7b067.jpg" },
        { "id": "2", "title": "More Miracle", "page": "36 of 360", "writer": "Alice Miller", "uri": "https://i.pinimg.com/564x/9f/21/c1/9f21c11b7af8723149f861bb921b7298.jpg" },
        { "id": "3", "title": "MOMO", "page": "36 of 360", "writer": "Michael Ende", "uri": "https://i.pinimg.com/736x/08/01/6c/08016c924e594d643a8c2c9e19253a57.jpg" },
        { "id": "4", "title": "Troubled Daughters", "page": "36 of 360", "writer": "Sara Weinmar", "uri": "https://i.pinimg.com/564x/fe/a5/50/fea55005c0f5bb544be91171087677e6.jpg" },
        { "id": "5", "title": "Peter and The Wolf", "page": "36 of 360", "writer": "John", "uri": "https://i.pinimg.com/564x/17/a4/ae/17a4ae76d33654afe5ed9bbaa36f2561.jpg" }
    ];

    return (
        <View style={props.style}>
            <View>
                <Text style={{ fontSize: 20, color: "white" }}>CONTINUE READ</Text>
                <Text style={{ color: "grey" }}>your bookshelf</Text>
            </View>
            <FlatList
                horizontal={true}
                // data={tours}
                data={continues}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10, marginTop: 10 }}>
                                <View style={{ marginRight: 10, marginTop: 10 }}>
                                    <Image style={{ width: 150, height: 220, borderRadius: 10 }} source={{ uri: item.uri }} />
                                </View>
                                <View style={{marginTop:5}}>
                                    <Text style={{fontSize:18, color:'white'}}>{item.title}</Text>
                                    <Text style={{color:'#424242'}}>{item.writer}</Text>
                                    <Text style={{color:'white'}}>{item.page}</Text>
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