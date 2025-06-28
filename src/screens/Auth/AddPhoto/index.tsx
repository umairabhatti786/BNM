import { Alert, Image, Linking, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomHeader from "../../../components/Header/inde";
import icons from "../../../utils/Constants/icons";
import CustomInput from "../../../components/Input";
import { appStyles } from "../../../utils/GlobalStyles";
import LinearGradient from "react-native-linear-gradient";
import { usePermissions } from "../../../utils/Permissions";
import { openSettings } from "react-native-permissions";
import ImagePicker from "react-native-image-crop-picker";
import { useState } from "react";

const AddPhotoScreen = ({ navigation }: any) => {
    const { hasGalleryPermission, requestGalleryPermission } = usePermissions();
    const [photo,setPhoto]=useState<any>()

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
          setPhoto(data);
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
            <CustomHeader 
                        step={70}

             />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"About You"}
                color={theme.colors.white}
                size={22}
              />
              <CustomText
                text={"Add your photo to\nyour profile"}
                color={theme.colors.white}
                size={30}
              />
            </View>
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <TouchableOpacity 
              onPress={onAddMedia}
              style={{ ...styles.circle }}>
                 <LinearGradient
        colors={["#756F9B","#566AB4", ]} // Adjust colors to your needs
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: "100%",
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          photo?.uri?(
             <Image
                  style={{
                    width:"100%",
                    height: "100%",
                    // resizeMode: "contain",
                  }}
                  source={{uri:photo?.uri}}
                />

          ):(
            <Image
                  style={{
                    width: sizeHelper.calWp(30),
                    height: sizeHelper.calWp(30),
                    resizeMode: "contain",
                  }}
                  source={icons.plus}
                />
          )
        }

                
                      </LinearGradient>

              </TouchableOpacity>
              <View>
                <CustomText
                  text={"John Michael"}
                  color={theme.colors.white}
                  size={35}
                />
                <CustomText
                  text={"@johnmichael1123"}
                  color={theme.colors.white + "40"}
                  // size={}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingBottom: sizeHelper.calHp(80),
              gap: sizeHelper.calHp(30),
              alignItems: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
            onPress={()=>navigation
            .navigate("YouDOBScreen")}
              style={{
                ...styles.circle,
                width: sizeHelper.calWp(100),
                height: sizeHelper.calWp(100),
                borderRadius: sizeHelper.calWp(100),
                alignSelf: "flex-end",
                backgroundColor: theme.colors.white,
              }}
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
            </TouchableOpacity>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};
export default AddPhotoScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
  circle: {
    width: sizeHelper.calWp(330),
    height: sizeHelper.calWp(330),
    borderRadius: sizeHelper.calWp(330),
    alignItems: "center",
    justifyContent: "center",
    overflow:"hidden"
  },
});
