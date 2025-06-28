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
import Stars from 'react-native-stars';
const CustomerReviewCard = ({
  item,
  onPress,
  isNoShadow,
  backgroundColor,
  isWatchList,
  onWatchList,

  isCollapsible,
  setIsCollapsible,
  // showDetail,
  // setShowDetail,
}) => {
  const [showDetail,setShowDetail]=useState(true)
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
        width: windowWidth / 1.3,
      }}
    >
      <TouchableOpacity
        onPress={() => setShowDetail(!showDetail)}
        style={{
          backgroundColor: colors.white,
          zIndex: 1000,
          // elevation: 5,
          // shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          // shadowOffset: { width: 4, height: 5 },
          // shadowOpacity: !isNoShadow ? 0.2 : 0,
          // shadowRadius: 5,
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
                // paddingBottom: verticalScale(10),
                // backgroundColor:"red"
              }}
            >
              <View style={{ ...AppStyles.row, paddingBottom: 7 }}>
                <NewText
                  text={"Username"}
                  size={15}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />
                <Spacer width={scale(8)} />
                <View
                  style={{
                    width: scale(5),
                    height: scale(5),
                    borderRadius: 999,
                    backgroundColor: colors.gray100,
                  }}
                />
                <Spacer width={scale(5)} />

                <NewText
                  text={"Jan 10, 2024"}
                  size={12}
                  fontWeight={"400"}
                  // fontFam={Inter.bold}
                  color={colors.gray}
                />
                <Spacer width={scale(5)} />
              </View>

              <TouchableOpacity>
                <Image
                  style={{
                    width: 19,
                    height: 25,
                  }}
                  resizeMode={"contain"}
                  source={icon.pass}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setShowDetail(!showDetail)}
              style={{ ...AppStyles.justifyRow, marginTop: 6 }}
            >
              <View style={{ ...AppStyles.row }}>
                <Stars
                  maxStars={5}
                  rating={5}
                  fullStarColor={"#FFCA28"}
                  emptyStarColor="#CCCCCC"
                  starSize={13}
                  fullStar={icon.star}
                  starStyle={{ marginHorizontal: 2 }} // Add margin between stars
                  emptyStar={icon.stargrayout} // Use the CustomStarIcon component as the custom icon renderer
                />

                <Spacer width={scale(7)} />

                <NewText
                  text={"very fast"}
                  size={13}
                  fontFam={Inter.semiBold}
                  color={colors.black}
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
          <CustomLine />
          <View>
            <View style={{ padding: 15 }}>
              <NewText
                text={
                  "Smith is a great mover to trust moving for any of your local delivery, Responsive, punctual, courteous and professional. I recommend his service for your local errand, assembly etc. I would definitely use his service again."
                }
                size={13}
                fontWeight={"400"}
                lineHeight={20}
                numberOfLines={5}
                // fontFam={Inter.bold}
                color={colors.gray}
              />
            </View>
            <CustomLine />
            <View style={{ ...AppStyles.justifyRow, padding: 15 }}>
              <NewText
                text={"Helpful?"}
                size={15}
                fontWeight={"600"}
                fontFam={Inter.bold}
                color={colors.black}
              />

              <View style={{ ...AppStyles.row, gap: 10 }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 18,
                      height: 18,
                    }}
                    resizeMode={"contain"}
                    source={icon.thumbup}
                  />
                </TouchableOpacity>

                <NewText text={"Yes?"} size={14} color={colors.black} />

                <TouchableOpacity>
                  <Image
                    style={{
                      width: 18,
                      height: 18,
                    }}
                    resizeMode={"contain"}
                    source={icon.thumbup}
                  />
                </TouchableOpacity>

                <NewText text={"No"} size={14} color={colors.black} />
              </View>
            </View>

            <CustomLine />

            <View style={{ ...AppStyles.justifyRow, padding: 15 }}>
              <NewText
                text={"W. Smith Response"}
                size={15}
                fontWeight={"700"}
                fontFam={Inter.bold}
                color={colors.black}
              />

              <NewText
                text={"Jan 10, 2024"}
                size={12}
                fontWeight={"500"}
                color={colors.gray}
              />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <NewText
                text={"Thank you, Customer!"}
                size={13}
                fontWeight={"400"}
                color={colors.gray}
              />
              <Spacer height={20} />
            </View>
          </View>
      </Collapsible>
    </View>
  );
};

export default CustomerReviewCard;

const styles = StyleSheet.create({
  iconContainer: {
    width: 14,
    height: 14,
  },
});
