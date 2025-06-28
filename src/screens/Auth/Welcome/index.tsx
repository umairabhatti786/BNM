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
import { appStyles } from "../../../utils/GlobalStyles";
import CustomText from "../../../components/Text";

const Welcome = ({ navigation }: any) => {
  return (
    <>
      <ImageBackground
        style={styles.layout_img}
        source={images.wlecome_background}
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
            onPress={()=>navigation.navigate("BottomTab")}
              style={{ padding: sizeHelper.calWp(20), alignItems: "flex-end" }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                }}
                source={icons.cross}
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
              width: "100%",
            }}
          >
            <CustomButton
              text="Create account"
              bgColor={"transparent"}
                              onPress={()=>navigation.navigate("LoginScreen")}

              borderWidth={1}
              style={{ alignSelf: "center" }}
              borderColor={theme.colors.white}
              borderRadius={999}
              width={"50%"}
            />
            <View style={appStyles.rowjustify}>
              <View style={{ width: 30 }} />
              <CustomButton
                text="Sign in"
                bgColor={"transparent"}
                borderWidth={1}
                onPress={()=>navigation.navigate("LoginScreen")}
                style={{ alignSelf: "center" }}
                borderColor={"transparent"}
                borderRadius={999}
                width={"50%"}
              />
              <Image
                style={{
                  width: sizeHelper.calWp(45),
                  height: sizeHelper.calWp(45),
                  alignSelf: "center",
                }}
                source={icons.info}
              />
            </View>
          </View>
        </View>

      
      </ImageBackground>
    </>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  layout_img: {
    width: "100%",
    height: "100%",
    // alignItems:"center",
    // justifyContent:"center"
    // position: "absolute",
    // top: verticalScale(-100),
    // opacity: 0.8,
  },
});
