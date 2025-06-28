import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import DashedLine from "react-native-dashed-line";
import HorizontalContainerToggle from "../../../../components/HorizontalContainerToggle";
import CustomInput from "../../../../components/CustomInput";
import Button from "../../../../components/Button";
import CustomRangeSlider from "../../../../components/RangeSlider";
import DatePickerModal from "../../../../components/DatePickerModal";
import DropDownModal from "../../../../components/DropDownModal";
import CustomCalendar from "../../../../components/CustomCalendar";
import CategoryBottomTab from "../../../../components/CategoryBottomTab";
import { postService } from "../../../../services/postService";

const NeedRide = ({ navigation, onPostSuccess, route }, ref) => {
  const [isDatePickerModal, setIsDatePickerModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [pickUpWithin, setPickUpWithin] = useState("2 Hours");
  const [isPickUpModel, setIsPickUpModel] = useState(false);
  const [time, setTime] = useState("pm");
  const [isTimeModal, setIsTimeModal] = useState(false);
  const [pickupDateAndTime, setPickupDateAndTime] = useState("");
  const [isDateAndTime, setIsDateAndTime] = useState("");
  const [signal, setSignal] = useState("Single Stop");
  const [selectedPicker, setSelectedPicker] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postId, setPostId] = useState(null);

  const [ServiceCoverage, setServiceCoverage] = useState([
    { name: "All (Default)", isActive: true },
    { name: "On Demand", isActive: false },
    { name: "Scheduled", isActive: false },
    { name: "Dedicated", isActive: false },
  ]);
  const pickUpWithinData = [
    "1 Hour",
    "2 Hours",
    "3 Hours",
    "4 Hours",
    "5 Hours",
    "6 Hours",
    "7 Hours",
    "8 Hours",
  ];
  const timeData = ["am", "pm"];

  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 100;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);

  const [ServiceCoverage1, setServiceCoverage1] = useState([
    { name: "All (Default)", isActive: true },
    { name: "Local", isActive: false },
    { name: "Intercity", isActive: false },
    { name: "Interstate", isActive: false },
  ]);
  const [VehicleSize, setVehicleSize] = useState([
    { name: "Standard (2-4 seats)", isActive: true },
    { name: "Large (2-6 seats)", isActive: false },
    { name: "Large (2-6 seats)", isActive: false },
    { name: "+ Premium (Luxury)", isActive: false },
    { name: "Assisted Ride", isActive: false },
  ]);

  const [pickupDateTimeData, setPickupDateTimeData] = useState([
    { dateTime: "03-23-24", time: "3:24", format: "am", pichup: "6 Hours" },
  ]);

  const setInitialData = (postData) => {
    setPostId(postData._id);
    if (postData.pickupDateTime) {
      setPickupDateTimeData(
        postData.pickupDateTime.map((item) => ({
          dateTime: item.dateTime,
          time: item.time,
          format: item.format,
          pichup: item.pickupWithin,
        }))
      );
    }

    if (postData.pickupRadius) {
      setMinValue(postData.pickupRadius.min);
      setMaxValue(postData.pickupRadius.max);
    }

    if (postData.serviceCoverage) {
      setServiceCoverage1(
        ServiceCoverage1.map((item) => ({
          ...item,
          isActive: postData.serviceCoverage.includes(item.name),
        }))
      );
    }

    if (postData.serviceCategory) {
      setServiceCoverage(
        ServiceCoverage.map((item) => ({
          ...item,
          isActive: postData.serviceCategory.includes(item.name),
        }))
      );
    }

    if (postData.stopType) {
      setSignal(postData.stopType);
    }

    if (postData.vehicleSize) {
      setVehicleSize(
        VehicleSize.map((item) => ({
          ...item,
          isActive: postData.vehicleSize.includes(item.name),
        }))
      );
    }
  };

  const handleSubmit = async (rideData) => {
    setIsLoading(true);
    setError(null);

    try {
      let response;
      if (postId) {
        // Update existing post
        response = await postService.updateRidePost(postId, rideData);
      } else {
        // Create new post
        response = await postService.saveRidePost(rideData);
      }
      onPostSuccess(response);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save ride post");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    console.log("Save button clicked in NeedRide");
    try {
      const rideData = {
        pickupDateTime: pickupDateTimeData.map((item) => ({
          dateTime: item.dateTime,
          format: item.format,
          pickupWithin: item.pichup,
          time: item.time,
        })),
        pickupRadius: {
          min: minValue,
          max: maxValue,
        },
        serviceCoverage: ServiceCoverage1.filter((item) => item.isActive).map(
          (item) => item.name
        ),
        serviceCategory: ServiceCoverage.filter((item) => item.isActive).map(
          (item) => item.name
        ),
        stopType: signal,
        vehicleSize: VehicleSize.filter((item) => item.isActive).map(
          (item) => item.name
        ),
      };

      console.log("Submitting ride data:", rideData);
      await handleSubmit(rideData);
    } catch (error) {
      console.error("Error in handleSave:", error);
    }
  };

  // Expose the save and setInitialData functions to the parent
  useImperativeHandle(ref, () => ({
    save: handleSave,
    setInitialData,
  }));

  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      contentContainerStyle={{ backgroundColor: colors.white }}
    >
      <View style={{ backgroundColor: colors.white, padding: 15 }}>
        <Spacer height={5} />
        <NewText
          fontWeight="700"
          color={colors.black}
          fontFam={Inter.bold}
          size={16}
          style={{ marginVertical: 15 }}
          text={"Service Category"}
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

        <View style={{ ...AppStyles.box, marginTop: 30 }}>
          <View style={{ paddingHorizontal: scale(15) }}>
            <Spacer height={verticalScale(15)} />
            {pickupDateTimeData.map((item, index) => {
              return (
                <View>
                  <NewText
                    fontWeight="700"
                    color={colors.black}
                    fontFam={Inter.bold}
                    size={15}
                    style={{ marginBottom: 15 }}
                    text={"Pick Up Date and Time"}
                  />
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      setSelectedPicker(index);
                      setIsDateAndTime(true);
                    }}
                    style={styles.pickupDateContainer}
                  >
                    <NewText
                      fontWeight="600"
                      color={colors.black}
                      fontFam={Inter.bold}
                      size={16}
                      text={item.dateTime}
                    />

                    <Image
                      style={{
                        width: 21,
                        height: 21,
                      }}
                      source={icon.addclendar}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View style={AppStyles.justifyRow}>
                    <CustomInput
                      height={29}
                      color={colors.gray100}
                      width={scale(140)}
                      placeholder={"Time: Ex"}
                      keyboard={"numeric"}
                      value={item.time}
                      maxLength={5}
                      onChangeText={(text) => {
                        // Remove any characters that are not digits or colon
                        let filteredText = text.replace(/[^0-9:]/g, "");

                        // Automatically insert colon after HH
                        if (
                          filteredText.length === 2 &&
                          !filteredText.includes(":")
                        ) {
                          filteredText = `${filteredText}:`;
                        }

                        // Only allow input up to 5 characters (HH:MM)
                        if (filteredText.length <= 5) {
                          setPickupDateTimeData((prevData) =>
                            prevData.map((item, ind) =>
                              ind === index
                                ? { ...item, time: filteredText }
                                : item
                            )
                          );
                        }
                      }}
                      fontWeight={"600"}
                      rightImageWidth={15}
                      rightImageHeight={15}
                      borderRadius={8}
                    />

                    <CustomInput
                      height={29}
                      color={colors.gray100}
                      width={scale(140)}
                      editable={false}
                      dropDown={true}
                      onShowPassword={() => {
                        setSelectedPicker(index);
                        setIsTimeModal(true);
                      }}
                      rightImage={icon.down}
                      value={item.format}
                      fontWeight={"600"}
                      paddingHorizontal={10}
                      rightImageWidth={15}
                      rightImageHeight={15}
                      borderRadius={8}
                    />
                  </View>

                  <Spacer height={verticalScale(10)} />

                  <CustomInput
                    height={29}
                    color={colors.gray100}
                    editable={false}
                    dropDown={true}
                    onShowPassword={() => {
                      setSelectedPicker(index);
                      setIsPickUpModel(true);
                    }}
                    heading={"Pick Up within"}
                    // onShowPassword={()=>setIsVehicleTypeModal(true)}
                    fontWeight={"600"}
                    rightImage={icon.down}
                    value={item?.pichup}
                    paddingHorizontal={10}
                    rightImageWidth={15}
                    rightImageHeight={15}
                    // placeholder={"$/day"}
                    borderRadius={8}
                  />

                  <View style={{ marginVertical: verticalScale(18) }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>
                </View>
              );
            })}

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                let data = [...pickupDateTimeData];
                data.push({
                  dateTime: "03-23-24",
                  time: "3:24",
                  format: "am",
                  pichup: "6 Hours",
                });

                setPickupDateTimeData(data);
              }}
              style={{
                ...AppStyles.row,
                alignSelf: "flex-end",
                paddingBottom: verticalScale(10),
              }}
            >
              <NewText
                text={"Add More"}
                color={colors.gray100}
                fontFam={Inter.medium}
                size={15}
              />
              <Spacer width={scale(10)} />
              <Image
                style={{
                  width: scale(22),
                  height: scale(22),
                }}
                source={icon.addclendar}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...AppStyles.box, marginTop: 30 }}>
          <View style={{ padding: scale(15) }}>
            <NewText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={15}
              text={"Pickup Radius"}
            />
            <View style={{ marginTop: 30, marginBottom: 20 }}>
              <CustomRangeSlider
                sliderWidth={200}
                initialValue={20}
                min={0}
                max={50}
                step={100}
                backgroundColor={colors.primary}
                minValue={10}
                maxValue={50}
                onValueChange={(range) => {
                  console.log("range", range);
                  setMinValue(range.min);
                  setMaxValue(range.max);
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            ...AppStyles.box,
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: scale(15),
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <NewText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={15}
            text={"Stop"}
          />
          <View
            style={{
              ...AppStyles.row,
              alignSelf: "flex-end",
            }}
          >
            <Button
              text={"Single Stop"}
              height={35}
              bgColor={
                signal == "Single Stop" ? "#12D1AF" + "10" : colors.white
              }
              borderColor={colors.primary}
              borderWidth={-1}
              size={15}
              onPress={() => setSignal("Single Stop")}
              fontWeight={"400"}
              borderRadius={10}
              textColor={
                signal == "Single Stop" ? colors.primary : colors.black40
              }
              paddingHorizontal={15}
            />
            <Spacer width={scale(10)} />
            <Button
              text={"Multiple Stop"}
              height={35}
              onPress={() => setSignal("Multiple Stop")}
              bgColor={
                signal == "Multiple Stop" ? "#12D1AF" + "10" : colors.white
              }
              borderColor={colors.primary}
              borderWidth={-1}
              size={15}
              fontWeight={"400"}
              borderRadius={10}
              textColor={
                signal == "Multiple Stop" ? colors.primary : colors.black40
              }
              paddingHorizontal={15}
            />
          </View>
        </View>

        <NewText
          fontWeight="700"
          color={colors.black}
          fontFam={Inter.bold}
          size={16}
          style={{ marginTop: 30, marginBottom: 15 }}
          text={"Service Category"}
        />
        <View style={{ ...AppStyles.box }}>
          <View style={{ paddingHorizontal: scale(15) }}>
            <Spacer height={verticalScale(15)} />
            {ServiceCoverage1.map((item, index) => {
              return (
                <>
                  <HorizontalContainerToggle
                    text={item.name}
                    isActive={item.isActive}
                    setIsActive={() => {
                      const updates = [...ServiceCoverage1];

                      // Toggle the 'active' property of the item at the specified index
                      updates[index] = {
                        ...updates[index],
                        isActive: !updates[index].isActive,
                      };

                      console.log("updates[index]", updates[index]);

                      setServiceCoverage1(updates);
                    }}
                  />
                  {ServiceCoverage1.length != index + 1 ? (
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

        <NewText
          fontWeight="700"
          color={colors.black}
          fontFam={Inter.bold}
          size={16}
          style={{ marginTop: 30, marginBottom: 15 }}
          text={"Vehicle Size"}
        />
        <View style={{ ...AppStyles.box }}>
          <View style={{ paddingHorizontal: scale(15) }}>
            <Spacer height={verticalScale(15)} />
            {VehicleSize.map((item, index) => {
              return (
                <>
                  <HorizontalContainerToggle
                    text={item.name}
                    isActive={item.isActive}
                    setIsActive={() => {
                      const updates = [...VehicleSize];

                      // Toggle the 'active' property of the item at the specified index
                      updates[index] = {
                        ...updates[index],
                        isActive: !updates[index].isActive,
                      };

                      console.log("updates[index]", updates[index]);

                      setVehicleSize(updates);
                    }}
                  />
                  {VehicleSize.length != index + 1 ? (
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

        <Spacer height={150} />
      </View>
    </ScrollView>
  );
};

export default forwardRef(NeedRide);

const styles = StyleSheet.create({
  pickupDateContainer: {
    width: "100%",
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.black40,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
