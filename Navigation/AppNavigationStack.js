import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExercisesByBodyPart from "../Screens/ExercisesByBodyPart";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function AppNavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ gestureEnabled: false, headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ExercisesByBodyPart"
          component={ExercisesByBodyPart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
