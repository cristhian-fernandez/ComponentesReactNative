import React from 'react'
import { Alert, Button, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {

  const showAlert = () => {
    Alert.alert(
      "Título de la Alerta",
      "Mensaje de la alerta",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Presiona para cancelar"),
          style: "destructive"
        },
        { text : 'OK', onPress: ()=> console.log("Todo OK")}
      ],
      { // No es recomendable agregar esto.
        cancelable : true,       // Cuando se de click afuera del modal de alerta este se cierre
        onDismiss : () => console.log('Se hizo click afuera')
      }
    );
  }
  // Solo funciona para IOS
  const showAlertPrompt = () => {
    // Alert.prompt(
    //   '¿Está seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor:string) => console.log('Info:: ',valor),
    //   'plain-text',
    //   'Hola Mundo',
    //   'number-pad'
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder'
      }
    );
  }
  return (
    <View style={styles.marginGlobal}>
      <HeaderTitle title='Alerts'/>

      <Button 
        title='Alerta'
        onPress={showAlert}
      />

      <View style={{marginTop:4}}/>

      <Button 
        title='Alerta Prompt'
        onPress={showAlertPrompt}
      />
    </View>
  )
}
