import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  ImageBackground,
} from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import icons from "../../utils/Constants/icons";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import images from "../../utils/Constants/images";

const JewelryCard = ({
  title,
  textColor,
  tintColor,
  isNotification,
  disableNext,
  width,
}: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <ImageBackground
        style={{
          width:width,
          height: sizeHelper.calHp(210),
          borderRadius: sizeHelper.calWp(10),
          overflow: "hidden",
        }}
        source={images.library_user}
      >
        <View
        style={{
            height: "100%",
            width: "100%",
            padding:sizeHelper.calWp(10),
            justifyContent:"space-between"
        }}
        >
             <CustomText
                text={"About You"}
                color={theme.colors.white}
                size={22}
              />

        </View>
        <View
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: theme.colors.black,
            opacity: 0.2,
          }}
          // resizeMode="contain"
        />
      </ImageBackground>
    </>
  );
};
export default JewelryCard;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
