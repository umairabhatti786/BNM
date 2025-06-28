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
import { image } from "../../../../assets/png/images";
import CalendarPicker from "../../../../components/CalendarPicker";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import Search from "../../../../components/Search";
import Order from "./Order";
import { Spacer } from "../../../../components/Spacer";
import CustomCalendar from "../../../../components/CustomCalendar";

const ManageOrders = ({ navigation, route }) => {
  const tab = route?.params?.aciveTab;
  const [selectedTab, setSelectedTab] = useState(tab || "Upcoming");
  const [isFromModalVisible, setIsFromModalVisible] = useState(false);
  const [fromDate, setFormDate] = useState("From");
  const [isToModalVisible, setIsToModalVisible] = useState(false);
  const [toDate, setToDate] = useState("From");
  const UpcomingOrders = [{ status: "Pending" }];
  const ActiveOrders = [{ status: "Ongoing" }];
  const CompletedOrders = [
    { status: "Success", tip: "$10" },
    { status: "Failed", tip: "$10" },
  ];

  const Header = () => {
    return (
      <View>
        <View
          style={{
            ...AppStyles.justifyRow,
            marginTop: Platform.OS == "ios" ? -20 : 0,
            // paddingVertical: verticalScale(13),
            height: 57,
            backgroundColor: colors.white,
            paddingVertical: verticalScale(13),
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.black40,
          }}
        >
          <TouchableOpacity
            // style={{ width: "15%" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: scale(15), height: scale(15) }}
              resizeMode="contain"
              source={icon.back}
            />
          </TouchableOpacity>
          <NewText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={17}
            style={{ marginLeft: 30 }}
            text={"Manage Order"}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ResolutionCenter")}
            activeOpacity={0.6}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={image.man}
              resizeMode={"contain"}
            />
          </TouchableOpacity>

          {/* <NewText
            fontWeight="700"
            color={colors.primary}
            fontFam={Inter.bold}
            size={17}
            text={"Search"}
          /> */}
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 55,
            backgroundColor: colors.white,

            elevation: 5,
            shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            justifyContent: "space-between",
          }}
        >
          {["Upcoming", "Active", "Completed"]?.map((item, _index) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={_index.toString()}
              style={{
                width: "33%",
              }}
              onPress={() => {
                setSelectedTab(item);
              }}
            >
              <View
                style={{
                  borderBottomWidth: 4,
                  padding: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 3,
                  borderColor:
                    selectedTab === item ? colors.primary : colors.white,
                  flex: 1,
                }}
              >
                <NewText
                  size={17}
                  fontWeight="bold"
                  color={selectedTab === item ? colors.primary : colors.black40}
                  text={item}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
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
        <View style={{ backgroundColor: colors.white }}>
          <Header />

          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 200 }}
            style={{
              backgroundColor: colors.white,
              marginTop: 5,
            }}
          >
            <View style={{ paddingHorizontal: 15 }}>
              <View style={{ ...AppStyles.justifyRow, marginBottom: 15 }}>
                <CalendarPicker
                  width={"45%"}
                  text={fromDate}
                  onPress={() => setIsFromModalVisible(true)}
                />
                <CustomLine width={20} backgroundColor={colors.black40} />

                <CalendarPicker
                  width={"45%"}
                  onPress={() => setIsToModalVisible(true)}
                  text={toDate}
                />
              </View>
              <Search />
            </View>

            <Spacer height={30} />
            <FlatList
              data={
                selectedTab == "Upcoming"
                  ? UpcomingOrders
                  : selectedTab == "Active"
                  ? ActiveOrders
                  : selectedTab == "Completed"
                  ? CompletedOrders
                  : UpcomingOrders
              }
              // style={{ paddingTop: 30 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 20, padding: 15 }}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                return (
                  <Order
                    item={item}
                    selectedTab={selectedTab}
                    onPress={() =>
                      navigation.navigate("TrackOrder", {
                        orderData: {
                          img: image.defimg900,
                          name: "Will Smith",
                          active: "Available",
                          distance: "15 mil",
                          time: "15 Min Away",
                          vehicle: "Car",
                          isOpen: true,
                          id: 1,
                        },
                      })
                    }
                  />
                );
              }}
            />

            {/* <Order/> */}
          </ScrollView>
        </View>
      </Screen>

      <CustomCalendar
        modalVisible={isFromModalVisible}
        date={fromDate}
        setDate={setFormDate}
        setModalVisible={setIsFromModalVisible}
      />
      <CustomCalendar
        modalVisible={isToModalVisible}
        date={toDate}
        setDate={setToDate}
        setModalVisible={setIsToModalVisible}
      />
    </>
  );
};

export default ManageOrders;

const styles = StyleSheet.create({});
