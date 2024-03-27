import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ProfileStorage from '../storages/ProfileStorage';
import Profile from '../components/Profile';

export default function ProfileList() {
    const [profiles, setProfiles] = useState([]);
    const [newProfile, setNewProfile] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        email: ''
    });

    useEffect(() => {
        const onLoad = async () => {
            let data = await ProfileStorage.readItems();
            setProfiles(data);
        };
        onLoad();
    }, []);

    const onCreate = async () => {
        let newProfileData = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            ...newProfile,
            completed: false,
        };

        let updatedProfiles = [...profiles, newProfileData];
        setProfiles(updatedProfiles);

        await ProfileStorage.writeItem(newProfileData);

        setNewProfile({
            firstName: '',
            lastName: '',
            username: '',
            phoneNumber: '',
            email: ''
        });
    };

    const onUpdate = async (newData, id) => {
        let updatedProfiles = profiles.map(profile => {
            if (profile.id === id) {
                return { ...profile, ...newData };
            }
            return profile;
        });
        setProfiles(updatedProfiles);
        await ProfileStorage.writeItems(updatedProfiles);
    };

    const onCheck = async (id) => {
        let updatedProfiles = profiles.map(profile => {
            if (profile.id === id) {
                return { ...profile, completed: !profile.completed };
            }
            return profile;
        });
        setProfiles(updatedProfiles);
        await ProfileStorage.writeItems(updatedProfiles);
    };

    const onDelete = async (id) => {
        let updatedProfiles = profiles.filter(profile => profile.id !== id);
        setProfiles(updatedProfiles);
        await ProfileStorage.writeItems(updatedProfiles);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="First Name"
                    value={newProfile.firstName}
                    onChangeText={text => setNewProfile({ ...newProfile, firstName: text })}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Last Name"
                    value={newProfile.lastName}
                    onChangeText={text => setNewProfile({ ...newProfile, lastName: text })}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Username"
                    value={newProfile.username}
                    onChangeText={text => setNewProfile({ ...newProfile, username: text })}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Phone Number"
                    value={newProfile.phoneNumber}
                    onChangeText={text => setNewProfile({ ...newProfile, phoneNumber: text })}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={newProfile.email}
                    onChangeText={text => setNewProfile({ ...newProfile, email: text })}
                    style={styles.input}
                />
            </View>
            <FlatList
                style={{ marginTop: 15 }}
                data={profiles}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Profile item={item} onUpdate={onUpdate} onCheck={onCheck} onDelete={onDelete} />
                )}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    inputContainer: {
        marginBottom: 20
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    addButton: {
        backgroundColor: "lightblue",
        padding: 10,
        width: 50,
        height: 50,
        alignItems: "center",
        alignContent: "center",
        borderRadius: 25,
        position: 'absolute',
        right: 10,
        bottom: 10,
    }
});
