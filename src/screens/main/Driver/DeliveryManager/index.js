import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import { Inter } from "../../../../utils/Fonts";
import CustomInput from "../../../../components/CustomInput";
import { Spacer } from "../../../../components/Spacer";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import DropDown from "../../../../components/DropDown";
import { icon } from "../../../../assets/png/icons";
import CustomerTicket from "../../../../components/CustomerTicket";
import { image } from "../../../../assets/png/images";
import DriverCard from "../../../../components/DriverCard";
import Deliveries from "./Deliveries";
import RouteProgress from "./RouteProgress";
import DeliveryBottomTab from "./DeliveryBottomTab";
import DeliveryFilerbyModal from "./DeliveryFilerbyModal";
import DelliverySortbyModal from "./DelliverySortbyModal";
import TripScreen from "../../views/TripScreen";
import SavedTripScreen from "../../views/SavedTripScreen";
import HistoryScreen from "../../views/HistoryScreen";
import EarningsScreen from "../../views/EarningsScreen";
import { useNavigation } from "@react-navigation/native";

const DeliveryManager = ({ navigation }) => {
  const [isDeliveryFilerby, setIsDeliveryFilerby] = useState(false);
  const [selectedFilerby, setSelectedFilerby] = useState("Today");
  const [isDeliverySortby, setIsDeliverySortby] = useState(false);
  const [selectedSortby, setSelectedSortby] = useState("Recent (Default)");
  const [selectedTab, setSelectedTab] = useState(1);
  const [optimizeImageColor, setOptimizeImageColor] = useState(colors.black);
  const [optimizeTextColor, setOptimizeTextColor] = useState(colors.black);

  const mapRef = useRef(null);

  const data = [
    {
      id: 1,
      label: "task1",
      value: "Andrede",
    },
    {
      id: 2,
      label: "task2",
      value: "Herr",
    },
  ];

  const customerTicketData = [
    {
      img: image.defimg102,
      name: "Customer Name",
      active: "Available",
      date: "02/26/23",
      distance: "15 mil",
      time: "15 Min Away",
      isOpen: true,
      pass: icon.pass,
    },
    {
      img: image.defimg103,
      name: "Customer Name",
      active: "Busy",
      date: "02/26/23",
      distance: "15 mil",
      time: "15 Min Away",
      isOpen: false,
      pass: icon.passg,
    },
    {
      img: image.defimg700,
      name: "Customer Name",
      active: "On Schedule",
      date: "02/26/23",
      distance: "15 mil",
      time: "15 Min Away",
      isOpen: true,
      pass: icon.passp,
    },
  ];

  const renderDriver = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(10),
          }}
        >
          <DriverCard
            item={item}
            onPress={() =>
              navigation.navigate("TrackOrder", { orderData: item })
            }
          />
        </View>
      </>
    );
  };
  return (
    <>
      <Screen
        height={40}
        backgroundColor={colors.white}
        // topBarColor={colors.primary}
        barStyle={"dark-content"}
      >
        {selectedTab == 1 ? (
          <View
            style={{
              flex: 1,

              backgroundColor: colors.white,
            }}
          >
            <View
              style={{
                ...AppStyles.justifyRow,
                backgroundColor: colors.white,
                paddingVertical: verticalScale(13),
                paddingHorizontal: scale(15),
                elevation: 5,
                shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
                shadowOffset: { width: 4, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
              }}
            >
              <TouchableOpacity
                style={{ width: "10%" }}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={{ width: scale(15), height: scale(15) }}
                  resizeMode="contain"
                  source={icon.back}
                />
              </TouchableOpacity>

              <CustomText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={14}
                style={{ textAlign: "center" }}
                text={"Delivery Manager"}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("ResolutionCenterScreen")}
              >
                <Image
                  style={{
                    width: scale(35),
                    height: scale(35),
                  }}
                  source={image.driver}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  paddingHorizontal: scale(15),
                  paddingTop: verticalScale(20),
                }}
              >
                <CustomLine />
                <Spacer height={verticalScale(10)} />
                <View style={AppStyles.justifyRow}>
                  <View style={AppStyles.row}>
                    <CustomText
                      text={"Sort By"}
                      color={colors.black}
                      fontFam={Inter.medium}
                      // fontWeight="400"
                      size={12}
                    />
                    <Spacer width={scale(10)} />

                    <CustomInput
                      height={29}
                      dropDown={true}
                      color={colors.gray100}
                      width={scale(95)}
                      editable={false}
                      value={selectedSortby}
                      onShowPassword={() => setIsDeliverySortby(true)}
                      rightImage={icon.down}
                      fontWeight={"600"}
                      rightImageWidth={15}
                      rightImageHeight={15}
                      borderRadius={8}
                    />
                  </View>
                  <View style={AppStyles.row}>
                    <CustomText
                      text={"Filter by"}
                      color={colors.black}
                      fontFam={Inter.medium}
                      size={12}
                    />
                    <Spacer width={scale(10)} />

                    <CustomInput
                      height={29}
                      dropDown={true}
                      color={colors.gray100}
                      width={scale(95)}
                      editable={false}
                      value={selectedFilerby}
                      onShowPassword={() => setIsDeliveryFilerby(true)}
                      rightImage={icon.down}
                      fontWeight={"600"}
                      rightImageWidth={15}
                      rightImageHeight={15}
                      borderRadius={8}
                    />
                  </View>
                </View>
                <Spacer height={scale(10)} />
                <CustomLine />
                <Spacer height={scale(5)} />

                <Deliveries />

                <RouteProgress />
              </View>
            </ScrollView>
          </View>
        ) : selectedTab == 2 ? (
          <TripScreen />
        ) : selectedTab == 3 ? (
          <SavedTripScreen />
        ) : selectedTab == 4 ? (
          <HistoryScreen />
        ) : (
          <EarningsScreen />
        )}
        <DeliveryBottomTab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optimizeTextColor={optimizeTextColor}
          onPressOptomize={() => {
            setOptimizeTextColor(colors.gray);
            setOptimizeImageColor(colors.gray);
            setTimeout(() => {
              setOptimizeTextColor(colors.black);
              setOptimizeImageColor(colors.black);
            }, 2000);
          }}
          optimizeImageColor={optimizeImageColor}
        />
      </Screen>

      <DeliveryFilerbyModal
        modalVisible={isDeliveryFilerby}
        title={"Filter by"}
        selectedObject={selectedFilerby}
        setSelectedObject={setSelectedFilerby}
        setModalVisible={setIsDeliveryFilerby}
      />
      <DelliverySortbyModal
        modalVisible={isDeliverySortby}
        title={"Sort by"}
        selectedObject={selectedSortby}
        setSelectedObject={setSelectedSortby}
        setModalVisible={setIsDeliverySortby}
      />
    </>
  );
};

export default DeliveryManager;

const styles = StyleSheet.create({});
