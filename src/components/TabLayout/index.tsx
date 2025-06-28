import React from "react";
import {
  ImageBackground,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
  SafeAreaView,
  View,
  Platform,
} from "react-native";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import images from "../../utils/Constants/images";

interface BackgroundContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: any;
  lauoutSource?: any;
  paddingTop?: any;
}

const TabLayout: React.FC<BackgroundContainerProps> = ({
  children,
  style,
  backgroundColor,
  lauoutSource,
  paddingTop,
}) => {
  return (
    <ImageBackground
      style={styles.layout_img}
      source={lauoutSource || images.main_background}
      resizeMode="cover"
    >
      <View
        style={[
          {
            ...styles.container,
            paddingHorizontal: sizeHelper.calWp(30),
            gap: sizeHelper.calHp(50),
            paddingTop:
              paddingTop || sizeHelper.calHp(Platform.OS == "ios" ? 100 : 40),
          },
          style,
        ]}
      >
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout_img: {
    width: "101%",
    height: "100%",
  },
});

export default TabLayout;
