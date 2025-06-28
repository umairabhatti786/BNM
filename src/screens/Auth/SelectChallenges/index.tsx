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

const SelectChallengesScreen = ({ navigation }: any) => {
  const [selectedGender, setSelectedGender] = useState("");

  const gander = ["Ear", "Nose", "Eyebrow", "Navel", "Lip","Others"];
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
            <CustomHeader  step={175}  />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"Preferred Piercing Types"}
                color={theme.colors.white}
                size={22}
              />
              <CustomText
                text={"Choose the body areas you\nwork with most."}
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
                  key={index.toString()}
                    text={item}
                    onPress={() => setSelectedGender(item)}
                    paddingHorizontal={60}

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
            <TouchableOpacity
            onPress={()=>navigation.navigate("SelectPracticeScreen")}
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
export default SelectChallengesScreen;

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
