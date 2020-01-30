import React, {useState} from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
return (
    <View>
        <Text>current count: {counter} </Text>
        <Button 
            title = "Increase" 
            onPress={()=> setCounter(counter + 1)}
        />
        <Button 
            title = "Decrease"
            onPress={()=> setCounter(counter - 1)}
        />
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
export default CounterScreen;
