import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import { Spacer } from "../../../../components/Spacer";
import NewText from "../../../../components/NewText";
import { icon } from "../../../../assets/png/icons";
import { image } from "../../../../assets/png/images";
import CustomInput from "../../../../components/CustomInput";
import DashedLine from "react-native-dashed-line";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import Collapsible from "react-native-collapsible";
import Button from "../../../../components/Button";

const LocalDelivery = ({
  item,
  onPress,
  isNoShadow,
  backgroundColor,
  isWatchList,
  onWatchList,

  isCollapsible,
  setIsCollapsible,
}) => {
  const [showDeliveryDetail, setShowDelivery] = useState(true);
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View>
        <View style={AppStyles.justifyRow}>
          <NewText
            fontWeight={"400"}
            color={colors.gray}
            text={"Type"}
            size={15}
          />

          <CustomInput
            height={29}
            color={colors.gray100}
            width={scale(120)}
            editable={false}
            //   onShowPassword={() => setIsTimeModal(true)}
            rightImage={icon.down}
            value={"Scheduled"}
            fontWeight={"600"}
            paddingHorizontal={10}
            rightImageWidth={15}
            rightImageHeight={15}
            // placeholder={"$/day"}
            borderRadius={8}
          />
        </View>

        <View style={{ marginVertical: verticalScale(13) }}>
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={5}
            dashColor={colors.gray}
          />
        </View>
      </View>

      <View>
        <View style={AppStyles.justifyRow}>
          <NewText
            fontWeight={"400"}
            color={colors.gray}
            text={"Category"}
            size={15}
          />

          <CustomInput
            height={29}
            color={colors.gray100}
            width={scale(100)}
            editable={false}
            //   onShowPassword={() => setIsTimeModal(true)}
            rightImage={icon.down}
            value={"Delivery"}
            fontWeight={"600"}
            paddingHorizontal={10}
            rightImageWidth={15}
            rightImageHeight={15}
            // placeholder={"$/day"}
            borderRadius={8}
          />
        </View>

        <View style={{ marginVertical: verticalScale(13) }}>
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={5}
            dashColor={colors.gray}
          />
        </View>
      </View>

      <View>
        <View style={AppStyles.justifyRow}>
          <NewText
            fontWeight={"400"}
            color={colors.gray}
            text={"Description"}
            size={15}
          />

          <CustomInput
            height={29}
            color={colors.gray100}
            width={scale(140)}
            editable={false}
            //   onShowPassword={() => setIsTimeModal(true)}
            rightImage={icon.down}
            value={"Local Delivery"}
            fontWeight={"600"}
            paddingHorizontal={10}
            rightImageWidth={15}
            rightImageHeight={15}
            // placeholder={"$/day"}
            borderRadius={8}
          />
        </View>

        <View style={{ marginVertical: verticalScale(13) }}>
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={5}
            dashColor={colors.gray}
          />
        </View>
      </View>

      <View>
        <HorizontalContainer
          text={"Base Price"}
          color={colors.gray}
          weight={"500"}
          size={15}
          size1={15}
          color1={colors.black}
          weight1={"400"}
          text1={"$10"}
        />
        <View style={{ marginVertical: verticalScale(13) }}>
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={5}
            dashColor={colors.gray}
          />
        </View>
      </View>

      <View>
        <HorizontalContainer
          text={"Mileage Price"}
          color={colors.gray}
          weight={"500"}
          size={15}
          size1={15}
          color1={colors.black}
          weight1={"400"}
          text1={"$10"}
        />
        <View>
          <View style={{ paddingVertical: verticalScale(13) }}>
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.gray}
            />

            <TouchableOpacity
              onPress={() => setShowDelivery(!showDeliveryDetail)}
              style={{
                width: 35,
                height: 35,
                borderRadius: 999,
                backgroundColor: "#EEEEEE",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "45%",
              }}
            >
              <Image
                style={{ width: scale(13), height: scale(13) }}
                source={showDeliveryDetail ? icon.down : icon.up}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          </View>

          <Collapsible 
          style={{paddingTop:10}}
          collapsed={showDeliveryDetail}>
            <View>
              <CustomInput
                leftImage={icon.location}
                value="Town Hall, New York"
              />
              <Spacer height={verticalScale(10)} />
              <CustomInput
                leftImage={icon.location}
                placeholder="Drop Off Address"
              />

              <View
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  paddingVertical: verticalScale(10),
                }}
              >
                <NewText
                  text={"Add more drop point"}
                  color={colors.gray100}
                  fontWeight="500"
                  fontFam={Inter.medium}
                  size={14}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{
                    width: scale(22),
                    height: scale(22),
                    // tintColor: index > 0 ? colors.black : colors.white,
                  }}
                  source={icon.addlocation}
                  resizeMode="contain"
                />
              </View>

              <View>
                <View style={{ marginVertical: verticalScale(13) }}>
                  <DashedLine
                    dashLength={6}
                    dashThickness={1}
                    dashGap={5}
                    dashColor={colors.gray}
                  />
                </View>
                <HorizontalContainer
                  text={"Total Distance: 10 Miles"}
                  color={colors.gray}
                  weight={"500"}
                  size={13}
                  size1={13}
                  color1={colors.gray}
                  weight1={"400"}
                  text1={"Total Time: 01:12 hr"}
                />
                <View style={{ marginVertical: verticalScale(13) }}>
                  <DashedLine
                    dashLength={6}
                    dashThickness={1}
                    dashGap={5}
                    dashColor={colors.gray}
                  />
                </View>

                <View style={{ ...AppStyles.justifyRow }}>
                  <View style={AppStyles.row}>
                    <NewText
                      text={"Cost:"}
                      size={14}
                      fontWeight={"400"}
                      style={{ marginRight: scale(5) }}
                      //   fontFam={Inter.bold}
                      color={colors.gray200}
                    />
                    <NewText
                      text={"$50"}
                      size={14}
                      fontWeight={"700"}
                      fontFam={Inter.bold}
                      color={colors.black}
                    />
                  </View>

                  <View style={AppStyles.row}>
                    <Button
                      text={"Counter Offer"}
                      height={30}
                      bgColor={colors.white}
                      borderColor={colors.primary}
                      borderWidth={1}
                      size={14}
                      textColor={colors.primary}
                      width={scale(110)}
                    />
                    <Spacer width={scale(10)} />
                    <Button
                      text={"Book Now"}
                      height={30}
                      size={14}
                      bgColor={colors.primary}
                      borderColor={colors.primary}
                      borderWidth={1}
                      width={scale(90)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Collapsible>
        </View>
      </View>
    </View>
  );
};

export default LocalDelivery;

const styles = StyleSheet.create({
  iconContainer: {
    width: 14,
    height: 14,
  },
});
