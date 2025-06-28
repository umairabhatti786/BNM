import { Image, StyleSheet, View } from "react-native";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomHeader from "../../../components/Header/inde";
import icons from "../../../utils/Constants/icons";
import CustomInput from "../../../components/Input";

const AboutYouScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.black,
          }}
        >
          <View
            style={{
              gap: sizeHelper.calHp(30),
              flex: 1,
            }}
          >
            <CustomHeader disableNext 
            step={35}
            />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"About You"}
                color={theme.colors.white}
                size={22}
              />
              <CustomText
                text={"What’s your name?"}
                color={theme.colors.white}
                size={30}
              />
            </View>

            <CustomInput placeholder="Please enter name here" />
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
              text="Keep Going"
              justifyContent={"space-between"}
              onPress={()=>navigation.navigate("AddPhotoScreen")}
              textColor={theme.colors.black}
              bgColor={theme.colors.gray}
              borderRadius={999}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(20),
                  height: sizeHelper.calWp(20),
                  resizeMode: "contain",
                  tintColor: theme.colors.black,
                }}
                source={icons.next_arrow}
              />
            </CustomButton>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};
export default AboutYouScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
