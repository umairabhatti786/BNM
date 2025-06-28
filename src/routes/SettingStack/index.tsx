import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JewelryScreen from "../../screens/Main/Jewelry";
import AddJewelryScreen from "../../screens/Main/AddJewelry";
import SettingsScreen from "../../screens/Main/Settings";
import AccountInfoScreen from "../../screens/Main/AccountInfo";
const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"SettingsScreen"} component={SettingsScreen} />
      <Stack.Screen name={"AccountInfoScreen"} component={AccountInfoScreen} />
    </Stack.Navigator>
  );
};
export default SettingStack;
