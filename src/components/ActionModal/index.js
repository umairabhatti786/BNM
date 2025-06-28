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
import { windowHeight } from "../../utils/Commons";
import { colors } from "../../utils/colors";
import { icon } from "../../assets/png/icons";
import { AppStyles } from "../../utils/AppStyle";
import Button from "../Button";
import NewText from "../NewText";
import { Spacer } from "../Spacer";
import { image } from "../../assets/png/images";
import { Inter } from "../../utils/Fonts";

const ActionModal = ({
  modalVisible,
  setModalVisible,
  onSubmit,
  submitText,
  title,
  descripation,
  successButtonColor,
  onAction,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      //   onBackdropPress={handelModal}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: "92%",
          maxHeight: windowHeight / 1.3,
          backgroundColor: "#F3C7C7",
          borderRadius: scale(15),
          alignSelf: "center",
          paddingBottom: verticalScale(10),
        }}
      >
        <View
          style={{
            alignSelf: "flex-end",
            paddingHorizontal: 15,
            paddingTop: 15,
          }}
        >
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
                width: scale(15),
                height: scale(15),
                tintColor: colors.white,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            style={{ width: scale(45), height: scale(45) }}
            source={image.alert}
          />
          {/* <NewText
              color={colors.black}
              style={{ textAlign: "center" }}
              size={20}
              fontWeight={"700"}
              text={ title|| "Success!"}
            /> */}
          <Spacer height={10} />
          <NewText
            color={colors.black}
            style={{ textAlign: "center", marginHorizontal: scale(20) }}
            size={14}
            text={"Required Action (1)"}
          />

          <TouchableOpacity
        onPress={onAction}
            style={{
              height: verticalScale(30),
              alignItems: "center",
              justifyContent:"center",
            }}
          >
            <NewText
              color={colors.red}
              style={{ textAlign: "center" }}
              size={14}
              fontFam={Inter.semiBold}
              fontWeight={"600"}
              text={"Click here to resolve"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ActionModal;

const styles = StyleSheet.create({});
