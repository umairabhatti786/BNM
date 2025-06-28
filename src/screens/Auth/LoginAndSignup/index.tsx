import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../../utils/Helpers";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomInput from "../../../components/Input";

const LoginAndSignupScreen = ({ navigation }: any) => {
  return (
    <ScreenLayout
      style={{
        flex: 1,
        paddingHorizontal: sizeHelper.calWp(40),
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <View>
          <Image
            style={{
              width: sizeHelper.calWp(300),
              height: sizeHelper.calWp(300),
              alignSelf: "center",
            }}
            source={images.logo}
            resizeMode="contain"
          />
          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
            <CustomText
              text={"Welcome"}
              fontWeight="700"
              fontFam={fonts.Inter_Bold}
              size={35}
            />
            <CustomText
              style={{
                textAlign: "center",
                marginHorizontal: sizeHelper.calWp(70),
              }}
              text={
                "You can earn rewards just by completing tasks and shopping with our partners!"
              }
            />

            <View
              style={{
                width: "100%",
                height: sizeHelper.calHp(520),
                backgroundColor:theme.colors?.dark_highlight+"25",
                borderRadius: sizeHelper.calWp(20),
                marginTop: sizeHelper.calHp(50),
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  width: "90%",
                  height: "90%",
                  alignSelf: "flex-end",
                  opacity: 0.3,
                  marginRight: sizeHelper.calWp(-140),
                  marginTop: sizeHelper.calHp(-30),
                }}
                source={images.shirt}
                // resizeMode="contain"
              />
              <View
                style={{
                  position: "absolute",
                  padding: sizeHelper.calHp(40),
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  gap: sizeHelper.calHp(6),
                }}
              >
                <Image
                  style={{
                    width: "60%",
                    height: "60%",
                  }}
                  source={images.shirt}
                  resizeMode="contain"
                />
                <CustomText
                  text={"New Deal! "}
                  fontWeight="700"
                  fontFam={fonts.Inter_Bold}
                  size={27}
                />
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(7) }}>
                  <CustomText
                    text={"15%"}
                    fontWeight="700"
                    color={theme.colors.black}
                    fontFam={fonts.Inter_Bold}
                    size={22}
                  />
                  <CustomText text={"Off Nike for Silver Users"} size={22} />
                </View>
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(7) }}>
                  <CustomInput
                    borderColor={theme.colors.primary}
                    width={"80%"}
                    placeholder="Enter Code Here"
                  />
                  <TouchableOpacity
                    style={{
                      justifyContent: "center",

                      height: sizeHelper.calHp(80),
                      flex: 1,
                      alignItems: "center",
                      borderColor: theme.colors.primary,
                      borderWidth: 1,
                      borderRadius: sizeHelper.calWp(15),
                      backgroundColor: theme.colors.Input_field,
                    }}
                  >
                    <Image
                      style={{
                        width: "50%",
                        height: "50%",
                      }}
                      source={images.scan}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>

                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(7) }}>
                  <CustomText
                    text={"⚡ SCAN/Enter Code"}
                    fontFam={fonts.Inter_SemiBold}
                    fontWeight="600"
                    color={theme.colors.black}
                  />
                  <CustomText text={"To Earn Bonus Points"} />
                </View>
              </View>
            </View>
          </View>

          {/* <Image style={styles.basket_img} source={images.fruit_basket} /> */}
        </View>
      </View>

      <View
        style={{
          gap: sizeHelper.calHp(20),
          paddingBottom: "5%",
        }}
      >
        <CustomButton
          text="Login"
          // style={{ marginTop: sizeHelper.calHp(80) }}
          onPress={()=>navigation.navigate("Login")}
          width={"100%"}
        >
          <Image
            source={icons.arrow_next}
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
          />
        </CustomButton>
        {/* <CustomButton 
        onPress={()=>navigation.navigate("Login")}
        text="Login" width={'100%'} /> */}
         <CustomButton
          text="Create an account"
          onPress={()=>navigation.navigate("Signup")}

          textColor={theme.colors.black}
          bgColor={theme.colors.white}
          borderWidth={1}
          borderColor={theme.colors.primary}
          // style={{ marginTop: sizeHelper.calHp(80) }}
          // onPress={onLogin}
          width={"100%"}
        >
          <Image
            source={icons.arrow_next}
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
              tintColor:theme.colors.black
            }}
          />
        </CustomButton>
      </View>
    </ScreenLayout>
  );
};

export default LoginAndSignupScreen;

const styles = StyleSheet.create({
  basket_img: {
    width: screenWidth,
    height: screentHeight / 1.6,
    position: "absolute",
    bottom: sizeHelper.calHp(-170),
    left: sizeHelper.calWp(-100),
    resizeMode: "contain",
  },
  fruits_bag: {
    width: screenWidth,
    height: sizeHelper.calHp(600),
    resizeMode: "contain",
  },

  basket_circle: {
    width: sizeHelper.calWp(590),
    height: sizeHelper.calWp(590),
    borderRadius: sizeHelper.calWp(590),
    backgroundColor: "#B7EFC5",
  },
});
