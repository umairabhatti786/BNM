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
import TabLayout from "../../../components/TabLayout";
import TabHeader from "../../../components/TabHeader";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import icons from "../../../utils/Constants/icons";
import { appStyles } from "../../../utils/GlobalStyles";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import DaySelectorHeader from "../../../components/DaySelectorHeader";

const HomeScreen = ({ navigation }: any) => {
  const LearningData = [
    {
      img: images.learning_img1,
      title: "How to Scan",
      name: "Michael Jones",
      time: "2 mins",
    },
    {
      img: images.learning_img2,
      title: "Food",
      name: "Elizabeth Jones",
      time: "16 mins",
    },
  ];
  const Banner = () => {
    return (
      <View
        style={{
          width: "100%",
          height: sizeHelper.calHp(300),
          borderRadius: sizeHelper.calWp(20),
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: theme.colors.black,
            opacity: 0.4,
            zIndex: 1,
          }}
        />
        <View
          style={{
            width: "70%",
            height: "100%",
            padding: sizeHelper.calWp(15),
            justifyContent: "flex-end",
            zIndex: 1,
            gap: sizeHelper.calHp(20),
            // alignItems:"flex-end",
            // backgroundColor:"red"
          }}
        >
          <CustomText
            text={"View and manage your past scan history"}
            style={{ marginRight: sizeHelper.calWp(50) }}
            color={theme.colors.white}
            size={30}
          />
          <CustomButton
            text="View Saved Scans"
            height={75}
            width={"85%"}
            onPress={() => navigation.navigate("PackagesScreen")}
            textColor={theme.colors.white}
            bgColor={"transparent"}
            borderColor={theme.colors.white}
            borderWidth={1}
            borderRadius={999}
          >
            <Image
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calWp(20),
                resizeMode: "contain",
                tintColor: theme.colors.white,
              }}
              source={icons.next_arrow}
            />
          </CustomButton>
          {/* <TouchableOpacity
            style={{
              width: sizeHelper.calWp(70),
              height: sizeHelper.calWp(70),
              alignSelf: "flex-end",
              backgroundColor: "#DEEAF550",
              borderWidth: 1,
              borderColor: theme.colors.white + "30",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: sizeHelper.calWp(80),
            }}
          >
            <View
              style={{
                width: "80%",
                height: "80%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.white,
                borderRadius: 999,
              }}
            >
              <Image
                style={{
                  height: "80%",
                  width: "80%",
                }}
                source={images.Jewelry_action}
                // resizeMode="contain"
              />
            </View>
          </TouchableOpacity> */}
        </View>

        <Image
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
          source={images.banner}
          // resizeMode="contain"
        />
      </View>
    );
  };

  const SavedJewelry = () => {
    return (
      <View
        style={{
          width: "100%",
          height: sizeHelper.calHp(300),
          borderRadius: sizeHelper.calWp(20),
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: theme.colors.black,
            opacity: 0.4,
            zIndex: 1,
          }}
        />
        <View
          style={{
            width: "70%",
            height: "100%",
            padding: sizeHelper.calWp(15),
            justifyContent: "flex-end",
            zIndex: 1,
            gap: sizeHelper.calHp(20),
            // alignItems:"flex-end",
            // backgroundColor:"red"
          }}
        >
          <CustomText
            text={"browse and edit your saved jewelry details"}
            style={{ marginRight: sizeHelper.calWp(50) }}
            color={theme.colors.white}
            size={30}
          />
          <CustomButton
            text="Access Jewelry Profiles"
            height={75}
            width={"100%"}
            onPress={() => navigation.navigate("PackagesScreen")}
            textColor={theme.colors.white}
            bgColor={"transparent"}
            borderColor={theme.colors.white}
            borderWidth={1}
            borderRadius={999}
          >
            <Image
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calWp(20),
                resizeMode: "contain",
                tintColor: theme.colors.white,
              }}
              source={icons.next_arrow}
            />
          </CustomButton>
          {/* <TouchableOpacity
            style={{
              width: sizeHelper.calWp(70),
              height: sizeHelper.calWp(70),
              alignSelf: "flex-end",
              backgroundColor: "#DEEAF550",
              borderWidth: 1,
              borderColor: theme.colors.white + "30",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: sizeHelper.calWp(80),
            }}
          >
            <View
              style={{
                width: "80%",
                height: "80%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.white,
                borderRadius: 999,
              }}
            >
              <Image
                style={{
                  height: "80%",
                  width: "80%",
                }}
                source={images.Jewelry_action}
                // resizeMode="contain"
              />
            </View>
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            flexDirection: "row",
            gap: sizeHelper.calWp(4),
            backgroundColor: theme.colors.white,
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "33%",
            }}
            source={images.Jewelry_img1}
            // resizeMode="contain"
          />
          <Image
            style={{
              height: "100%",
              width: "33%",
            }}
            source={images.Jewelry_img2}
            // resizeMode="contain"
          />
          <Image
            style={{
              height: "100%",
              width: "33%",
            }}
            source={images.Jewelry_img3}
            // resizeMode="contain"
          />
        </View>
      </View>
    );
  };
  const LearningCard = ({ item, index }:any) => {
    return (
      <View
        style={{
          width: WINDOW_WIDTH / 1.4,
          borderRadius: sizeHelper.calWp(20),
          height: sizeHelper.calHp(145),
          backgroundColor: "#192327",
          gap: sizeHelper.calWp(20),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: sizeHelper.calWp(170),
            height: "100%",
            borderRadius: sizeHelper.calWp(20),
            overflow: "hidden",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              backgroundColor: theme.colors.black,
              opacity: 0.4,
              zIndex: 1,
            }}
          />
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
              // alignItems:"flex-end",
              // backgroundColor:"red"
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(50),
                height: sizeHelper.calWp(50),
                resizeMode: "contain",
              }}
              source={icons.pause}
            />
          </View>
          <Image
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              borderRadius: sizeHelper.calWp(20),
            }}
            source={item?.img}
            // resizeMode="contain"
          />
        </View>
        <View style={{ gap: sizeHelper.calHp(10) }}>
          <CustomText text={item?.title} color={theme.colors.white} size={30} />
          <CustomText
            text={`${item?.name} . ${item?.time} `}
            color={theme.colors.white + "50"}
            size={22}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <TabLayout style={{ paddingHorizontal: 0, gap: sizeHelper.calHp(30) }}>
        <View
          style={{
            gap: sizeHelper.calHp(30),
            paddingHorizontal: sizeHelper.calWp(30),
          }}
        >
          <DaySelectorHeader/>
          {/* <TabHeader title={"Jewelry"} /> */}
          <Banner />
          <SavedJewelry />
        </View>

        <View style={{ gap: sizeHelper.calHp(20) }}>
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(30),
            }}
          >
            <CustomText
              text={"LEARNINGS"}
              // style={{ marginRight: sizeHelper.calWp(50) }}
              color={theme.colors.white}
              size={27}
            />
            <CustomText
              text={"See more"}
              // style={{ marginRight: sizeHelper.calWp(50) }}
              textDecorationLine="underline"
              color={theme.colors.white}
              size={23}
            />
          </View>
          <FlatList
            data={LearningData}
            showsVerticalScrollIndicator={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: sizeHelper.calWp(30) }}
            contentContainerStyle={{
              gap: sizeHelper.calHp(20),
              paddingRight: sizeHelper.calWp(50),
              // paddingBottom: sizeHelper.calHp(100),
            }}
            renderItem={({ item, index }) => {
              return <LearningCard item={item} />;
            }}
          />
        </View>

        <TouchableOpacity
        onPress={()=>navigation.navigate("ChatScreen")}
          style={{
            width: sizeHelper.calWp(120),
            height: sizeHelper.calWp(120),
            alignSelf: "flex-end",
            backgroundColor: "#DEEAF550",
            borderWidth: 1.5,
            borderColor: theme.colors.white + "30",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: sizeHelper.calWp(80),
            position: "absolute",
            bottom: sizeHelper.calHp(50),
            right: sizeHelper.calWp(30),
          }}
        >
          <Image
            style={{
              height: "40%",
              width: "40%",
            }}
            source={icons.robot}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* <View>
          <FlatList
            data={JewelryData}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{
              gap: sizeHelper.calHp(20),
              // paddingBottom: sizeHelper.calHp(100),
            }}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: "49%",
                    height: sizeHelper.calHp(240),
                    borderRadius: sizeHelper.calWp(10),
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      backgroundColor: theme.colors.black,
                      opacity: 0.4,
                      zIndex: 1,
                    }}
                    // resizeMode="contain"
                  />
                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      padding: sizeHelper.calWp(15),
                      justifyContent: "space-between",
                      zIndex: 1,
                    }}
                  >
                    <CustomText
                      text={item?.name}
                      style={{ marginRight: sizeHelper.calWp(50) }}
                      color={theme.colors.white}
                      size={27}
                    />
                    <TouchableOpacity
                      style={{
                        width: sizeHelper.calWp(70),
                        height: sizeHelper.calWp(70),
                        alignSelf: "flex-end",
                        backgroundColor: "#DEEAF550",
                        borderWidth: 1,
                        borderColor: theme.colors.white + "30",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: sizeHelper.calWp(80),
                      }}
                    >
                      <View
                        style={{
                          width: "80%",
                          height: "80%",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: theme.colors.white,
                          borderRadius: 999,
                        }}
                      >
                        <Image
                          style={{
                            height: "80%",
                            width: "80%",
                          }}
                          source={images.Jewelry_action}
                          // resizeMode="contain"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                    }}
                    source={item?.img}
                    // resizeMode="contain"
                  />
                </View>
              );
            }}
          />
        </View> */}
        {/* <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <GradientButton
            width={"45%"}
            onPress={() => navigation.navigate("AddJewelryScreen")}
            text={"+  Add Jewelry"}
          />
        </View> */}
      </TabLayout>
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
