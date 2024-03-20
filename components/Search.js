import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from './MyIcon';

export default function Home() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ marginHorizontal: 20, marginTop: -30, padding: 20, backgroundColor: '#eeeeee', padding: 10, borderRadius: 10}} >
                <TextInput style={{ fontSize: 20 }} placeholder="What're you looking for ?" />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10, padding: 20, backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }} >
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <MyIcon title="Novel" name="book" size={30} color="#212121" />
                    <MyIcon title="Biography" name="book" size={30} color="#212121" />
                    <MyIcon title="self help" name="book" size={30} color="#212121" />
                    <MyIcon title="Text book" name="book" size={30} color="#212121" />
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                    <MyIcon title="Comic" name="book" size={30} color="#212121" />
                    <MyIcon title="Business" name="book" size={30} color="#212121" />
                    <MyIcon title="History" name="book" size={30} color="#212121" />
                    <MyIcon title="More" name="ellipsis-h" size={30} color="#212121" />
                </View>
            </View>
        </View>
    );
}

