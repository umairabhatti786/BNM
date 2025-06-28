import { FlatList, Image, StyleSheet, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import TabLayout from "../../../components/TabLayout";
import TabHeader from "../../../components/TabHeader";
import images from "../../../utils/Constants/images";
import { useSelector } from "react-redux";
import { getScanned } from "../../../redux/reducers/authReducer";
import { theme } from "../../../utils/Themes";
import GradientButton from "../../../components/GradientButton";
import icons from "../../../utils/Constants/icons";

const LibraryScreen = ({ navigation }: any) => {
  const isScanned = useSelector(getScanned);
  return (
    <>
      <TabLayout>
        <TabHeader title={"Library"} />
        {!isScanned ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                height: sizeHelper.calWp(250),
                width: sizeHelper.calWp(250),
              }}
              source={images.no_data}
              resizeMode="contain"
            />
            <CustomText
              text={"No Data Available"}
              color={theme.colors.white}
              size={23}
            />
            <GradientButton
              width={"42%"}
              style={{marginTop:sizeHelper.calHp(30)}}
              onPress={() => navigation.navigate("AddJewelryScan")}
              text={"Scan Now"}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                  tintColor: theme.colors.white,
                }}
                source={images.Jewelry_action}
              />
            </GradientButton>
          </View>
        ) : (
          <FlatList
            data={[1]}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{
              gap: sizeHelper.calHp(20),
              paddingBottom: sizeHelper.calHp(100),
            }}
            style={{
              flex: 1,
              // backgroundColor: theme.colors.background,
            }}
            renderItem={() => {
              return (
                <View
                  style={{
                    width: "48%",
                    height: sizeHelper.calHp(210),
                    borderRadius: sizeHelper.calWp(10),
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={images.library_user}
                    // resizeMode="contain"
                  />
                </View>
              );
            }}
          />
        )}
      </TabLayout>
    </>
  );
};
export default LibraryScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
