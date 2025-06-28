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
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
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
import * as Animatable from "react-native-animatable";
import NewText from "../../../../components/NewText";
import CounterOfferModal from "./CounterOfferModal";
import SortedModal from "./SortedModal";
import ViewModal from "./ViewModal";
import VehicleModal from "./VehicleModal";
import TravelModel from "./TravelModel";
import PaymentMethodModal from "./PaymentMethodModal";
import AddPaymentMethodModal from "./AddPaymentMethodModal";
import ThankyouModal from "./ThankyouModal";
import RateExperienceModal from "./RateExperienceModal";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import DriverDetailSheet from "./DriverDetailSheet";
import CategoryModal from "./CategoryModal";
import SuccessModal from "../../../../components/SuccessModal";
import PickupDropInstructionModal from "./PickupDropInstructionModal";
import Geolocation from "react-native-geolocation-service";
import { driverSearchService } from "../../../../services/driverSearchService";
import GooglePlacesInput from "../../../../components/GooglePlacesInput";

const DriverSearch = ({ navigation, route }) => {
  const [isWatchList, setIsWatchList] = useState(false);
  const [watchListObject, setWatchListObject] = useState([]);
  const [isCounterOfferVisible, setIsCounterOfferVisible] = useState(false);
  const [isSortedVisible, setIsSortedVisible] = useState(false);
  const [sortedObject, setSortedObject] = useState("Default (Relevance)");
  const [viewObject, setViewObject] = useState("List View");
  const [vehicleObject, setVehicleObject] = useState("Vehicle Size");
  const [isVehicleVisible, setIsVehicleVisible] = useState(false);
  const [deliveryType, setDelivertype] = useState("Scheduled");
  const [isSubmitModal, setIsSubmitModal] = useState(false);
  const [mapHeight, setMapHeight] = useState(400);
  const [isLoading, setIsLoading] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);
  // const [isPredictionList, setIsPredictionList] = useState(false);

  const GOOGLE_PLACES_API_KEY = "AIzaSyAEr0hTM7tktxFA6bzbJdgdVmVXz-qKlk0";

  const [nearby, setNearby] = useState(route?.params?.nearBy || null);
  // const [predictionData, setPredictionData] = useState([]);

  const [categoryObject, setCategoryObject] = useState("Delivery");
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isTravelVisible, setIsTravelVisible] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [isRateExperienceModal, setIsRateExperienceModal] = useState(false);
  const [nearbyAddress, setNearbyAddress] = useState("");
  const [mapType, setMapType] = useState("standard");
  const [region, setRegion] = useState({
    latitude: 32.3363,
    longitude: 74.3675,
    latitudeDelta: 0.039330183268125069,
    longitudeDelta: 0.045962757229776571,
  });
  const mapRef = useRef(null);
  let long = 74.3675;
  let lat = 32.3363;

  const [isViewVisible, setIsViewVisible] = useState(false);
  const [isAddPaymentMethodVisible, steIsAddPaymentMethodVisible] =
    useState(false);
  const [isThankyouModal, setIsThankyouModal] = useState(false);
  const [isPickupDropInstructionModal, setIsPickupDropInstructionModal] =
    useState(false);
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const driverDetailSheetRef = useRef();

  const [saveText, setSaveText] = useState("");
  const [watchlistDescription, setWatchlistDescription] =
    useState("See Watchlist");

  console.log("setSelectedDrivers", selectedDrivers);
  const [dropPoints, setdropPoints] = useState([
    {
      dropFromAddress: nearby ? nearby : nearbyAddress,
      dropOffAddress: "",
      dropOffPlaceHolder: "Drop Off Address",
    },
  ]);
  const [currentLocation, setCurrentLocation] = useState(null);

  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const handleLocationSelect = async (location, type) => {
    console.log("handleLocationSelect called with:", { type, location });

    if (!location) {
      // Handle cleared address
      if (type === "pickup") {
        setNearbyAddress("");
        setNearby(null);
        setDistance("");
        setDuration("");
      } else {
        const updatedDropPoints = dropPoints.map((point, index) => {
          if (index === dropPoints.length - 1) {
            return {
              ...point,
              dropOffAddress: "",
              location: null,
            };
          }
          return point;
        });
        setdropPoints(updatedDropPoints);
        setDistance("");
        setDuration("");
      }
      return;
    }

    if (type === "pickup") {
      console.log("Setting pickup location:", location);
      setNearbyAddress(location.address);
      setNearby(location.coordinates);
    } else {
      console.log("Setting dropoff location:", location);
      // Update the dropoff address in the dropPoints array
      const updatedDropPoints = dropPoints.map((point, index) => {
        if (index === dropPoints.length - 1) {
          return {
            ...point,
            dropOffAddress: location.address,
            location: location.coordinates,
          };
        }
        return point;
      });
      setdropPoints(updatedDropPoints);
    }

    // Calculate distance and time if both locations are selected
    if (type === "dropoff" && nearby && location.coordinates) {
      console.log("Calculating distance between:", {
        pickup: nearby,
        dropoff: location.coordinates,
      });

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${nearby.latitude},${nearby.longitude}&destinations=${location.coordinates.latitude},${location.coordinates.longitude}&key=${GOOGLE_PLACES_API_KEY}`
        );
        const data = await response.json();
        console.log("Distance Matrix API response:", data);

        if (data.status === "OK" && data.rows[0].elements[0].status === "OK") {
          const result = data.rows[0].elements[0];
          console.log("Distance calculation result:", result);
          setDistance(result.distance.text);
          setDuration(result.duration.text);
        } else {
          console.error("Distance Matrix API error:", data);
        }
      } catch (error) {
        console.error("Error calculating distance:", error);
        Alert.alert("Error", "Could not calculate distance and time");
      }
    } else {
      console.log("Skipping distance calculation:", {
        type,
        hasNearby: !!nearby,
        hasDropoffCoordinates: !!location?.coordinates,
      });
    }
  };

  useEffect(() => {
    console.log("Component mounted, getting location...");
    getCurrentLocation();
    fetchDrivers();
  }, []);

  const getCurrentLocation = async () => {
    try {
      console.log("Requesting location permission...");
      const granted = await requestLocationPermission();
      console.log("Location permission granted:", granted);

      if (granted) {
        console.log("Getting current position...");
        Geolocation.getCurrentPosition(
          async (position) => {
            console.log("Got position:", position);
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });

            // Get address from coordinates
            try {
              console.log(
                "Fetching address for coordinates:",
                latitude,
                longitude
              );
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_PLACES_API_KEY}`
              );
              const data = await response.json();
              console.log("Geocoding response:", data);

              if (data.status === "OK" && data.results[0]) {
                const formattedAddress = data.results[0].formatted_address;
                console.log("Setting address:", formattedAddress);
                setNearbyAddress(formattedAddress);
                const newNearby = { latitude, longitude };
                // setNearby(newNearby);
                setRegion({
                  latitude,
                  longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                });
              } else {
                console.error(
                  "Geocoding failed:",
                  data.status,
                  data.error_message
                );
                Alert.alert(
                  "Error",
                  "Could not get your current address. Please try again."
                );
              }
            } catch (error) {
              console.error("Error getting address:", error);
              Alert.alert(
                "Error",
                "Failed to get your current address. Please try again."
              );
            }
          },
          (error) => {
            console.error("Error getting location:", error);
            Alert.alert(
              "Error",
              "Could not get your current location. Please check your location settings."
            );
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
            forceRequestLocation: true,
          }
        );
      } else {
        console.log("Location permission denied");
        Alert.alert(
          "Permission Required",
          "Location permission is required to show nearby drivers."
        );
      }
    } catch (error) {
      console.error("Error in location permission flow:", error);
      Alert.alert(
        "Error",
        "Failed to access location. Please check your settings."
      );
    }
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === "android") {
        console.log("Requesting Android location permission...");
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "We need your location to show nearby drivers",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        console.log("Android permission result:", granted);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        console.log("Requesting iOS location permission...");
        const granted = await Geolocation.requestAuthorization("whenInUse");
        console.log("iOS permission result:", granted);
        return granted === "granted";
      }
    } catch (error) {
      console.error("Error requesting location permission:", error);
      return false;
    }
  };

  const fetchDrivers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await driverSearchService.searchDrivers({
        location: nearby || nearbyAddress,
        radius: 10,
        vehicleType:
          vehicleObject !== "Vehicle Size" ? vehicleObject : undefined,
      });

      if (response.status === "success") {
        const formattedDrivers = response.data.map((driver) => ({
          ...driver,
          img: image[driver.image] || image.defimg900,
          isOpen: true,
          active: driver.status,
        }));
        setDrivers(formattedDrivers);
      }
    } catch (err) {
      console.error("Error fetching drivers:", err);
      setError("Failed to fetch drivers. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderCustomerUser = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(10),
          }}
        >
          <CustomerTicket
            setDelivertype={setDelivertype}
            onBook={() => {
              console.log("deliveryType", deliveryType);
              if (deliveryType == "Dedicated") {
                navigation.navigate("DedicatedService");

                // setIsPaymentModal(true);
              } else {
                setIsPaymentModal(true);

                // navigation.navigate("DedicatedService");
              }
            }}
            // onBook={() => navigation.navigate("DedicatedService")}
            onPressProfile={() =>
              navigation.navigate("CustomerProfile", { data: item })
            }
            item={item}
            onCounterOffer={() => setIsCounterOfferVisible(true)}
            setIsWatchList={setIsWatchList}
            setWatchListObject={setWatchListObject}
            watchListObject={watchListObject}
            onWatchList={() => {
              setSaveText("Removed, you can see in your  Watchlist");
              setIsWatchList(true);
              const findObject = watchListObject?.find((e) => e.id == item.id);
              if (findObject) {
                const dataContact1 = watchListObject.filter(
                  (f) => f.id != item.id
                );

                setWatchListObject(dataContact1);
                setWatchlistDescription("Removed from Watchlist");
              } else {
                setWatchlistDescription("See Watchlist");

                const dataContact = [...watchListObject, item]; // Replace 'New Data' with your actual data
                setWatchListObject(dataContact);
              }
              setTimeout(() => {
                setIsWatchList(false);
              }, 4000);
              // setWatchListObject(item)
            }}
            // onPress={() =>
            //   navigation.navigate("TrackOrder", { orderData: item })
            // }
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
          <CustomerTicket
            // onBook={()s => setIsPaymentModal(true)}
            // onBook={() => navigation.navigate("DedicatedService")}
            disableCollapsible={true}
            onPressProfile={() =>
              navigation.navigate("CustomerProfile", { data: item })
            }
            item={item}
            onCounterOffer={() => {
              // driverDetailSheetRef.current.dismiss()

              setIsCounterOfferVisible(true);
            }}
            setIsWatchList={setIsWatchList}
            setWatchListObject={setWatchListObject}
            watchListObject={watchListObject}
            onBook={() => {
              console.log("deliveryType", deliveryType);
              if (deliveryType == "Dedicated") {
                navigation.navigate("DedicatedService");

                // setIsPaymentModal(true);
              } else {
                setIsPaymentModal(true);

                // navigation.navigate("DedicatedService");
              }
            }}
            // onWatchList={() => {
            //   setSaveText("Saved, you can see your saved Driver in Watchlist");
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
            onPress={() => {
              driverDetailSheetRef.current.present();
            }}
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

  const zoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  const handleVehicleTypeChange = (type) => {
    setVehicleObject(type);
    setIsVehicleVisible(false);
  };

  return (
    <>
      <Screen
        height={40}
        backgroundColor={colors.white}
        statusBarColor={colors.white}
        // topBarColor={colors.primary}
        barStyle={"dark-content"}
      >
       </Screen>
    </>
  );
};

export default DriverSearch;

const styles = StyleSheet.create({
  mapImgContainer: {
    width: 32,
    height: 32,
  },
  distanceTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    marginTop: 10,
    borderRadius: 8,
  },
  distanceTimeItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  distanceTimeLabel: {
    fontSize: 14,
    color: "#666",
    marginRight: 5,
  },
  distanceTimeValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
});
