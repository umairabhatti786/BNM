import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  FlatList,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import * as Animatable from "react-native-animatable";
import SortedModal from "../../Customer/DriverSearch/SortedModal";
import ViewModal from "../../Customer/DriverSearch/ViewModal";
import VehicleModal from "../../Customer/DriverSearch/VehicleModal";
import CategoryModal from "../../Customer/DriverSearch/CategoryModal";
import TravelModel from "../../Customer/DriverSearch/TravelModel";
import AllServicesModal from "../../../../components/AllServicesModal";
import { AddonsServicesData } from "../../../../utils/Arrays";
import CounterOfferModal from "../../Customer/DriverSearch/CounterOfferModal";
import SuccessModal from "../../../../components/SuccessModal";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const CustomerSearch = ({ navigation }) => {
  const [isWatchList, setIsWatchList] = useState(false);
  const [watchListObject, setWatchListObject] = useState([]);
  const [saveText, setSaveText] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);
  const [isSortedVisible, setIsSortedVisible] = useState(false);
  const [selectedSorted, setSelectedSorted] = useState("Default (Relevance)");
  const [isSelectedView, setIsSelectedView] = useState("List View");
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [categoryObject, setCategoryObject] = useState("Delivery");
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isTravelVisible, setIsTravelVisible] = useState(false);
  const [vehicleObject, setVehicleObject] = useState("Vehicle Size");
  const [isVehicleVisible, setIsVehicleVisible] = useState(false);
  const [isCounterOfferVisible, setIsCounterOfferVisible] = useState(false);
  const [counterOffer, setCounterOffer] = useState(false);

  const [isSubmitModal, setIsSubmitModal] = useState(false);
  const [mapHeight, setMapHeight] = useState(400);
  const [mapType, setMapType] = useState("standard");
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  const [isSaveModal, setIsSaveModal] = useState(false);
  const [isAcceptModal, setIsAcceptModal] = useState(false);

  const [isAddonsVisible, setIsAddonVisible] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState("Addons Services");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [region, setRegion] = useState({
    latitude: 32.3363,
    longitude: 74.3675,
    latitudeDelta: 0.039330183268125069,
    longitudeDelta: 0.045962757229776571,
  });
  const mapRef = useRef(null);
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Access Permission",
            message: "We need access to your location to show you on the map",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Location permission denied");
          return;
        }
      }
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

    requestLocationPermission();
  }, []);
  const pickUpInput = (
    <CustomInput
      leftImage={icon.location}
      placeholder="Pick Up: Zip Code / City, ST"
      value={pickUp}
      onChangeText={setPickUp}
    />
  );

  const dropOffInput = (
    <CustomInput
      leftImage={icon.location}
      placeholder="Drop Off: Anywhere"
      value={dropOff}
      onChangeText={setDropOff}
    />
  );
  const swapInputs = () => {
    setIsSwapped(!isSwapped);
  };

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
      lat: 32.3463,
      long: 74.3775,
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
      lat: 32.3663,
      long: 74.3875,
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
      lat: 32.3373,
      long: 74.3685,
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
            onAccept={() => setIsAcceptModal(true)}
            // onPress={()=>navigation.navigate("DeliveryManager",{orderData:item})}
            onCounterOffer={() => setIsCounterOfferVisible(true)}
            onWatchList={() => {
              setSaveText(
                "Saved, you can see your saved customer in Watchlist"
              );

              setIsWatchList(true);

              const findObject = watchListObject?.find((e) => e.id == item.id);
              if (findObject) {
                const dataContact1 = watchListObject.filter(
                  (f) => f.id != item.id
                );

                setWatchListObject(dataContact1);
              } else {
                const dataContact = [...watchListObject, item]; // Replace 'New Data' with your actual data
                setWatchListObject(dataContact);
              }
              setTimeout(() => {
                setIsWatchList(false);
              }, 2000);
              // setWatchListObject(item)
            }}
          />
        </View>
      </>
    );
  };
  const renderMapViewDriver = ({ item, index }) => {
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
            // onPress={()=>navigation.navigate("DeliveryManager",{orderData:item})}
            onCounterOffer={() => setIsCounterOfferVisible(true)}

            // onWatchList={() => {
            //   setSaveText(
            //     "Saved, you can see your saved customer in Watchlist"
            //   );

            //   setIsWatchList(true);

            //   const findObject = watchListObject?.find((e) => e.id == item.id);
            //   if (findObject) {
            //     const dataContact1 = watchListObject.filter(
            //       (f) => f.id != item.id
            //     );

            //     setWatchListObject(dataContact1);
            //   } else {
            //     const dataContact = [...watchListObject, item]; // Replace 'New Data' with your actual data
            //     setWatchListObject(dataContact);
            //   }
            //   setTimeout(() => {
            //     setIsWatchList(false);
            //   }, 2000);
            //   // setWatchListObject(item)
            // }}
          />
        </View>
      </>
    );
  };

  const updateMapCenter = (index) => {
    try {
      if (mapRef) {
        mapRef.current.animateToRegion(
          {
            latitude: 32.3363,
            longitude: 74.3675,
            latitudeDelta: 0.039330183268125069,
            longitudeDelta: 0.045962757229776571,
          },

          1000
        );
      }
    } catch (error) {
      console.log("updateMapCenter", error);
    }
  };
  return (
    <>
      <Screen
        height={40}
        backgroundColor={colors.white}
        // topBarColor={colors.primary}
        barStyle={"dark-content"}
      >
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
              style={{ width: "27%" }}
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
              text={"Begin a New Search"}
            />
            <View style={{ width: "33%" }} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(15),
              }}
            >
              <View>
                {isSwapped ? dropOffInput : pickUpInput}
                <Spacer height={verticalScale(10)} />
                {isSwapped ? pickUpInput : dropOffInput}
                <TouchableOpacity
                  onPress={swapInputs}
                  style={styles.updownButton}
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={image.updown}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>

              <Spacer height={verticalScale(15)} />

              <CustomLine />
              <Spacer height={verticalScale(15)} />
              <View style={AppStyles.justifyRow}>
                <View style={AppStyles.row}>
                  <CustomText
                    text={"Sort By"}
                    color={colors.black}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={14}
                  />
                  <Spacer width={scale(10)} />
                  <CustomInput
                    height={29}
                    dropDown={true}
                    color={colors.gray100}
                    width={scale(100)}
                    editable={false}
                    value={selectedSorted}
                    onShowPassword={() => setIsSortedVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
                <View style={AppStyles.row}>
                  <CustomText
                    text={"View"}
                    color={colors.black}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={14}
                  />
                  <Spacer width={scale(10)} />

                  <CustomInput
                    dropDown={true}
                    height={29}
                    color={colors.gray100}
                    width={scale(100)}
                    editable={false}
                    value={isSelectedView}
                    onShowPassword={() => setIsViewVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
              </View>
              <Spacer height={scale(15)} />
              <CustomLine />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  setIsSaveModal(true);
                  // setSaveText(
                  //   "Saved. You can view your saved search in watchlist."
                  // );
                  // setIsWatchList(true);

                  // setTimeout(() => {
                  //   setIsWatchList(false);
                  // }, 3000);
                }}
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  marginTop: verticalScale(12),
                  marginBottom: verticalScale(20),
                }}
              >
                <CustomText
                  text={"Save Search"}
                  color={colors.secondary}
                  fontWeight="500"
                  fontFam={Inter.medium}
                  size={13}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{
                    width: scale(19),
                    height: scale(19),
                    tintColor: colors.secondary,
                  }}
                  source={icon.watchlist}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View style={{ ...AppStyles.justifyRow }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate("DriverFilter")}
                  style={AppStyles.row}
                >
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                    }}
                    source={icon.driverfilter}
                    resizeMode="contain"
                  />
                  <Spacer width={scale(10)} />

                  <CustomText
                    text={"Customize/Filters"}
                    color={colors.black}
                    fontFam={Inter.bold}
                    fontWeight="700"
                    size={15}
                  />
                </TouchableOpacity>
                <View style={AppStyles.row}>
                  <CustomText
                    text={"Clear All"}
                    color={colors.gray}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={13}
                  />
                </View>
              </View>
            </View>
            <View style={{ ...AppStyles.row, height: verticalScale(60) }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginRight: scale(10), marginLeft: scale(15) }}>
                  <CustomInput
                    height={29}
                    dropDown={true}
                    color={colors.gray100}
                    width={scale(110)}
                    editable={false}
                    value={categoryObject}
                    onShowPassword={() => setIsCategoryVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>

                <View style={{ marginRight: scale(10) }}>
                  <CustomInput
                    height={29}
                    dropDown={true}
                    color={colors.gray100}
                    width={scale(110)}
                    editable={false}
                    value={"Travel Distance"}
                    onShowPassword={() => setIsTravelVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
                <View style={{ marginRight: scale(10) }}>
                  <CustomInput
                    dropDown={true}
                    height={29}
                    color={colors.gray100}
                    width={scale(110)}
                    editable={false}
                    value={selectedAddons}
                    onShowPassword={() => setIsAddonVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
                <View style={{ marginRight: scale(10) }}>
                  <CustomInput
                    dropDown={true}
                    height={29}
                    color={colors.gray100}
                    width={scale(110)}
                    editable={false}
                    value={vehicleObject}
                    onShowPassword={() => setIsVehicleVisible(true)}
                    rightImage={icon.down}
                    fontWeight={"600"}
                    // paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />
                </View>
              </ScrollView>
            </View>

            <View style={{ paddingBottom: scale(15) }}>
              {isSelectedView == "Map View" && (
                <View
                  style={{
                    width: "100%",
                    height: mapHeight,
                    alignSelf: "center",
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      width: "90%",
                      height: "90%",
                      alignSelf: "center",
                      borderRadius: 20,
                    }}
                  >
                    <MapView.Animated
                      zoomControlEnabled={false}
                      ref={mapRef}
                      mapType={mapType}
                      showsBuildings={true}
                      showsCompass={false}
                      toolbarEnabled={false}
                      // initialRegion={region}
                      region={region}
                      // provider={PROVIDER_GOOGLE}
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: 5,
                        borderRadius: 20,
                        overflow: "hidden",
                      }}
                    >
                      {customerTicketData.map((item, index) => {
                        return (
                          <Marker
                            onPress={() => setSelectedDrivers([item])}
                            // style={{width:30,height:30,alignItems:"center",justifyContent:"center",}}

                            key={index}
                            coordinate={{
                              latitude: item.lat,
                              longitude: item.long,
                            }}
                            // identifier={index.toString()}
                          >
                            <TouchableOpacity
                              style={{
                                width: scale(22),
                                height: scale(22),
                              }}
                            >
                              <Image
                                style={{
                                  width: scale(22),
                                  height: scale(22),
                                }}
                                resizeMode={"contain"}
                                source={item.pass}
                              />
                            </TouchableOpacity>
                            {/* <StoreMarker /> */}
                          </Marker>
                        );
                      })}
                    </MapView.Animated>

                    <View
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          if (mapType == "standard") {
                            setMapType("satellite");
                          } else {
                            setMapType("standard");
                          }
                        }}
                        activeOpacity={0.6}
                      >
                        <Image
                          style={styles.mapImgContainer}
                          // resizeMode="contain"
                          source={image.layers}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}>
                        <Image
                          style={styles.mapImgContainer}
                          // resizeMode="contain"
                          source={image.gesture}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => updateMapCenter()}
                      >
                        <Image
                          style={styles.mapImgContainer}
                          // resizeMode="contain"
                          source={image.routes}
                        />
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => {
                        if (mapHeight == 400) {
                          setMapHeight(700);
                        } else {
                          setMapHeight(400);
                        }
                      }}
                      style={{
                        position: "absolute",
                        bottom: 80,
                        right: 20,
                        gap: 10,
                      }}
                    >
                      <Image
                        style={styles.mapImgContainer}
                        // resizeMode="contain"
                        source={
                          mapHeight == 400 ? image.zoomroute : icon.reduce
                        }
                      />
                    </TouchableOpacity>
                  </View>

                  {isSelectedView == "Map View" && (
                    <View style={{ position: "absolute", bottom: -15 }}>
                      <FlatList
                        data={selectedDrivers}
                        style={{ paddingBottom: verticalScale(30) }}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                          gap: verticalScale(5),
                          paddingBottom: 10,
                        }}
                        keyExtractor={(item) => item}
                        renderItem={renderMapViewDriver}
                      />
                    </View>
                  )}
                </View>
              )}
              {isSelectedView == "List View" && (
                <>
                  <FlatList
                    data={customerTicketData}
                    style={{ paddingBottom: verticalScale(30) }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      gap: verticalScale(5),
                      paddingBottom: 10,
                    }}
                    keyExtractor={(item) => item}
                    renderItem={renderDriver}
                  />
                </>
              )}
            </View>
            {/* <View
            // style={{paddingHorizontal:scale(15)}}
            >
              <FlatList
                data={customerTicketData}
                style={{ paddingBottom: verticalScale(30) }}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: verticalScale(5) }}
                keyExtractor={(item) => item}
                renderItem={renderDriver}
              />
            </View> */}
          </ScrollView>
        </View>
      </Screen>

      {isWatchList == true && (
        <Animatable.View
          animation={"slideInUp"}
          style={{
            width: "95%",
            // height: verticalScale(65),
            backgroundColor: "#283137",
            alignSelf: "center",
            paddingHorizontal: scale(10),
            position: "absolute",
            paddingVertical: scale(20),
            bottom: verticalScale(50),
          }}
        >
          {/* <Image
            style={{ width: scale(35), height: scale(35) }}
            source={images.verify}
            resizeMode="contain"
          /> */}
          <View style={{ marginTop: -4 }}>
            <CustomText
              text={saveText}
              color={colors.white}
              fontWeight={"400"}
              size={13}
              // style={{ marginLeft: scale(10), marginBottom: -5 }}
              // fontFam={"Poppins-SemiBold"}
            />
          </View>

          <View
            style={{
              ...AppStyles.row,
              alignSelf: "flex-end",
              paddingTop: verticalScale(20),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIsWatchList(false)}
            >
              <CustomText
                text={"Dismiss"}
                color={colors.white}
                fontWeight={"600"}
                size={13}
                // style={{ marginLeft: scale(10) }}
                fontFam={"Poppins-Medium"}
              />
            </TouchableOpacity>

            <Spacer width={scale(20)} />

            <CustomText
              text={"See Watchlist"}
              onPress={() => navigation.navigate("Watchlist")}
              color={colors.white}
              fontWeight={"600"}
              size={13}
              // style={{ marginLeft: scale(10) }}
              fontFam={"Poppins-Medium"}
            />
          </View>
        </Animatable.View>
      )}

      <SortedModal
        modalVisible={isSortedVisible}
        title={"Sort by"}
        selectedObject={selectedSorted}
        setSelectedObject={setSelectedSorted}
        setModalVisible={setIsSortedVisible}
      />
      <ViewModal
        modalVisible={isViewVisible}
        title={"View"}
        selectedObject={isSelectedView}
        setSelectedObject={setIsSelectedView}
        setModalVisible={setIsViewVisible}
      />

      <VehicleModal
        modalVisible={isVehicleVisible}
        title={"Vehicle Size"}
        selectedObject={vehicleObject}
        setSelectedObject={setVehicleObject}
        setModalVisible={setIsVehicleVisible}
      />
      <CategoryModal
        modalVisible={isCategoryVisible}
        title={"Category"}
        selectedObject={categoryObject}
        setSelectedObject={setCategoryObject}
        setModalVisible={setIsCategoryVisible}
      />
      <TravelModel
        modalVisible={isTravelVisible}
        title={"Pickup Radius"}
        setModalVisible={setIsTravelVisible}
      />
      <AllServicesModal
        modalVisible={isAddonsVisible}
        title={"Pickup Radius"}
        setModalVisible={setIsAddonVisible}
        selectedObject={selectedAddons}
        setSelectedObject={setSelectedAddons}
        servicesData={AddonsServicesData}
      />
      <CounterOfferModal
        modalVisible={isCounterOfferVisible}
        submitButtonColor={colors.secondary}
        counterOffer={counterOffer}
        setCounterOffer={setCounterOffer}
        title={"Counteroffer Price"}
        onSubmit={() => {
          setIsCounterOfferVisible(false);
          setTimeout(() => {
            setIsSubmitModal(true);
          }, 500);
        }}
        setModalVisible={setIsCounterOfferVisible}
      />
      <SuccessModal
        modalVisible={isSaveModal}
        title={"Saved!"}
        successButtonColor={colors.secondary}
        descripation={"You can view Saved Search in Service Profile."}
        submitText={"See Service Profile"}
        setModalVisible={setIsSaveModal}
        onSubmit={() => {
          setIsSaveModal(false);
          setTimeout(() => {
            navigation.navigate("ServiceProfile");
          }, 500);
        }}
      />

      <SuccessModal
        modalVisible={isSubmitModal}
        title={"Submitted"}
        successButtonColor={colors.secondary}
        descripation={"You will receive a response soon."}
        submitText={"Return to Home"}
        setModalVisible={setIsSubmitModal}
        onSubmit={() => {
          setIsSubmitModal(false);
          setTimeout(() => {
            navigation.navigate("Home");
          }, 500);
        }}
      />

      <SuccessModal
        modalVisible={isAcceptModal}
        title={"Accepted!"}
        successButtonColor={colors.secondary}
        descripation={"You can view accepted offer in save trips"}
        submitText={"See Save Trips"}
        setModalVisible={setIsAcceptModal}
        onSubmit={() => {
          setIsAcceptModal(false);
          setTimeout(() => {
            // navigation.navigate("Home");
          }, 500);
        }}
      />
    </>
  );
};

export default CustomerSearch;

const styles = StyleSheet.create({
  updownButton: {
    position: "absolute",
    top: "35%",
    width: scale(35),
    height: scale(35),
    right: scale(20),
  },
  mapImgContainer: {
    width: scale(30),
    height: scale(30),
  },
});
