import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppStyles } from "../../utils/AppStyle";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import CustomText from "../CustomText";
import NewText from "../NewText";

const Days = ({ day, onPress, selectedDays,width,paddingVertical,size }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        borderColor: colors.black40,
        borderWidth: selectedDays.includes(day) ? -1 : 1,
        backgroundColor: selectedDays.includes(day)
          ? colors.primary
          : colors.white,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical:paddingVertical|| 5,
        width:width || 45,
        borderRadius: 8,
      }}
    >
      <NewText
        color={selectedDays.includes(day) ? colors.white : colors.black40}
        text={day}
        size={size ||  18}
        fontWeight={"700"}
      />
    </TouchableOpacity>
  );
};
export default Days;
