import React, {useReducer} from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {

    switch (action.type){
        case 'increment':
            return{...state, count :  state.count + action.payload};
        case 'decrement':
            return{...state, count :  state.count - action.payload}
        default:
            return state;
    }
}
const CounterScreen = () => {

const [state, dispatch] = useReducer(reducer, {count: 0});

return (
    <View>
        <Text>current count: {counter} </Text>
        <Button 
            title = "Increase" 
            onPress={()=> dispatch({type: 'increment', payload: 1})}
        />
        <Button 
            title = "Decrease"
            onPress={()=> dispatch({type: 'decrement', payload: 1})}
        />
        <Text>Current Count: {state.count}</Text>
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
