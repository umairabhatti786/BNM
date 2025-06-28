import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import { Inter } from "../../../../utils/Fonts";
import Collapsible from "react-native-collapsible";
import { image } from "../../../../assets/png/images";
import { icon } from "../../../../assets/png/icons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { Spacer } from "../../../../components/Spacer";
import DashedLine from "react-native-dashed-line";
import OrderCard from "../../../../components/OrderCard";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

const RouteProgress = () => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 32.3363,
    longitude: 74.3675,
    latitudeDelta: 0.039330183268125069,
    longitudeDelta: 0.045962757229776571,
  });

  const ordersData = [
    {
      order_id: "Order #7162533",
      pick_up_address: "Down town, new york",
      start_time: "13:45",
      delivery_cateogory: "Local Delivery",
      is_start: "Start",
      is_complete: "Success",
      lat: 32.3811,
      long: 74.3175,
    },
    {
      order_id: "Order #7162533",
      pick_up_address: "Down town, new york",
      start_time: "13:45",
      delivery_cateogory: "Local Delivery",
      is_start: "Start",
      is_complete: "Failed",
      lat: 32.3463,
      long: 74.3275,
    },
    {
      order_id: "Order #7162533",
      pick_up_address: "Down town, new york",
      start_time: "13:45",
      delivery_cateogory: "Local Delivery",
      is_start: "Continue",
      is_complete: "En-Route",
      lat: 32.3263,
      long: 74.3285,
    },
    {
      order_id: "Order #7162533",
      pick_up_address: "Down town, new york",
      start_time: "13:45",
      delivery_cateogory: "Local Delivery",
      is_start: "Start",
      is_complete: "Pending",
      lat: 32.3219,
      long: 74.3585,
    },
  ];

  const DestinationContainer = ({ count, isComplete }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: scale(40),
            height: scale(40),
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",

              tintColor:
                isComplete == "Success" || isComplete == "Failed"
                  ? colors.secondary
                  : colors.gray,
            }}
            resizeMode={"contain"}
            source={image.marker}
          />
          <View style={styles.count}>
            <CustomText
              text={count}
              color={colors.white}
              fontFam={Inter.bold}
              fontWeight="700"
              size={15}
            />
          </View>
        </View>

        <CustomLine
          width={scale(3)}
          height={verticalScale(190)}
          backgroundColor={"#0A987F20"}
        />
      </View>
    );
  };
  
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Permission',
            message: 'We need access to your location to show you on the map',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
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
  return (
    <View
      style={{
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: -4, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginVertical: verticalScale(20),
      }}
    >
      <View
        style={{
          backgroundColor: colors.white,
          elevation: 5,
          shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          shadowOffset: { width: 4, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          borderRadius: scale(12),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setIsCollapsible(!isCollapsible)}
          style={{ ...AppStyles.justifyRow, padding: verticalScale(15) }}
        >
          <CustomText
            text={"Route Progress"}
            size={14}
            fontWeight={"600"}
            fontFam={Inter.semiBold}
            color={colors.black}
          />

          <Image
            style={styles.iconContainer}
            resizeMode={"contain"}
            source={isCollapsible == false ? icon.up : icon.down}
          />
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsible}>
          <View>
            <CustomLine />
            <View style={{ padding: scale(10) }}>
              <View style={{ paddingBottom: scale(15) }}>
                <View
                  style={{
                    width: "100%",
                    height: 300,
                    alignSelf: "center",
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      alignSelf: "center",
                      borderRadius: 20,
                    }}
                  >
                    <MapView.Animated
                      zoomControlEnabled={false}
                      ref={mapRef}
                      // mapType={mapType}
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
                      {ordersData.map((item, index) => {
                        return (
                          <Marker
                            // onPress={() => setSelectedDrivers([item])}
                            // style={{width:30,height:30,alignItems:"center",justifyContent:"center",}}

                            key={index}
                            coordinate={{
                              latitude: item.lat,
                              longitude: item.long,
                            }}
                            // identifier={index.toString()}
                          >
                            <View
                              style={{
                                width: scale(40),
                                height: scale(40),
                              }}
                            >
                              <Image
                                style={{
                                  width: "100%",
                                  height: "100%",

                                 tintColor:item. is_complete == "Success" || item.is_complete == "Failed"
                                  ? colors.secondary
                                  : colors.gray,
                                                                }}
                                resizeMode={"contain"}
                                source={image.marker}
                              />
                              <View style={styles.count}>
                                <CustomText
                                  text={index + 1}
                                  color={colors.white}
                                  fontFam={Inter.bold}
                                  fontWeight="700"
                                  size={15}
                                />
                              </View>
                            </View>
                            {/* <StoreMarker /> */}
                          </Marker>
                        );
                      })}
                    </MapView.Animated>

                    <TouchableOpacity
                      activeOpacity={0.6}
                      // onPress={() => {
                      //   if (mapHeight == 400) {
                      //     setMapHeight(700);
                      //   } else {
                      //     setMapHeight(400);
                      //   }
                      // }}
                      style={{
                        position: "absolute",
                        bottom:verticalScale(20),
                        right: 20,
                        gap: 10,
                      }}
                    >
                      <Image
                        style={styles.mapImgContainer}
                        // resizeMode="contain"
                        source={image.zoomroute}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View
                style={{
                  ...AppStyles.justifyRow,
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(10),
                }}
              >
                <CustomText
                  text={"20 Stops"}
                  color={colors.black}
                  fontFam={Inter.bold}
                  fontWeight="700"
                  size={15}
                />
                <View style={AppStyles.row}>
                  <CustomText
                    text={"8.18 Mi"}
                    color={colors.gray}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={13}
                  />
                  <View
                    style={{
                      width: scale(5),
                      height: scale(5),
                      borderRadius: 999,
                      backgroundColor: "#D9D9D9",
                      marginHorizontal: scale(5),
                    }}
                  ></View>
                  <CustomText
                    text={"4:01 hr"}
                    color={colors.gray}
                    fontFam={Inter.medium}
                    // fontWeight="400"
                    size={13}
                  />
                </View>
              </View>

              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />

              <FlatList
                data={ordersData}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{ paddingTop: 20 }}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <DestinationContainer
                        count={index + 1}
                        isComplete={item.is_complete}
                      />
                      <View
                        style={{
                          marginHorizontal: scale(5),
                          marginBottom: verticalScale(20),
                        }}
                      >
                        <OrderCard item={item} taskStatus={"Success"} />
                      </View>
                    </View>
                  );
                }}
                // ListHeaderComponent={<OrderDetailCon />}
              />
            </View>
          </View>
        </Collapsible>
      </View>
    </View>
  );
};

export default RouteProgress;

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },
  count: {
    position: "absolute",
    right: 0,
    bottom: 0,
    top: verticalScale(6),
    left: scale(15),
  },
  mapImgContainer: {
    width: scale(30),
    height: scale(30),
  },
});
