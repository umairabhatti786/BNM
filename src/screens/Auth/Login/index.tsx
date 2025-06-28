import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import icons from "../../../utils/Constants/icons";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";

const LoginScreen = ({ navigation }: any) => {
  return (
    <>
      <ImageBackground
        style={styles.layout_img}
        source={images.login_background}
        resizeMode="cover"
      >
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(30),
            paddingTop: sizeHelper.calHp(40),
            gap: sizeHelper.calHp(50),
            flex: 1,
          }}
        >
          <View
            style={{
              gap: sizeHelper.calHp(50),
              flex: 1,
            }}
          >
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

            <Image
              style={{
                width: sizeHelper.calWp(200),
                height: sizeHelper.calWp(200),
                alignSelf: "center",
              }}
              source={images.three}
            />
          </View>
          <View
            style={{
              paddingBottom: sizeHelper.calHp(80),
              gap: sizeHelper.calHp(30),
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("CameraAccess")}
              style={styles.button}
            >
              <Image style={styles.button_icon} source={icons.apple} />
              <CustomText
                text={"Create with Apple"}
                color={theme.colors.white}
                size={25}
              />
              <Image style={styles.button_icon} source={icons.next_arrow} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("CameraAccess")}
              style={{ ...styles.button, borderWidth: -1 }}
            >
              <Image style={styles.button_icon} source={icons.box} />
              <CustomText
                text={"Create with Email"}
                color={theme.colors.white}
                size={25}
              />
              <Image style={styles.button_icon} source={icons.next_arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  layout_img: {
    width: "100%",
    height: "100%",
  },

  button: {
    height: sizeHelper.calHp(80),
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.colors.white,
    alignItems: "center",
    flexDirection: "row",
    gap: sizeHelper.calWp(20),
    justifyContent: "center",
    paddingHorizontal: sizeHelper.calWp(35),
    // width:"70%",
  },
  button_icon: {
    width: sizeHelper.calWp(25),
    height: sizeHelper.calWp(25),
    resizeMode: "contain",
  },
});
