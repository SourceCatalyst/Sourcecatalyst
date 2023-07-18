import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    FlatList,
    ScrollView,
    Animated,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Documents() {
    const navigation = useNavigation();
    function onSubmit() {
        
            navigation.navigate('Program');
    
    }

    const handleSearch = (text) => {
        // Handle search functionality here
    };

    const separate = () => {
        return <View style={styles.separate} />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={onSubmit}>
                    <Image source={require('../assets/arrow.png')} style={{ margin: 5, marginRight: 20 }} />
                </TouchableOpacity >
                <Text style={styles.subhead}>DOCUMENTS</Text>

            </View>

            <View style={styles.task}>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/pdf.png')} />
                </TouchableOpacity>
                <Text style={styles.day}>Document Title</Text>
            </View>

            <View style={styles.task}>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/pdf.png')} />
                </TouchableOpacity>
                <Text style={styles.day}>Document Title</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F1F7',
        padding: 20,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 10,
    },
    subhead: {
        fontWeight: '900',
        color: '#525252',
        fontSize: 19,
        paddingRight: 6,
        flex: 1,
    },
    task: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
    },
    day: {
        fontWeight: '600',
        fontSize: 19,
        marginLeft: 10,
    },
    separate: {
        padding: 5,
        backgroundColor: '#F2F1F7',
    },
    img: {
        width: 30,
        height: 30,
    },
});
