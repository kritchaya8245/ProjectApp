import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from './MyIcon';

export default function Home() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ marginHorizontal: 20, marginTop: 10, padding: 20, backgroundColor: '#424242', padding: 10, borderRadius: 10 }} >
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <MyIcon title="Novel" name="book" size={30} color="#eeeeee" />
                    <MyIcon title="Biography" name="book" size={30} color="#eeeeee" />
                    <MyIcon title="self help" name="book" size={30} color="#eeeeee" />
                    <MyIcon title="Text book" name="book" size={30} color="#eeeeee" />
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

