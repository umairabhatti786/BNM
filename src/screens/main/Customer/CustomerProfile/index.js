import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { CustomHeader } from "../../../../components/CustomHeader";
import { Spacer } from "../../../../components/Spacer";
import PorfileViewCard from "./PorfileViewCard";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import DashedLine from "react-native-dashed-line";
import Collapsible from "react-native-collapsible";
import LocalDelivery from "./LocalDelivery";
import CustomerReviewCard from "./CustomerReviewCard";
const CustomerProfile = ({ navigation, route }) => {
  let data = route?.params?.data;
  console.log("data", data);

  const [showHoursDetail, setShowHoursDetail] = useState(true);
  const [showLocalDelivery, setShowLocalDelivery] = useState(true);
  const [showDetail, setShowDetail] = useState(true);

  const hoursData = [
    { day: "Sun", time: "4pm - midnight" },
    { day: "Mon", time: "4pm - midnight" },
    { day: "Tues", time: "4pm - midnight" },
    { day: "Wed", time: "4pm - midnight" },
    { day: "Thurs", time: "4pm - midnight" },
    { day: "Fri", time: "4pm - midnight" },
    { day: "Sat", time: "4pm - midnight" },
  ];

  const DropContainer = ({
    fontWeight,
    size,
    txt,
    onPress,
    isSetting,
    isOpen,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{
          ...AppStyles.justifyRow,
          paddingVertical: verticalScale(10),
        }}
      >
        <NewText
          fontWeight={fontWeight || "700"}
          color={colors.black}
          // fontFam={Inter.bold}
          text={txt}
          size={size || 16}
        />

        <Spacer width={scale(10)} />

        <Image
          style={{ width: scale(13), height: scale(13) }}
          source={isOpen ? icon.down : icon.up}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Screen
        backgroundColor={colors.white}
        topBarColor={colors.white}
        statusBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <CustomHeader label={"Profile View"} navigation={navigation} />
        <ScrollView
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
          style={{
            backgroundColor: colors.white,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View style={{ ...AppStyles.box }}>
            <View style={{ paddingHorizontal: scale(15) }}>
              <PorfileViewCard item={data} />
            </View>
            <CustomLine />
            <View
              style={{ paddingHorizontal: 15, paddingTop: verticalScale(13) }}
            >
              <HorizontalContainer
                text={"Vehicle Brand"}
                color={colors.black}
                weight={"500"}
                size={15}
                size1={15}
                color1={colors.gray}
                weight1={"400"}
                text1={"Toyota, Camry 2015"}
              />
              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>

              <HorizontalContainer
                text={"USDOT"}
                color={colors.black}
                weight={"500"}
                color1={colors.gray}
                size={15}
                size1={15}
                weight1={"400"}
                text1={"n/a"}
              />
              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>

              <HorizontalContainer
                text={"USDOT"}
                color={colors.black}
                weight={"500"}
                color1={colors.gray}
                weight1={"400"}
                size={15}
                size1={15}
                text1={"n/a"}
              />
              <View style={{ marginTop: verticalScale(13) }} />
            </View>
          </View>

          <View
            style={{
              ...AppStyles.box,
              paddingHorizontal: 15,
              marginVertical: 30,
              paddingVertical: 10,
            }}
          >
            <DropContainer
              onPress={() => setShowHoursDetail(!showHoursDetail)}
              size={15}
              isOpen={showHoursDetail}
              txt={"Hours"}
            />

            <Collapsible collapsed={showHoursDetail}>
              <View>
                {hoursData.map((item) => {
                  return (
                    <>
                      <DashedLine
                        dashLength={6}
                        dashThickness={1}
                        dashGap={5}
                        dashColor={colors.gray}
                      />
                      <View style={{ paddingVertical: verticalScale(13) }}>
                        <HorizontalContainer
                          text={item.day}
                          color={colors.black}
                          weight={"500"}
                          size={15}
                          size1={15}
                          color1={colors.gray}
                          weight1={"400"}
                          text1={item.time}
                        />
                      </View>
                    </>
                  );
                })}
              </View>
            </Collapsible>
          </View>

          <NewText
            text={"Service Coverage"}
            color={colors.black}
            fontFam={Inter.bold}
            fontWeight="700"
            size={16}
          />

          <View
            style={{
              ...AppStyles.box,
              marginVertical: 10,
              paddingVertical: 10,
            }}
          >
            <View>
              <View style={{ paddingHorizontal: 15 }}>
                <DropContainer
                  size={15}
                  isOpen={true}
                  //   onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                  fontWeight={"500"}
                  txt={"Delivery (Main)"}
                />
              </View>

              <View style={{ paddingVertical: 8 }}>
                <CustomLine />
              </View>
            </View>

            <View>
              <View style={{ paddingHorizontal: 15 }}>
                <DropContainer
                  size={15}
                  onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                  fontWeight={"500"}
                  isOpen={showLocalDelivery}
                  txt={"Local Delivery"}
                />
              </View>
              <Collapsible
                style={{ paddingVertical: 10 }}
                collapsed={showLocalDelivery}
              >
                <LocalDelivery />
              </Collapsible>

              <View style={{ paddingVertical: 8 }}>
                <CustomLine />
              </View>
            </View>
            <View>
              <View style={{ paddingHorizontal: 15 }}>
                <DropContainer
                  size={15}
                  isOpen={true}
                  //   onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                  fontWeight={"500"}
                  txt={"Installation/Dis..."}
                />
              </View>
              <View style={{ paddingVertical: 8 }}>
                <CustomLine />
              </View>
            </View>

            <View>
              <View style={{ paddingHorizontal: 15 }}>
                <DropContainer
                  size={15}
                  isOpen={true}
                  //   onPress={() => setShowLocalDelivery(!showLocalDelivery)}
                  fontWeight={"500"}
                  txt={"Piano Delivery"}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              ...AppStyles.justifyRow,
              // padding: 15,
              paddingVertical:15
            }}
          >
            <NewText
              text={"Reviews"}
              size={16}
              fontWeight={"700"}
              fontFam={Inter.bold}
              color={colors.black}
            />
            <NewText
              text={"See All"}
              size={14}
              fontWeight={"500"}
              fontFam={Inter.medium}
              color={colors.primary}
            />
          </View>

          <FlatList
            data={[1, 2, 3, 4]}
            // style={{ paddingTop: 30 }}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20, paddingBottom: 10 }}
            keyExtractor={(item) => item}
            renderItem={({}) => {
              return (
                <CustomerReviewCard
                  setShowDetail={setShowDetail}
                  showDetail={showDetail}
                  item={data}
                />
              );
            }}
          />
        </ScrollView>
      </Screen>
    </>
  );
};

export default CustomerProfile;

const styles = StyleSheet.create({});
