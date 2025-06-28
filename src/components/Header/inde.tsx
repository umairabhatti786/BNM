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
import AnimatedProgressBar from "../AnimatedProgressBar";

const CustomHeader = ({
  title,
  textColor,
  tintColor,
  isNotification,
  disableNext,
  step,
  isDisableProgress,
}: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <View style={appStyles.rowjustify}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: sizeHelper.calWp(20) }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={icons.back_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {!isDisableProgress&&(
             <AnimatedProgressBar
             progress={step}
             />

        )

        }
     

        <View>
          {!disableNext && (
            <TouchableOpacity
              style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}
            >
              <CustomText text={"Later"} color={theme.colors.white} size={23} />
              <Image style={styles.button_icon} source={icons.next_arrow} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
