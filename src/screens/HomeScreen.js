import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Emoji from 'react-native-emoji';

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>whazzap RoRo
      <Emoji name="hankey" style={{fontSize: 30}} />
      </Text>
      <Button 
        onPress={()=> navigation.navigate('Components')}
        title=" this a button "
      />
       <Button 
        onPress={()=> navigation.navigate('List')}
        title=" this my button "
      />
      <Button
        onPress={()=> navigation.navigate('Image')}
         title="this a demo"
      />
      <Button
        onPress={()=> navigation.navigate('Counter')}
         title="this a counterscreen"
      />
      <Button
        onPress={()=> navigation.navigate('Color')}
         title="this a ColorScreen"
      />
      <Button
        onPress={()=> navigation.navigate('Square')}
         title="this a square screen"
      />
    </View>
    
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
