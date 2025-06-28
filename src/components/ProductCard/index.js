import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { windowWidth } from "../../utils/Commons";
import { image } from "../../assets/png/images";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { Inter } from "../../utils/Fonts";
import { AppStyles } from "../../utils/AppStyle";
import { icon } from "../../assets/png/icons";
import { Spacer } from "../Spacer";
import CategoryItem from "../../screens/main/Customer/CustomerHome/CategoryItem";

const ProductCard = ({item,ennPointColor,onPress}) => {
  return (
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        elevation: 5,
        shadowColor:Platform.OS=="ios"?  colors.gray:colors.black,
        shadowOffset: { width:- 4, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }}
      >
            <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: scale(10),
        elevation: 5,
        shadowColor:Platform.OS=="ios"?  colors.gray:colors.black,
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: scale(10),
      }}>
          {
              !item.rightImage&&(
                <Image
                style={{
                  width: windowWidth / 3.7,
                  height: verticalScale(85),
                  borderRadius: scale(10),
                }}
                source={item.img}
              />

              )
          }
   

      <View
        style={{
          width: "68%",
          paddingLeft:item.rightImage?0:scale(10),
          paddingRight:scale(10),
        //   paddingHorizontal: scale(10),
          paddingVertical: verticalScale(2),
        }}>
        <CustomText
          text={item.name}
          size={13}
          color={colors.black}
          fontWeight={"600"}
          lineHeight={21}
          // style={{ textAlign: "center",}}
          fontFam={Inter.medium}
          //   color={colors.primary}
        />
        <CustomText
          text={item.des
          }
          size={10}
          color={colors.gray}
          fontWeight={"400"}
          numberOfLines={2}
          lineHeight={21}
          style={{ marginVertical: verticalScale(5) }}
          fontFam={Inter.medium}
          //   color={colors.primary}
        />
        <View
          style={{
            height: 0.5,
            backgroundColor: "#00000020",
            marginTop: verticalScale(5),
          }}
        />

        <View
          style={{
            ...AppStyles.row,
            alignSelf: "flex-end",
            marginTop: verticalScale(5),
            marginRight: scale(5),
          }}>
          <CustomText
            text={item.endPoint}
            size={11}
            color={ ennPointColor|| colors.primary}
            fontWeight={"500"}
            // style={{ textAlign: "center",}}
            fontFam={Inter.medium}
            //   color={colors.primary}
          />
          <Spacer width={scale(5)} />
          <Image
            style={{
              width: scale(12),
              height: scale(10),
              marginTop: 1,
              tintColor:ennPointColor ||colors.primary
            }}
            resizeMode={"contain"}
            source={icon.next}
          />


        </View>
        
      </View>
      {
              item.rightImage&&(
                <Image
                style={{
                  width: windowWidth / 3.7,
                  height: verticalScale(85),
                  borderRadius: scale(10),
                }}
                source={item.img}
              />

              )
          }
    </View>

      </TouchableOpacity>
  
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
