import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { AppStyles } from "../../../utils/AppStyle";
import { Inter } from "../../../utils/Fonts";
import CustomLine from "../../../components/CustomLine/CustomLine";
import CustomText from "../../../components/CustomText";
import { icon } from "../../../assets/png/icons";
import HorizontalContainer from "../../../components/HorizontalContainer";
import DashedLine from "react-native-dashed-line";
import Collapsible from "react-native-collapsible";

const ActivitySummary = ({setIsPickupDropInstructionModal,isPickupDropInstructionModal}) => {
  const [isCollapsible, setIsCollapsible] = useState(false);

  return (
    <View
      style={{
        borderRadius: scale(15),
        borderWidth: 1,
        borderColor: colors.black40,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setIsCollapsible(!isCollapsible)}
        style={{ ...AppStyles.justifyRow, padding: verticalScale(15) }}
      >
        <CustomText
          text={"Activity Summary"}
          size={14}
          fontWeight={"600"}
          fontFam={Inter.semiBold}
          color={colors.black}
        />

        <Image
          style={styles.iconContainer}
          resizeMode={"contain"}
          source={isCollapsible == false ? icon.up : icon.down}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsible}>
        <View>
          <CustomLine />
          <View style={{ padding: scale(15) }}>
            <HorizontalContainer
              text={"Category"}
              size={13}
              text1={"Ride"}
              size1={13}
            />
            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />
            </View>
            <HorizontalContainer
              text={"Start Address"}
              size={13}
              text1={"Down Town, New York"}
              size1={13}
            />
            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />
            </View>

            <HorizontalContainer
              text={"Stop Address"}
              size={13}
              text1={"Zilla, New Jersey"}
              size1={13}
            />
            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />
            </View>

            <HorizontalContainer
              text={"Final Address"}
              size={13}
              text1={"Florida"}
              size1={13}
            />
            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />
            </View>

            <HorizontalContainer
              text={"Pickup Instruction"}
              size={13}
              text1={"View/Edit"}
              onPress={()=>{
                setIsPickupDropInstructionModal(true)
                

              }}
              size1={13}
            />
            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />
            </View>
            <HorizontalContainer
              text={"Drop-Off Instruction"}
              size={13}
              onPress={()=>{
                setIsPickupDropInstructionModal(true)
                

              }}
              text1={"View/Edit"}
              size1={13}
            />
          </View>
        </View>
      </Collapsible>
    </View>
  );
};

export default ActivitySummary;

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },
});
