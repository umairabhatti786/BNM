import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import CustomText from "../../../components/Text";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import sizeHelper from "../../../utils/Helpers";
import icons from "../../../utils/Constants/icons";
import { fonts } from "../../../utils/Themes/fonts";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import GradientButton from "../../../components/GradientButton";
import CustomButton from "../../../components/Button";

const ConnectScanModal = ({
  modalVisible,
  setModalVisible,
  onCancel,
  onDone,
  title,
  des,
}: any) => {
  const [isScanning, setisScanning] = useState(false);
  const [isScanned, setIsScanned] = useState(false);

  return (
    <Modal
      isVisible={modalVisible}
      deviceWidth={"100%"}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="rgba(0,0,0,0.5)"
      style={{ justifyContent: "flex-end", width: "100%" }}
    >
      <View style={styles.Container}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Image
            style={{
              width: sizeHelper.calWp(50),
              height: sizeHelper.calWp(50),
              alignSelf: "flex-end",
            }}
            source={icons.cross_img}
          />
        </TouchableOpacity>

        <View
          style={{
            gap: sizeHelper.calHp(40),
            alignItems: "center",
          }}
        >
          <CustomText
            text={"Connect Scanner"}
            fontFam={fonts.Inter_Bold}
            fontWeight="600"
            color={theme.colors.white}
            size={40}
          />
          <Image
            style={{
              width: sizeHelper.calWp(300),
              height: sizeHelper.calWp(300),
            }}
            source={images.scan}
          />
          <CustomText
            style={{
              textAlign: "center",
              paddingHorizontal: sizeHelper.calWp(100),
            }}
            text={
              isScanning
                ? "Wait for your scanner\nto connect"
                : isScanned
                ? "Your scanner are\nsuccessfully  connected"
                : "The scanner are not connected\bto your device"
            }
            color={theme.colors.white + "50"}
            size={25}
          />
          {isScanning ? (
            <CustomButton
              text="Connection"
              fontWeight="700"
              height={65}
              paddingHorizontal={40}
              colors={theme.colors.white}
              borderWidth={1}
              borderColor={theme.colors.white + "20"}
              bgColor={theme.colors.black}
            />
          ) : (
            <GradientButton
              text={isScanned ? "Done" : "Connect"}
              onPress={() => {
                if (isScanned) {
                  setModalVisible(false);
                  setIsScanned(false);
                  setisScanning(false);

                  return;
                }

                setisScanning(true);
                setTimeout(() => {
                  setIsScanned(true);
                  setisScanning(false);
                }, 2000);
              }}
              fontWeight="700"
              width={"40%"}
            />
          )}
        </View>
        {/* <View style={{ ...appStyles.rowjustify, width: "100%" }}>
          <CustomButton
            height={68}
            bgColor={theme.colors.white}
            borderColor={theme.colors.warning}
            borderWidth={1}
            borderRadius={15}
            textColor={theme.colors.warning}
            width={"48%"}
            text={"Cancel"}
            onPress={onCancel}
          />
          <CustomButton
            width={"48%"}
            height={68}
            borderRadius={15}
            bgColor={theme.colors.primary}
            textColor={theme.colors.white}
            text={"Done"}
            onPress={onDone}
          />
        </View> */}
      </View>
    </Modal>
  );
};
export default ConnectScanModal;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    backgroundColor: theme.colors.black,
    borderTopLeftRadius: sizeHelper.calWp(40),
    borderTopRightRadius: sizeHelper.calWp(40),
    paddingHorizontal: sizeHelper.calWp(30),
    paddingVertical: sizeHelper.calHp(20),
    gap: sizeHelper.calHp(20),
  },
});
