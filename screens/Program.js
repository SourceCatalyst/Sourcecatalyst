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
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';

export default function Program() {
    const navigation = useNavigation();
    const [isTabOpen, setIsTabOpen] = useState(false);
  const slideAnimation = useState(new Animated.Value(0))[0];

  const toggleTab = () => {
    const toValue = isTabOpen ? 0 : 1;
    const animationDuration = 300;

    Animated.timing(slideAnimation, {
      toValue,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();

    setIsTabOpen(!isTabOpen);
  };

   const tabHeight = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Adjust the desired maximum height
  });
    function onSubmit() {
        navigation.navigate('Home');
    }
    const handleSearch = (text) => {
        // Handle search functionality here

    };

    seperate = () => {
        return <View style={styles.seperate} />
    }

    return (
        <SafeAreaView style={styles.sectionContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onSubmit}>
                    <Image source={require('../assets/arrow.png')} style={{ marginTop: 5 }} />
                </TouchableOpacity >
                <Text style={styles.subhead}>PROGRAM</Text>
            </View>
            <View style={styles.days}>
                <Text style={styles.day}>Day 22</Text>
                <Text style={styles.taskno}>TASK III</Text>
            </View>

            <ProgressBar style={styles.progress} progress={0.5} color="#449237" />

            <View style={styles.task}>
                <Text style={styles.day}>Task Title</Text>
                <TouchableOpacity onPress={toggleTab}>
                    <Image style={styles.down} source={require('../assets/ellipse.png')}  />
                </TouchableOpacity >
                </View>
                <Animated.View style={[styles.description, {maxHeight: tabHeight}]}>
        <Text style={styles.destext}>A task detail typically includes a brief description or summary of the task at hand, along with relevant information such as deadlines, priority level, and any specific instructions or requirements. </Text>
      </Animated.View>
                <View style={styles.button}>
                    <View style={{paddingHorizontal: 10}}><Button style={styles.doc} title='Documents' color={'#AA4EC3'}/></View>
                    <Button style={styles.vid} title='Videos'/>
                </View>
            
            <View style={styles.submissions}>
                <Text style={styles.head}>SUBMISSIONS</Text>
                
            <View style={styles.tasksub}>
                <Text style={styles.taskno}>Task II</Text>
                <View>
                    <Text style={styles.sub}>SUBMITTED</Text>
                </View>
                </View>
                
            <View style={styles.tasksub}>
                <Text style={styles.taskno}>Task I</Text>
                <View>
                    <Text style={styles.sub}>SUBMITTED</Text>
                </View>
                </View>
                <View style={styles.button}>
                    <Button title='READY TO SUBMIT?' color={'#EAA236'}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    sectionContainer: {
        flex: 1,
        backgroundColor: '#F2F1F7',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'column',
        paddingTop: 60,
    },
    profileContainer: {
        margin: 8,
        marginTop: 40
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 20,
    },
    searchBarContainer: {
        backgroundColor: '#F2F1F7',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        width: 300,
        paddingTop: 40,
    },
    searchInputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 4.5
    },
    searchInput: {
        color: 'black',
    },
    program: {
        paddingBottom: 20,
        backgroundColor: '#F2F1F7',
    },
    upskillprogram: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',

    },
    seperate: {
        padding: 5,
        backgroundColor: '#F2F1F7',
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        // paddingHorizontal: 10,
        flexWrap: 'wrap',
        // alignItems: 'flex-start'
    },
    head: {
        fontWeight: "900",
        color: "#525252",
        fontSize: 17,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        flex: 1,
        // margin: 10,
        padding: 10
    },
    subhead: {
        fontWeight: "900",
        color: "#525252",
        fontSize: 19,
        paddingRight: 6,
        paddingHorizontal: 20,

    },
    days: {
        flexDirection: "row",
        backgroundColor: '#FFFFFF',
        marginVertical: 20,
        marginRight: 215,
        padding: 10,
        borderRadius: 10,
    },
    day: {
        fontWeight: "600",
        fontSize: 19,

    },
    taskno: {
        padding: 6,
        // marginTop: 15
    },
    item: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 20,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 15,
        fontWeight: "500",
    },
    progress: {
        height: 15,
        width: '100%',
        marginRight: 15,
        borderRadius: 20,
        backgroundColor: '#D9D9D9',
    },
    task: {
        backgroundColor: '#FFFFFF',
        flex:1.2,
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row'
    },
    description:{
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        
    },
    destext:{
        fontSize: 19,
    },
    down:{
        margin: 5,
        justifyContent: 'flex-end',
        
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
    },
    doc:{
        borderRadius: 10,
        marginRight: 5
    },
    vid:{
        borderRadius: 10,
    },
    submissions: {
        flex: 19
    },
    sub:{
        backgroundColor:'#059B2F',
        borderRadius: 20,
        color: '#FFFFFF',
        paddingHorizontal:15,
        fontWeight: "500",
        fontSize: 12,
        paddingVertical: 5,
        
    },
    tasksub: {
        backgroundColor: '#FFFFFF',
        flex:0.1,
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },


});