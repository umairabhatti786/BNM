import React from "react";
import {
  StatusBar,
  StatusBarStyle,
  ViewStyle,
  View,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../colors";

export let Edge = "top" | "right" | "bottom" | "left";

export const Screen = ({
  children,
  barStyle,
  statusBarColor,
  backgroundColor,
  edges,
  topBarColor,
  height
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
      }}>
      {Platform.OS === "ios" && (
        <View
          style={{
            width: "100%",
            height: verticalScale(height ||50), // For all devices, even X, XS Max
            backgroundColor: topBarColor ,
          }}
        />
      )}
       <StatusBar
          barStyle={barStyle}
          backgroundColor={statusBarColor}/>
      {children}
    </View>
  );
};
