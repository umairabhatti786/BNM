import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AppStyles } from "../../../../utils/AppStyle";
import ToggleSwitch from "toggle-switch-react-native";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/colors";
import DashedLine from "react-native-dashed-line";

const ScheduleContainer = ({ isActive,showLine,setIsActive,isEdit,day,time,isEditDisable,isEditColor,onEdit }, ) => {
  return (
    <View>
      <View style={AppStyles.justifyRow}>
        <View style={{ ...AppStyles.row, width: "30%" }}>
          <ToggleSwitch
            isOn={isActive}
            onColor={"#F2F2F2"}
            offColor={"#F2F2F2"}
            size="small"
            style={{ opacity: isActive ? 1 : 0.5 }}
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
          <Spacer width={scale(8)} />

          <CustomText text={day} color={colors.black} size={14} />
        </View>

        <CustomText text={time} color={colors.gray200} size={12} />
        {/* <TouchableOpacity
        activeOpacity={0.6}

        onPress={onEdit}
        disabled={isEditDisable}
        >
        <CustomText text={ isEdit ?"Edit":"Save"} color={ isEditColor||  colors.secondary} size={14} />


        </TouchableOpacity> */}
      </View>

      <View style={{ marginVertical: verticalScale(13) }}>
          {
              showLine&&(
                <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />

              )
          }
     
      </View>
    </View>
  );
};

export default ScheduleContainer;
