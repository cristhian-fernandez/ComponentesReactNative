import React,{useContext} from 'react'
import { View,StyleSheet,Animated, Button } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {
 
  const {opacity,position,fadeIn,fadeOut,startMovingPosition} = useAnimation();
  const {theme:{colors}} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
    <Animated.View 
      style={{
        ...styles.purpleBox,
        backgroundColor:colors.primary,
        marginBottom:20,
        opacity:opacity,
        transform: [{
          translateY: position
        }]
      }}
    />
    <Button 
      title='FadeIn'
      onPress={
        ()=>{
          fadeIn();
          startMovingPosition(-100,1800);
        }
      }
      color={colors.primary}
    />
    <Button 
      title='FadeOut'
      onPress={fadeOut}
      color={colors.primary}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container :{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    purpleBox:{
      // backgroundColor: '#5856D6',
      width:150,
      height:150
    }
});