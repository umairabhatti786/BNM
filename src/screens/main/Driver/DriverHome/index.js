import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SectionList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import { image } from "../../../../assets/png/images";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import ProductCard from "../../../../components/ProductCard";
import CustomButton from "../../../../components/CustomButton";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import ActionModal from "../../../../components/ActionModal";
import { customerProfileService } from "../../../../services/customerProfileService";

const DriverHome = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [activeAvailability, setActiveAvailability] = useState("Off");
  const [isActionModal, setIsActionModal] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const categoryData = [
    { name: "Need a Ride", img: image.ride },
    { name: "Retail Store Delivery", img: image.retailstore },
    { name: "Local Delivery", img: image.delivery },
    { name: "Furniture Delivery", img: image.furniture },
  ];

  const productData = [
    {
      title: "Near by",
      data: [
        {
          name: "Orlando, FL",
          des: "Discover nearby drivers ready to assist with your delivery needs.",
          img: image.defimg100,
          endPoint: "Discover",
        },
      ],
    },
    {
      title: "On-Demand",
      data: [
        {
          name: "Urgent Delivery?",
          des: "Swift and immediate solutions for your impromptu delivery requirements.",
          img: image.defimg200,
          rightImage: true,
          endPoint: "Checkout",
        },
      ],
    },
    {
      title: "Reserved",
      data: [
        {
          name: "Book in advance",
          des: "And secure your dedicated driver for future deliveries.",
          img: image.defimg300,
          endPoint: "Book Now",
        },
      ],
    },
    {
      title: "Dedicated",
      data: [
        {
          name: "Enjoy Personalized",
          des: "And reliable delivery options for recurring requirements.",
          img: image.defimg400,
          endPoint: "Checkout",
          rightImage: true,
        },
      ],
    },
    {
      title: "Special Purpose",
      data: [
        {
          name: "Need specialized handling?",
          des: "Explore our services for Heavy-duty equipment, Piano Moving, and more.",
          img: image.defimg500,
          endPoint: "Explore",
        },
      ],
    },
  ];

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await customerProfileService.getStoredProfile();
        if (profile) {
          setUserProfile(profile);
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    loadProfile();
  }, []);

  const AvailabilityContainer = () => {
    return (
      <View
        style={{
          ...styles.box,
          ...AppStyles.justifyRow,
          paddingLeft: scale(10),
          paddingVertical: verticalScale(10),
        }}
      >
        <CustomText
          text={"Availability"}
          size={14}
          fontWeight={"600"}
          fontFam={Inter.bold}
          color={colors.black}
        />
        <View style={AppStyles.row}>
          {["Off", "Scheduled", "Now"].map((item, index) => {
            return (
              <View style={{ marginRight: scale(5) }}>
                <CustomButton
                  onPress={() => {
                    if (item == "Scheduled" || item == "Now") {
                      setIsActionModal(true);
                    }

                    setActiveAvailability(item);
                  }}
                  text={item}
                  height={29}
                  fontWeight={"500"}
                  size={13}
                  fontFam={Inter.regular}
                  paddingHorizontal={scale(10)}
                  textColor={
                    activeAvailability == item ? colors.secondary : "#00000030"
                  }
                  bgColor={
                    activeAvailability == item
                      ? colors.secondary + "20"
                      : "transparent"
                  }

                  //  width={scale(90)}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const ProfileContainer = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("ServiceProfile")}
        style={{ ...styles.box, paddingVertical: verticalScale(10) }}
      >
        <View style={{ flexDirection: "row", paddingLeft: scale(10) }}>
          <Image
            style={{
              width: scale(70),
              height: scale(70),
              borderRadius: scale(8),
            }}
            source={image.default_user}
          />
          <View
            style={{ paddingLeft: scale(10), paddingTop: verticalScale(3) }}
          >
            <View style={{ flexDirection: "row" }}>
              <CustomText
                text={"Welcome,"}
                size={14}
                fontWeight={"400"}
                style={{ marginRight: scale(5) }}
                color={colors.black}
              />

              <CustomText
                text={userProfile?.first_name || ""}
                size={14}
                fontWeight={"600"}
                fontFam={Inter.bold}
                color={colors.black}
              />
            </View>

            <CustomText
              text={`Base: ${userProfile?.city || ""}, ${
                userProfile?.state || ""
              }`}
              size={13}
              style={{ marginVertical: verticalScale(2) }}
              color={colors.gray}
            />

            <CustomText
              text={`Current: ${userProfile?.city || ""}, ${
                userProfile?.state || ""
              }`}
              size={13}
              style={{ marginRight: scale(5) }}
              color={colors.gray}
            />
          </View>
        </View>

        <Spacer height={verticalScale(10)} />
        <View style={{ marginVertical: verticalScale(7) }}>
          <CustomLine />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ServiceProfile");
          }}
          style={{
            ...AppStyles.justifyRow,
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(3),
          }}
        >
          <View style={{ ...AppStyles.row }}>
            <Image
              style={{
                width: scale(20),
                height: scale(20),
              }}
              source={icon.printer}
              resizeMode="contain"
            />
            <Spacer width={scale(10)} />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate("ServiceProfile");
              }}
            >
              <CustomText
                text={"Service Profile"}
                color={colors.secondary}
                fontFam={Inter.medium}
                //   fontWeight="500"
                size={14}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={{
              width: scale(15),
              height: scale(15),
            }}
            source={icon.nexticon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Screen
        backgroundColor={colors.white}
        topBarColor={colors.secondary}
        barStyle={"dark-content"}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: colors.secondary,
            paddingLeft: scale(20),
            paddingRight: scale(30),

            paddingTop: verticalScale(20),
            paddingBottom: verticalScale(70),
          }}
        >
          <Image
            style={{ width: scale(85), height: verticalScale(22) }}
            source={image.appicon}
            resizeMode="contain"
          />
          <View style={AppStyles.row}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("CustomerSearch")}
            >
              <Image
                style={{ width: scale(22), height: scale(22) }}
                source={icon.search}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Spacer width={scale(15)} />

            <TouchableOpacity
              onPress={() => navigation.navigate("DriverConversation")}
            >
              <Image
                style={{ width: scale(22), height: scale(22) }}
                source={icon.message}
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("DriverConversation")}
                style={{
                  width: scale(22),
                  height: scale(22),
                  borderRadius: 999,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.black100,
                  position: "absolute",
                  top: -10,
                  right: -12,
                  borderColor: colors.secondary,
                  borderWidth: 1.5,
                }}
              >
                <CustomText
                  text={"1"}
                  //   size={12}
                  color={colors.white}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: scale(30),
            borderTopEndRadius: scale(30),
            marginTop: verticalScale(-40),
            paddingTop: verticalScale(30),
            backgroundColor: colors.white,
          }}
        >
          <ScrollView>
            <View style={{ paddingHorizontal: scale(15) }}>
              <AvailabilityContainer />
              <Spacer height={verticalScale(10)} />

              <ProfileContainer />
              <Spacer height={verticalScale(20)} />
            </View>

            <View
            // style={{paddingHorizontal:scale(15)}}
            >
              <SectionList
                sections={productData}
                scrollEnabled={false}
                style={{ marginBottom: verticalScale(30) }}
                contentContainerStyle={{ gap: 15 }}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <View style={{ paddingHorizontal: scale(15) }}>
                    <ProductCard
                      onPress={() => navigation.navigate("CustomerSearch")}
                      ennPointColor={colors.secondary}
                      item={item}
                    />
                  </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      //   marginTop: verticalScale(10),
                      paddingHorizontal: scale(15),
                    }}
                  >
                    <CustomText
                      text={title}
                      color={colors.black}
                      fontWeight="700"
                      fontFam={Inter.bold}
                      size={13.5}
                    />

                    <View
                      style={{
                        height: 0.4,
                        width: "85%",
                        backgroundColor: colors.gray1,
                        marginLeft: 20,
                      }}
                    ></View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </Screen>

      <ActionModal
        modalVisible={isActionModal}
        title={"Accepted!"}
        successButtonColor={colors.secondary}
        descripation={"You can view accepted offer in save trips"}
        submitText={"See Save Trips"}
        setModalVisible={setIsActionModal}
        onAction={() => {
          setIsActionModal(false);
          setTimeout(() => {
            navigation.navigate("Menu");
          }, 500);
        }}
      />
    </>
  );
};

export default DriverHome;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
  },
});
