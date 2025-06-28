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
  
  const DriverAttachmentModal = ({
    modalVisible,
    handelModal,
    setModalVisible,
    data,
    setData,
  
    title,
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
          <TouchableOpacity 
          activeOpacity={0.6}
          style={{ paddingVertical: scale(15), paddingHorizontal: 20 }}>
            <View style={{ width: "100%" }}>
              <View
                style={{ ...AppStyles.row, width: "100%" }}
                activeOpacity={0.6}
              >
                <Image
                  source={image.file}
                  resizeMode="contain"
                  style={{
                    width: 45,
                    height: 45,
                    marginRight: 15,
                  }}
                />
                <NewText color={colors.gray200} size={17} 
                text={"Pick a FIle"} />
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
          style={{ paddingHorizontal: 20, paddingBottom: verticalScale(13) }}>
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
                <NewText color={colors.gray200} size={17} 
                text={"Take a Photo"} />
              </View>
  
            
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  
  export default DriverAttachmentModal;
  
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
  