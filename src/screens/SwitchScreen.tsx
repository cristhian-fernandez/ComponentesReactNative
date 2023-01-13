import React,{useState,useContext} from 'react'
import { View,StyleSheet,Text} from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const SwitchScreen = () => {

  const {theme:{colors}} = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value:boolean, field:string) => {
    setState({
      ...state,
      [field]:value
    });
  }
  
  return (
    <View style={{marginHorizontal:20}}>
      <HeaderTitle title='Switches' />
      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text
        }}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value:any) => onChange(value,'isActive')}/> 
      </View>
      <View style={styles.switchRow}>
        <Text style={{
            ...styles.switchText,
            color: colors.text
          }}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value:any) => onChange(value,'isHungry')}/> 
      </View>
      <View style={styles.switchRow}>
        <Text style={{
            ...styles.switchText,
            color: colors.text
          }}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value:any) => onChange(value,'isHappy')}/> 
      </View>
      <Text style={{
        ...styles.switchText,
        color: colors.text
      }}>
        {JSON.stringify(state, null, 5)}
      </Text>
      
    </View>
  )
}


const styles = StyleSheet.create({
  switchRow:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  switchText: {
    fontSize: 25
  }
});