import React, { useState } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    
    return(
    <View>
        <Button 
            title="add color"
            onPress={()=> setColors([...colors,randomRgb()])}
        />
        <View style={styles.colorBox2}/>{
            colors.map(color => (
                <View style = { {height:100, width: 100, backgroundColor: color}}/>
            ))
        }
    </View >)
}

const randomRgb = ()=> {
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
colorBox1: {
    width: 100,
    height: 100,
    backgroundColor: randomRgb()
 },
 colorBox2: {
    width: 100,
    height: 100,
    backgroundColor: randomRgb()
},
colorBox3: {
    width: 100,
    height: 100,
    backgroundColor: randomRgb()
}

});



export default ColorScreen;