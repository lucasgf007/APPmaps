import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeMaps from "./screen/HomeMaps";
import Gravar from "./screen/Gravar"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomeMaps" component={HomeMaps} options={{headerShown: false}} />
        <Stack.Screen name="Gravar" component={Gravar} options={{ title: 'Voltar' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}