import { View, Text, Image } from "react-native";
import React from "react";
import CustomModal from "../CustomModal";
import { colors } from "../../utils/colors";
import NewText from "../NewText";
import { Inter } from "../../utils/Fonts";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
export default function index({ modalVisible, setModalVisible }) {
  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={"Cancel Order"}
    >
      <View style={{ marginVertical: 10 }}>
        <NewText
          color={colors.black}
          size={19}
          fontFam={Inter.semiBold}
          style={{ textAlign: "center" }}
          text={"Are you sure you want to cancel this order?"}
        />
        <NewText
          color={colors.gray200}
          size={15}
          fontWeight={"400"}
          lineHeight={22}
          text={
            "By proceeding with this cancellation, you acknowledge that an appropriate cancellation fee may apply. Please review our full Cancellation Policy for more details. "
          }
        />
        <CustomInput
          placeholder={"Reasons for Cancellation"}
          style={{ height: 100 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <CustomButton
          text={"No,go back"}
          height={35}
          onPress={()=>setModalVisible(false)}
          textColor={colors.gray}
          bgColor={colors.gray1}
          paddingHorizontal={15}
        />
        <CustomButton
          text={"Yes,Cancel"}
          height={35}
          onPress={()=>setModalVisible(false)}
          textColor={colors.white}
          bgColor={colors.red}
          paddingHorizontal={15}
        />
      </View>
      <View style={{alignItems:"center",marginTop:5}} >
        <CustomButton
          text={"Need Help?"}
          height={35}
          onPress={()=>setModalVisible(false)}
          textColor={colors.gray}
          bgColor={colors.gray1}
          paddingHorizontal={20}
        />
      </View>
    </CustomModal>
  );
}
