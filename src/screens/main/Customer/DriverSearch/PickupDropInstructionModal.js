import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { formatPhoneNumber, windowHeight } from "../../../../utils/Commons";
import { AppStyles } from "../../../../utils/AppStyle";
import { colors } from "../../../../utils/colors";
import NewText from "../../../../components/NewText";
import { icon } from "../../../../assets/png/icons";
import { scale, verticalScale } from "react-native-size-matters";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import DashedLine from "react-native-dashed-line";
import Days from "../../../../components/Days";
import { Inter } from "../../../../utils/Fonts";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import Button from "../../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { image } from "../../../../assets/png/images";
import CustomInput from "../../../../components/CustomInput";
import { Spacer } from "../../../../components/Spacer";

const PickupDropInstructionModal = ({
  modalVisible,
  handelModal,
  setModalVisible,
  setIsRateExperienceModal,
  onDonePress,
  onLater,
}) => {
  const [pickUpContactName, setPickUpContactName] = useState("");
  const [pickUpContactPhone, setPickUpContactPhone] = useState("");
  const [dropOffContactName, setDropOffContactName] = useState("");
  const [dropOffContactPhone, setDropOffContactPhone] = useState("");
  const [pickupInstructionValue, setPickupInstructionValue] = useState({
    code: "",
    knockDoor: "",
    bell: "",
    frontDesk: "",
    shipping: "",
  });
  const [dropOffStructionValue, setDropOffInstructionValue] = useState({
    code: "",
    knockDoor: "",
    bell: "",
    frontDesk: "",
    shipping: "",
  });

  const navigation = useNavigation();

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={handelModal}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: "90%",
          maxHeight: windowHeight / 1.2,
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: scale(10), gap: verticalScale(10) }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              activeOpacity={0.6}
              //   disabled={!onShowPassword}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: scale(25),
                width: scale(25),
                alignSelf: "flex-end",
              }}
            >
              <Image
                source={icon.cross}
                resizeMode="contain"
                style={{
                  width: "70%",
                  height: "70%",
                  tintColor: colors.gray100,
                }}
              />
            </TouchableOpacity>

            <View style={{ paddingHorizontal: scale(10) }}>
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                text={"Pick-Up Instruction"}
              />
            </View>

            <View style={{ flexDirection: "row", gap: scale(8) }}>
              <Image
                style={{ width: scale(25), height: scale(25) }}
                resizeMode="contain"
                source={image.address}
              />
              <NewText
                text={"10750 Saint Charles Rock Road, Saint Ann, MO 63074, US"}
                color={colors.black}
                style={{ marginRight: scale(30) }}
                fontWeight="400"
                size={15}
              />
            </View>
            <View
              style={{ paddingHorizontal: scale(10), gap: verticalScale(5) }}
            >
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Name"}
              />
              <CustomInput
                height={35}
                placeholder={"Enter Name at Pick-up or N/A "}
                value={pickUpContactName}
                onChangeText={(text) => {
                  setPickUpContactName(text);
                }}
              />
              <Spacer height={verticalScale(5)} />

              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Phone"}
              />
              <CustomInput
                height={35}
                placeholder={"(000)-000-0000"}
                value={pickUpContactPhone}
                keyboard={"numeric"}
                maxLength={15}
                onChangeText={(text) => {
                  const formattedText = formatPhoneNumber(text);

                  setPickUpContactPhone(formattedText);
                }}
              />
              <Spacer height={verticalScale(5)} />

              <View style={styles.contactDetail}>
                <TextInput
                  value={pickupInstructionValue.code}
                  maxLength={4}
                  placeholder="Enter gate code 0000"
                  keyboard="numeric"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setPickupInstructionValue({
                      ...pickupInstructionValue,
                      code: text,
                    });
                  }}
                  style={styles.instructionsInput}
                  keyboardType="numeric"
                />

                <TextInput
                  value={pickupInstructionValue.knockDoor}
                  placeholder="Knock on the door"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setPickupInstructionValue({
                      ...pickupInstructionValue,
                      knockDoor: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />

                <TextInput
                  value={pickupInstructionValue.bell}
                  placeholder="Ring the bell"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setPickupInstructionValue({
                      ...pickupInstructionValue,
                      bell: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />
                <TextInput
                  value={pickupInstructionValue.frontDesk}
                  placeholder="Walk to front desk"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setPickupInstructionValue({
                      ...pickupInstructionValue,
                      frontDesk: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />
                <TextInput
                  value={pickupInstructionValue.shipping}
                  placeholder="Go to Shipping/Receiving"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setPickupInstructionValue({
                      ...pickupInstructionValue,
                      shipping: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />
              </View>
            </View>

            <View style={{ paddingHorizontal: scale(10) }}>
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                text={"Drop-off Instruction (1)"}
              />
            </View>

            <View style={{ flexDirection: "row", gap: scale(8) }}>
              <Image
                style={{ width: scale(25), height: scale(25) }}
                resizeMode="contain"
                source={image.address}
              />
              <NewText
                text={"Walmart Super Centre, Tampa, FL 33612, US"}
                color={colors.black}
                style={{ marginRight: scale(30) }}
                fontWeight="400"
                size={15}
              />
            </View>
            <View
              style={{ paddingHorizontal: scale(10), gap: verticalScale(5) }}
            >
              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Name"}
              />
              <CustomInput
                height={35}
                placeholder={"Enter Name at Pick-up or N/A "}
                value={dropOffContactName}
                onChangeText={(text) => {
                  setDropOffContactName(text);
                }}
              />
              <Spacer height={verticalScale(5)} />

              <NewText
                color={colors.black}
                size={16}
                fontWeight={"700"}
                fontFam={Inter.bold}
                text={"Contact Phone"}
              />
              <CustomInput
                height={35}
                placeholder={"(000)-000-0000"}
                keyboard={"numeric"}
                maxLength={15}
                value={dropOffContactPhone}
                onChangeText={(text) => {
                  const formattedText = formatPhoneNumber(text);

                  setDropOffContactPhone(formattedText);
                }}
              />
              <Spacer height={verticalScale(5)} />

              <View style={styles.contactDetail}>
                <TextInput
                  value={dropOffStructionValue.code}
                  maxLength={4}
                  placeholder="Enter gate code 0000"
                  keyboard="numeric"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setDropOffInstructionValue({
                      ...dropOffStructionValue,
                      code: text,
                    });
                  }}
                  style={styles.instructionsInput}
                  keyboardType="numeric"
                />

                <TextInput
                  value={dropOffStructionValue.knockDoor}
                  placeholder="Knock on the door"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setDropOffInstructionValue({
                      ...dropOffStructionValue,
                      knockDoor: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />

                <TextInput
                  value={dropOffStructionValue.bell}
                  placeholder="Ring the bell"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setDropOffInstructionValue({
                      ...dropOffStructionValue,
                      bell: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />
                <TextInput
                  value={dropOffStructionValue.frontDesk}
                  placeholder="Walk to front desk"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setDropOffInstructionValue({
                      ...dropOffStructionValue,
                      frontDesk: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />
                <TextInput
                  value={dropOffStructionValue.shipping}
                  placeholder="Go to Shipping/Receiving"
                  placeholderTextColor={colors.gray}
                  onChangeText={(text) => {
                    setDropOffInstructionValue({
                      ...dropOffStructionValue,
                      shipping: text,
                    });
                  }}
                  style={styles.instructionsInput}
                />
              </View>
            </View>

            <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
              <Button
                text={"Later"}
                height={28}
                onPress={onLater}
                bgColor={"#EEEEEE"}
                borderColor={"transparent"}
                borderWidth={1}
                size={16}
                borderRadius={7}
                textColor={colors.gray}
                paddingHorizontal={20}
              />
              <Button
                text={"Done"}
                height={28}
                onPress={onDonePress}
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
        </ScrollView>
      </View>
    </Modal>
  );
};

export default PickupDropInstructionModal;

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
  contactDetail: {
    marginBottom: verticalScale(13),
    width: "100%",
    borderColor: colors.black40,
    borderWidth: 1,
    borderRadius: 9,
    alignSelf: "center",
    padding: 15,
    gap: verticalScale(5),
  },
  instructionsInput: {
    flex: 1,
    color: colors.black,
    fontWeight: "500",
    fontFamily: Inter.regular,
    padding: -1,
    fontSize: 13,
  },
});
