import React, {useState,useContext} from 'react'
import { ActivityIndicator, FlatList, View} from 'react-native'
import { FadeInImage } from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
  
  const {theme:{colors}} = useContext(ThemeContext);
  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

  const renderItem = (item:number) => {
    return (
      // <Text style={styles.textItem}>
      //   {item}
      // </Text>

      // <Image
      //   source={{
      //     uri: `https://picsum.photos/id/${item}/500/400`
      //   }}
      //   style={{
      //     width:'100%',
      //     height:400
      //   }}
      // />

      <FadeInImage 
        uri={`https://picsum.photos/id/${item}/500/400`} 
        style={{
          width: '100%',
          height: 400
        }}
      />
    )
  }

  const loadMore = () => {
    const newArray: number [] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 1500);
  }
  return (
    <View
      style={{
        flex:1
      }}
    >
      

      <FlatList 
        data = {numbers}
        keyExtractor = {(item)=> item.toString()}
        renderItem = {({item}) => renderItem(item)}

        ListHeaderComponent={()=>(
          <View style={{marginHorizontal:20}}>
            <HeaderTitle title='Infinite Scroll Screen' />
          </View>
        )}

        onEndReached = {loadMore}     // Funcion que se ejecuta cuando llega al final 
        onEndReachedThreshold = {0.5}      // Un espacio de 0.5 antes de llegar al final se ejecuta el onEndReached 

        ListFooterComponent={ ()=> (
          <View style={{
            height:150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ActivityIndicator size={25} color={colors.primary}/>
          </View>
        )}
      />
    </View>
  )
}

// const styles = StyleSheet.create({
//   textItem : {
//     backgroundColor: 'green',
//     height:150
//   }
// });
