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
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import TopHeader from "../../../../components/TopHeader";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import DropDown from "../../../../components/DropDown";
import { DropDownData } from "../../../../utils/Commons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { Spacer } from "../../../../components/Spacer";
import { Inter } from "../../../../utils/Fonts";
import { icon } from "../../../../assets/png/icons";
import CustomInput from "../../../../components/CustomInput";
import DashedLine from "react-native-dashed-line";
import MilesContainer from "../../../../components/MilesContainer";
import CategoryBottomTab from "../../../../components/CategoryBottomTab";
import CustomBackModal from "../../../../components/CustomBackModal";
import DropDownModal from "../../../../components/DropDownModal";
import { useDispatch } from "react-redux";
import { setAddService } from "../../../../redux/reducers/authReducer";

const MoveCategoryOne = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [priceAdjuster, setPriceAdjuster] = useState("1.2");
  const [onDemandPrice, setOnDemandPrice] = useState("1.2");

  const [base, setBase] = useState("");
  const [dedicated, setDedicated] = useState("");

  const [vehicleSize, setVehicleSize] = useState("Standard (2-4 seats)");
  const [isVehicleSizeModal, setIsVehicleSizeModal] = useState(false);

  const vehicleSizeData = [
    "Standard (2-4 seats)",
    "Large (2-6 seats)",
    "X-Large (6-14 seats)",
    "+ Premium (Luxury)",
    "Assisted Ride",
  ];
  // data: [
  //   { mile: 20, toMi: "20",toMile:"" },
  //   { toMile: 20, formMile: 50, toFromMile: "" },
  //   { mile: 50, fromMi: "50",fromMile:"" },
  // ],

  const [PriceData, setPriceData] = useState({
    mileTo: "20",
    mileFrom: "50",
  });
  const ScheduleQuote = ({ title }) => {
    return (
      <View>
        <View style={AppStyles.justifyRow}>
          <View
            style={{
              ...AppStyles.justifyRow,
              width: "60%",
              //   backgroundColor:"red"
              //   marginBottom: verticalScale(13),
            }}
          >
            <CustomText
              text={title || "Schedule Quote"}
              color={colors.gray200}
              size={13}
            />

            <Image
              style={{ width: scale(13), height: scale(13) }}
              source={icon.cross}
              resizeMode={"contain"}
            />
          </View>
          <CustomInput
            height={29}
            width={scale(70)}
            paddingHorizontal={1}
            borderRadius={8}
            value={"1.2"}
          />
        </View>
      </View>
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
        <View
          style={{
            flex: 1,

            backgroundColor: colors.white,
          }}
        >
          <TopHeader
            txt={"Ride Service"}
            isBack={() => setIsModalVisible(true)}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(15),
              }}
            >
              <CustomLine />

              <View
                style={{
                  ...AppStyles.justifyRow,
                  marginVertical: verticalScale(15),
                }}
              >
                <CustomText
                  text={"Vehicle Size/Feature"}
                  color={colors.black}
                  size={13}
                />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(180)}
                  editable={false}
                  dropDown={true}
                  onShowPassword={() => setIsVehicleSizeModal(true)}
                  rightImage={icon.down}
                  value={vehicleSize}
                  paddingHorizontal={5}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />

                {/* <DropDown
                  placeholder={"Standard (2-4 Seats)"}
                  dropWidth={scale(180)}
                  // paddingHorizontal={scale(30)}
                  //   data={data}
                  data={DropDownData.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                /> */}
              </View>
              <CustomLine />

              <CustomText
                text={"Set Price"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />

              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />

                  <View
                    style={{
                      ...AppStyles.justifyRow,
                      marginBottom: verticalScale(13),
                      marginRight: scale(5),
                    }}
                  >
                    <CustomText text={"On Demand"} size={13} />

                    <Image
                      style={{ width: scale(15), height: scale(15) }}
                      source={icon.up}
                      resizeMode={"contain"}
                    />
                  </View>

                  <View style={AppStyles.justifyRow}>
                    <View
                      style={{
                        ...AppStyles.justifyRow,
                        width: "60%",
                        //   backgroundColor:"red"
                        //   marginBottom: verticalScale(13),
                      }}
                    >
                      <CustomText
                        text={"Schedule Quote"}
                        color={colors.gray200}
                        size={13}
                      />

                      <Image
                        style={{ width: scale(13), height: scale(13) }}
                        source={icon.cross}
                        resizeMode={"contain"}
                      />
                    </View>
                    <CustomInput
                      height={29}
                      width={scale(70)}
                      paddingHorizontal={1}
                      borderRadius={8}
                      keyboard={"numeric"}
                      value={onDemandPrice}
                      onChangeText={(txt) => {
                        // Remove any non-numeric characters
                        let numericValue = txt.replace(/[^0-9]/g, "");

                        // Remove leading zeros
                        numericValue = numericValue.replace(/^0+/, "");

                        console.log("Numberbcd", numericValue);
                        // Limit the length of the input to 2 digits
                        if (numericValue.length > 2) {
                          numericValue = numericValue.slice(0, 2);
                        }
                        // Format the value as x.y
                        let formattedValue;
                        if (numericValue.length === 1) {
                          formattedValue = `0.${numericValue}`;
                        } else if (numericValue.length === 2) {
                          formattedValue = `${numericValue[0]}.${numericValue[1]}`;
                        }

                        // Update the state with the formatted value
                        setOnDemandPrice(formattedValue);
                      }}
                    />
                  </View>

                  {/* <ScheduleQuote /> */}
                  <View style={{ marginVertical: verticalScale(13) }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>

                  <View
                    style={{
                      ...AppStyles.justifyRow,
                      marginBottom: verticalScale(13),
                      marginRight: scale(5),
                    }}
                  >
                    <CustomText text={"Scheduled"} size={13} />

                    <Image
                      style={{ width: scale(15), height: scale(15) }}
                      source={icon.up}
                      resizeMode={"contain"}
                    />
                  </View>

                  <View
                    style={{
                      ...AppStyles.justifyRow,
                      //   marginTop: verticalScale(13),
                    }}
                  >
                    <CustomText
                      text={"Base"}
                      color={colors.gray200}
                      size={13}
                    />
                    <CustomInput
                      height={29}
                      width={scale(70)}
                      paddingHorizontal={1}
                      placeholder={"$"}
                      value={base}
                      borderRadius={8}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setBase(txt);
                        }
                      }}

                      // value={"1.2"}
                    />
                  </View>
                  <MilesContainer
                    isActive={true}
                    array={PriceData}
                    mile={PriceData.mileTo}
                    onChangeText={(txt) => {
                      if (/^\d*$/.test(txt)) {
                        setPriceData({ ...PriceData, mileTo: txt });
                        // Allows only digits and empty string
                        // setPriceData((prevData) =>
                        //   prevData.map((item, ind) =>
                        //     ind === index
                        //       ? { ...item, mileTo: txt }
                        //       : item
                        //   )
                        // );
                      }
                    }}
                    mileFrom={PriceData.mileFrom}
                    mileTo={PriceData.mileTo}
                  />

                  <MilesContainer
                    isActive={true}
                    array={PriceData}
                    setArray={setPriceData}
                    showMile={true}
                    mileFrom={PriceData.mileFrom}
                    mileTo={PriceData.mileTo}
                  />
                  <MilesContainer
                    mile={PriceData.mileFrom}
                    isActive={true}
                    array={PriceData}
                    setArray={setPriceData}
                    mileFrom={PriceData.mileFrom}
                    mileTo={PriceData.mileTo}
                    onChangeText={(txt) => {
                      if (/^\d*$/.test(txt)) {
                        setPriceData({ ...PriceData, mileFrom: txt });
                      }
                    }}
                  />

                  <View style={{ marginVertical: verticalScale(13) }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>

                  <View
                    style={{
                      ...AppStyles.justifyRow,
                      marginBottom: verticalScale(13),
                    }}
                  >
                    <CustomText
                      text={"Dedicated"}
                      //   color={colors.}
                      size={13}
                    />
                    <CustomInput
                      height={29}
                      width={scale(70)}
                      paddingHorizontal={1}
                      placeholder={"$/day"}
                      borderRadius={8}
                      value={dedicated}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setDedicated(txt);
                        }
                      }}

                      // value={"1.2"}
                    />
                  </View>
                </View>
              </View>

              <CustomText
                text={"Price Adjuster"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />

              <View
                style={{ ...AppStyles.box, marginBottom: verticalScale(50) }}
              >
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  <View>
                    <View style={AppStyles.justifyRow}>
                      <View
                        style={{
                          ...AppStyles.justifyRow,
                          width: "60%",
                          //   backgroundColor:"red"
                          //   marginBottom: verticalScale(13),
                        }}
                      >
                        <CustomText
                          text={"Schedule Quote"}
                          color={colors.gray200}
                          size={13}
                        />

                        <Image
                          style={{ width: scale(13), height: scale(13) }}
                          source={icon.cross}
                          resizeMode={"contain"}
                        />
                      </View>
                      <CustomInput
                        height={29}
                        width={scale(70)}
                        paddingHorizontal={1}
                        borderRadius={8}
                        keyboard={"numeric"}
                        value={priceAdjuster}
                        onChangeText={(txt) => {
                          // Remove any non-numeric characters
                          let numericValue = txt.replace(/[^0-9]/g, "");

                          // Remove leading zeros
                          numericValue = numericValue.replace(/^0+/, "");

                          console.log("Numberbcd", numericValue);
                          // Limit the length of the input to 2 digits
                          if (numericValue.length > 2) {
                            numericValue = numericValue.slice(0, 2);
                          }
                          // Format the value as x.y
                          let formattedValue;
                          if (numericValue.length === 1) {
                            formattedValue = `0.${numericValue}`;
                          } else if (numericValue.length === 2) {
                            formattedValue = `${numericValue[0]}.${numericValue[1]}`;
                          }

                          // Update the state with the formatted value
                          setPriceAdjuster(formattedValue);
                        }}
                      />
                    </View>
                  </View>

                  {/* <ScheduleQuote /> */}

                  <CustomText
                    text={"Note: Only applicable to Scheduled Service"}
                    color={colors.gray}
                    style={{ marginVertical: verticalScale(15) }}
                    size={13}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Screen>

      <CategoryBottomTab
        onLabel3={() => navigation.navigate("Watchlist")}
        onLabel1={() => {

          let payload = {
            isAddService: true,
            serviceName: "Ride",
          };
          dispatch(setAddService(payload));
          
          navigation.navigate("ServiceProfile")}}
      />

      <CustomBackModal
        startButtonText={"Don’t Save"}
        onSave={() => {
          setIsModalVisible(false);

      

          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        onStartButton={() => {
          setIsModalVisible(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        //   onStartButton
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
      />

      <DropDownModal
        modalVisible={isVehicleSizeModal}
        selectedObject={vehicleSize}
        title={"Vehicle Size/Feature"}
        setSelectedObject={setVehicleSize}
        setModalVisible={setIsVehicleSizeModal}
        data={vehicleSizeData}
      />
    </>
  );
};

export default MoveCategoryOne;

const styles = StyleSheet.create({});
