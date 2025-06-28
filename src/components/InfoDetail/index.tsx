import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import icons from "../../utils/Constants/icons";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const InfoDetail = ({
  title,
  placeholder,
  onPress,
  isNextDisable,
  gap,
  children,
  rightSource,
  rightSourceSize
}: any) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={!onPress}
        style={{
          gap: sizeHelper.calHp(gap || 40),
        }}
      >
        <View style={appStyles.rowjustify}>
          <CustomText
            text={placeholder || title}
            color={placeholder ? theme.colors.white + "40" : theme.colors.white}
            size={27}
          />
          {!isNextDisable && (
            <Image
              style={{
                width: sizeHelper.calWp(rightSourceSize ||20),
                height: sizeHelper.calWp(rightSourceSize ||20),
              }}
              source={rightSource ||icons.arrow_forward}
              resizeMode="contain"
            />
          )}
        </View>
        {children}

        <View
          style={{
            height: 1,
            backgroundColor: theme.colors.white + "50",
          }}
        />
      </TouchableOpacity>
    </>
  );
};
export default InfoDetail;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(60),
    height: sizeHelper.calWp(60),
    resizeMode: "contain",
  },
});
