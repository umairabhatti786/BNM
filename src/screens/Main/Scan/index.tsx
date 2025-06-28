import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import TabLayout from "../../../components/TabLayout";
import images from "../../../utils/Constants/images";
import { appStyles } from "../../../utils/GlobalStyles";
import { theme } from "../../../utils/Themes";
import icons from "../../../utils/Constants/icons";
import { useState } from "react";
import ConnectScanModal from "./ConnectScanModal";

const ScanScreen = ({ navigation }: any) => {
  const [isScanningVisible, setIsScanningVisible] = useState(false);
  const TopHeader = () => {
    return (
      <View style={appStyles.rowjustify}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            ...styles.box,
            borderRadius: sizeHelper.calWp(40),
            width: sizeHelper.calWp(110),
          }}
        >
          <Image
            style={{
              height: "40%",
              width: "40%",
            }}
            source={icons.back_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <CustomText
          text={"Scanning..."}
          color={theme.colors.white}
          size={25}

          // size={27}
        />

        <TouchableOpacity
          // onPress={() => navigation.navigate("ChatScreen")}
          style={{ ...styles.box }}
        >
          <Image
            style={{
              height: "40%",
              width: "40%",
            }}
            source={icons.scan_header}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <TabLayout
        style={{ paddingHorizontal: sizeHelper.calWp(50) }}
        lauoutSource={images.scanner_user}
      >
        <TopHeader />
        <View style={{ flex: 1, paddingTop: sizeHelper.calHp(40) }}>
          <View
            style={{
              height: "70%",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={appStyles.rowjustify}>
              <Image
                style={styles.rectangle_Img}
                source={images.rect_top_left}
                resizeMode="contain"
              />

              <Image
                style={styles.rectangle_Img}
                source={images.rect_top_right}
                resizeMode="contain"
              />
            </View>
            <View style={appStyles.rowjustify}>
              <Image
                style={styles.rectangle_Img}
                source={images.rect_bottom_left}
                resizeMode="contain"
              />

              <Image
                style={styles.rectangle_Img}
                source={images.rect_bottom_right}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            ...appStyles.rowjustify,
            paddingBottom: sizeHelper.calHp(30),
          }}
        >
          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => setIsScanningVisible(true)}
              style={{ ...styles.box }}
            >
              <TouchableOpacity
                onPress={() => setIsScanningVisible(true)}
                style={styles.inner_box}
              >
                <Image
                  style={{
                    height: "40%",
                    width: "40%",
                  }}
                  source={icons.scanner_gun}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <CustomText
              text={"SCAN"}
              color={theme.colors.white + "60"}
              size={19}
            />
          </View>
          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatScreen")}
              style={{ ...styles.box }}
            >
              <TouchableOpacity style={styles.inner_box}>
                <Image
                  style={{
                    height: "40%",
                    width: "40%",
                  }}
                  source={icons.iPhone}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <CustomText
              text={"iPhone"}
              color={theme.colors.white + "60"}
              size={19}
            />
          </View>

          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatScreen")}
              style={{ ...styles.box }}
            >
              <TouchableOpacity style={styles.inner_box}>
                <Image
                  style={{
                    height: "40%",
                    width: "40%",
                  }}
                  source={images.Jewelry_action}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <CustomText
              text={"CAPTURE"}
              color={theme.colors.white + "60"}
              size={19}
            />
          </View>

          <View style={{ gap: sizeHelper.calHp(10), alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatScreen")}
              style={{ ...styles.box }}
            >
              <TouchableOpacity style={styles.inner_box}>
                <Image
                  style={{
                    height: "40%",
                    width: "40%",
                  }}
                  source={icons.cube}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <CustomText
              text={"CAPTURE"}
              color={theme.colors.white + "60"}
              size={19}
            />
          </View>
        </View>
      </TabLayout>
      <ConnectScanModal
        modalVisible={isScanningVisible}
        setModalVisible={setIsScanningVisible}
      />
    </>
  );
};
export default ScanScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
  box: {
    width: sizeHelper.calWp(120),
    height: sizeHelper.calWp(120),
    backgroundColor: "#DEEAF550",
    borderWidth: 1.5,
    borderColor: theme.colors.white + "30",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(120),
  },
  rectangle_Img: {
    height: sizeHelper.calHp(110),
    width: sizeHelper.calWp(110),
  },
  inner_box: {
    height: "80%",
    width: "80%",
    borderRadius: 999,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
