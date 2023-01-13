import React,{useRef} from 'react'
import { View,StyleSheet,Animated, PanResponder } from 'react-native'
// import Animated from 'react-native-reanimated'

//  https://reactnative.dev/docs/animatedvaluexy

export const Animation102Screen = () => {
  const position = useRef(new Animated.ValueXY()).current;

  const move = Animated.event(
  [
    null,
    {
      dx: position.x,
      dy: position.y
    }
  ],
  {useNativeDriver: false}
  );

  const release = () => {
      Animated.spring(
        position,
        {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        },
      ).start();
  }

  const positionResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove : move,
    onPanResponderRelease: release
  })
  return (
    <View style={styles.container}>
      <Animated.View 
        {...positionResponder.panHandlers}
        style={[position.getLayout(),styles.purpleBox]}
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
      backgroundColor: 'red',
      width:150,
      height:150
    }
});