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
import HorizontalContainerToggle from "../../../../components/HorizontalContainerToggle";
import DropDownModal from "../../../../components/DropDownModal";
import { image } from "../../../../assets/png/images";
import { numericRegex } from "../../../../utils/Regex";
import SuccessModal from "../../../../components/SuccessModal";
import { setAddService } from "../../../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";

const MoveCategoryTwo = ({ navigation }) => {
  const [vehicleType, setVehicleType] = useState("10-12 ft Box Truck");
  const [isVehicleTypeModal, setIsVehicleTypeModal] = useState(false);
  const [priceAdjuster, setPriceAdjuster] = useState("1.2");
  const  dispatch=useDispatch()
  const [isPostedModal, setIsPostedModal] = useState(false);

  const vehicleTypeData = [
    "Car",
    "Suv",
    "Mini-Van",
    "Pickup Truck",
    "Cargo Van",
    "Sprinter Van",
    "Sprinter Van",
    "10-12 ft Box Truck",
    "14-18 ft Box Truck",
    "20-24 ft Box Truck",
    "26 ft Box Truck",
  ];

  const PriceData = [{ mile: 20 }, { toMile: 20, formMile: 50 }, { mile: 50 }];

  const [UnloadingCapacity, setUnloadingCapacity] = useState([
    { name: "Light Weight (< 20 lbs)", isActive: true },
    { name: "Medium Weight (21 - 100 lbs)", isActive: true },
    { name: "Heavy Weight (>100 lbs)", isActive: false },
  ]);

  const [SizeCapacity, setSizeCapacity] = useState([
    { name: "Few Things", isActive: true },
    { name: "Small (less than 1000 sq ft)", isActive: true },
    { name: "Medium (1000-3000 sq ft)", isActive: false },
    { name: "Large (greater than 3000 sq ft)", isActive: false },
  ]);

  const [MovingCapacity, setMovingCapacity] = useState([
    { name: "Studio", isActive: true },
    { name: "1 Bedroom home", isActive: true },
    { name: "2 Bedroom home", isActive: false },
    { name: "3 Bedroom home", isActive: false },
    { name: "4 Bedroom home", isActive: false },
    { name: "5 Bedroom home", isActive: false },
  ]);
  const ScheduleQuote = ({ title, value, onChangeText }) => {
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
            value={value}
            onChangeText={onChangeText}
            paddingHorizontal={1}
            borderRadius={8}
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
            txt={"Delivery Service"}
            isBack={() => navigation.goBack()}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(15),
              }}
            >
              <CustomText
                text={"Lifting/Loading/Unloading Capacity"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(10),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  {UnloadingCapacity.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          setIsActive={() => {
                            const updates = [...UnloadingCapacity];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setUnloadingCapacity(updates);
                          }}
                          // text1={"On-demand"}
                        />
                        {UnloadingCapacity.length != index + 1 ? (
                          <View style={{ marginVertical: verticalScale(13) }}>
                            <DashedLine
                              dashLength={6}
                              dashThickness={1}
                              dashGap={5}
                              dashColor={colors.gray}
                            />
                          </View>
                        ) : (
                          <Spacer height={verticalScale(13)} />
                        )}
                      </>
                    );
                  })}
                </View>
              </View>

              <CustomText
                text={"Size Capacity"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  {SizeCapacity.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          setIsActive={() => {
                            const updates = [...SizeCapacity];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setSizeCapacity(updates);
                          }}
                          // text1={"On-demand"}
                        />
                        {SizeCapacity.length != index + 1 ? (
                          <View style={{ marginVertical: verticalScale(13) }}>
                            <DashedLine
                              dashLength={6}
                              dashThickness={1}
                              dashGap={5}
                              dashColor={colors.gray}
                            />
                          </View>
                        ) : (
                          <Spacer height={verticalScale(13)} />
                        )}
                      </>
                    );
                  })}
                </View>
              </View>

              <CustomText
                text={"Home Moving Capacity"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  {MovingCapacity.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          setIsActive={() => {
                            const updates = [...MovingCapacity];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setMovingCapacity(updates);
                          }}
                          // text1={"On-demand"}
                        />
                        {MovingCapacity.length != index + 1 ? (
                          <View style={{ marginVertical: verticalScale(13) }}>
                            <DashedLine
                              dashLength={6}
                              dashThickness={1}
                              dashGap={5}
                              dashColor={colors.gray}
                            />
                          </View>
                        ) : (
                          <Spacer height={verticalScale(13)} />
                        )}
                      </>
                    );
                  })}
                </View>
              </View>

              <CustomText
                text={"Vehicle Type"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />

              <View
                style={{
                  ...AppStyles.box,
                  padding: scale(20),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // marginVertical: verticalScale(30),
                }}
              >
                <CustomText
                  text={"Select Vehicle"}
                  color={colors.black}
                  size={13}
                />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(160)}
                  editable={false}
                  dropDown={true}
                  onShowPassword={() => setIsVehicleTypeModal(true)}
                  rightImage={icon.down}
                  value={vehicleType}
                  paddingHorizontal={10}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />

                {/* <DropDown
                  placeholder={"10-12 ft. Box Truck"}
                  dropWidth={scale(160)}
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

              <CustomText
                text={"Service Description"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("SetPrice")}
                style={{
                  ...AppStyles.box,
                  padding: scale(20),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // marginVertical: verticalScale(30),
                }}
              >
                <CustomText text={"Set Price"} color={colors.black} size={13} />
                <Image
                  source={icon.nexticon}
                  resizeMode="contain"
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
              </TouchableOpacity>

              <CustomText
                text={"Addons"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("Addons")}
                style={{
                  ...AppStyles.box,
                  padding: scale(20),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // marginVertical: verticalScale(30),
                }}
              >
                <CustomText
                  text={"Select Add-ons"}
                  color={colors.black}
                  size={13}
                />
                <Image
                  source={icon.nexticon}
                  resizeMode="contain"
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
              </TouchableOpacity>

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
                        paddingHorizontal={1}
                        borderRadius={8}
                      />
                    </View>
                  </View>

                  {/* <ScheduleQuote

                  value={priceAdjuster}
                  onChangeText={(txt)=>{
                    setPriceAdjuster(txt)


                  }}
                   /> */}

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
        onLabel1={() => {
          setTimeout(() => {
            let payload = {
              isAddService: true,
              serviceName: "Delivery",
            };
            dispatch(setAddService(payload));
            
            navigation.navigate("ServiceProfile")

            // navigation.navigate("Home");
          }, 500);

        }}
        onLabel3={() => setIsPostedModal(true)}
      />
      <DropDownModal
        modalVisible={isVehicleTypeModal}
        selectedObject={vehicleType}
        title={"Select Time"}
        setSelectedObject={setVehicleType}
        setModalVisible={setIsVehicleTypeModal}
        data={vehicleTypeData}
      />


      <SuccessModal
        modalVisible={isPostedModal}
        title={"Posted!"}
        successButtonColor={colors.secondary}
        descripation={"You can view Item in Offered Service"}
        submitText={"See Offered Service"}
        setModalVisible={setIsPostedModal}
        onSubmit={() => {
          setIsPostedModal(false);
          setTimeout(() => {
            navigation.navigate("ServiceProfile");
            // navigation.navigate("Home");
          }, 500);
        }}
      />
    </>
  );
};

export default MoveCategoryTwo;

const styles = StyleSheet.create({});
