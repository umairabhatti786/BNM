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
import CustomLine from "../../../../components/CustomLine/CustomLine";

  const DriverNeedRide = ({ navigation }) => {
    const [isDatePickerModal,setIsDatePickerModal]=useState(false)
    const [date,setDate]=useState(new Date)
    const [pickUpWithin, setPickUpWithin] = useState("2 Hours");
    const [isPickUpModel, setIsPickUpModel] = useState(false);
    const [time, setTime] = useState("pm");
    const [isTimeModal, setIsTimeModal] = useState(false);
    const [pickupDateAndTime,setPickupDateAndTime]=useState("03-23-24")
    const [isDateAndTime,setIsDateAndTime]=useState("")
    const [toPickupDateAndTime,setToPickupDateAndTime]=useState("03-23-24")
    const [isToDateAndTime,setIsToDateAndTime]=useState("")
    const[signal,setSignal]=useState("Single Stop")
  
    const [ServiceCoverage,setServiceCoverage] = useState([
      { name: "All (Default)", isActive: true },
      { name: "On Demand", isActive: false },
      { name: "Scheduled", isActive: false },
      { name: "Dedicated", isActive: false },
    ])
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
  console.log("toPickupDateAndTime",toPickupDateAndTime)
    const MIN_DEFAULT = 10;
    const MAX_DEFAULT = 100;
    const [minValue, setMinValue] = useState(MIN_DEFAULT);
    const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  
    const [ServiceCoverage1,setServiceCoverage1] = useState([
      { name: "All (Default)", isActive: true },
      { name: "Local", isActive: false },
      { name: "Intercity", isActive: false },
      { name: "Interstate", isActive: false },
    ])
    const [VehicleSize,setVehicleSize] = useState([
      { name: "Standard (2-4 seats)", isActive: true },
      { name: "Large (2-6 seats)", isActive: false },
      { name: "Large (2-6 seats)", isActive: false },
      { name: "+ Premium (Luxury)", isActive: false },
      { name: "Assisted Ride", isActive: false },
    ])
  
    const [pickupDateTimeData, setPickupDateTimeData] = useState([
      { dateTime: "03-23-24", time: "3:24", format: "am", pichup: "6 Hours" },
    ]);
  
    return (
      <>
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
  
            <View style={{ ...AppStyles.box, marginTop: 30,paddingBottom:10 }}>
            <NewText
                        fontWeight="700"
                        color={colors.black}
                        fontFam={Inter.bold}
                        size={15}
                        style={{ marginHorizontal: 15,marginTop:15 }}
                        text={"Date Range"}
                      />
              <View style={{ paddingHorizontal: scale(15),flexDirection:"row",alignItems:"center" ,justifyContent:"space-between",flexWrap:"wrap"}}>

               
              <TouchableOpacity 
                      activeOpacity={0.6}
                      onPress={()=>setIsDateAndTime(true)}
                      style={styles.pickupDateContainer}>
                        <NewText
                          fontWeight="600"
                          color={colors.black}
                          fontFam={Inter.bold}
                          size={15}
                          text={pickupDateAndTime}
                        />
  
                        <Image
                          style={{
                            width: 19,
                            height: 19,
                          }}
                          source={icon.dateClendar}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>

                      <CustomLine
                      width={"5%"}
                      />
                      <TouchableOpacity 
                      activeOpacity={0.6}
                      onPress={()=>setIsToDateAndTime(true)}
                      style={styles.pickupDateContainer}>
                        <NewText
                          fontWeight="600"
                          color={colors.black}
                          fontFam={Inter.bold}
                          size={15}
                          text={toPickupDateAndTime}
                        />
  
                        <Image
                          style={{
                            width: 19,
                            height: 19,
                          }}
                          source={icon.dateClendar}
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
                    backgroundColor={colors.secondary}
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
                  bgColor={ signal=="Single Stop"? colors.secondary+"10":colors.white}
                  borderColor={colors.primary}
                  borderWidth={-1}
                  size={15}
                  onPress={()=>setSignal("Single Stop")}
                  fontWeight={"400"}
                  borderRadius={10}
                  textColor={signal=="Single Stop"?colors.secondary:colors.black40}
                  paddingHorizontal={15}
                />
                <Spacer width={scale(10)} />
                <Button
                  text={"Multiple Stop"}
                  height={35}
                  onPress={()=>setSignal("Multiple Stop")}
  
                  bgColor={ signal=="Multiple Stop"? colors.secondary+"10":colors.white}
                  borderColor={colors.primary}
                  borderWidth={-1}
                  size={15}
                  fontWeight={"400"}
                  borderRadius={10}
                  textColor={signal=="Multiple Stop"?colors.secondary:colors.black40}
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
  
                        }}                    />
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
  
  
        <CategoryBottomTab
          label1={"Save"}
          // onLabel2={()=>setIsPostedModal(true)}
          onLabel1={()=>setIsSavedModal(true)}
  
          label2={"Post"}
          label3={"Clear All"}
          color={colors.primary}
        />
  
        
  
        <DatePickerModal
          mainColor={colors.primary}
          modalVisible={isDatePickerModal}
          selectedObject={date}
          title={"To Date"}
          setSelectedObject={setDate}
          setModalVisible={setIsDatePickerModal}
        />
  
  <DropDownModal
          mainColor={colors.primary}
          modalVisible={isTimeModal}
          selectedObject={time}
          title={"Time"}
          setSelectedObject={setTime}
          setModalVisible={setIsTimeModal}
          data={timeData}
        />
  
        <DropDownModal
          mainColor={colors.primary}
          modalVisible={isPickUpModel}
          selectedObject={pickUpWithin}
          title={"Pick Up Within"}
          setSelectedObject={setPickUpWithin}
          setModalVisible={setIsPickUpModel}
          data={pickUpWithinData}
        />
         <CustomCalendar
        modalVisible={isDateAndTime}
        date={pickupDateAndTime}
        mainColor={colors.secondary}
        setDate={setPickupDateAndTime}
        setModalVisible={setIsDateAndTime}
        />
          <CustomCalendar
        modalVisible={isToDateAndTime}
        date={toPickupDateAndTime}
        title={"To Date"}
        mainColor={colors.secondary}
        setDate={setToPickupDateAndTime}
        setModalVisible={setIsToDateAndTime}
        />
           {/* <CustomCalendar
        modalVisible={isToModalVisible}
        date={toDate}
        setDate={setToDate}
        setModalVisible={setIsToModalVisible}
        /> */}
      </>
    );
  };
  
  export default DriverNeedRide;
  
  const styles = StyleSheet.create({
    pickupDateContainer: {
      width: "45%",
      height: 33,
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
  