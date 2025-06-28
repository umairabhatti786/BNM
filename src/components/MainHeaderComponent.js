import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,Modal } from 'react-native';
import { colors, dimensions, fontSizes } from '../styles/constants';
import { useNavigation } from '@react-navigation/native';

const MainHeaderComponent = ({title}) => {

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleResolutionCenter = () => {
    navigation.navigate('ResolutionCenterScreen');
    
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: dimensions.paddingLevel3,
        backgroundColor:colors.white,
        height:dimensions.heightLevel6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 7,
      }}
    >
      
        <TouchableOpacity onPress={handleGoBack}>
        <Image
          source={require('../assets/webp/leftArrow.webp')} 
          style={{
            width: 18,
            height: 18,
          }}
        />
        </TouchableOpacity>
      
      <Text style={{ flex: 1, textAlign: 'center', fontWeight: '700',color:colors.black,fontSize:fontSizes.fontLarge }}>
       {title}
      </Text>

      <TouchableOpacity onPress={handleResolutionCenter}>
      <Image
        source={require('../assets/webp/groupIcon.webp')}
        style={{
          width: 40,
          height: 33.5,
        }}
      />
      </TouchableOpacity>


    </View>
  );
};

export default MainHeaderComponent;
