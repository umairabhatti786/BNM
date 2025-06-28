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
import DashedLine from "react-native-dashed-line";
import HorizontalContainerToggle from "../../../../components/HorizontalContainerToggle";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import ScheduleContainer from "./ScheduleContainer";
import DropDownModal from "../../../../components/DropDownModal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomRangeSlider from "../../../../components/RangeSlider";
import CustomBackModal from "../../../../components/CustomBackModal";

const DriverService = ({ navigation }) => {
  const [isWatchList, setIsWatchList] = useState(false);
  const [watchListObject, setWatchListObject] = useState([]);
  const [saveText, setSaveText] = useState("");
  const [pickupRadius, setPickupRadius] = useState("From Home Base  (Default)");
  const [timeZone, setTimeZone] = useState("Mountain Time zone");
  const [isTimeZoneModal, setIsTimeZoneModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [time, setTime] = useState("Midnight");
  const [endTime, setEndTime] = useState("Midnight");

  const [isTimeModal, setIsTimeModal] = useState(false);

  const [startTime, setStartTime] = useState("4pm");
  const [isStartTimeModal, setIsStartTimeModal] = useState(false);

  const [dedicatedEndTime, setDedicatedEndTime] = useState("Midnight");

  const [isDedicatedTimeModal, setIsDedicatedTimeModal] = useState(false);

  const [dedicatedStartTime, SetDedicatedStartTime] = useState("4pm");
  const [isDedicatedStartTimeModal, setIsDedicatedStartTimeModal] =
    useState(false);

  const [isPickupRadiusModal, setIsPickupRadiusModal] = useState(false);

  const timeData = [
    "Midnight",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12noon",
    "1pm",
  ];
  const pickupData = ["From Home Base  (Default)", "From Current Location"];
  const timeZoneData = [
    "Eastern Time zone",
    "Central Time zone",
    "Mountain Time zone",
    "Pacific Time zone",
    "Alaska Time zone",
    "Alaska-Hawaii Time Zone",
  ];
  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 100;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  console.log("minValucdce", minValue);
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

  const [MoveCategory, setMoveCategory] = useState([
    {
      name: "Ride Service",
      isActive: true,
      onPressNext: () => {
        navigation.navigate("MoveCategoryOne")
      },
    },
    {
      name: "Delivery Service",
      isActive: true,
      onPressNext: () => navigation.navigate("MoveCategoryTwo"),
    },
    {
      //delivvv
      name: "Delivery Add-ons service only",
      isActive: true,
      onPressNext: () => navigation.navigate("AddOnServiceScreen"),
    },
  ]);
  const [ServiceCoverage, setServiceCoverage] = useState([
    { name: "All (Default)", isActive: true },
    { name: "Local", isActive: true },
    { name: "Intercity", isActive: true },
    { name: "Interstate", isActive: true },
  ]);
  const [ServiceCategory, setServiceCategory] = useState([
    { name: "All (Default)", isActive: true },
    { name: "On Demand", isActive: false },
    { name: "Scheduled", isActive: false },
    { name: "Dedicated", isActive: false },
  ]);

  const [schedule, setSchedule] = useState([
    {
      day: "Sun",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: true,
    },
    {
      day: "Mon",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: true,
    },
    {
      day: "Tues",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Wed",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Thurs",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Fri",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Sat",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
  ]);

  const [Dedicated, setDedicated] = useState([
    {
      day: "Sun",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Mon",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: true,
    },
    {
      day: "Tues",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Wed",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Thurs",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Fri",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
    {
      day: "Sat",
      time: "4pm - midnight",
      startTime: "4pm",
      endTime: "midnight",
      isActive: false,
    },
  ]);

  const VehicleInfo = ({ txt1, txt2 }) => {
    return (
      <View
        style={{
          paddingHorizontal: scale(15),
          paddingTop: verticalScale(5),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          // onPress={onPress}
          style={AppStyles.justifyRow}
        >
          <CustomText
            text={txt1}
            color={colors.black}
            //   fontFam={Inter.medium}
            // fontWeight="600"
            size={13}
          />

          <View style={AppStyles.row}>
            <CustomText
              text={txt2}
              color={colors.gray200}
              //   fontFam={Inter.medium}
              //   fontWeight="500"
              size={13}
            />
            <Spacer width={scale(8)} />
            <Image
              style={{
                width: scale(13),
                height: scale(13),
              }}
              source={icon.nexticon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <View style={{ marginVertical: verticalScale(13) }}>
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={5}
            dashColor={colors.gray}
          />
        </View>
      </View>
    );
  };

  const ProfileContainer = () => {
    return (
      <View style={{ ...AppStyles.box, paddingVertical: verticalScale(10) }}>
        <TouchableOpacity
          // onPress={() => navigation.navigate("MoveCategoryOne")}
          style={{ flexDirection: "row", paddingLeft: scale(10) }}
        >
          <Image
            style={{
              width: scale(63),
              height: scale(63),
              borderRadius: scale(10),
            }}
            source={image.defimg600}
          />
          <View
            style={{ paddingLeft: scale(10), paddingTop: verticalScale(3) }}
          >
            <CustomText
              text={"Hello,"}
              size={13}
              //   fontFam={"100"}
              style={{ marginVertical: verticalScale(8) }}
              color={colors.gray}
            />
            <View style={{ flexDirection: "row" }}>
              <CustomText
                text={"Will Smith"}
                size={14}
                fontWeight={"600"}
                fontFam={Inter.medium}
                // style={{ marginRight: scale(5) }}
                color={colors.black}
              />
            </View>
          </View>
        </TouchableOpacity>

        <Spacer height={verticalScale(10)} />
        <View style={{ marginVertical: verticalScale(7) }}>
          <CustomLine />
        </View>

        <VehicleInfo txt1={"Vehicle Brand"} txt2={"Toyota, Camry 2015"} />
        <VehicleInfo txt1={"USDOT"} txt2={"n/a"} />
        <VehicleInfo txt1={"MC"} txt2={"n/a"} />
        <VehicleInfo txt1={"Home Base"} txt2={"City, State"} />

        <View
          style={{
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(5),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            // onPress={onPress}
            style={AppStyles.justifyRow}
          >
            <CustomText
              text={"Current"}
              color={colors.black}
              //   fontFam={Inter.medium}
              // fontWeight="600"
              size={14}
            />

            <View
              style={{
                ...AppStyles.row,
                borderWidth: 1,
                borderColor: colors.secondary,
                padding: scale(5),
                borderRadius: scale(7),
              }}
            >
              <Image
                style={{
                  width: scale(18),
                  height: scale(18),
                }}
                source={image.point}
                resizeMode="contain"
              />
              <Spacer width={scale(8)} />

              <CustomText
                text={"Use precise location"}
                color={colors.gray200}
                //   fontFam={Inter.medium}
                //   fontWeight="500"
                size={13}
              />
            </View>
          </TouchableOpacity>

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
              marginVertical: verticalScale(10),
            }}
          >
            <CustomText
              text={"Pickup Radius"}
              color={colors.black}
              //   fontFam={Inter.medium}
              // fontWeight="600"
              size={14}
            />
            <CustomInput
              height={29}
              color={colors.gray100}
              width={scale(170)}
              editable={false}
              dropDown={true}
              onShowPassword={() => setIsPickupRadiusModal(true)}
              rightImage={icon.down}
              value={pickupRadius}
              // paddingHorizontal={1}
              placeholder={"$/day"}
              borderRadius={8}
            />
          </View>
          <Spacer height={verticalScale(20)} />

          <CustomRangeSlider
            sliderWidth={300}
            initialValue={0}
            min={0}
            max={100}
            step={100}
            minValue={10}
            maxValue={100}
            onValueChange={(range) => {
              console.log("range", range);
              setMinValue(range.min);
              setMaxValue(range.max);
            }}
          />
          <Spacer height={verticalScale(10)} />
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
          <View
            style={{
              ...AppStyles.justifyRow,
              backgroundColor: colors.white,
              paddingVertical: verticalScale(13),
              paddingHorizontal: scale(15),
              elevation: 5,
              shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              // shadowRadius: 5,
            }}
          >
            <TouchableOpacity
              style={{ width: "30%" }}
              onPress={() => {
                setIsModalVisible(true);
              }}
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
              text={"Your Services"}
            />
            <View style={{ width: "33%" }} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(15),
                paddingBottom: verticalScale(20),
              }}
            >
              <ProfileContainer />

              <CustomText
                text={"Service Coverage"}
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
                  {ServiceCoverage.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          setIsActive={() => {
                            const updates = [...ServiceCoverage];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setServiceCoverage(updates);
                          }}
                          // text1={"On-demand"}
                        />
                        {ServiceCoverage.length != index + 1 ? (
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
                text={"Service Category"}
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
                  {ServiceCategory.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isActive={item.isActive}
                          setIsActive={() => {
                            const updates = [...ServiceCategory];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setServiceCategory(updates);
                          }}
                          // text1={"On-demand"}
                        />
                        {ServiceCategory.length != index + 1 ? (
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

              <View
                style={{
                  ...AppStyles.box,
                  padding: scale(20),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: verticalScale(30),
                }}
              >
                <CustomText
                  text={"Set Time Zone"}
                  color={colors.black}
                  size={13}
                />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(170)}
                  editable={false}
                  dropDown={true}
                  onShowPassword={() => setIsTimeZoneModal(true)}
                  rightImage={icon.down}
                  value={timeZone}
                  // paddingHorizontal={1}
                  placeholder={"$/day"}
                  borderRadius={8}
                />

                {/* <DropDown
                  placeholder={"Eastern Time Zone"}
                  dropWidth={scale(160)}
                  // paddingHorizontal={scale(30)}
                  //   data={data}
                  data={data.map((item, _index) => {
                    return {
                      id: item?.id,
                      label: item?.value,
                      value: item?.value,
                    };
                  })}
                /> */}
              </View>

              <CustomText
                text={"Availability"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  // marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View
                style={{ ...AppStyles.box, marginBottom: verticalScale(30) }}
              >
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  <View style={AppStyles.justifyRow}>
                    <CustomText
                      // color={color || "#666666"}
                      text={"On Demand"}
                      size={13}
                    />
                    <CustomText color={"#666666"} text={"Always"} size={13} />
                  </View>

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
                    <CustomText text={"Scheduled"} size={13} />

                    <Image
                      style={{ width: scale(15), height: scale(15) }}
                      source={icon.up}
                      resizeMode={"contain"}
                    />
                  </View>
                  <Spacer height={verticalScale(5)} />
                  {/* {
                    !isEdit&&(

                      <ScheduleContainer
                      isActive={false}
                      day={"Sun"}
  
                      onEdit={() => {
                        setIsEdit(!isEdit)
                        let newEntry = {
                          day: "Sun",
                          time: "4pm - midnight",
                          startTime: "4pm",
                          endTime: "midnight",
                          isActive: true,
                        };
                      
                        let applySchedule = [newEntry, ...schedule]; // Add the new entry at the start of the array
                      
                        console.log("applySchedule", applySchedule);
                        setSchedule(applySchedule);
                      }}
  
  
                      time={"4pm - midnight"}
                    />

                    )
                  } */}

                  <View
                    style={{
                      ...AppStyles.justifyRow,
                      marginTop: verticalScale(-10),
                    }}
                  >
                    <CustomInput
                      height={29}
                      color={colors.gray100}
                      width={scale(135)}
                      editable={false}
                      dropDown={true}
                      onShowPassword={() => setIsStartTimeModal(true)}
                      rightImage={icon.down}
                      value={startTime}
                      paddingHorizontal={10}
                      borderRadius={8}
                    />

                    <CustomInput
                      height={29}
                      color={colors.gray100}
                      width={scale(135)}
                      editable={false}
                      dropDown={true}
                      onShowPassword={() => setIsTimeModal(true)}
                      rightImage={icon.down}
                      value={endTime}
                      paddingHorizontal={10}
                      borderRadius={8}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      let applySchedule = schedule.map((ite) => {
                        return {
                          ...ite,
                          startTime: ite?.isActive ? startTime : ite.startTime,
                          endTime: ite?.isActive ? endTime : ite.endTime,
                        };
                      });

                      console.log("applySchedule", applySchedule);
                      setSchedule(applySchedule);
                    }}
                    style={{
                      alignSelf: "flex-end",
                      marginVertical: verticalScale(13),
                    }}
                  >
                    <CustomText
                      text={"Apply to selected days"}
                      size={14}
                      color={colors.secondary}/>
                  </TouchableOpacity>
                  <View style={{ marginBottom: verticalScale(13) }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>

                  {schedule.map((item, index) => {
                    return (
                      <>
                        <ScheduleContainer
                          day={item.day}
                          time={`${item.startTime} - ${item.endTime}`}
                          isEditDisable={!item.isActive}
                          setIsActive={() => {
                            const updates = [...schedule];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setSchedule(updates);
                          }}
                          isEditColor={
                            item.isActive ? colors.secondary : colors.gray100
                          }
                          isActive={item.isActive}
                          showLine={true}
                          isEdit={true}
                        />
                      </>
                    );
                  })}

                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      ...AppStyles.justifyRow,
                      marginVertical: verticalScale(13),
                    }}
                  >
                    <CustomText text={"Dedicated"} size={13} />

                    <Image
                      style={{ width: scale(15), height: scale(15) }}
                      source={icon.up}
                      resizeMode={"contain"}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      ...AppStyles.justifyRow,
                    }}
                  >
                    <CustomInput
                      height={29}
                      color={colors.gray100}
                      width={scale(135)}
                      editable={false}
                      dropDown={true}
                      onShowPassword={() => setIsDedicatedStartTimeModal(true)}
                      rightImage={icon.down}
                      value={dedicatedStartTime}
                      paddingHorizontal={10}
                      borderRadius={8}
                    />

                    <CustomInput
                      height={29}
                      color={colors.gray100}
                      width={scale(135)}
                      editable={false}
                      dropDown={true}
                      onShowPassword={() => setIsDedicatedTimeModal(true)}
                      rightImage={icon.down}
                      value={dedicatedEndTime}
                      paddingHorizontal={10}
                      borderRadius={8}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      let applySchedule = Dedicated.map((ite) => {
                        return {
                          ...ite,
                          startTime: ite?.isActive
                            ? dedicatedStartTime
                            : ite.startTime,
                          endTime: ite?.isActive
                            ? dedicatedEndTime
                            : ite.endTime,
                        };
                      });

                      console.log("applySchedule", applySchedule);
                      setDedicated(applySchedule);
                    }}
                    style={{
                      alignSelf: "flex-end",
                      marginVertical: verticalScale(13),
                    }}
                  >
                    <CustomText
                      text={"Apply to selected days"}
                      size={14}
                      color={colors.secondary}
                    />
                  </TouchableOpacity>

                  {Dedicated.map((item, index) => {
                    return (
                      <>
                        <ScheduleContainer
                          day={item.day}
                          time={`${item.startTime} - ${item.endTime}`}
                          isEditDisable={!item.isActive}
                          setIsActive={() => {
                            const updates = [...Dedicated];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setDedicated(updates);
                          }}
                          isEditColor={
                            item.isActive ? colors.secondary : colors.gray100
                          }
                          isActive={item.isActive}
                          showLine={true}
                          isEdit={true}
                        />
                      </>
                    );
                  })}
                </View>
              </View>
              <CustomText
                text={"Move Category"}
                color={colors.black}
                fontFam={Inter.bold}
                fontWeight="700"
                style={{
                  // marginTop: verticalScale(30),
                  marginBottom: verticalScale(15),
                }}
                size={14}
              />
              <View style={{ ...AppStyles.box }}>
                <View style={{ paddingHorizontal: scale(15) }}>
                  <Spacer height={verticalScale(15)} />
                  {MoveCategory.map((item, index) => {
                    return (
                      <>
                        <HorizontalContainerToggle
                          text={item.name}
                          isNext
                          onPressNext={() => {
                            if (item.isActive) {
                              item.onPressNext();
                            }
                          }}
                          isActive={item.isActive}
                          setIsActive={() => {
                            const updates = [...MoveCategory];

                            // Toggle the 'active' property of the item at the specified index
                            updates[index] = {
                              ...updates[index],
                              isActive: !updates[index].isActive,
                            };

                            console.log("updates[index]", updates[index]);

                            setMoveCategory(updates);
                          }}
                          // text1={"On-demand"}
                        />
                        {MoveCategory.length != index + 1 ? (
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
            </View>
          </ScrollView>
        </View>
      </Screen>
      <DropDownModal
        modalVisible={isPickupRadiusModal}
        selectedObject={pickupRadius}
        setSelectedObject={setPickupRadius}
        setModalVisible={setIsPickupRadiusModal}
        data={pickupData}
        title={"Pickup From"}
      />
      <DropDownModal
        modalVisible={isTimeZoneModal}
        selectedObject={timeZone}
        title={"Set Time Zone"}
        setSelectedObject={setTimeZone}
        setModalVisible={setIsTimeZoneModal}
        data={timeZoneData}
      />

      <DropDownModal
        modalVisible={isTimeModal}
        selectedObject={endTime}
        title={"Select Time"}
        setSelectedObject={setEndTime}
        setModalVisible={setIsTimeModal}
        data={timeData}
      />

      <DropDownModal
        modalVisible={isStartTimeModal}
        selectedObject={startTime}
        title={"Select Time"}
        setSelectedObject={setStartTime}
        setModalVisible={setIsStartTimeModal}
        data={timeData}
      />

      <DropDownModal
        modalVisible={isDedicatedTimeModal}
        selectedObject={dedicatedEndTime}
        title={"Select Time"}
        setSelectedObject={setDedicatedEndTime}
        setModalVisible={setIsDedicatedTimeModal}
        data={timeData}
      />

      <DropDownModal
        modalVisible={isDedicatedStartTimeModal}
        selectedObject={dedicatedStartTime}
        title={"Select Time"}
        setSelectedObject={SetDedicatedStartTime}
        setModalVisible={setIsDedicatedStartTimeModal}
        data={timeData}
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
    </>
  );
};

export default DriverService;

const styles = StyleSheet.create({});
