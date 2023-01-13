import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration:number = 300) => {
    Animated.timing(          // timing : disparar una animacion con tiempo
      opacity,                // value inicial
      {
        toValue: 1,           // value final
        duration,        // tiempo en milisegundos
        useNativeDriver: true // ayuda a mejorar la animacion en hardware
      }
    ).start()
    // ).start(()=> console.log('animacion terminada despues de 3 segundos'));         // parametro un callback que es una funcion que se ejecuta cunado animacion termine

    // ).start(fadeOut);         // termina la funcion fadeIn y inicia fadeOut regresando a su estado inicial
  }

  const fadeOut = () => {
    Animated.timing(          
      opacity,               
      {
        toValue: 0,           
        duration: 300,        
        useNativeDriver: true 
      }
    ).start();
  }

  const startMovingPosition = (initPosition:number, duration:number = 300) => {
    position.setValue(initPosition);

    Animated.timing(          
      position,               
      {
        toValue: 0,           
        duration: duration,        
        useNativeDriver: true,
        easing: Easing.bounce
      }
    ).start();
  }

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition
  }
}
