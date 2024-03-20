import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text, FlatList, Dimensions} from "react-native";

export default function Newbook(props) {
    const Newbooks = [
        { "id": "1", "title": "A Teaspoon Earth and Sea", "uri": "https://i.pinimg.com/564x/48/d9/6c/48d96c502714e63cd2dcffb4b8fc0406.jpg" },
        { "id": "2", "title": "The Maker of Swans", "uri": "https://i.pinimg.com/736x/d2/0b/29/d20b291bd20bf99262d4dbdc41ded105.jpg" },
        { "id": "3", "title": "Alice in wonderland", "uri": "https://i.pinimg.com/736x/d3/4d/c1/d34dc16977d5a06b31fa0316e6a574f0.jpg" },
        { "id": "4", "title": "The hundred lies of Lizzie loveit", "uri": "https://i.pinimg.com/736x/9c/eb/f2/9cebf2cbb6b671672bb496f1e31367e1.jpg" },
        { "id": "5", "title": "Wave", "uri": "https://i.pinimg.com/564x/76/66/84/7666840a23cded4a54f7c0c089bce761.jpg" }
    ];

    return (
        <View style={props.style}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, color: "white"}}>NEW BOOK</Text>
                <Text style={{ color: "grey" }}>reccommend</Text>
            </View>
            <FlatList
                horizontal={true}
                // data={tours}
                data={Newbooks}
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