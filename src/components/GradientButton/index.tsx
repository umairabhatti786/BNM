import React, { useMemo } from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import CustomText from "../Text";
import { ButtonProps } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import LinearGradient from "react-native-linear-gradient";

const GradientButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable = false,
  borderWidth,
  paddingHorizontal,
  fontWeight,
  children,
}: ButtonProps) => {
  const memoizedStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      width: width,
      height: sizeHelper.calHp(height || 70),
      backgroundColor: bgColor || theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 999,
      borderWidth: borderWidth || 0,
      borderColor: borderColor,
      flexDirection: "row",
      overflow: "hidden",
    };

    return [baseStyle, style] as StyleProp<ViewStyle>;
  }, [
    width,
    height,
    bgColor,
    borderRadius,
    borderWidth,
    borderColor,
    paddingHorizontal,
    style,
  ]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.5}
      style={memoizedStyle}
    >
      <LinearGradient
        colors={["#0054E0", "#FF1D61"]} // Adjust colors to your needs
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: "100%",
          gap: sizeHelper.calWp(15),
          justifyContent: "center",
          flex:1,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {children}
        <CustomText
          text={text}
          color={textColor || theme.colors.white}
          size={size || 25}
          fontWeight={fontWeight || "500"}
          fontFam={fontFam || fonts.Inter_Regular}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(GradientButton);
