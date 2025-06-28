import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomHeader from "../../../components/Header/inde";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomButton from "../../../components/Button";
import { useState } from "react";

const SelectPracticeScreen = ({ navigation }: any) => {
  const [selectedGender, setSelectedGender] = useState("");

  const gander = ["Default Gauge Size (e.g., 18g, 16g)", "Default Post Length (mm)", "Default Disk Size (mm)", "Add custom presets"];
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
             step={200} />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"Set Default Jewelry Sizes"}
                color={theme.colors.white}
                size={22}
              />
              <CustomText
                text={"Save your most-used sizes to apply faster during simulations."}
                color={theme.colors.white}
                size={30}
              />
            </View>
            <View
              style={{
                ...appStyles.row,
                flexWrap: "wrap",
                gap: sizeHelper.calWp(20),
              }}
            >
              {gander.map((item, index) => {
                return (
                  <CustomButton
                    text={item}
                    paddingHorizontal={60}
                    key={index.toString()}
                    onPress={() => setSelectedGender(item)}
                    textColor={
                      selectedGender == item
                        ? theme.colors.black
                        : theme.colors.white
                    }
                    bgColor={
                      selectedGender == item
                        ? theme.colors.white
                        : theme.colors.button_gray
                    }
                    borderRadius={999}
                  />
                );
              })}
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
           <CustomButton
              width={"100%"}
              text="Let’s Get Started"
              justifyContent={"space-between"}
              onPress={()=>navigation.navigate("PackagesScreen")}
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
export default SelectPracticeScreen;

const styles = StyleSheet.create({
  circle: {
    width: sizeHelper.calWp(330),
    height: sizeHelper.calWp(330),
    borderRadius: sizeHelper.calWp(330),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
