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
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomHeader from "../../../components/Header/inde";

const CameraAccess = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        <View
           style={{
            
            backgroundColor: theme.colors.black,
            flex:1,
          }}
        >
          <View
            style={{
              gap: sizeHelper.calHp(50),
              flex: 1,
            }}
          >
          <CustomHeader
          isDisableProgress
          />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"Let’s Use Your Camera"}
                color={theme.colors.white}
                size={30}
              />
              <CustomText
                text={
                  "We need camera permission to scan body parts and capture accurate details."
                }
                color={theme.colors.white + "50"}
                style={{ marginRight: sizeHelper.calWp(40) }}
                size={22}

              />
            </View>

            <Image
              style={{
                width: "80%",
                height: "70%",
                alignSelf: "center",
              }}
              source={images.use_Camera_img}
            />
          </View>
          <View
            style={{
              paddingBottom: sizeHelper.calHp(80),
              gap: sizeHelper.calHp(30),
              alignItems: "center",
              width: "100%",
            }}
          >
            <CustomButton
              width={"100%"}
              text="Continue"
              onPress={()=>navigation.navigate("NotificationAccess")}
              textColor={theme.colors.black}
              bgColor={theme.colors.gray}
              borderRadius={999}
            />
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};
export default CameraAccess;

const styles = StyleSheet.create({
 
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
