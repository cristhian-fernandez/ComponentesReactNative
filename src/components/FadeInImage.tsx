import React,{useState,useContext} from 'react'
import {ActivityIndicator, Animated,StyleProp,ImageStyle,View} from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri : string;
  style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri,style}:Props) => {

  const {theme:{colors}} = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(false);
  const {opacity,fadeIn} = useAnimation();

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  }
  return (
    <View style={{
      justifyContent:'center',
      alignItems: 'center'
    }}>
      {
        isLoading && <ActivityIndicator style={{position:'absolute'}} color={colors.primary} size={30}/>
      }
      <Animated.Image 
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          // width: '100%',    // Para que se vea la imagen
          // height: 400,

          ...style as any,
          opacity
        }}
      />
    </View>
  )
}
