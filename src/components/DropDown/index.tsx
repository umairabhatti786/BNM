
import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import CustomText from "../Text";
import icons from "../../utils/Constants/icons";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";

const CustomDropDown = ({
  data,
  value,
  placeholderColor,
  placeholder,
  dropWidth,
  onSelect,
  error,
  mainWidth,
  maxHeight,
  search,
  mainStyles,
  dropMaxWidth,
  dropLeftMargin,
  label,
}: any) => {
  const [open, setOpen] = useState(false);
  const renderRightIcon = () => (
    <View style={styles.iconStyle}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={icons.down_arrow}
        resizeMode="contain"
      />
    </View>
  );
  return (
    <View style={{  width:mainWidth ||"100%" }}>
    {label && (
      <View
        style={{
            marginBottom: sizeHelper.calHp(10),
        }}
      >
        <CustomText
            text={label}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
      </View>
    )}

<Dropdown
        style={[
          {
            ...styles.dropdown,
            width:  "100%",
            backgroundColor: theme.colors.Input_field,
          },
          mainStyles, // This will ensure that the styles object is properly merged
        ]}
        containerStyle={{
          minHeight: 100,
          borderRadius: sizeHelper.calWp(20),
          overflow: "hidden",
          width: dropWidth || "90%",
          maxWidth: dropMaxWidth,
          marginLeft: dropLeftMargin,
          borderWidth:1
        }}
        placeholderStyle={{
          color: theme.colors.placeholder,
          fontSize: sizeHelper.calHp(21),
          fontFamily: fonts.Inter_Regular,
          fontWeight: "500",
        }}
        selectedTextStyle={{
          fontSize: sizeHelper.calHp(21),
          color: theme.colors.black,
          fontFamily: fonts.Inter_Regular,
          fontWeight: "500",
        }}
        renderRightIcon={renderRightIcon}
        renderItem={(item) => {
          return (
            <View
              style={{
                height: sizeHelper.calHp(50),
                justifyContent: "center",
                paddingHorizontal: sizeHelper.calWp(20),
                paddingTop: sizeHelper.calHp(10),
              }}
            >
              <CustomText text={item.label} />
            </View>
          );
        }}
        data={data}
        maxHeight={maxHeight || 220}
        labelField="label"
        valueField="label"
        search={search}
        placeholder={placeholder || "Select"}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={onSelect}
      />
     
       
     
    </View>
  );
};

export default CustomDropDown;
const styles = StyleSheet.create({
  dropdown: {
    height: sizeHelper.calHp(80),
    paddingHorizontal: sizeHelper.calWp(25),
    borderRadius: sizeHelper.calWp(15),
    borderWidth: 1,
    borderColor: theme.colors.highlght,
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    height: sizeHelper.calWp(35),
    width: sizeHelper.calWp(35),
  },
});
