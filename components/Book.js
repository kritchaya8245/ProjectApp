import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text, FlatList, Dimensions} from "react-native";

export default function Book(props) {
    const books = [
        { "id": "1", "title": "The Bass Rock", "uri": "https://i.pinimg.com/564x/f4/44/77/f44477b725256dae83e268a933c7b067.jpg" },
        { "id": "2", "title": "More miracle than bird", "uri": "https://i.pinimg.com/564x/9f/21/c1/9f21c11b7af8723149f861bb921b7298.jpg" },
        { "id": "3", "title": "MoMo", "uri": "https://i.pinimg.com/736x/08/01/6c/08016c924e594d643a8c2c9e19253a57.jpg" },
        { "id": "4", "title": "Troubled drughters, twisted wives", "uri": "https://i.pinimg.com/564x/fe/a5/50/fea55005c0f5bb544be91171087677e6.jpg" },
        { "id": "5", "title": "Peter and The wolf", "uri": "https://i.pinimg.com/564x/17/a4/ae/17a4ae76d33654afe5ed9bbaa36f2561.jpg" }
    ];

    return (
        <View style={props.style}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, color: "white" }}>MY BOOK</Text>
                <Text style={{ color: "grey" }}>your bookshelf</Text>
            </View>
            <FlatList
                horizontal={true}
                // data={tours}
                data={books}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{marginRight: 10, marginTop: 10 }}>
                                <Image style={{ width : 150, height: 220, borderRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ marginTop: -30, height: 30, width: 150, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ fontSize: 20, color: "white" }}>{item.title}</Text>
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