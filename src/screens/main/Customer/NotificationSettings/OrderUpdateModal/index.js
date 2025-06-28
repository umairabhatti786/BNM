import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Modal from "react-native-modal";
import { scale, verticalScale } from "react-native-size-matters";
import DashedLine from "react-native-dashed-line";
import { windowHeight } from "../../../../../utils/Commons";
import { colors } from "../../../../../utils/colors";
import { AppStyles } from "../../../../../utils/AppStyle";
import { icon } from "../../../../../assets/png/icons";
import NewText from "../../../../../components/NewText";
import CustomToggle from "../../../../../components/CustomToggle";
import CustomLine from "../../../../../components/CustomLine/CustomLine";
import Button from "../../../../../components/Button";

const OrderUpdateModal = ({
  modalVisible,
  handelModal,
  setModalVisible,
  data,
  setData,

  title,
  selectNotificationUpdates,
  setSelectNotificationUpdates
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={handelModal}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: "95%",
          //   height: 450,
          maxHeight: windowHeight / 1.2,
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
        }}
      >
        {/* <Spacer height={10} /> */}
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
        <View style={{ paddingVertical: scale(15), paddingHorizontal: 20 }}>
      
                  <View
                    style={{ ...AppStyles.justifyRow, width: "100%" }}
                    activeOpacity={0.6}
                  >
                    <NewText color={colors.black} size={14} text={"Push"} />
                    <CustomToggle
                      isActive={selectNotificationUpdates?.push}
                      setIsActive={() => {
                        setSelectNotificationUpdates((prevUpdates) => {
                          return {
                            ...prevUpdates,
                            push: !prevUpdates.push,
                          };
                        });
                      }}
                    />
                  </View>

                  <View style={{ paddingVertical: verticalScale(13) }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>


                  <View
                    style={{ ...AppStyles.justifyRow, width: "100%" }}
                    activeOpacity={0.6}
                  >
                    <NewText color={colors.black} size={14} text={"Email"} />
                    <CustomToggle
                      isActive={selectNotificationUpdates?.email}
                      setIsActive={() => {
                        setSelectNotificationUpdates((prevUpdates) => {
                          return {
                            ...prevUpdates,
                            email: !prevUpdates.email,
                          };
                        });
                      }}
                    />
                  </View>

                  <View style={{ paddingVertical: verticalScale(13) }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>


                  <View
                    style={{ ...AppStyles.justifyRow, width: "100%" }}
                    activeOpacity={0.6}
                  >
                    <NewText color={colors.black} size={14} text={"SMS"} />
                    <CustomToggle
                      isActive={selectNotificationUpdates?.sms}
                      setIsActive={() => {
                        setSelectNotificationUpdates((prevUpdates) => {
                          return {
                            ...prevUpdates,
                            sms: !prevUpdates.sms,
                          };
                        });
                      }}
                    />
                  </View>

                  <View style={{ paddingVertical: verticalScale(13) }}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>
          </View>
        <View
          style={{
            alignSelf: "flex-end",
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        >
          <Button
            text={"Done"}
            height={30}
            width={100}
            size={16}
            onPress={() => setModalVisible(false)}
            textColor={colors.white}
            bgColor={colors.primary}
            //  borderColor={colors.secondary}
            //  borderWidth={1}
            paddingHorizontal={scale(10)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default OrderUpdateModal;

const styles = StyleSheet.create({
  imgContainer: {
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: colors.grey400,
    alignItems: "center",
    justifyContent: "center",
  },
});
