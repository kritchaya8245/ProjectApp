import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function List() {
    return (
        <ScrollView>
            <View style={{ flexDirection: "column", backgroundColor: '#212121', marginTop: 10, marginLeft: 2 }}>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: 450, height: 180, borderRadius: 10 }}>
                    <Image style={{ marginLeft: 10, marginTop: 10, borderRadius: 10, width: 110, height: 160, }} source={require("../assets/home/book.jpg")} />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>The Midnight Museum</Text>
                        <Text style={{ color: 'gray' }}>Lenny Wen</Text>
                        <View style={{ marginTop: 20, backgroundColor: "black", width: 300, height: 20, borderRadius: 10 }}></View>
                        <View style={{ marginTop: -15, marginLeft: 5, backgroundColor: "tomato", width: 100, height: 10, borderRadius: 10 }}></View>
                        <Text style={{ marginTop: 10, marginLeft: 5, color: 'gray' }}>68 of 280</Text>
                        <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
                            <FontAwesome name="trash" size={30} color="gray" />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: 450, height: 180, borderRadius: 10, marginTop: 10 }}>
                    <Image style={{ marginLeft: 10, marginTop: 10, borderRadius: 10, width: 110, height: 160, }} source={require("../assets/home/book2.jpg")} />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>MOMO</Text>
                        <Text style={{ color: 'gray' }}>Lenny Wen</Text>
                        <View style={{ marginTop: 20, backgroundColor: "black", width: 300, height: 20, borderRadius: 10 }}></View>
                        <View style={{ marginTop: -15, marginLeft: 5, backgroundColor: "tomato", width: 200, height: 10, borderRadius: 10 }}></View>
                        <Text style={{ marginTop: 10, marginLeft: 5, color: 'gray' }}>210 of 380</Text>
                        <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
                            <FontAwesome name="trash" size={30} color="gray" />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: 450, height: 180, borderRadius: 10, marginTop: 10 }}>
                    <Image style={{ marginLeft: 10, marginTop: 10, borderRadius: 10, width: 110, height: 160, }} source={require("../assets/home/book3.jpg")} />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Educated</Text>
                        <Text style={{ color: 'gray' }}>Lenny Wen</Text>
                        <View style={{ marginTop: 20, backgroundColor: "black", width: 300, height: 20, borderRadius: 10 }}></View>
                        <View style={{ marginTop: -15, marginLeft: 5, backgroundColor: "tomato", width: 150, height: 10, borderRadius: 10 }}></View>
                        <Text style={{ marginTop: 10, marginLeft: 5, color: 'gray' }}>140 of 280</Text>
                        <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
                            <FontAwesome name="trash" size={30} color="gray" />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: 450, height: 180, borderRadius: 10, marginTop: 10 }}>
                    <Image style={{ marginLeft: 10, marginTop: 10, borderRadius: 10, width: 110, height: 160, }} source={require("../assets/home/book4.jpg")} />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Teaspoon</Text>
                        <Text style={{ color: 'gray' }}>Lenny Wen</Text>
                        <View style={{ marginTop: 20, backgroundColor: "black", width: 300, height: 20, borderRadius: 10 }}></View>
                        <View style={{ marginTop: -15, marginLeft: 5, backgroundColor: "tomato", width: 50, height: 10, borderRadius: 10 }}></View>
                        <Text style={{ marginTop: 10, marginLeft: 5, color: 'gray' }}>36 of 360</Text>
                        <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
                            <FontAwesome name="trash" size={30} color="gray" />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: 450, height: 180, borderRadius: 10, marginTop: 10 }}>
                    <Image style={{ marginLeft: 10, marginTop: 10, borderRadius: 10, width: 110, height: 160, }} source={require("../assets/home/book5.jpg")} />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>The Secret Life</Text>
                        <Text style={{ color: 'gray' }}>Lenny Wen</Text>
                        <View style={{ marginTop: 20, backgroundColor: "black", width: 300, height: 20, borderRadius: 10 }}></View>
                        <View style={{ marginTop: -15, marginLeft: 5, backgroundColor: "tomato", width: 100, height: 10, borderRadius: 10 }}></View>
                        <Text style={{ marginTop: 10, marginLeft: 5, color: 'gray' }}>68 of 280</Text>
                        <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
                            <FontAwesome name="trash" size={30} color="gray" />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}