import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack" 

import Home from "./src/components/Home"
import Detail from "./src/components/Details"

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="details" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

