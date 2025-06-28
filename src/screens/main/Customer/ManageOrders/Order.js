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
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { windowWidth } from "../../../../utils/Commons";
import Collapsible from "react-native-collapsible";
import Button from "../../../../components/Button";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import DashedLine from "react-native-dashed-line";
import ModifyOrder from "../../../../components/ModifyOrder";
import CancelOrder from "../../../../components/CancelOrder";
const Order = ({
  item,
  onPress,
  isNoShadow,
  backgroundColor,
  isWatchList,
  onWatchList,
  isCollapsible,
  setIsCollapsible,
  selectedTab,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [modifyOrderVisible, setModifyOrderVisible] = useState(false);
  const [cancelOrderVisible, setCancelOrderVisible] = useState(false);
  return (
    <View
      style={{
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: colors.white,
        borderRadius: scale(13),
      }}
    >
      <TouchableOpacity
        onPress={() => setShowDetail(!showDetail)}
        style={{
          backgroundColor: colors.white,
          zIndex: 1000,

          borderRadius: scale(13),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            padding: verticalScale(10),
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flex: 1,
              paddingLeft: scale(10),
              paddingVertical: verticalScale(2),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ ...AppStyles.row }}>
                <NewText
                  text={"Order #123456"}
                  size={15}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <Spacer width={scale(10)} />

                <NewText
                  text={"02/26/23"}
                  size={13}
                  fontWeight={"400"}
                  color={colors.gray}
                />
                <Spacer width={scale(5)} />
              </View>

              <Button
                text={item?.status}
                height={25}
                bgColor={
                  item.status == "Pending"
                    ? "#EEEEEE"
                    : item.status == "Ongoing"
                    ? "transparent"
                    : item?.status == "Success"
                    ? colors.primary + "40"
                    : item?.status == "Failed"
                    ? colors.red + "40"
                    : "#EEEEEE"
                }
                borderColor={
                  item.status == "Ongoing" ? colors.black40 : "transparent"
                }
                borderWidth={item.status == "Ongoing" ? 1 : -1}
                size={13}
                fontWeight={"500"}
                borderRadius={7}
                textColor={
                  item.status == "Pending"
                    ? colors.gray200
                    : item.status == "Ongoing"
                    ? colors.black
                    : item?.status == "Success"
                    ? colors.primary
                    : item?.status == "Failed"
                    ? colors.red
                    : "#EEEEEE"
                }
                paddingHorizontal={10}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setShowDetail(!showDetail)}
              style={{ ...AppStyles.justifyRow, marginTop: 6 }}
            >
              <View style={{ ...AppStyles.row }}>
                <NewText
                  text={"120 ml"}
                  size={13}
                  fontWeight={"400"}
                  color={colors.gray}
                />

                <Spacer width={scale(7)} />
                <View style={styles.dot} />
                <Spacer width={scale(7)} />

                <NewText
                  text={"1 hr 12 min"}
                  size={13}
                  fontWeight={"400"}
                  color={colors.gray}
                />
                <Spacer width={scale(7)} />
                <View style={styles.dot} />
                <Spacer width={scale(7)} />

                <NewText
                  text={"Delivery"}
                  size={13}
                  fontWeight={"400"}
                  color={colors.gray}
                />
              </View>

              <TouchableOpacity style={{ marginTop: 5 }}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode={"contain"}
                  source={showDetail ? icon.down : icon.up}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={showDetail}>
        <View>
          <CustomLine />

          <View
            onPress={() => setShowDetail(!showDetail)}
            style={{
              backgroundColor: colors.white,
              zIndex: 1000,

              borderRadius: scale(13),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                padding: verticalScale(10),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: scale(52),
                  height: scale(52),
                  borderRadius: scale(7),
                  overflow: "hidden",
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  resizeMode={"contain"}
                  source={image.defimg600}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  paddingLeft: scale(10),
                  paddingVertical: verticalScale(2),
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ ...AppStyles.row }}>
                  <NewText
                    text={"Kadin Botosh"}
                    size={15}
                    fontWeight={"700"}
                    fontFam={Inter.bold}
                    color={colors.black}
                  />
                  <Spacer width={scale(8)} />
                  <View
                    style={{
                      width: scale(6),
                      height: scale(6),
                      borderRadius: 999,
                      backgroundColor: colors.red,
                    }}
                  />
                  <Spacer width={scale(5)} />

                  <NewText
                    text={"Busy"}
                    size={12}
                    // fontWeight={"600"}
                    // fontFam={Inter.bold}
                    color={colors.gray}
                  />
                  <Spacer width={scale(5)} />
                </View>

                <View style={AppStyles.row}>
                  <Image
                    style={{ width: 16, height: 16 }}
                    resizeMode={"contain"}
                    source={icon.star}
                  />
                  <Spacer width={scale(7)} />

                  <NewText
                    text={"4.9"}
                    size={15}
                    fontWeight={"600"}
                    fontFam={Inter.semiBold}
                    color={colors.black}
                  />
                  <Spacer width={scale(7)} />
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 16,
                        height: 19,
                        tintColor: colors.primary,
                      }}
                      resizeMode={"contain"}
                      source={icon.watchlist}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <CustomLine />

          <View style={{ padding: 15 }}>
            <HorizontalContainer
              text={"Type"}
              color={colors.gray200}
              weight={"500"}
              size={15}
              size1={15}
              color1={colors.black}
              weight1={"400"}
              text1={"On-demand"}
            />

            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.black40}
              />
            </View>

            <HorizontalContainer
              text={"Category"}
              color={colors.gray200}
              weight={"500"}
              size={15}
              size1={15}
              color1={colors.black}
              weight1={"400"}
              text1={"Ride"}
            />

            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.black40}
              />
            </View>

            <HorizontalContainer
              text={"From"}
              color={colors.gray200}
              weight={"500"}
              size={15}
              size1={15}
              color1={colors.black}
              weight1={"400"}
              text1={"City, ST, Zipcode"}
            />

            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.black40}
              />
            </View>

            <HorizontalContainer
              text={"To"}
              color={colors.gray200}
              weight={"500"}
              size={15}
              size1={15}
              color1={colors.black}
              weight1={"400"}
              text1={"City, ST, Zipcode"}
            />

            <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.black40}
              />
            </View>

            <HorizontalContainer
              text={"Total Distance: 10 Miles"}
              color={colors.gray200}
              weight={"400"}
              size={14}
              size1={14}
              color1={colors.gray200}
              weight1={"400"}
              text1={"Total Time: 01:12 hr"}
            />
          </View>

          <View style={{ paddingVertical: verticalScale(13) }}>
            <CustomLine />

            <TouchableOpacity
              // onPress={() => setShowDelivery(!showDeliveryDetail)}
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
                source={icon.down}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          </View>

          <View style={{ paddingHorizontal: 15 }}>
            <View style={AppStyles.justifyRow}>
              <View style={AppStyles.row}>
                <NewText
                  text={"Cost:"}
                  size={15}
                  fontWeight={"500"}
                  color={colors.gray200}
                />
                <Spacer width={7} />
                <NewText
                  text={"$80"}
                  size={15}
                  fontWeight={"600"}
                  color={colors.black}
                />
              </View>

              <View style={AppStyles.row}>
                <NewText
                  text={"Extra Charge/Tip:"}
                  size={15}
                  fontWeight={"500"}
                  color={colors.gray200}
                />
                <Spacer width={7} />
                <NewText
                  text={item?.tip ? item.tip : "$-"}
                  size={15}
                  fontWeight={"600"}
                  color={colors.black}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                text={"Modify Order"}
                height={33}
                onPress={() => setModifyOrderVisible(true)}
                disable={selectedTab == "Completed" || selectedTab == "Active"}
                bgColor={selectedTab == "Upcoming" ? colors.gray : colors.gray1}
                borderColor={"transparent"}
                borderWidth={1}
                size={16}
                borderRadius={10}
                textColor={
                  selectedTab == "Upcoming" ? colors.white : colors.gray
                }
                paddingHorizontal={28}
              />
              <Button
                text={"Cancel Order"}
                height={33}
                onPress={() => setCancelOrderVisible(true)}
                disable={selectedTab == "Completed"}
                bgColor={
                  selectedTab == "Completed" ? colors.gray1 : colors.gray
                }
                borderColor={"transparent"}
                borderWidth={1}
                size={16}
                borderRadius={10}
                textColor={
                  selectedTab == "Completed" ? colors.gray : colors.white
                }
                paddingHorizontal={28}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <Button
                text={selectedTab == "Completed" ? "Download" : "Track Order"}
                height={33}
                onPress={onPress}
                disable={selectedTab == "Completed"}
                bgColor={colors.primary}
                borderColor={"transparent"}
                borderWidth={1}
                size={16}
                borderRadius={10}
                textColor={colors.white}
                paddingHorizontal={20}
              />
            </View>
          </View>
        </View>
      </Collapsible>
      <ModifyOrder
        modalVisible={modifyOrderVisible}
        setModalVisible={setModifyOrderVisible}
      />
      <CancelOrder
        modalVisible={cancelOrderVisible}
        setModalVisible={setCancelOrderVisible}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  iconContainer: {
    width: 14,
    height: 14,
  },
  dot: {
    width: scale(5),
    height: scale(5),
    borderRadius: 999,
    backgroundColor: colors.gray100,
  },
});
