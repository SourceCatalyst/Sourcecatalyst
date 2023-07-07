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
  

  export default function Work () {
return (
    <SafeAreaView style={styles.sectionContainer}>
    <Text>Work</Text>

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