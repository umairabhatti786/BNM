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
import DashedLine from "react-native-dashed-line";
import { colors } from "../../../../utils/colors";
import HorizontalContainerToggle from "../../../../components/HorizontalContainerToggle";
import { Inter } from "../../../../utils/Fonts";
import { icon } from "../../../../assets/png/icons";
import CustomInput from "../../../../components/CustomInput";
import Button from "../../../../components/Button";
import CustomModal from "../../../../components/CustomModal";
import NewText from "../../../../components/NewText";
import { AppStyles } from "../../../../utils/AppStyle";
const EditModal = ({ modalVisible, handelModal, setModalVisible, title,onSubmit }) => {
  const [isExtraTip, setIsExtraTip] = useState(false);
  const [tipValue, setTipValue] = useState("");
  const [isDateExtension, setIsDateExtension] = useState(false);

  const [dateExtension, setDateExtension] = useState("03-23-24");
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
          value={tipValue}
          borderRadius={8}
          onChangeText={(txt) => {
            setTipValue(txt);
          }}
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

export default EditModal;

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
