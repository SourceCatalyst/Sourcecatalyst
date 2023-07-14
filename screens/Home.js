import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Alert,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { SearchBar } from 'react-native-elements';

  export default function Courses () {
return (
    <SafeAreaView style={styles.sectionContainer}>
      <SearchBar/>
    <Text>Home</Text>

 </SafeAreaView>
);
}

const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems:'center',
      justifyContent: 'center',
    }
});