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
  import CustomButton from "../../../components/Button";
  import CustomText from "../../../components/Text";
  import ScreenLayout from "../../../components/ScreenLayout";
  import CustomHeader from "../../../components/Header/inde";
  
  const NotificationAccess = ({ navigation }: any) => {
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
                  text={"Receive inspiration"}
                  color={theme.colors.white}
                  size={30}
                />
                <CustomText
                  text={
                    "Stay updated with the latest scans, recommendations, and app updates."
                  }
                  color={theme.colors.white + "50"}
                  style={{ marginRight: sizeHelper.calWp(100) }}
                    size={22}
                />
              </View>
  
              <Image
                style={{
                  width: "80%",
                  height: "70%",
                  alignSelf: "center",
                }}
                source={images.receive_inspiration}
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
                text="Turn on notifications"
                onPress={()=>navigation.navigate("AboutYouScreen")}
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
  export default NotificationAccess;
  
  const styles = StyleSheet.create({
   
    button_icon: {
      width: sizeHelper.calWp(20),
      height: sizeHelper.calWp(20),
      resizeMode: "contain",
    },
  });
  