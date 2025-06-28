import { StyleSheet, Text, View, Image, Platform } from "react-native";
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
import DashedLine from "react-native-dashed-line";
import CustomButton from "../CustomButton";
import { useNavigation } from "@react-navigation/native";

const OrderCard = ({ item, ennPointColor, taskStatus }) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: -4, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        width: windowWidth / 1.4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.white,
          elevation: 5,
          shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          shadowOffset: { width: 4, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          borderRadius: scale(10),
          width: "100%",
        }}
      >
        <View style={{ width: "100%" }}>
          <View style={{ ...AppStyles.justifyRow, padding: scale(15) }}>
            <CustomText
              text={"Order #7162533"}
              size={13}
              color={colors.black}
              fontWeight={"700"}
              // style={{ textAlign: "center",}}
              fontFam={Inter.bold}
              //   color={colors.primary}
            />

            <Image
              style={{
                width: scale(18),
                height: scale(18),
              }}
              source={icon.info}
            />
          </View>

          <View
            style={{
              paddingBottom: verticalScale(10),
              paddingHorizontal: scale(15),
            }}
          >
            <CustomText
              text={"Address"}
              size={12}
              color={colors.gray}
              // style={{ textAlign: "center",}}
              //   color={colors.primary}
            />

            <CustomText
              text={"Down town, new york"}
              size={13}
              color={colors.black}
              //   fontWeight={"700"}
              style={{ marginTop: verticalScale(5) }}
              //   fontFam={Inter.bold}
              //   color={colors.primary}
            />
          </View>

          <View
            style={{
              ...AppStyles.row,
              paddingBottom: verticalScale(10),
              paddingHorizontal: scale(15),
            }}
          >
            <View>
              <CustomText
                text={"Start Time"}
                size={12}
                color={colors.gray}
                // style={{ textAlign: "center",}}
                //   color={colors.primary}
              />

              <CustomText
                text={"13:45"}
                size={13}
                color={colors.black}
                //   fontWeight={"700"}
                style={{ marginTop: verticalScale(5) }}
                //   fontFam={Inter.bold}
                //   color={colors.primary}
              />
            </View>

            <View
              style={{
                paddingLeft: scale(25),
              }}
            >
              <CustomText
                text={"Delivery Cateogory"}
                size={12}
                color={colors.gray}
                // style={{ textAlign: "center",}}
                //   color={colors.primary}
              />

              <CustomText
                text={"Local Delivery"}
                size={13}
                color={colors.black}
                //   fontWeight={"700"}
                style={{ marginTop: verticalScale(5) }}
                //   fontFam={Inter.bold}
                //   color={colors.primary}
              />
            </View>
          </View>
          <Spacer height={verticalScale(5)} />
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={5}
            dashColor={colors.gray}
          />

          <View
            style={{
              ...AppStyles.justifyRow,
              paddingHorizontal: scale(15),
              paddingVertical: verticalScale(10),
            }}
          >
            <CustomButton
              text={item.is_start}
              onPress={()=>{item.is_start=='Continue' ?navigation.navigate("DropoffTaskScreen"):item.is_start=='Start' &&   navigation.navigate('PickupTaskScreen')}}
              height={30}
              bgColor={
                item.is_complete == "Failed" || item.is_complete == "Success"
                  ? "#EEEEEE"
                  : colors.secondary
              }
              textColor={
                item.is_complete == "Failed" || item.is_complete == "Success"
                  ? "#AAAAAA"
                  : colors.white
              }
              borderColor={colors.secondary}
              borderWidth={-1}
              paddingHorizontal={scale(20)}
            />

            <CustomButton
              text={item.is_complete}
              height={30}
              fontWeight={"500"}
              size={14}
              fontFam={Inter.regular}
              paddingHorizontal={scale(10)}
              borderWidth={item.is_complete == "En-Route" ? 1 : -1}
              borderColor={
                item.is_complete == "En-Route"
                  ? colors.black + "10"
                  : "transparent"
              }
              textColor={
                item.is_complete == "Failed"
                  ? colors.red
                  : item.is_complete == "En-Route"
                  ? colors.black
                  : item?.is_complete == "Pending"
                  ? "#666666"
                  : colors.primary
              }
              bgColor={
                item?.is_complete == "Failed"
                  ? colors.red + "20"
                  : item.is_complete == "En-Route"
                  ? colors.white
                  : item?.is_complete == "Pending"
                  ? "#EEEEEE"
                  : colors.secondary + "20"
              }

              //  width={scale(90)}
            />
          </View>
        </View>

        {/* <View
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
        
      </View> */}
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
