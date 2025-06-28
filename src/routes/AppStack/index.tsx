import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../utils/Types';
import Welcome from '../../screens/Auth/Welcome';
import LoginScreen from '../../screens/Auth/Login';
import CameraAccess from '../../screens/Auth/CameraAccess';
import NotificationAccess from '../../screens/Auth/NotificationAccess';
import AboutYouScreen from '../../screens/Auth/AboutYou';
import AddPhotoScreen from '../../screens/Auth/AddPhoto';
import YouDOBScreen from '../../screens/Auth/YouDOB';
import SelectGenderScreen from '../../screens/Auth/SelectGender';
import SelectPracticeScreen from '../../screens/Auth/SelectPractice';
import SelectChallengesScreen from '../../screens/Auth/SelectChallenges';
import PackagesScreen from '../../screens/Auth/Packages';
import BottomTab from '../BottomTab';
import ChatScreen from '../../screens/Main/Chat';
import ScanScreen from '../../screens/Main/Scan';
import AddJewelryScan from '../../screens/Main/AddJewelryScan';

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />  */}
      <Stack.Screen name={'WelcomeScreen'} component={Welcome} /> 
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} /> 
      <Stack.Screen name={'CameraAccess'} component={CameraAccess} /> 
      <Stack.Screen name={'NotificationAccess'} component={NotificationAccess} /> 
      <Stack.Screen name={'AboutYouScreen'} component={AboutYouScreen} /> 
      <Stack.Screen name={'AddPhotoScreen'} component={AddPhotoScreen} /> 
      <Stack.Screen name={'YouDOBScreen'} component={YouDOBScreen} /> 
      <Stack.Screen name={'SelectGenderScreen'} component={SelectGenderScreen} /> 
      <Stack.Screen name={'SelectPracticeScreen'} component={SelectPracticeScreen} /> 
      <Stack.Screen name={'SelectChallengesScreen'} component={SelectChallengesScreen} /> 
      <Stack.Screen name={'PackagesScreen'} component={PackagesScreen} /> 
      <Stack.Screen name={'BottomTab'} component={BottomTab} /> 
      <Stack.Screen name={'ChatScreen'} component={ChatScreen} /> 
      <Stack.Screen name={'ScanScreen'} component={ScanScreen} /> 
      <Stack.Screen name={'AddJewelryScan'} component={AddJewelryScan} /> 

      
      

    </Stack.Navigator>
  );
};
export default AppStack;
