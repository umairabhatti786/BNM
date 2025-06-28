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
import NewText from "../NewText";
import CustomLine from "../CustomLine/CustomLine";
import { AppStyles } from "../../utils/AppStyle";
import { windowHeight } from "../../utils/Commons";
import { colors } from "../../utils/colors";
import { icon } from "../../assets/png/icons";

const CustomModal = ({
  modalVisible,
  handelModal,
  setModalVisible,
  title,
  children,
  lineNotShow,
  width,
  mainPadding
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={handelModal}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: width||"95%",
          maxHeight: windowHeight / 1.3,
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
            style={{ justifyContent: "center", alignItems: "center",height:30,width:30 }}
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
        {
          !lineNotShow&&(
            <CustomLine />
          )
        }

        <View style={{ padding:mainPadding|| 15 }}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
