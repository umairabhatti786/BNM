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

const ConversationContainer = ({ name, date, img, amount,message,online,onPress }) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
     style={{ paddingHorizontal: 15 }}>
      <View style={{ flexDirection: "row", paddingBottom: 15,justifyContent:"space-between" }}>
        <View style={{flexDirection:"row"}}>

        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 10,
            borderColor: colors.black40,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginRight: 15,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
            source={img}
          />
        </View>
        <View style={{ width: "72%" }}>
          <NewText
            text={name}
            size={16}
            fontWeight={"600"}
            fontFam={Inter.bold}
            color={colors.black}
          />
          <Spacer height={5} />
          <View style={AppStyles.row}>
            <NewText text={"Delivery"} size={14} color={colors.gray} />
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                backgroundColor: "#D9D9D9",
                marginHorizontal: 7,
              }}
            />
            <NewText text={`from ${amount}`} size={14} color={colors.gray} />
          </View>

          <Spacer height={7} />

          <NewText 
          numberOfLines={1}
           text={message} size={14} color={colors.gray} />
        </View>

        </View>

        <View style={{flex:1,justifyContent:"space-between"}}>

        <NewText text={date} size={13} color={colors.gray} />
        {
            online&&(
                <View
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  backgroundColor: "#FF4D00",
                  marginHorizontal: 7,
                }}
              />

            )
        }

      


        </View>
       
      </View>

      <CustomLine height={1} />
    </TouchableOpacity>
  );
};

export default ConversationContainer;

const styles = StyleSheet.create({});
