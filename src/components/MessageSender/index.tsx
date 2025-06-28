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

const MessageSender = ({
  title,
  placeholder,
  onPress,
  isNextDisable,
  gap,
  children,
  rightSource,
  rightSourceSize,
}: any) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: sizeHelper.calWp(30),
          paddingVertical: sizeHelper.calHp(17),
          alignItems: "center",
          gap:sizeHelper.calWp(20),

          backgroundColor: "#F6F6F6",
        }}
      >
        <Image
          source={icons.attachment}
          style={{
            width: sizeHelper.calWp(45),
            height: sizeHelper.calWp(45),
          }}
          resizeMode={"contain"}
        />
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: sizeHelper.calWp(20),
            flexDirection: "row",
            height: sizeHelper.calHp(60),
            borderRadius: 999,
            borderWidth: 1,
            borderColor: "#DDDDDD",
            backgroundColor:theme.colors.white,
            width:"85%"
          }}
        >
          <TextInput
            value={""}
            autoCapitalize="sentences" // ✅ Use only this
            autoCorrect={true} // ✅ Optional but recommended
            allowFontScaling={false}
            multiline={true}
            style={{
              fontSize: 14,
              // backgroundColor:"red",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              // paddingTop: Pl.OS == "ios" ? "7%" : "0%",
              paddingVertical: 0, // Adjust as needed for centering
              fontFamily: fonts.Inter_Regular,
              fontWeight: "600",
              color: theme.colors.secondry,
            }}
            placeholder={"Message..."}
            // placeholder={`${placeholder}${mandatory ? " *" : ""}`}
            placeholderTextColor={"#686868"}
          />
          <Image
            source={icons.voice_sms}
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            resizeMode={"contain"}
          />
        </View>

        <Image
          source={icons.send_sms}
          style={{
            width: sizeHelper.calWp(35),
            height: sizeHelper.calWp(35),
          }}
          resizeMode={"contain"}
        />
      </View>
    </>
  );
};
export default MessageSender;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(60),
    height: sizeHelper.calWp(60),
    resizeMode: "contain",
  },
});
