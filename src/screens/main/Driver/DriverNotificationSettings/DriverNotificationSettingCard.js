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

const DriverNotificationSettingCard = ({ title,push,email,sms,onPress }) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
      style={{
        ...AppStyles.justifyRow,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.black40,
        borderWidth: 1,
      }}
    >
      <View >
        <NewText
          text={title}
          size={16}
          fontWeight={"600"}
          fontFam={Inter.bold}
          color={colors.black}
        />
        <Spacer height={10} />

        <View style={AppStyles.row}>
          <NewText
            text={ push==true?"On: Push":"Off: Push"}
            size={14}
            fontWeight={"400"}

            color={colors.gray}
          />
          <View style={styles.dot} />
          <NewText
            text={ email==true?"On: Email":"Off: Email"}
            size={14}
            fontWeight={"400"}
            color={colors.gray}
          />
          <View style={styles.dot} />
          <NewText
            text={ sms==true?"On: SMS":"Off: SMS"}
            size={14}
            fontWeight={"400"}

            color={colors.gray}
          />
        </View>
      </View>

    
        <Image
          style={{ width: 15, height: 15 }}
          resizeMode="contain"
          source={icon.nexticon}
        />

    </TouchableOpacity>
  );
};

export default DriverNotificationSettingCard;

const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    backgroundColor: colors.gray300,
    borderRadius: 999,
    marginHorizontal: 10,
  },
});
