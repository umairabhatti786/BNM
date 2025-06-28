import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../assets/png/icons";
import { Spacer } from "../Spacer";
import CustomText from "../CustomText";
import { useNavigation } from "@react-navigation/native";
import NewText from "../NewText";
import { fontSizes } from "../../styles/constants";

const CategoryBottomTab = ({
  color,
  label3,
  label2,
  label1,
  onLabel1,
  onLabel2,
  onLabel3,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: verticalScale(50),
        backgroundColor: colors.white,
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }}
    >
      <TouchableOpacity onPress={onLabel1} style={styles.container}>
        <NewText
          color={color || colors.secondary}
          size={14}
          style={{ textAlign: "center" }}
          text={label1 || "Save"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onLabel2} style={styles.container}>
        <NewText
          color={color || colors.secondary}
          size={14}
          style={{ textAlign: "center" }}
          text={label2 || "Preview"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onLabel3} style={styles.container}>
        <NewText
          color={color || colors.secondary}
          size={14}
          style={{ textAlign: "center" }}
          text={label3 || "Post"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryBottomTab;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "33%",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: colors.gray100,
  },
  bottomBarText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.primary,
    textAlign: "center",
    fontWeight: "500",
  },
});
