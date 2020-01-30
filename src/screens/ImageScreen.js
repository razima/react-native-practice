import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../screens/Components/ImageDetail';

const ImageScreen= () => {

    return (
        <View>
            <ImageDetail title="forest" imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title="beach" imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail title="poop" imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        fontSize: 30
      }
});

export default ImageScreen;
