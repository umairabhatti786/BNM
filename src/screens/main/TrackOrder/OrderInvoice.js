import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { AppStyles } from "../../../utils/AppStyle";
import { Inter } from "../../../utils/Fonts";
import CustomLine from "../../../components/CustomLine/CustomLine";
import CustomText from "../../../components/CustomText";
import { icon } from "../../../assets/png/icons";
import HorizontalContainer from "../../../components/HorizontalContainer";
import Collapsible from "react-native-collapsible";
import CustomButton from "../../../components/CustomButton";
import NewText from "../../../components/NewText";
import { image } from "../../../assets/png/images";
import ChargesTipModal from "./ChargesTipModal";
import CustomCalendar from "../../../components/CustomCalendar";

const OrderInvoice = (navigation) => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [pickupDateAndTime, setPickupDateAndTime] = useState("");
  const [isDateAndTime, setIsDateAndTime] = useState("");
  const [isChangesModal,setIsChangesModal]=useState(false)

  return (
    <>
     <View
      style={{
        borderRadius: scale(15),
        borderWidth: 1,
        borderColor: colors.black40,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setIsCollapsible(!isCollapsible)}
        style={{ ...AppStyles.justifyRow, padding: verticalScale(15) }}
      >
        <CustomText
          text={"Invoice"}
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
            <HorizontalContainer
              text={"Order ID #"}
              line={true}
              size={13}
              text1={"#126353"}
              size1={13}
            />

            <HorizontalContainer
              text={"Total Distance"}
              size={13}
              line={true}
              text1={"10 Miles"}
              size1={13}
            />

            <HorizontalContainer
              text={"Total Time"}
              size={13}
              line={true}
              text1={"02:45 hr"}
              size1={13}
            />

            <HorizontalContainer
              text={"Cost Per Mile"}
              size={13}
              text1={"$10"}
              line={true}
              size1={13}
            />

            <HorizontalContainer
              text={"Total Cost"}
              size={13}
              text1={"$100"}
              size1={13}
            />
          </View>

          <CustomLine />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setIsChangesModal(true)

            }}
            style={{ ...AppStyles.justifyRow, padding: 15 }}
          >
            <NewText
              color={colors.black}
              text={"Extra Charge and Time"}
              size={16}
              fontWeight={"700"}
            />

            <Image
              style={{ width: 15, height: 15 }}
              resizeMode="contain"
              source={icon.nexticon}
            />
          </TouchableOpacity>

          <CustomLine />

          <View
            style={{
              alignSelf: "flex-end",
              marginRight: scale(15),
              marginVertical: verticalScale(15),
            }}
          >
            <CustomButton
              text={"Download"}
              height={30}
              size={14}
              borderColor={colors.primary}
              borderWidth={1}
              width={scale(110)}
            />
          </View>
        </View>
      </Collapsible>
    </View>

<ChargesTipModal
        mainColor={colors.primary}
        modalVisible={isChangesModal}
        navigation={navigation}
        setIsDateAndTime={setIsDateAndTime}
        setModalVisible={setIsChangesModal}
      />

<CustomCalendar
        modalVisible={isDateAndTime}
        date={pickupDateAndTime}
        setDate={setPickupDateAndTime}
        setModalVisible={setIsDateAndTime}
      />
    </>
   
  );
};

export default OrderInvoice;

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },
});
