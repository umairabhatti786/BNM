import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import DashedLine from "react-native-dashed-line";
import NewText from "../../../../components/NewText";

const SettingContainer = ({ text1, text, data, index, onPress,fontWeight }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.4}
        style={{ ...AppStyles.justifyRow }}
      >
        <NewText color={colors.black} text={text} size={14} />
        <View style={AppStyles.row}>
          <NewText
            color={"#666666"}
            text={text1}
            fontWeight={ fontWeight || "500"}
            size={14}
          />
          <Spacer width={scale(7)} />

          <Image
            style={{
              width: 15,
              height: 15,
            }}
            source={icon.nexticon}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      {data.length - 1 != index ? (
        <View style={{ marginVertical: verticalScale(13) }}>
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={5}
            dashColor={colors.black40}
          />
        </View>
      ) : (
        <View style={{ marginVertical: verticalScale(8) }} />
      )}
    </View>
  );
};

export default SettingContainer;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(10),
  },
});
