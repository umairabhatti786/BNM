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

const AddJewelryScreen = ({ navigation }: any) => {
  const [jewelryTitle, setJewelryTitle] = useState("");
  const { hasGalleryPermission, requestGalleryPermission } = usePermissions();
  const [jewelryMedia, setJewelryMedia] = useState<any>();

  const JewelryData = [
    { img: images.Jewelry_img1, name: "STRAIGHT BARBELL" },
    { img: images.Jewelry_img2, name: "LABRET" },
    { img: images.Jewelry_img3, name: "CURVED BARBELL" },
    { img: images.Jewelry_img4, name: "CAPTIVE BEAD RING" },
    { img: images.Jewelry_img5, name: "CIRCULAR BARBELL" },
    { img: images.Jewelry_img6, name: "SEAM RING" },
  ];

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
        <TabHeader title={"Add New Jewelry"} />

        <View
          style={{
            gap: sizeHelper.calHp(30),
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.white + "50",
          }}
        >
          <TextInput
            value={jewelryTitle}
            allowFontScaling={false} // Disable font scaling
            style={{
              fontSize: sizeHelper.calHp(27),
              width: "100%",
              alignItems: "center",
              height: sizeHelper.calHp(80),
              justifyContent: "center",
              textAlignVertical: "top",
              paddingVertical: 0, // Adjust as needed for centering
              fontFamily: fonts.Inter_Regular,
              fontWeight: "500",
              color: theme.colors.white,
              paddingRight: sizeHelper.calWp(10),
            }}
            placeholder={"Add Title"}
            placeholderTextColor={theme.colors.white + "40"}
            onChangeText={(txt) => setJewelryTitle(txt)}
          />
        </View>
        <InfoDetail
        placeholder={"Select Category"}
        />

        <View
          style={{
            gap: sizeHelper.calHp(40),
          }}
        >
          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Add Media"}
              color={theme.colors.white}
              size={27}
            />
            <TouchableOpacity
              onPress={()=>{
                if(jewelryMedia?.path){
                    setJewelryMedia({})
                }
                else{
                    onAddMedia()
                }


              }}
              style={{
                width: sizeHelper.calWp(75),
                height: sizeHelper.calWp(75),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={["#0054E0", "#FF1D61"]} // Adjust colors to your needs
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: sizeHelper.calWp(20),
                    height: sizeHelper.calWp(20),
                  }}
                  source={!jewelryMedia?.path?icons?.plus: icons.add_img}
                  resizeMode="contain"
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {jewelryMedia?.path && (
            <View
              style={{
                width: "49%",
                height: sizeHelper.calHp(250),
                borderRadius: sizeHelper.calWp(10),
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: jewelryMedia.path }}
              />
            </View>
          )}

          <View
            style={{
              height: 1,
              backgroundColor: theme.colors.white + "50",
            }}
          />
        </View>

        <View style={appStyles.rowjustify}>
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
      </TabLayout>
    </>
  );
};
export default AddJewelryScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
