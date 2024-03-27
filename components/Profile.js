import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Profile(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkbox} onPress={() => props.onCheck(props.item.id)}>
                <FontAwesome name={props.item.completed ? "check-square" : "square-o"} size={23} />
            </TouchableOpacity>
            <View style={styles.profileInfo}>
                <Image source={props.item.profileImage} style={styles.profileImage} />
                <TextInput
                    style={styles.input}
                    value={props.item.firstName}
                    onChangeText={(newFirstName) => props.onUpdate({ firstName: newFirstName }, props.item.id)}
                    placeholder="First Name"
                />
                {/* Add more TextInput for other fields like lastName, username, phoneNumber, email */}
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => props.onDelete(props.item.id)}>
                <FontAwesome name="trash" size={23} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    checkbox: {
        flex: 1,
        alignItems: 'center'
    },
    profileInfo: {
        flex: 8,
        marginLeft: 10
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    input: {
        marginBottom: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    deleteButton: {
        flex: 1,
        alignItems: 'center'
    }
});
