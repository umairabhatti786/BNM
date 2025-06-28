import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ToggleSwitch from "toggle-switch-react-native";


const CustomToggle = ({ isActive,setIsActive}, ) => {
  return (
    <>
       <ToggleSwitch
    isOn={isActive}
    onColor={"#F2F2F2"}
    offColor={"#F2F2F2"}
    size="small"
    // style={{ opacity: isActive ? 1 : 0.5 }}
    onToggle={setIsActive}
    thumbOnStyle={{
      width: 22,
      height: 22,
      borderRadius: 9999,
      backgroundColor: "#008000",
    }}
    thumbOffStyle={{
      width: 22,
      height: 22,
      borderRadius: 9999,
      backgroundColor: "#CCCCCC",
    }}
    trackOffStyle={{ width: 52, height: 30 }}
    trackOnStyle={{ width: 52, height: 30 }}
  />
    </>
 
  );
};

export default CustomToggle;
