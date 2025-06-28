import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { CustomHeader } from "../../../../components/CustomHeader";


  const DriverProfile = ({ navigation, route }) => {

  
 
  
    return (
      <>
        <Screen
          backgroundColor={colors.white}
          topBarColor={colors.white}
          statusBarColor={colors.white}
          barStyle={"dark-content"}
        >
          <CustomHeader label={"Service Profile"} navigation={navigation} />
        
        </Screen>
      </>
    );
  };
  
  export default DriverProfile;
  
  const styles = StyleSheet.create({});
  