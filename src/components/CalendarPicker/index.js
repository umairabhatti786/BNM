import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import NewText from "../NewText";
import { AppStyles } from "../../utils/AppStyle";
import { icon } from "../../assets/png/icons";

const CalendarPicker = ({ width, text,onPress }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        ...AppStyles.justifyRow,
        ...styles.daysContainer,
        width: width || "100%",
      }}
    >
      <NewText
        text={text || "To"}
        color={colors.gray}
        fontWeight="700"
        size={16}
      />

      <Image
        style={{ width: 18, height: 18 }}
        resizeMode="contain"
        source={icon.calendar}
      />
    </TouchableOpacity>
  );
};
export default CalendarPicker;

const styles = StyleSheet.create({
  daysContainer: {
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal: 10,
    backgroundColor:colors.white,
  },
});
