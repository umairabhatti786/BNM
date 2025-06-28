import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { windowWidth } from "../../../../utils/Commons";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { image } from "../../../../assets/png/images";
import CustomText from "../../../../components/CustomText";
import { Inter } from "../../../../utils/Fonts";
import { Spacer } from "../../../../components/Spacer";
import { colors } from "../../../../utils/colors";

const CategoryItem = ({ onPress, selectedCategory, index, img, name }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        width: windowWidth / 3.5,
        height: verticalScale(90),
        borderWidth: selectedCategory == index ? -1 : 0.5,
        borderColor: "#00000040",
        alignItems: "center",
        paddingVertical: verticalScale(15),
        borderRadius: scale(15),
        backgroundColor:
          selectedCategory == index ? colors.black : colors.white,
      }}>
         <Image
          style={{
            width: scale(25),
            height: scale(25),
            tintColor: selectedCategory == index ? colors.white : colors.black,
          }}
          source={img}
          resizeMode="contain"
        />
      

      <Spacer height={10} />
      <CustomText
        text={name}
        size={12}
        color={selectedCategory == index ? colors.white : colors.black}
        fontWeight={"400"}
        lineHeight={21}
        style={{ textAlign: "center",width:scale(85) }}
        fontFam={Inter.medium}
      />
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
