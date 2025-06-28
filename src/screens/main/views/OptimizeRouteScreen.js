import React from 'react';
import { View, Text } from 'react-native';
import MainHeaderComponent from '../../../components/MainHeaderComponent';
import { colors} from '../../../styles/constants';


export default function OptimizeRouteScreen() {
  return (
    <View style={{ flex: 1 , backgroundColor:colors.white }}>
      <MainHeaderComponent title="Delivery Manager" />
    </View>
  );
}
