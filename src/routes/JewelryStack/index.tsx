import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JewelryScreen from "../../screens/Main/Jewelry";
import AddJewelryScreen from "../../screens/Main/AddJewelry";
const Stack = createNativeStackNavigator();
const JewelryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"JewelryScreen"} component={JewelryScreen} />
      <Stack.Screen name={"AddJewelryScreen"} component={AddJewelryScreen} />
    </Stack.Navigator>
  );
};
export default JewelryStack;
