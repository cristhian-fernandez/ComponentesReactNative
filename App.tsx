import 'react-native-gesture-handler';	
import React from 'react'
// import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme:Theme = {
//   dark: true,
//   colors : {
//     ...DefaultTheme.colors,
//     // ...DarkTheme.colors,
//     // primary: string;
//     // background: 'red'
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   }
// }
// const App = () => {
//   return (
//     <AppState>
//       <NavigationContainer
//         theme={customTheme}
//       >
//         <Navigator />
//       </NavigationContainer>
//     </AppState>
//   )
// }
const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}

const AppState = ({children}:any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}


export default App;