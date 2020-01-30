import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = (prop) => {
    const friends = [
        {name : 'Sam' , age: '10'},
        {name : 'ham' , age: '20'},
        {name : 'jam', age: '101'},
        {name : 'jim', age: '40'},
    ];
    return(
        <FlatList 
            keyExtractor = { friend => friend.name }
            data = {friends} 
                renderItem = {({ item }) => {
                    return <Text style={styles.textStyle}>
                            {item.name} - age: {item.age} 
                           </Text>;
                 }} 
        />
    );

     };

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50

    }
});
export default ListScreen;