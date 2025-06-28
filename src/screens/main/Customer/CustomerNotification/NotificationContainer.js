import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import CustomLine from "../../../../components/CustomLine/CustomLine";

const NotificationContainer = ({title,date,img}) => {
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

export default NotificationContainer;

const styles = StyleSheet.create({});
