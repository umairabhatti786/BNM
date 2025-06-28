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
import SwitchToggle from "react-native-switch-toggle";
import { useState } from "react";

const PackagesScreen = ({ navigation }: any) => {
    const [isEnableFreeTrail,setIsEnableFreeTrail]=useState(false)
  return (
    <>
      <ImageBackground
        style={styles.layout_img}
        source={images.package_background}
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

            <View style={{ gap: sizeHelper.calHp(20), paddingTop: "40%" }}>
              {/* <CustomText
                text={"About You"}
                color={theme.colors.white}
                size={22}
              /> */}
              <CustomText
                text={"Upgrade\nto Premium"}
                color={theme.colors.white}
                size={60}
              />
              <View style={{ flexDirection:"row", gap: sizeHelper.calWp(30) }}>
                <View style={styles.circle_check}>
                  <Image style={styles.check_icon} source={icons.check} />
                </View>
                <CustomText
                text={"Unlimited access to\nexclusive styles"}
                color={theme.colors.white}
                size={27}
              />
              </View>
              <View style={{ flexDirection:"row", gap: sizeHelper.calWp(30) }}>
                <View style={styles.circle_check}>
                  <Image style={styles.check_icon} source={icons.check} />
                </View>
                <CustomText
                text={"Unlimited Scan Storage"}
                color={theme.colors.white}
                size={27}
              />
              </View>

              <View style={{ flexDirection:"row", gap: sizeHelper.calWp(30) }}>
                <View style={styles.circle_check}>
                  <Image style={styles.check_icon} source={icons.check} />
                </View>
                <CustomText
                text={"Team Access & Collaboration"}
                color={theme.colors.white}
                size={27}
              />
              </View>
            </View>

            {/* <Image
              style={{
                width: sizeHelper.calWp(200),
                height: sizeHelper.calWp(200),
                alignSelf: "center",
              }}
              source={images.three}
            /> */}
          </View>
          <View
            style={{
              paddingBottom: sizeHelper.calHp(80),
              gap: sizeHelper.calHp(40),
              width: "100%",
            }}
          >
            <View style={appStyles.rowjustify}>
            <CustomText
                text={"Not Sure? Enable Free Trail."}
                color={theme.colors.white}
                size={22}
              />

<SwitchToggle
              switchOn={isEnableFreeTrail}
              onPress={()=>setIsEnableFreeTrail(!isEnableFreeTrail)}
              circleColorOff="#ffff"
              circleColorOn="#ffff"
              backgroundColorOn={theme.colors.yellow}
              backgroundColorOff="#484848"
              containerStyle={{...styles.toggle_container,
                padding:isEnableFreeTrail? 10:0,

            }}
              circleStyle={styles.toggle_circle}
            />

            </View>
            <View style={{width:"100%",height:sizeHelper.calHp(1),backgroundColor:theme.colors.white+"50"}}/>
            <CustomButton
              width={"100%"}
              text="Start & Subscribe"
              justifyContent={"space-between"}
              onPress={() => navigation.navigate("BottomTab")}
              textColor={theme.colors.black}
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
            <CustomText
                text={"Plan starts today, Just Rs 15,900 per year"}
                color={theme.colors.white+"50"}
                style={{textAlign:"center"}}
                // size={27}
              />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
export default PackagesScreen;

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

  circle_check: {
    width: sizeHelper.calWp(50),
    height: sizeHelper.calWp(50),
    borderRadius: sizeHelper.calWp(50),
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  check_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
  toggle_container: {
    width: sizeHelper.calWp(115),
    height: sizeHelper.calHp(50),
    borderRadius: 25,
  },
  toggle_circle: {
    width: 25,
    height: 25,
    borderRadius: 999,
  },
});
