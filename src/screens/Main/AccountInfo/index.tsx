import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import TabLayout from "../../../components/TabLayout";
import TabHeader from "../../../components/TabHeader";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import LinearGradient from "react-native-linear-gradient";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import GradientButton from "../../../components/GradientButton";
import CustomInput from "../../../components/Input";
import { fonts } from "../../../utils/Themes/fonts";
import { useState } from "react";
import { usePermissions } from "../../../utils/Permissions";
import ImagePicker from "react-native-image-crop-picker";
import { openSettings } from "react-native-permissions";
import InfoDetail from "../../../components/InfoDetail";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AccountInfoScreen = ({ navigation }: any) => {
  const [jewelryTitle, setJewelryTitle] = useState("");
  const { hasGalleryPermission, requestGalleryPermission } = usePermissions();
  const [jewelryMedia, setJewelryMedia] = useState<any>();

  const onAddMedia = async () => {
    let gallerypermission = await requestGalleryPermission();
    console.log("gallerypermission", gallerypermission);
    if (gallerypermission == "granted" || gallerypermission == "limited") {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: "photo",
        forceJpg: true,
      }).then(async (result) => {
        if (result) {
          const fileName = result?.path?.split("/").pop();
          let data = {
            ...result,
            fileName: fileName,
            name: fileName,
            size: result?.size,
            height: result?.height,
            type: result?.mime,
            uri: result?.path,
            width: result?.width,
          };
          setJewelryMedia(data);
        }
      });
    } else {
      if (gallerypermission == "blocked") {
        Alert.alert(
          "Photo Access Needed",
          "To upload photos, please allow access in Settings.",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Open Settings",
              onPress: () => {
                if (Platform.OS == "ios") {
                  openSettings();
                } else {
                  Linking.openSettings();
                }
              },
            },
          ]
        );
      }
    }
  };
  return (
    <>
      <TabLayout>
        <TabHeader title={"Account Info"} />
        <KeyboardAwareScrollView 
        contentContainerStyle={{paddingBottom:sizeHelper.calHp(30)}}
        style={{ flex: 1, gap: sizeHelper.calHp(50) }}>
          <View
            style={{
              gap: sizeHelper.calHp(50),
            }}
          >
            <InfoDetail isNextDisable gap={5} placeholder={"Name"}>
              <TextInput
                value={"John Michael"}
                allowFontScaling={false} // Disable font scaling
                style={{
                  fontSize: sizeHelper.calHp(27),
                  width: "100%",
                  alignItems: "center",
                  height: sizeHelper.calHp(50),
                  justifyContent: "center",
                  textAlignVertical: "top",
                  paddingVertical: 0, // Adjust as needed for centering
                  fontFamily: fonts.Inter_Regular,
                  fontWeight: "500",
                  color: theme.colors.white,
                  paddingRight: sizeHelper.calWp(10),
                }}
                //   placeholder={"Add Title"}
                placeholderTextColor={theme.colors.white + "40"}
                onChangeText={(txt) => setJewelryTitle(txt)}
              />
            </InfoDetail>
            <InfoDetail
              rightSource={icons.calendar}
              rightSourceSize={35}
              gap={5}
              placeholder={"Date of birth"}
            >
              <CustomText
                text={"12/12/1995"}
                style={{ marginBottom: sizeHelper.calHp(10) }}
                color={theme.colors.white}
                size={27}
              />
            </InfoDetail>

            <InfoDetail gap={5} placeholder={"Gender"}>
              <CustomText
                text={"Male"}
                style={{ marginBottom: sizeHelper.calHp(10) }}
                color={theme.colors.white}
                size={27}
              />
            </InfoDetail>

            <InfoDetail gap={5} placeholder={"Preferred Piercing Types"}>
              <CustomText
                text={"Lip"}
                style={{ marginBottom: sizeHelper.calHp(10) }}
                color={theme.colors.white}
                size={27}
              />
            </InfoDetail>
            <InfoDetail gap={5} placeholder={"Set Default Jewelry Sizes"}>
              <CustomText
                text={"Default Post Length (mm)"}
                style={{ marginBottom: sizeHelper.calHp(10) }}
                color={theme.colors.white}
                size={27}
              />
            </InfoDetail>
            <CustomButton
              width={"100%"}
              text="Upgrade To Pro"
              onPress={() => navigation.navigate("PackagesScreen")}
              textColor={theme.colors.black}
              justifyContent={"space-between"}
              bgColor={theme.colors.yellow}
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

            <View
              style={{
                ...appStyles.rowjustify,
                paddingTop: sizeHelper.calHp(50),
              }}
            >
              <CustomButton
                height={70}
                text="Cancel"
                bgColor={"transparent"}
                onPress={() => navigation.goBack()}
                borderWidth={1}
                style={{ alignSelf: "center" }}
                borderColor={theme.colors.white}
                borderRadius={999}
                width={"45%"}
              />
              <GradientButton
                onPress={() => navigation.goBack()}
                width={"45%"}
                text={"+  Add"}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TabLayout>
    </>
  );
};
export default AccountInfoScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
