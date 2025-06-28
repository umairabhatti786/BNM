import {
    StyleSheet,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { colors } from "../../../../utils/colors";
  import { Inter } from "../../../../utils/Fonts";
  import CustomInput from "../../../../components/CustomInput";
  import Button from "../../../../components/Button";
  import CustomModal from "../../../../components/CustomModal";
  import { AppStyles } from "../../../../utils/AppStyle";
  const RenameModal = ({ modalVisible, handelModal, setModalVisible, title,onSubmit,setRenameText,renameText,onChangeText }) => {
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
      >
        <View style={{ gap: 15 }}>
          <CustomInput
            height={35}
            color={colors.black}
            
            placeholder={"[Name]"}
            placeholderTextColor={colors.black}
            value={renameText}
            borderRadius={8}
            onChangeText={onChangeText}
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
              onPress={onSubmit}
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
  
  export default RenameModal;
  
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
  