import { StackScreenProps } from '@react-navigation/stack';
import React, { useRef,useContext } from 'react';
import {Animated, ImageSourcePropType, View,SafeAreaView, Text, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png')
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png')
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any,any>{}
export const SlidesScreen = ({navigation}:Props) => {

  const {theme:{colors}} = useContext(ThemeContext);

  const windowWidth = Dimensions.get('window').width;
  const [snapDirection] = React.useState<'left' | 'right'>('left');
  const [mode] = React.useState<any>('horizontal-stack');
  const viewCount = 5;
  const {opacity,fadeIn,fadeOut} = useAnimation();
  const isVisible = useRef(false);

  const renderItem = (item:Slide) => {
    return (
      <View style={{
        // flex:1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding:40,
        justifyContent: 'center',
        // height: 500
      }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={{...styles.title,color:colors.primary}}>{item.title}</Text>
        <Text style={{...styles.subTitle,color:colors.text}}>{item.desc}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex:1,
        backgroundColor: colors.background,
        paddingTop: 0
      }}
    >
      <View style={{
        // backgroundColor:'red',
        flexDirection:'row',
        paddingVertical:20,
        justifyContent: 'flex-end',
        paddingHorizontal:20
      }}>
      <Animated.View
        style={{
          opacity
        }}
      >
        <TouchableOpacity style={{
          flexDirection:'row',
          backgroundColor:colors.primary,
          width:140,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        activeOpacity={0.8}
        onPress={()=> {
          if (isVisible.current) {
            console.log('Se hizo Click')
            navigation.navigate('HomeScreen');
          } 
        }}
        >
          <Text style={{
            fontSize:25,
            color:colors.background
          }}>Entrar</Text>
          <Icon 
            color='white'
            name= 'chevron-forward-outline'
            size={30}
          />
        </TouchableOpacity>
      </Animated.View>
      </View>
      <Carousel
        loop
        width={windowWidth}
        autoPlay={false}
        pagingEnabled={true}
        snapEnabled={true}
        data={items}
        mode='horizontal-stack'
        modeConfig={{
          snapDirection,
          stackInterval: mode === 'vertical-stack' ? 8 : 18,
        }}
        customConfig={() => ({ type: 'positive', viewCount })}
        renderItem = { ({item}) => renderItem(item)}
        onSnapToItem={(index)=>{
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
          else {
            isVisible.current = false;
            fadeOut();
          }
        }}
      />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#5856D6'
  },
  subTitle:{
    fontSize:16
  }
});