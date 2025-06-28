import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../../utils/colors";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import CustomLine from "../../../../components/CustomLine/CustomLine";

const DriverNotificationContainer = ({title,date,img}) => {
  return (
    <View style={{paddingHorizontal:15 }}>
         <View style={{ flexDirection: "row",paddingBottom:15}}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.black40,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <Image
          style={{ width: 22, height: 22 }}
          resizeMode="contain"
          source={img}
        />
      </View>
      <View style={{ width: "82%",gap:4 }}>
        <NewText
          text={title}
          size={15}
          fontWeight={"600"}
          fontFam={Inter.bold}
          color={colors.black}
        />
        <NewText
          text={date}
          size={14}
          // fontWeight={"600"}
          color={colors.gray}
        />
      </View>
    </View>

    <CustomLine
    height={1}
    />

    </View>
   
  );
};

export default DriverNotificationContainer;

const styles = StyleSheet.create({});
