import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Rojin' ;
return (

    <View>
        <Text style={styles.textStyle}> Getting started </Text>
        <Text style={styles.subheaderStyle}> my name is  {myName} </Text>    
    </View> 
)
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subheaderStyle: {
        fontSize: 20
    }

});
export default ComponentsScreen;
