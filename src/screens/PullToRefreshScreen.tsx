import React,{useState,useContext} from 'react'
import { View,ScrollView,RefreshControl } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {
  // Avisa cuando se hace la peticion de refrescar (jalar la pantalla hacia abajo)

  const {theme:{colors,dark}} = useContext(ThemeContext);
  // const {top} = useSafeAreaInsets(;)
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>('');
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Mostrar información despues del Refresh')
    }, 1500);
  }
  return (
    <ScrollView
      // style={{
      //   marginTop: refreshing ? top : 0          // Solo IOS
      // }}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={100}  // Distancia de arriba abajo que se muestra el icono de refresh
          progressBackgroundColor={colors.primary}
          colors={['white','red','orange']}     // Solo Android
          style={{backgroundColor:'#5856D6'}}   // Solo IOS
          tintColor={dark ? 'white' : 'black'}                     // Solo IOS
        />
      }
    >
      <View style={styles.marginGlobal}> 
        <HeaderTitle title='Pull to refresh'/>
        {
          data && <HeaderTitle title={data}/>
        }
      </View>
    </ScrollView>
  )
}
