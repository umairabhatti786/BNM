import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { CustomHeader } from "../../../../components/CustomHeader";
import { Spacer } from "../../../../components/Spacer";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import DashedLine from "react-native-dashed-line";
import CustomInput from "../../../../components/CustomInput";
import { windowWidth } from "../../../../utils/Commons";
import Button from "../../../../components/Button";
import Days from "../../../../components/Days";
import DropDownModal from "../../../../components/DropDownModal";
import DedicatedServiceOfferModal from "./DedicatedServiceOfferModal";
import DedicatedAgreementModal from "./DedicatedAgreementModal";
import ThankyouModal from "../DriverSearch/ThankyouModal";
import AddPaymentMethodModal from "../DriverSearch/AddPaymentMethodModal";
import PaymentMethodModal from "../DriverSearch/PaymentMethodModal";
import PickupDropInstructionModal from "../DriverSearch/PickupDropInstructionModal";

const DedicatedService = ({ navigation, route }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [paymentOptionsModal, setPaymentOptionsodal] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState("Pay full now");
  const [isAddPaymentMethodVisible, steIsAddPaymentMethodVisible] =
    useState(false);
  const [serviceOfferModal, setServiceOfferModal] = useState(false);
  const [isThankyouModal, setIsThankyouModal] = useState(false);
  const [isRateExperienceModal, setIsRateExperienceModal] = useState(false);
  const [isDedicatedAgreement, setIsDedicatedAgreement] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [isPickupDropInstructionModal, setIsPickupDropInstructionModal] =
    useState(false);
  const [numberOfDays, setNumberOfDays] = useState("4");
  const [serviceslength, setServiceslength] = useState("16");

  console.log("selectedDays", selectedDays);

  const paymentOptionsData = ["Pay full now", "Pay weekly"];

  return (
    <>
      <Screen
        backgroundColor={colors.white}
        topBarColor={colors.white}
        statusBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <CustomHeader label={"Dedicated Service"} navigation={navigation} />
        <ScrollView
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
          style={{
            backgroundColor: colors.white,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <NewText
            text={"Select Possible Service Days"}
            color={colors.black}
            fontFam={Inter.bold}
            fontWeight="700"
            size={16}
          />
          <View style={{ ...AppStyles.justifyRow, marginVertical: 15 }}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((item, index) => {
              return (
                <Days
                  day={item}
                  selectedDays={selectedDays}
                  onPress={() => {
                    let daysData = [...selectedDays];
                    let find = daysData.findIndex((it) => it === item); // Fix the syntax here

                    if (find === -1) {
                      // If the item is not found in the selectedDays array, add it
                      daysData.push(item);
                    } else {
                      // If the item is already selected, remove it
                      daysData = daysData.filter((it) => it !== item);
                    }

                    // Update the selectedDays state
                    setSelectedDays(daysData);
                  }}
                />
              );
            })}
          </View>

          <View style={{ marginVertical: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
            <NewText
              text={"Number of Days / Week"}
              color={colors.gray200}
              fontFam={Inter.bold}
              // fontWeight="00"
              size={16}
            />

            <View
              style={{
                ...AppStyles.justifyRow,
                ...styles.daysContainer,
              }}
            >
              <TextInput
                value={numberOfDays}
                maxLength={2}
                onChangeText={(text) => {
                  setNumberOfDays(text);
                }}
                style={{
                  color: colors.black,
                  fontFamily: "700",
                  fontSize: 16,
                  fontFamily: Inter.bold,
                  height: 48,
                }}
                keyboardType="numeric"
              />
              <NewText
                text={"days"}
                color={colors.gray}
                fontWeight="400"
                size={14}
              />
            </View>
          </View>

          <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
            <NewText
              text={"Length of Service"}
              color={colors.gray200}
              fontFam={Inter.bold}
              // fontWeight="00"
              size={16}
            />

            <View
              style={{
                ...AppStyles.justifyRow,
                ...styles.daysContainer,
              }}
            >
              <TextInput
                value={serviceslength}
                maxLength={2}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setServiceslength(text);
                }}
                style={{
                  color: colors.black,
                  fontFamily: "700",
                  fontSize: 16,
                  fontFamily: Inter.bold,
                  height: 48,
                }}
              />
              <NewText
                text={"weeks"}
                color={colors.gray}
                fontWeight="400"
                size={14}
              />
            </View>
          </View>

          <View style={{ marginVertical: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <HorizontalContainer
            text={"Cost Per Day"}
            color={colors.gray200}
            weight={"500"}
            size={16}
            size1={18}
            color1={colors.black}
            weight1={"400"}
            text1={"$100/day"}
          />
          <View style={{ marginVertical: 20 }}>
            <HorizontalContainer
              text={"Total Cost"}
              color={colors.gray200}
              weight={"500"}
              size={16}
              size1={18}
              color1={colors.black}
              weight1={"400"}
              text1={"$6400"}
            />
          </View>

          <View style={{ marginBottom: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <View style={AppStyles.justifyRow}>
            <NewText
              text={"Payment Options"}
              color={colors.gray200}
              size={16}
            />
            <CustomInput
              height={29}
              headingSize={14}
              color={colors.gray100}
              width={windowWidth / 2.7}
              editable={false}
              heading={""}
              headingWeight={"500"}
              dropDown={true}
              onShowPassword={() => setPaymentOptionsodal(true)}
              rightImage={icon.down}
              value={paymentOptions}
              fontWeight={"600"}
              paddingHorizontal={10}
              rightImageWidth={15}
              rightImageHeight={15}
              // placeholder={"$/day"}
              borderRadius={8}
            />
          </View>

          <NewText
            text={
              "Note: Your mover wil be paid for only completed service every Monday."
            }
            color={colors.gray}
            style={{ marginVertical: 15 }}
            fontWeight={"400"}
            lineHeight={25}
            size={16}
          />

          <View style={{ marginBottom: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>
          <View style={{ marginBottom: verticalScale(30), marginTop: 20 }}>
            <HorizontalContainer
              text={"Due Today"}
              color={colors.gray200}
              weight={"500"}
              size={16}
              size1={18}
              color1={colors.black}
              weight1={"500"}
              text1={"$400"}
            />
          </View>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 80,
            width: "100%",
            backgroundColor: colors.white,
            elevation: 5,
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            paddingHorizontal: 15,
            ...AppStyles.justifyRow,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              ...AppStyles.row,
              //   marginTop: 15,
            }}
          >
            <Button
              text={"Clear"}
              height={33}
              onPress={() => {
                setSelectedDays([]);
                setNumberOfDays("")
                setServiceslength("")
              }}
              bgColor={"#EEEEEE"}
              borderColor={"transparent"}
              borderWidth={1}
              size={16}
              borderRadius={10}
              textColor={colors.gray}
              paddingHorizontal={20}
            />
            <Spacer width={scale(10)} />

            <Button
              text={"Preview"}
              height={33}
              bgColor={"#EEEEEE"}
              borderColor={"transparent"}
              borderWidth={1}
              size={16}
              borderRadius={10}
              textColor={colors.gray}
              paddingHorizontal={20}
            />
          </View>
          <Button
            text={"Confirmed"}
            height={33}
            // onPress={()=>navigation.navigate("ManageOrders")}
            onPress={() => {
              setIsDedicatedAgreement(true);
            }}
            bgColor={colors.primary}
            borderColor={"transparent"}
            borderWidth={1}
            size={16}
            borderRadius={10}
            textColor={colors.white}
            paddingHorizontal={20}
          />
        </View>
      </Screen>
      <DropDownModal
        mainColor={colors.primary}
        modalVisible={paymentOptionsModal}
        selectedObject={paymentOptions}
        title={"Payment Options"}
        setSelectedObject={setPaymentOptions}
        setModalVisible={setPaymentOptionsodal}
        data={paymentOptionsData}
      />
      <DedicatedServiceOfferModal
        mainColor={colors.primary}
        modalVisible={serviceOfferModal}
        selectedObject={paymentOptions}
        title={"Dedicated Service Offer"}
        navigation={navigation}
        setIsThankyouModal={setIsThankyouModal}
        setSelectedObject={setPaymentOptions}
        setModalVisible={setServiceOfferModal}
        data={paymentOptionsData}
      />

      <DedicatedAgreementModal
        onBook={() => {
          setIsDedicatedAgreement(false);
          setTimeout(() => {
            setIsPaymentModal(true);
          }, 1000);
        }}
        modalVisible={isDedicatedAgreement}
        setModalVisible={setIsDedicatedAgreement}
      />

      <PaymentMethodModal
        onPressCard={() => {
          setIsPaymentModal(false);
          setTimeout(() => {
            steIsAddPaymentMethodVisible(true);
          }, 1000);
        }}
        modalVisible={isPaymentModal}
        setModalVisible={setIsPaymentModal}
      />

      <PickupDropInstructionModal
        mainColor={colors.primary}
        modalVisible={isPickupDropInstructionModal}
        navigation={navigation}
        onDonePress={() => {
          setIsPickupDropInstructionModal(false);
          setTimeout(() => {
            setIsThankyouModal(true);
          }, 1000);
        }}
        setIsRateExperienceModal={setIsRateExperienceModal}
        setModalVisible={setIsPickupDropInstructionModal}
      />

      <ThankyouModal
        mainColor={colors.primary}
        modalVisible={isThankyouModal}
        navigation={navigation}
        setIsRateExperienceModal={setIsRateExperienceModal}
        setModalVisible={setIsThankyouModal}
      />

      <AddPaymentMethodModal
        onPay={() => {
          steIsAddPaymentMethodVisible(false);
          setTimeout(() => {
            setIsPickupDropInstructionModal(true);
          }, 1000);
        }}
        modalVisible={isAddPaymentMethodVisible}
        setModalVisible={steIsAddPaymentMethodVisible}
      />
    </>
  );
};

export default DedicatedService;

const styles = StyleSheet.create({
  daysContainer: {
    width: 100,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal: 10,
  },
});
