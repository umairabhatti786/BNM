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
import { fonts } from "../../../utils/Themes/fonts";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch } from "react-redux";
import { setIsScanned } from "../../../redux/reducers/authReducer";

const AddJewelryScan = ({ navigation }: any) => {
  const [selectedJewelry, setSelectedJewelry] = useState<any>();
  const dispatch=useDispatch()
  const JewelryData = [
    { img: images.Jewelry_img1, id: 1 },
    { img: images.Jewelry_img2, id: 2 },
    { img: images.Jewelry_img3, id: 3 },
    { img: images.Jewelry_img4, id: 4 },
    { img: images.Jewelry_img2, id: 5 },
  ];

  const ChooseJewelry = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          gap: sizeHelper.calWp(20),
          paddingHorizontal: sizeHelper.calWp(25),
          paddingVertical: sizeHelper.calHp(5),
          borderRadius: sizeHelper.calWp(35),
          borderWidth: 1,
          borderColor: theme.colors.white + "80",
          backgroundColor: "#111111",
          alignSelf: "center",
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(110),
            height: sizeHelper.calHp(95),
            borderRadius: sizeHelper.calWp(20),
          }}
          source={images.Jewelry_img2}
        />
        <View style={{ gap: sizeHelper.calHp(5) }}>
          <CustomText
            text={"Choose the Jewelry"}
            color={theme.colors.white}
            fontWeight="700"
            size={27}
          />
          <CustomText
            text={"Place anywhere on image"}
            color={theme.colors.white}
            fontWeight="600"
            fontFam={fonts.Inter_Medium}
            // size={23}
          />
        </View>

        <TouchableOpacity
          style={{
            width: sizeHelper.calWp(55),
            height: sizeHelper.calWp(55),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            overflow: "hidden",
            marginLeft: sizeHelper.calWp(30),
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
            <TouchableOpacity
            onPress={()=>{
                dispatch(setIsScanned(true))
                navigation.goBack()

            }}
            >
                  <Image
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calWp(20),
                tintColor: theme.colors.white,
              }}
              source={icons.cross}
              resizeMode="contain"
            />

            </TouchableOpacity>
          
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  const TopHeader = () => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
          paddingHorizontal: sizeHelper.calWp(50),
        }}
      >
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

        <CustomText text={"Add Jewelry"} color={theme.colors.white} size={25} />

        <TouchableOpacity
          //   onPress={() => navigation.navigate("ChatScreen")}
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
        style={{ paddingHorizontal: sizeHelper.calWp(-1) }}
        lauoutSource={images.scanner_user}
      >
        <TopHeader />
        <View
          style={{
            flex: 1,
            paddingTop: sizeHelper.calHp(40),
            justifyContent: "space-between",
          }}
        >
          <ChooseJewelry />
          {/* <View
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
          </View> */}

          <View
            style={{
              //   paddingBottom: sizeHelper.calHp(20),
              alignSelf: "flex-end",
              gap: sizeHelper.calHp(20),
              paddingRight: sizeHelper.calWp(50),
            }}
          >
            <TouchableOpacity style={{ ...styles.box }}>
              <Image
                style={{
                  height: "35%",
                  width: "35%",
                }}
                source={icons.save}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.box }}>
              <Image
                style={{
                  height: "44%",
                  width: "44%",
                }}
                source={icons.plane}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.box }}>
              <Image
                style={{
                  height: "30%",
                  width: "30%",
                }}
                source={icons.camera}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{...appStyles.rowjustify,paddingBottom:sizeHelper.calHp(30)}}>
          <View style={{gap:sizeHelper.calHp(10),alignItems:"center"}}>
             <TouchableOpacity
            onPress={() => setIsScanningVisible(true)}
            style={{ ...styles.box }}
          >
            <TouchableOpacity 
                        onPress={() => setIsScanningVisible(true)}

            style={styles.inner_box}>
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
          color={theme.colors.white+"60"}
          size={19}
        />

          </View>
          <View style={{gap:sizeHelper.calHp(10),alignItems:"center"}}>
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
          color={theme.colors.white+"60"}
          size={19}
        />

          </View>

            <View style={{gap:sizeHelper.calHp(10),alignItems:"center"}}>
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
          color={theme.colors.white+"60"}
          size={19}
        />

          </View>

          <View style={{gap:sizeHelper.calHp(10),alignItems:"center"}}>
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
          color={theme.colors.white+"60"}
          size={19}
        />

          </View>
        </View> */}
        <View>
          <FlatList
            data={JewelryData}
            showsVerticalScrollIndicator={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: sizeHelper.calWp(30) }}
            contentContainerStyle={{
              gap: sizeHelper.calHp(20),
              paddingRight: sizeHelper.calWp(70),
              paddingBottom: sizeHelper.calHp(50),
            }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedJewelry(item)}
                  style={{
                    width: sizeHelper.calWp(160),
                    height: sizeHelper.calWp(160),
                    borderWidth: selectedJewelry?.id == item?.id ? 1.5 : -1,
                    borderColor: theme.colors.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: sizeHelper.calWp(140),
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={item.img}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </TabLayout>
    </>
  );
};
export default AddJewelryScan;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
  box: {
    width: sizeHelper.calWp(120),
    height: sizeHelper.calWp(120),
    backgroundColor: "#DEEAF540",
    borderWidth: 1.5,
    borderColor: theme.colors.white + "40",
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
