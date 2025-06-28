import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

import { scale, verticalScale } from "react-native-size-matters";
import DashedLine from "react-native-dashed-line";
import { windowHeight } from "../../../utils/Commons";
import { colors } from "../../../utils/colors";
import { icon } from "../../../assets/png/icons";
import NewText from "../../../components/NewText";
import { AppStyles } from "../../../utils/AppStyle";
import Button from "../../../components/Button";
import { Inter } from "../../../utils/Fonts";
import CustomModal from "../../../components/CustomModal";
import HorizontalContainerToggle from "../../../components/HorizontalContainerToggle";
import CustomInput from "../../../components/CustomInput";

const ChargesTipModal = ({ modalVisible, handelModal, setModalVisible,setIsDateAndTime }) => {
  const [isExtraTip, setIsExtraTip] = useState(false);
  const [tipValue, setTipValue] = useState("");
  const [isDateExtension, setIsDateExtension] = useState(false);
  const [description,setDescription]=useState("")

  const [dateExtension, setDateExtension] = useState("03-23-24");
  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={"Send"}
    >
      <View style={{ gap: 15 }}>
        <HorizontalContainerToggle
        fontWeight={"700"}
          text={"Extra Charge/Tip"}
          isActive={isExtraTip}
          setIsActive={() => {
            setIsExtraTip(!isExtraTip);
          }}
        />

        <CustomInput
          height={32}
          keyboard={"numeric"}
          color={colors.gray100}
          editable={isExtraTip}
          placeholder={"$"}
          value={tipValue}
          borderRadius={8}
          onChangeText={(txt) => {
            setTipValue(txt);
          }}
          fontWeight={"600"}
        />

        <DashedLine
          dashLength={6}
          dashThickness={1}
          dashGap={5}
          dashColor={colors.black40}
        />
        <HorizontalContainerToggle
                fontWeight={"700"}

          text={"Date Extension"}
          isActive={isDateExtension}
          setIsActive={() => {
            setIsDateExtension(!isDateExtension);
          }}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          disabled={!isDateExtension}
          onPress={()=>setIsDateAndTime(true)}
          style={styles.pickupDateContainer}
        >
          <NewText
            fontWeight="600"
            color={colors.black}
            fontFam={Inter.bold}
            size={16}
            text={dateExtension}
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

        <DashedLine
          dashLength={6}
          dashThickness={1}
          dashGap={5}
          dashColor={colors.black40}
        />

<NewText
            fontWeight="600"
            color={colors.black}
            fontFam={Inter.bold}
            size={16}
            text={"Description"}
          />

<CustomInput
          height={100}
          color={colors.gray100}
          value={description}
          textAlignVertical={"top"}
          // placeholder={"$"}
          // heading={"Description"}
          borderRadius={8}
          onChangeText={(txt) => {
            setDescription(txt);
          }}
          fontWeight={"600"}
        />

        <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
          <Button
            text={"Cancel"}
            height={28}
            onPress={() => setModalVisible(false)}
            bgColor={"#EEEEEE"}
            borderColor={"transparent"}
            borderWidth={1}
            size={16}
            borderRadius={7}
            textColor={colors.gray}
            paddingHorizontal={20}
          />
          <Button
            text={"Submit"}
            height={28}
            onPress={() => {
              setModalVisible(false);
              setTimeout(() => {
                //   navigation.navigate("ManageOrders");
              }, 500);
            }}
            bgColor={colors.primary}
            borderColor={"transparent"}
            borderWidth={1}
            size={16}
            borderRadius={7}
            textColor={colors.white}
            paddingHorizontal={12}
          />
        </View>
      </View>
    </CustomModal>
  );
};

export default ChargesTipModal;

const styles = StyleSheet.create({
  imgContainer: {
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: colors.grey400,
    alignItems: "center",
    justifyContent: "center",
  },
  daysContainer: {
    width: 90,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal: 10,
  },

  input: {
    color: colors.black,
    fontFamily: "700",
    fontSize: 14,
    fontFamily: Inter.bold,
    height: 40,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
  pickupDateContainer: {
    width: "100%",
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.black40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
