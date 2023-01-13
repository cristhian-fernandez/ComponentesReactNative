import React,{useContext} from 'react';
import { View, SectionList,Text } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: [
      "Batman", "Superman", "Robin", 
      "Batman", "Superman", "Robin", 
      "Batman", "Superman", "Robin", 
      "Batman", "Superman", "Robin", 
      "Batman", "Superman", "Robin", 
    ]
  },
  {
    casa: "Marvel Comics",
    data: [
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
      "Antman", "Thor", "Spiderman","Antman",
    ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", ]
  }
];

export const CustomSectionListScreen = () => {

  const {theme:{colors}} = useContext(ThemeContext);

  return (
    <View style={{...styles.marginGlobal, flex:1}}>
     <SectionList 
      sections = {casas}
      keyExtractor = {(item, index) => item + index}

      ListHeaderComponent = {
        () => <HeaderTitle title='Section List' />
      }
      ListFooterComponent = {
        () => (
          <View style={{marginBottom:50}}>
            <HeaderTitle title={'Total de Casas: ' + casas.length} />
          </View>
        )
      }

      renderItem = { ({item}) => <Text style={{color:colors.text}}>{item}</Text>}
      stickySectionHeadersEnabled
      renderSectionHeader = {                                         // Header de cada Seccion 
        ({section})=> (
          <View style = {{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa}/>
          </View>
        )
      }

      renderSectionFooter = {
        ({section}) => (
          <HeaderTitle title={'Total Heroes: ' + section.data.length}/>
        ) 
      }

      SectionSeparatorComponent={() => <ItemSeparator/>}
      ItemSeparatorComponent={
        () => (
          <View style={{paddingRight:100}}>
            <ItemSeparator/>
          </View>
        )
      }

      showsVerticalScrollIndicator={false}    // Quitar scroll vertical


     /> 
    </View>
  )
}
