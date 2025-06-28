import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import CustomText from "../CustomText";
import NewText from "../NewText";

const CustomInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftImage,
  rightImage,
  imgWidth,
  imgHeigth,
  height,
  width,
  borderRadius,
  paddingHorizontal,
  placeholderTextColor,
  heading,
  rightImageWidth,
  rightImageHeight,
  fontWeight,
  headingWeight,
  headingSize,
  dropDown,
  textAlignVertical,
  style
}) => {
  return (
    <View style={{ ...props }}>
      {heading && (
        <NewText
          size={headingSize || 15}
          style={{ marginVertical: 10 }}
          fontWeight={headingWeight || "700"}
          text={heading}
          color={color.black}
        />
      )}
      <TouchableOpacity
        activeOpacity={dropDown ? 0.4 : 1}
        onPress={dropDown && onShowPassword}
        style={[{
          flexDirection: "row",
          alignItems: "center",
          borderColor: colors.black40,
          backgroundColor: colors.white,
          borderWidth: 1,
          justifyContent: "space-between",
          paddingHorizontal: scale(paddingHorizontal || 7),
          borderRadius: scale(borderRadius || 12),
          width: width || "100%",
        },style]}
      >
        {leftImage && (
          <View
            activeOpacity={0.6}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={leftImage}
              resizeMode="contain"
              style={{
                width: imgWidth || scale(16),
                height: imgHeigth || scale(16),
                marginRight: 10,
              }}
            />
          </View>
        )}

        <View style={{ flex: 1 }}>
          {dropDown ? (
            <NewText
              size={14}
              // style={{ marginVertical: 10 }}
              numberOfLines={1}
              fontFamily={"Inter-Medium"}
              fontWeight={"700"}
              text={value}
              color={color || colors.gray}
            />
          ) : (
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize: 14,
                paddingVertical: 5,
                height: verticalScale(height || 45),
                color: color || colors.black,
                textAlignVertical: textAlignVertical,
                paddingHorizontal: 8,
                fontFamily: Inter.medium,
                fontWeight: fontWeight || "500",
                // backgroundColor:"red",
                alignItems: "center",
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor || colors.gray100}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
          )}
        </View>
        {rightImage && (
          <TouchableOpacity
            onPress={onShowPassword}
            activeOpacity={0.6}
            disabled={!onShowPassword}
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
              height: verticalScale(height || 45),
            }}
          >
            <Image
              source={rightImage}
              resizeMode="contain"
              style={{
                width: rightImageWidth || 18,
                height: rightImageHeight || 18,
              }}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {error && (
        <View
          style={{
            alignItems: "flex-end",
            marginTop: 3,
          }}
        >
          <CustomText size={11} text={error} color={"red"} />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
