import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomHeader from "../../../components/Header/inde";
import icons from "../../../utils/Constants/icons";
import DatePicker from "react-native-date-picker";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";

const YouDOBScreen = ({ navigation }: any) => {
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
                   step={105} />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"About You"}
                color={theme.colors.white}
                size={22}
              />
              <CustomText
                text={"What’s your date\nof birth?"}
                color={theme.colors.white}
                size={30}
              />
            </View>

            <DatePicker
              // modal={true}
              mode="date"
              locale="en_US"
              title={"Date of birth"}
              theme="dark"
              confirmText="Done"
              cancelText="Cancel"
              // onCancel={() => setIsOpenPicker(false)} // Reset state on dismiss
              dividerColor={"#212325"}
              style={{
                width: WINDOW_WIDTH, // Full width with padding
                height: sizeHelper.calHp(250),
                alignSelf: "center",
                justifyContent: "space-between",
                gap: 50,
              }}
              open={true}
              date={new Date()} // Ensure it always shows a valid date
              // onConfirm={(date) => {
              //   setIsOpenPicker(false);
              // }}
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
            <TouchableOpacity
            onPress={()=>navigation.navigate("SelectGenderScreen")}
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
export default YouDOBScreen;

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
    backgroundColor: "red",
  },
});
