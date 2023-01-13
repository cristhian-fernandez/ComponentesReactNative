import React, { useState,useContext } from 'react'
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  isOn : boolean;     // ver si esta encendido
  onChange : (value:boolean) => void
}
export const CustomSwitch = ({isOn, onChange}:Props) => {
  const {theme:{colors}} = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled)
  }
  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: colors.primary }}
      thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
      // trackColor={{ false: "#767577", true: "#81b0ff" }}
      // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}
