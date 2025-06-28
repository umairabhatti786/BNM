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
  import { windowWidth } from "../../../../utils/Commons";
  import DropDownModal from "../../../../components/DropDownModal";
  import CustomCalendar from "../../../../components/CustomCalendar";
import CustomLine from "../../../../components/CustomLine/CustomLine";
  
  const DriverDeliveryServices = ({ navigation }) => {
    const [standardSize, setStandardSize] = useState("SUV");
    const [isStandardModal, setIsStandardModal] = useState(false);
    const [largeSize, setLargeSize] = useState("n/a");
    const [isLargedModal, setIsLargeModal] = useState(false);
    const [xLargeSize, setXLargeSize] = useState("n/a");
    const [isXLargedModal, setIsXLargeModal] = useState(false);
    const [serviceDescription, setServiceDescription] = useState("Moving");
    const [serviceDescriptiondModal, setServiceDescriptionModal] =
      useState(false);
    const [laodingData, setLaodingData] = useState("Flat (Default)");
    const [laodingDatadModal, setLaodingDataModal] = useState(false);
    const [unLaoding, setUnLaoding] = useState("Flat (Default)");
    const [unLaodingDatadModal, setUnLaodingDataModal] = useState(false);
    const [pickUpWithin, setPickUpWithin] = useState("2 Hours");
    const [isPickUpModel, setIsPickUpModel] = useState(false);
    const [time, setTime] = useState("pm");
    const [isTimeModal, setIsTimeModal] = useState(false);
    const[signal,setSignal]=useState("Single Stop")
    const [isToDateAndTime,setIsToDateAndTime]=useState("")
    const [pickupDateAndTime,setPickupDateAndTime]=useState("03-23-24")
    const [isDateAndTime,setIsDateAndTime]=useState("")
    const [toPickupDateAndTime,setToPickupDateAndTime]=useState("03-23-24")
  
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
    const laodingArray = [
      "Flat (Default)",
      "Elevator",
      "Stairs (Medium Weight)",
      "Stairs (Heavy Weight)",
    ];
  
    const unLaodingArray = [
      "Flat (Default)",
      "Elevator",
      "Stairs (Medium Weight)",
      "Stairs (Heavy Weight)",
    ];
    const serviceDescriptionData = [
      "All",
      "Moving",
      "Retail Store",
      "Wholesale Store",
      "Furniture",
      "Office Moving",
      "Electronics & Tech Service",
      "Auto Parts",
      "Hardware/UEM/Industrial",
      "Building Materials",
      "E-Commerce",
      "Piano",
      "Heavy Category",
      "Medical Courier",
    ];
    const standardSizeData = ["All", "Car", "SUV", "Mini-Van", "n/a"];
  
    const largeSizeData = [
      "All",
      "Pickup Truck",
      "Cargo Van",
      "Sprinter Van",
      "n/a",
    ];
    const [pickupDateTimeData, setPickupDateTimeData] = useState([
      { dateTime: "03-23-24", time: "3:24", format: "am", pichup: "6 Hours" },
    ]);
  
    const xLargeSizeData = [
      "All",
      "10-12 ft Box Truck",
      "14-18 ft Box Truck",
      "20-24 ft Box Truck",
      "26 ft Box Truck",
      "n/a",
    ];
    const [ServiceCoverage, setServiceCoverage] = useState([
      { name: "All (Default)", isActive: true },
      { name: "On Demand", isActive: false },
      { name: "Scheduled", isActive: false },
      { name: "Dedicated", isActive: false },
    ]);
  
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
    const [LiftingCapacity, setLiftingCapacity] = useState([
      { name: "Light Weight (<20lbs)", isActive: true },
      { name: "Medium Weight (20 - 100 lbs)", isActive: false },
      { name: "Heavy Weight (>100 lbs)", isActive: false },
    ]);
    const [SizeCapacity, setSizeCapacity] = useState([
      { name: "Few Things", isActive: true },
      { name: "Small (< 1000 sq ft)", isActive: false },
      { name: "Medium (1000-3000 sq ft)", isActive: false },
      { name: "large (> 3000 sq ft)", isActive: false },
    ]);
  
    const [HomeMovingCapacity, setHomeMovingCapacity] = useState([
      { name: "Studio", isActive: true },
      { name: "1 Bedroom Home", isActive: false },
      { name: "2 Bedroom Home", isActive: false },
      { name: "3 Bedroom Home", isActive: false },
      { name: "4+ Bedroom Home", isActive: false },
    ]);
  
    const [HelpingHands, setHelpingHands] = useState([
      { name: "Lifting/Loading/Unloading", isActive: true },
      { name: "Boxing/Unboxing", isActive: false },
      { name: "Assembling/Disassembling", isActive: false },
      { name: "Installation/Dismantling", isActive: false },
    ]);
  
    const [Equipment, setEquipment] = useState([
      { name: "4-Wheel Dolly", isActive: true },
      { name: "Appliance Dolly", isActive: false },
      { name: "Hand Truck Dolly", isActive: false },
      { name: "Loading Ramp", isActive: false },
      { name: "Liftgate", isActive: false },
      { name: "Material Lift", isActive: false },
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
  
            <View>
              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{ marginTop: 30, marginBottom: 5 }}
                text={"Vehicle Size"}
              />
  
              <View style={{ ...AppStyles.justifyRow, marginBottom: 10 }}>
                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={windowWidth / 3.5}
                  heading={"Standard"}
                  headingWeight={"500"}
                  editable={false}
                  dropDown={true}
                  onShowPassword={() => setIsStandardModal(true)}
                  rightImage={icon.down}
                  value={standardSize}
                  fontWeight={"600"}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
  
                <CustomInput
                  height={29}
                  color={colors.gray100}
                  heading={"Large"}
                  headingWeight={"500"}
                  width={windowWidth / 3.5}
                  editable={false}
                  dropDown={true}
                  onShowPassword={() => setIsLargeModal(true)}
                  rightImage={icon.down}
                  value={largeSize}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
  
                <CustomInput
                  height={29}
                  headingSize={14}
                  color={colors.gray100}
                  width={windowWidth / 3.5}
                  editable={false}
                  heading={"X-Large"}
                  headingWeight={"500"}
                  dropDown={true}
                  onShowPassword={() => setIsXLargeModal(true)}
                  rightImage={icon.down}
                  value={xLargeSize}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
              </View>
  
              <Spacer height={verticalScale(5)} />
  
              <CustomInput
                height={29}
                color={colors.gray100}
                editable={false}
                heading={"Service Description"}
                dropDown={true}
                onShowPassword={() => setServiceDescriptionModal(true)}
                fontWeight={"600"}
                rightImage={icon.down}
                value={serviceDescription}
                paddingHorizontal={10}
                rightImageWidth={15}
                rightImageHeight={15}
                // placeholder={"$/day"}
                borderRadius={8}
              />
            </View>
  
            <NewText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={16}
              style={{ marginTop: 30, marginBottom: 15 }}
              text={"Lifting/Loading/Unloading Capacity"}
            />
            <View style={{ ...AppStyles.box }}>
              <View style={{ paddingHorizontal: scale(15) }}>
                <Spacer height={verticalScale(15)} />
                {LiftingCapacity?.map((item, index) => {
                  return (
                    <>
                      <HorizontalContainerToggle
                        text={item.name}
                        isActive={item.isActive}
                        setIsActive={() => {
                          const updates = [...LiftingCapacity];
  
                          // Toggle the 'active' property of the item at the specified index
                          updates[index] = {
                            ...updates[index],
                            isActive: !updates[index].isActive,
                          };
  
                          console.log("updates[index]", updates[index]);
  
                          setLiftingCapacity(updates);
                        }}
                      />
                      {LiftingCapacity.length != index + 1 ? (
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
              text={"Size Capacity"}
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
  
            <NewText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={16}
              style={{ marginTop: 30, marginBottom: 15 }}
              text={"Home Moving Capacity"}
            />
            <View style={{ ...AppStyles.box }}>
              <View style={{ paddingHorizontal: scale(15) }}>
                <Spacer height={verticalScale(15)} />
                {HomeMovingCapacity.map((item, index) => {
                  return (
                    <>
                      <HorizontalContainerToggle
                        text={item.name}
                        isActive={item.isActive}
                        setIsActive={() => {
                          const updates = [...HomeMovingCapacity];
  
                          // Toggle the 'active' property of the item at the specified index
                          updates[index] = {
                            ...updates[index],
                            isActive: !updates[index].isActive,
                          };
  
                          console.log("updates[index]", updates[index]);
  
                          setHomeMovingCapacity(updates);
                        }}
                      />
                      {HomeMovingCapacity.length != index + 1 ? (
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
  
            <View>
              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{ marginTop: 30, marginBottom: 5 }}
                text={"Loading/Unloading"}
              />
  
              <View style={{ ...AppStyles.justifyRow, marginBottom: 10 }}>
                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={windowWidth / 2.3}
                  heading={"Loading"}
                  headingWeight={"500"}
                  editable={false}
                  dropDown={true}
                  onShowPassword={() => setLaodingDataModal(true)}
                  rightImage={icon.down}
                  value={laodingData}
                  fontWeight={"600"}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
  
                <CustomInput
                  height={29}
                  color={colors.gray100}
                  heading={"Unloading"}
                  headingWeight={"500"}
                  width={windowWidth / 2.3}
                  editable={false}
                  dropDown={true}
                  onShowPassword={() => setUnLaodingDataModal(true)}
                  rightImage={icon.down}
                  value={unLaoding}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
              </View>
            </View>
  
            <NewText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={16}
              style={{ marginTop: 30, marginBottom: 15 }}
              text={"Helping Hands"}
            />
            <View style={{ ...AppStyles.box }}>
              <View style={{ paddingHorizontal: scale(15) }}>
                <Spacer height={verticalScale(15)} />
                {HelpingHands.map((item, index) => {
                  return (
                    <>
                      <HorizontalContainerToggle
                        text={item.name}
                        isActive={item.isActive}
                        setIsActive={() => {
                          const updates = [...HelpingHands];
  
                          // Toggle the 'active' property of the item at the specified index
                          updates[index] = {
                            ...updates[index],
                            isActive: !updates[index].isActive,
                          };
  
                          console.log("updates[index]", updates[index]);
  
                          setHelpingHands(updates);
                        }}
                      />
                      {HelpingHands.length != index + 1 ? (
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
              text={"Equipment"}
            />
            <View style={{ ...AppStyles.box }}>
              <View style={{ paddingHorizontal: scale(15) }}>
                <Spacer height={verticalScale(15)} />
                {Equipment.map((item, index) => {
                  return (
                    <>
                      <HorizontalContainerToggle
                        text={item.name}
                        isActive={item.isActive}
                        setIsActive={() => {
                          const updates = [...Equipment];
  
                          // Toggle the 'active' property of the item at the specified index
                          updates[index] = {
                            ...updates[index],
                            isActive: !updates[index].isActive,
                          };
  
                          console.log("updates[index]", updates[index]);
  
                          setEquipment(updates);
  
                        }}
                      />
                      {Equipment.length != index + 1 ? (
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
        
  
        <DropDownModal
          modalVisible={isStandardModal}
          selectedObject={standardSize}
          title={"Standard"}
          setSelectedObject={setStandardSize}
          setModalVisible={setIsStandardModal}
          data={standardSizeData}
        />
  
        <DropDownModal
          modalVisible={isXLargedModal}
          selectedObject={xLargeSize}
          title={"X-Large"}
          setSelectedObject={setXLargeSize}
          setModalVisible={setIsXLargeModal}
          data={xLargeSizeData}
        />
  
        <DropDownModal
          modalVisible={isLargedModal}
          selectedObject={largeSize}
          title={"Large"}
          setSelectedObject={setLargeSize}
          setModalVisible={setIsLargeModal}
          data={largeSizeData}
        />
  
        <DropDownModal
        //   mainColor={colors.primary}
          modalVisible={serviceDescriptiondModal}
          selectedObject={serviceDescription}
          title={"Service Description"}
          setSelectedObject={setServiceDescription}
          setModalVisible={setServiceDescriptionModal}
          data={serviceDescriptionData}
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
  
        <DropDownModal
          mainColor={colors.primary}
          modalVisible={laodingDatadModal}
          selectedObject={laodingData}
          title={"Loading"}
          setSelectedObject={setLaodingData}
          setModalVisible={setLaodingDataModal}
          data={laodingArray}
        />
  
        <DropDownModal
          mainColor={colors.primary}
          modalVisible={unLaodingDatadModal}
          selectedObject={unLaoding}
          title={"Unloading"}
          setSelectedObject={setUnLaoding}
          setModalVisible={setUnLaodingDataModal}
          data={unLaodingArray}
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
      </>
    );
  };
  
  export default DriverDeliveryServices;
  
  const styles = StyleSheet.create({
    pickupDateContainer: {
      width: "45%",
      height: 35,
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
  