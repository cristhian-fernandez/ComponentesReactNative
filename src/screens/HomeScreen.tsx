import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text> 
      <Text>
        <Icon name="star-outline" size={80} color={'red'}/>
      </Text>
    </View>
  )
}
