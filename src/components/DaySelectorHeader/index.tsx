import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { appStyles } from "../../utils/GlobalStyles";
import sizeHelper from "../../utils/Helpers";
import icons from "../../utils/Constants/icons";
import { theme } from "../../utils/Themes";

const days = ["S", "M", "T", "W", "T", "F", "S"];

const DaySelectorHeader = () => {
  const [selectedDay, setSelectedDay] = useState(2); // e.g., 'T' (index 2)

  return (
    <View style={appStyles.rowjustify}>
      <View style={{ ...appStyles.row,gap:sizeHelper.calWp(20) }}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedDay(index)}
            style={styles.dayButton}
          >
            <Text
              style={[
                styles.dayText,
                selectedDay === index && styles.selectedText,
              ]}
            >
              {day}
            </Text>
            {selectedDay === index && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity>
        <Image style={styles.button_icon} source={icons.notification} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f3742", // dark blue background similar to your image
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  dayButton: {
    alignItems: "center",
    // width: 40,
  },
  dayText: {
    color: theme.colors.white+"50",
    fontSize: sizeHelper.calHp(18),
    fontWeight: "500",
  },
  selectedText: {
    color: "white",
    fontWeight: "700",
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: 12,
    backgroundColor: "white",
    borderRadius: 1,
  },
  button_icon: {
    width: sizeHelper.calWp(60),
    height: sizeHelper.calWp(60),
    resizeMode: "contain",
  },
});

export default DaySelectorHeader;
