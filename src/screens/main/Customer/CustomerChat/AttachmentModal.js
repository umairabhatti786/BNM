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
import { AppStyles } from "../../../../utils/AppStyle";
import { windowHeight } from "../../../../utils/Commons";
import { colors } from "../../../../utils/colors";
import NewText from "../../../../components/NewText";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { icon } from "../../../../assets/png/icons";
import { image } from "../../../../assets/png/images";

const AttachmentModal = ({
  modalVisible,
  setModalVisible,
  title,
  subtitle_image,
  subtitle1,
  subtitle2,
  onGalleryPress,
  onCameraPress,
}) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalView}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalText}>{title}</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image
                style={styles.closeIcon}
                source={require("../../../../assets/webp/closeIcon.webp")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          <TouchableOpacity
            activeOpacity={0.6}
            style={{ paddingVertical: scale(15), paddingHorizontal: 20 }}
            onPress={onGalleryPress}
          >
            <View style={{ width: "100%" }}>
              <View
                style={{ ...AppStyles.row, width: "100%" }}
                activeOpacity={0.6}
              >
                <Image
                  source={subtitle_image || image.file}
                  resizeMode="contain"
                  style={{
                    width: 45,
                    height: 45,
                    marginRight: 15,
                  }}
                />
                <NewText
                  color={colors.gray200}
                  size={17}
                  text={subtitle1 || "Pick a File"}
                />
              </View>

              <View style={{ paddingTop: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            style={{ paddingHorizontal: 20, paddingBottom: verticalScale(13) }}
            onPress={onCameraPress}
          >
            <View style={{ width: "100%" }}>
              <View
                style={{ ...AppStyles.row, width: "100%" }}
                activeOpacity={0.6}
              >
                <Image
                  source={image.capture}
                  resizeMode="contain"
                  style={{
                    width: 45,
                    height: 45,
                    marginRight: 15,
                  }}
                />
                <NewText
                  color={colors.gray200}
                  size={17}
                  text={subtitle2 || "Take a Photo"}
                />
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default AttachmentModal;

const styles = StyleSheet.create({
  imgContainer: {
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: colors.grey400,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: colors.gray100,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: 10,
  },
});
