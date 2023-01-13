import React,{useContext} from 'react'
import { View,TextInput,StyleSheet,KeyboardAvoidingView,Platform, ScrollView,TouchableWithoutFeedback,Keyboard, Text } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import HeaderTitle from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {
  const {theme:{colors,dividerColor}} = useContext(ThemeContext);

  const {onChange,form,isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed : false
  })

   return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}        // Para que desparesca el teclado haciendo click afuera para IOS
        >
          <View style={styles.marginGlobal}>
            <HeaderTitle title='Text Input'/>
            <TextInput 
              style = {{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder= "Ingrese su nombre"
              autoCorrect={false}                 // No muestra sugerencias ni lo corrige
              onChangeText={(value)=> onChange(value,'name')}
              placeholderTextColor={dividerColor}
            />
            
            <TextInput 
              style = {{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder= "Ingrese su Email"
              autoCorrect={false}
              autoCapitalize= 'none'
              onChangeText={(value)=> onChange(value,'email')}
              keyboardType="email-address"
              keyboardAppearance='dark'       // Solo IOS
              placeholderTextColor={dividerColor}
            />

            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Suscribirse</Text>
              <CustomSwitch isOn={isSuscribed} onChange={(value:boolean) => onChange(value,'isSuscribed')}/> 
            </View>

            <HeaderTitle title={JSON.stringify(form,null,3)}/>

            <HeaderTitle title={JSON.stringify(form,null,3)}/>

            <TextInput 
              style = {{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder= "Ingrese su teléfono"
              onChangeText={(value)=> onChange(value,'phone')}
              keyboardType='phone-pad'
              placeholderTextColor={dividerColor}
            />

            <HeaderTitle title={JSON.stringify(form,null,3)}/>
            <View style={{height:50}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const stylesScreen = StyleSheet.create({
  inputStyle :{
    borderWidth: 1,
    height: 40,
    paddingHorizontal:10,
    borderRadius:8,
    borderColor: "rgba(0,0,0,0.3)",
    marginVertical: 10
  },
  switchRow:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  switchText: {
    fontSize: 25
  }
});
