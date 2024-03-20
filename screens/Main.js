import React from "react";
import { ScrollView, View } from "react-native";
import Home from "../components/Home";
import Cover from "../components/Cover";
import Search from "../components/Search";
import Book from "../components/Book";
import Continue from "../components/Continue";
import Newbook from "../components/Newbook";

export default function Main() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#212121', marginTop: 20 }}>
                <Cover />
                <Search />
                <Book style={{ margin: 20 }}/>
                <Continue style={{ margin: 20 }}/>
                <Newbook style={{ margin: 20 }}/>
            </View>
        </ScrollView>

    );
}
