import { Image, Platform, TouchableOpacity, View } from "react-native";
import { AppStyles } from "../../utils/AppStyle";
import { colors } from "../../utils/colors";
import NewText from "../NewText";
import { Inter } from "../../utils/Fonts";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../assets/png/icons";

export const CustomHeader = ({ navigation, label, isRight,onRight }) => {
  return (
    <View
      style={{
        ...AppStyles.justifyRow,
        backgroundColor: colors.white,
        marginTop: Platform.OS == "ios" ? -20 : 0,
        // paddingVertical: verticalScale(13),
        height: 50,
        paddingHorizontal: scale(15),
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        alignItems: "center",
        // justifyContent:"center"
      }}
    >
      <TouchableOpacity
        style={{ width: isRight?"0%": "30%" }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ width: scale(15), height: scale(15) }}
          resizeMode="contain"
          source={icon.back}
        />
      </TouchableOpacity>
      <NewText
        fontWeight="700"
        color={colors.black}
        fontFam={Inter.bold}
        size={16}
        text={label}
      />
      {isRight ? (
        <TouchableOpacity
          // style={{ width: "30%" }}
          onPress={onRight}
        >
          <Image
            style={{ width: scale(15), height: scale(15) }}
            resizeMode="contain"
            source={icon.setting}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: "33%" }} />
      )}
    </View>
  );
};
