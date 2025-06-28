import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { AppStyles } from "../../../utils/AppStyle";
import { Inter } from "../../../utils/Fonts";
import CustomLine from "../../../components/CustomLine/CustomLine";
import CustomText from "../../../components/CustomText";
import { icon } from "../../../assets/png/icons";
import HorizontalContainer from "../../../components/HorizontalContainer";
import DashedLine from "react-native-dashed-line";
import Collapsible from "react-native-collapsible";
import CustomButton from "../../../components/CustomButton";
import { image } from "../../../assets/png/images";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const OrderRoute = () => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [region, setRegion] = useState(null)
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
          borderRadius: scale(10),
          backgroundColor: colors.white,
          elevation: 5,
          shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          shadowOffset: { width: 4, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          borderRadius: scale(15),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setIsCollapsible(!isCollapsible)}
          style={{ ...AppStyles.justifyRow, padding: verticalScale(15) }}
        >
          <CustomText
            text={"Route"}
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
            <View style={{ padding: scale(15) }}>
              <View
                style={{
                  width: "100%",
                  height: verticalScale(170),
                  alignSelf: "center",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <MapView.Animated
                  zoomControlEnabled={false}
                  // ref={mapRef}
                  // mapType={mapType}
                  showsBuildings={true}
                  showsCompass={false}
                  toolbarEnabled={false}
                  // initialRegion={region}
                  // region={region}
                  // provider={PROVIDER_GOOGLE}
                  style={{
                    height: "100%",
                    width: "100%",
                    marginTop: 5,
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                ></MapView.Animated>

                <View
                  style={{
                    width: scale(35),
                    height: scale(35),
                    position: "absolute",
                    bottom: verticalScale(10),
                    right: scale(10),
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    resizeMode={"contain"}
                    source={image.zoom}
                  />
                </View>
              </View>
            </View>
          </View>
        </Collapsible>
      </View>
    </View>
  );
};

export default OrderRoute;

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },
});
