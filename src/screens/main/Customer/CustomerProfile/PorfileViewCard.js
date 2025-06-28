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
import Stars from 'react-native-stars';
const PorfileViewCard = ({
  item,
  onPress,
  isNoShadow,
  backgroundColor,
  isWatchList,
  onWatchList,

  isCollapsible,
  setIsCollapsible,
}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor || colors.white,
        borderRadius: scale(15),
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
          flexDirection: "row",
          flex: 1,
          paddingVertical: verticalScale(10),
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
            source={item.img}
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
              ...AppStyles.justifyRow,
              paddingBottom: verticalScale(10),
            }}
          >
            <View style={{ ...AppStyles.row }}>
              <NewText
                text={item.name}
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
                  backgroundColor:
                    item.active == "Available"
                      ? colors.green
                      : item.active == "Busy"
                      ? colors.red
                      : item.active == "On Schedule"
                      ? colors.yellow
                      : colors.gray,
                }}
              />
              <Spacer width={scale(5)} />

              <NewText
                text={item.active}
                size={12}
                // fontWeight={"600"}
                // fontFam={Inter.bold}
                color={colors.gray}
              />
              <Spacer width={scale(5)} />
            </View>
            <View style={AppStyles.row}>
              <Image
                style={{
                  width: 18,
                  height: 18,
                }}
                resizeMode={"contain"}
                source={icon.share}
              />
              <Spacer width={scale(12)} />
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

          <TouchableOpacity
            activeOpacity={0.6}
            //   onPress={() => setIsCollapsible(!isCollapsible)}
            style={{ ...AppStyles.justifyRow }}
          >
            <View style={{ ...AppStyles.row }}>
              <Stars
                maxStars={5}
                rating={4.5}
                fullStarColor={"#FFCA28"}
                emptyStarColor="#CCCCCC"
                starSize={13}
                halfStar={icon.halfStar}
                fullStar={icon.star}
                starStyle={{ marginHorizontal: 2 }} // Add margin between stars
                emptyStar={icon.stargrayout} // Use the CustomStarIcon component as the custom icon renderer
              />

              <Spacer width={scale(7)} />

              <NewText
                text={"4.5"}
                size={15}
                fontWeight={"600"}
                fontFam={Inter.semiBold}
                color={colors.black}
              />

              <Spacer width={scale(10)} />
              <View
                style={{
                  width: scale(6),
                  height: scale(6),
                  borderRadius: 999,
                  backgroundColor: colors.gray300,
                }}
              />

              <Spacer width={scale(10)} />

              <NewText text={"8 ratings"} size={13} color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PorfileViewCard;

const styles = StyleSheet.create({
  iconContainer: {
    width: 14,
    height: 14,
  },
});
