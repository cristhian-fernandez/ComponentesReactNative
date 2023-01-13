import React from 'react'
import { FlatList, View } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {
  

  // const renderMenuItem = (menuItem:MenuItem) => {
  //   return (
  //     <View>
  //       <Text>{menuItem.name} - {menuItem.icon}</Text>
  //     </View>
  //   )
  // }

  // const ItemSeparator = () => {
  //   return (
  //     <View style={{
  //       borderBottomWidth: 1,
  //       opacity: 0.4,
  //       marginVertical: 5
  //     }}>
  //     </View>
  //   )
  // }
  return (
    <View style={{flex:1, ...styles.marginGlobal}}>
      <FlatList 
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}     // Se tiene que reestructurar {item, index}
        keyExtractor={(item)=> item.name}                 // Item ya viene directo y es dependiendo en la interaccion que se encuentra
        ListHeaderComponent={()=> <HeaderTitle title='Opciones de Menús' />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  )
}
