import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
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
import { fonts } from "../../../utils/Themes/fonts";
import CustomChat from "../../../components/CustomChat";
import MessageSender from "../../../components/MessageSender";

const ChatScreen = ({ navigation }: any) => {
  const messageData = [
    {
      message: "How may I help you with?👀",
      from: false,
    },
    {
      message: "Yeah, need some suggestions!",
      from: true,
    },

    {
      message: "What you wanna know?",
      from: true,
    },

    {
      message: "You can explain please",
      from: false,
    },

    {
      message: "Sounds good! I can do in 5 min",
      from: true,
    },

    {
      message: "Bit busy til then...😅",
      from: true,
    },

    {
      message: "Sounds good! I’m here",
      from: false,
    },

    {
      message: "Message...",
      from: true,
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
  const LearningCard = ({ item, index }) => {
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
  const TopHeader = () => {
    return (
      <View
        style={{
          paddingVertical: sizeHelper.calHp(40),
          flexDirection: "row",
          backgroundColor: "#243942",
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(40),
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={icons.back_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          style={{
            width: sizeHelper.calWp(80),
            height: sizeHelper.calWp(80),
          }}
          source={images.three}
          resizeMode="contain"
        />

        <CustomText
          text={"Ember AI"}
          fontFam={fonts.Inter_Bold}
          fontWeight="700"
          color={theme.colors.white}
          size={30}
        />
      </View>
    );
  };
  return (
    <>
      <TabLayout
        lauoutSource={images.sms_background}
        paddingTop={1}
        style={{ paddingHorizontal: 0, gap: sizeHelper.calHp(30) }}
      >
        <View
          style={{
            gap: sizeHelper.calHp(30),
          }}
        >
          <TopHeader />
          {/* <TabHeader title={"Jewelry"} />
          <Banner />
          <SavedJewelry /> */}
        </View>

        {/* <View style={{ gap: sizeHelper.calHp(20) }}>
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
        </TouchableOpacity> */}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0} // Adjust as per your header height
        >
 <View style={{flex:1}}>

          <FlatList
            data={messageData}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: sizeHelper.calHp(20),
              paddingHorizontal:sizeHelper.calWp(30),
              paddingBottom: sizeHelper.calHp(20),
            }}
            renderItem={({ item, index }) => {
              return <CustomChat item={item} />;
            }}
          />
          <MessageSender/>
        </View>
        </KeyboardAvoidingView>

       
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
export default ChatScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
