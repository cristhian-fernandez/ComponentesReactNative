import React, {useState} from 'react'
import { Button, Modal, Text, View} from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'


export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.marginGlobal}>
      <HeaderTitle title='Modal Screen' />
      <Button
        title= 'Modal Screen'
        onPress= {()=> setIsVisible(true)}
      />

      <Modal
        animationType='fade'
        visible= {isVisible}
        transparent
      >
        <View
          style={{
            flex:1,
            backgroundColor:'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Contenido del Modal */}
          <View style={{
            backgroundColor: 'white',
            padding: 10,
            shadowOffset:{
              width:0,
              height:10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5
          }}>
            <HeaderTitle title='Titulo del Modal' />
            <Text style={{fontSize:16, fontWeight:'300',marginBottom:20}}>Cuerpo del Modal</Text>
            <Button 
              title='Cerrar Modal'
              onPress={()=> setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>

    </View>
  )
}
