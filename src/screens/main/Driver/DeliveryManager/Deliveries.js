import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import DashedLine from "react-native-dashed-line";
import Collapsible from "react-native-collapsible";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import { icon } from "../../../../assets/png/icons";
import CustomText from "../../../../components/CustomText";
import { Inter } from "../../../../utils/Fonts";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomButton from "../../../../components/CustomButton";
import { Spacer } from "../../../../components/Spacer";

const Deliveries = () => {
  const [isCollapsible, setIsCollapsible] = useState(false);

  const TripTable = ({
    rowTitle,
    Upcoming,
    Uncompleted,
    Completed,
    percentCompleted,
  }) => {
    return (
      <View style={{ ...AppStyles.row, paddingVertical: verticalScale(15) }}>
        <View style={{ width: "19%" }}>
          <CustomText
            // fontWeight="600"
            color={colors.gray}
            size={10}
            // style={{textAlign:"center"}}
            text={rowTitle}
          />
          <Spacer height={verticalScale(5)} />
          <CustomText
            // fontWeight="600"
            color={colors.gray}
            size={10}
            // style={{textAlign:"center"}}
            text={"02/26/24"}
          />
        </View>
        <CustomLine height={verticalScale(30)} width={1} />

        <View style={styles.tipInnerContainer}>
          <CustomText
            fontWeight="700"
            fontFam={Inter.bold}
            color={colors.black}
            size={14}
            style={{ textAlign: "center" }}
            text={Upcoming}
          />
          <Spacer height={verticalScale(5)} />
          <CustomText
            fontWeight="400"
            color={colors.gray}
            size={8}
            // style={{textAlign:"center"}}
            text={"Upcoming"}
          />
        </View>
        <CustomLine height={verticalScale(30)} width={1} />

        <View style={styles.tipInnerContainer}>
          <CustomText
            fontWeight="700"
            fontFam={Inter.bold}
            color={colors.black}
            size={14}
            style={{ textAlign: "center" }}
            text={Uncompleted}
          />
          <Spacer height={verticalScale(5)} />
          <CustomText
            fontWeight="400"
            color={colors.gray}
            size={8}
            // style={{textAlign:"center"}}
            text={"Uncompleted"}
          />
        </View>
        <CustomLine height={verticalScale(30)} width={1} />

        <View style={styles.tipInnerContainer}>
          <CustomText
            fontWeight="700"
            fontFam={Inter.bold}
            color={colors.black}
            size={14}
            style={{ textAlign: "center" }}
            text={Completed}
          />
          <Spacer height={verticalScale(5)} />
          <CustomText
            fontWeight="400"
            color={colors.gray}
            size={8}
            // style={{textAlign:"center"}}
            text={"Completed"}
          />
        </View>
        <CustomLine height={verticalScale(30)} width={1} />

        <View style={styles.tipInnerContainer}>
          <CustomText
            fontWeight="700"
            fontFam={Inter.bold}
            color={colors.black}
            size={14}
            style={{ textAlign: "center" }}
            text={percentCompleted}
          />
          <Spacer height={verticalScale(5)} />
          <CustomText
            fontWeight="400"
            color={colors.gray}
            size={8}
            // style={{textAlign:"center"}}
            text={"% Completed"}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setIsCollapsible(!isCollapsible)}
        style={{ ...AppStyles.justifyRow, paddingVertical: verticalScale(15) }}>
        <CustomText
          text={"Deliveries"}
          size={14}
          fontWeight={"600"}
          fontFam={Inter.semiBold}
          color={colors.black}
        />

        <Image
          style={styles.iconContainer}
          resizeMode={"contain"}
          source={isCollapsible == false ? icon.up : icon.down}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsible}>
        <View>
          <CustomLine />
          <View>
            <TripTable
              rowTitle={"Trip 1"}
              Upcoming={"5"}
              Uncompleted={"10"}
              Completed={"14"}
              percentCompleted={"62%"}
            />
            <CustomLine />

            <TripTable
              rowTitle={"Trip 2"}
              Upcoming={"0"}
              Uncompleted={"2"}
              Completed={"20"}
              percentCompleted={"95%"}
            />
            <CustomLine />

            <TripTable
              rowTitle={"Trip 3"}
              Upcoming={"0"}
              Uncompleted={"0"}
              Completed={"33"}
              percentCompleted={"100%"}
            />
          </View>

          <CustomLine />
          <View
            style={{
              alignSelf: "flex-end",
              marginTop: verticalScale(15),
            }}>
            <CustomText
              // fontWeight="600"
              color={colors.secondary}
              fontFam={Inter.medium}
              size={13}
              // style={{textAlign:"center"}}
              text={"Load More"}
            />
          </View>
        </View>
      </Collapsible>
    </View>
  );
};

export default Deliveries;

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },

  tipInnerContainer: { width: "20%", alignItems: "center" },
});
