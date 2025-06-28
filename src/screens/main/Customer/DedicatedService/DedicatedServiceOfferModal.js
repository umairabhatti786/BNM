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
import { windowHeight } from "../../../../utils/Commons";
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

const DedicatedServiceOfferModal = ({
  modalVisible,
  handelModal,
  setModalVisible,
  selectedObject,
  title,
  navigation,
  setIsThankyouModal
}) => {
  const [selectedDays, setSelectedDays] = useState([]);

  console.log("selectedObject", selectedObject);

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={handelModal}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: "95%",
          maxHeight: windowHeight / 1.1,
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
        }}
      >
        <View style={{ ...AppStyles.justifyRow, padding: scale(15) }}>
          <NewText
            color={colors.black}
            size={16}
            fontWeight={"700"}
            text={title}
          />

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            activeOpacity={0.6}
            //   disabled={!onShowPassword}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={icon.cross}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: colors.gray100,
              }}
            />
          </TouchableOpacity>
        </View>

        <CustomLine />
        <View style={{ padding: 15 }}>
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
                  // paddingVertical={4}
                  size={14}
                  width={40}
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

          <View style={{ marginVertical: verticalScale(5) }}>
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
              size={13}
            />

            <View
              style={{
                ...AppStyles.justifyRow,
                ...styles.daysContainer,
              }}
            >
              <TextInput value="4" style={styles.input} />
              <NewText
                text={"days"}
                color={colors.gray}
                fontWeight="400"
                size={14}
              />
            </View>
          </View>

          <View style={{ ...AppStyles.justifyRow, marginBottom: 10 }}>
            <NewText
              text={"Length of Service"}
              color={colors.gray200}
              fontFam={Inter.bold}
              size={14}
            />

            <View
              style={{
                ...AppStyles.justifyRow,
                ...styles.daysContainer,
              }}
            >
              <TextInput value="16" style={styles.input} />
              <NewText
                text={"weeks"}
                color={colors.gray}
                fontWeight="400"
                size={14}
              />
            </View>
          </View>

          <View style={{ ...AppStyles.justifyRow, marginBottom: 10 }}>
            <NewText
              text={"Cost $ Per Day"}
              color={colors.gray200}
              fontFam={Inter.bold}
              size={14}
            />

            <View
              style={{
                ...AppStyles.justifyRow,
                ...styles.daysContainer,
                marginBottom: 5,
              }}
            >
              <TextInput
                value=""
                placeholder="$"
                placeholderTextColor={colors.gray}
                style={styles.input}
              />
              <NewText
                text={"/day"}
                color={colors.gray}
                fontWeight="400"
                size={14}
              />
            </View>
          </View>

          <View style={{ marginBottom: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <HorizontalContainer
            text={"Total Cost"}
            color={colors.gray200}
            weight={"500"}
            size={14}
            size1={15}
            color1={colors.black}
            weight1={"400"}
            text1={"$6400"}
          />
          <View style={{ marginVertical: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.black40}
            />
          </View>

          <View style={{ ...AppStyles.justifyRow, marginVertical: 10 }}>
            <Button
              text={"Clear"}
              height={28}
              bgColor={"#EEEEEE"}
              borderColor={"transparent"}
              borderWidth={1}
              onPress={()=>setModalVisible(false)}
              size={16}
              borderRadius={7}
              textColor={colors.gray}
              paddingHorizontal={20}
            />
            <Button
              text={"Submit"}
              height={28}
              // onPress={()=>navigation.navigate("ManageOrders")}
              onPress={() => {
                setModalVisible(false);
                setTimeout(() => {
                    setIsThankyouModal(true)
                    // navigation.navigate("ManageOrders")

                    
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
      </View>
    </Modal>
  );
};

export default DedicatedServiceOfferModal;

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
});
