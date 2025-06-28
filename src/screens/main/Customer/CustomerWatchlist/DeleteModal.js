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
import { windowHeight } from "../../../../utils/Commons";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import Button from "../../../../components/Button";
import { icon } from "../../../../assets/png/icons";
import NewText from "../../../../components/NewText";

const DeleteModal = ({ modalVisible, setModalVisible,onYes }) => {
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
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
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
                width: 18,
                height: 18,
                tintColor: colors.gray100,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <NewText
            color={colors.black}
            style={{ textAlign: "center" }}
            size={19}
            text={"Do you want to delete?"}
          />

          <View
            style={{
              ...AppStyles.row,
              width: "100%",
              justifyContent: "center",
              paddingVertical: 20,
              gap: 20,
            }}
          >
            <Button
              text={"No"}
              height={28}
              bgColor={"#EEEEEE"}
              borderColor={"transparent"}
              borderWidth={1}
              paddingHorizontal={30}
              size={14}
                onPress={()=>setModalVisible(false)}
              borderRadius={7}
              textColor={colors.gray}
            />
            <Button
              text={"Yes"}
              height={28}
              bgColor={colors.red}
              borderColor={"transparent"}
              borderWidth={1}
              size={14}
              onPress={onYes}
              borderRadius={7}
              textColor={colors.white}
              paddingHorizontal={30}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({});
