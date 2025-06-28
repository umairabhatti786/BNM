import { Image, Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import ToggleSwitch from "toggle-switch-react-native";
import { icon } from "../../assets/png/icons";
import { AppStyles } from "../../utils/AppStyle";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";
import NewText from "../NewText";
import CustomToggle from "../CustomToggle";

const HorizontalContainerToggle = ({
  text,
  leftImage,
  color,
  isEnabled,
  toggleSwitch,
  isSwitch,
  onPress,
  width,
  size1,
  size,
  text1,
  isActive,
  setIsActive,
  isNext,
  fontWeight,
  onPressNext
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={AppStyles.justifyRow}
    >
      <NewText
      fontWeight={fontWeight ||"500"}
       color={color || colors.black} text={text} size={size || 14} />
      <View style={AppStyles.row}>
        <CustomToggle isActive={isActive} setIsActive={setIsActive} />

        {isNext && (
          <>
            {/* <Spacer width={scale(5)} /> */}
            <TouchableOpacity
            disabled={!isActive}
            style={{height:verticalScale(30),alignItems:"flex-end",justifyContent:"center",width:scale(30)}}
            onPress={onPressNext}
            >
            <Image
              style={{ width: scale(15), height: scale(15) }}
              source={icon.nexticon}
              resizeMode={"contain"}
            />

            </TouchableOpacity>
           
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default HorizontalContainerToggle;
