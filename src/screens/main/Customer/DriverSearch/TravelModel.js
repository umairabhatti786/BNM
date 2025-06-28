import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import CustomModal from "../../../../components/CustomModal";
import { scale, verticalScale } from "react-native-size-matters";
import { AppStyles } from "../../../../utils/AppStyle";
import { icon } from "../../../../assets/png/icons";
import { colors } from "../../../../utils/colors";
import NewText from "../../../../components/NewText";
import DashedLine from "react-native-dashed-line";
import CustomRangeSlider from "../../../../components/RangeSlider";

const TravelModel = ({
  modalVisible,
  setModalVisible,
  selectedObject,
  setSelectedObject,
  title,
}) => {
  const viewData = ["Map View", "List View"];
  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={title}
      lineNotShow={true}
    >

      <View style={{paddingBottom:15}}>
        <CustomRangeSlider
          sliderWidth={200}
          initialValue={20}
          min={0}
          max={50}
          step={100}
          backgroundColor={colors.primary}
          minValue={10}
          maxValue={50}
          onValueChange={(range) => {
            // console.log("range", range);
            // setMinValue(range.min);
            // setMaxValue(range.max);
          }}
        />
      </View>
    </CustomModal>
  );
};

export default TravelModel;

const styles = StyleSheet.create({});
