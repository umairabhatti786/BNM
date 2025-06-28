import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomModal from "../CustomModal";
import { AppStyles } from "../../utils/AppStyle";
import { image } from "../../assets/png/images";
import { colors } from "../../utils/colors";
// import NewText from "../NewText";
import DashedLine from "react-native-dashed-line";
import { Inter } from "../../utils/Fonts";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";
import CustomInput from "../CustomInput";
import NewText from "../NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../assets/png/icons";
export default function index({ modalVisible, setModalVisible }) {
  const [dropPoints, setdropPoints] = useState([
    {
      // dropFromAddress: nearby ? nearby : nearbyAddress,
      dropOffAddress: "",
      dropOffPlaceHolder: "Drop Off Address",
    },
  ]);
  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={"Modify Order"}
    >
      <View style={{ marginVertical: 10 }}>
        <NewText
          color={colors.black}
          size={19}
          fontFam={Inter.semiBold}
          style={{ textAlign: "center" }}
          text={"Are you sure you want to modify this order?"}
        />
        <View
          style={{
            ...AppStyles.box,
            borderRadius: 15,
            marginTop: 15,
            padding: 15,
            paddingHorizontal: 15,
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 18, height: 18, marginRight: 10 }}
            resizeMode="contain"
            source={require("../../assets/png/icons/pin.png")}
          />
          <NewText color={colors.gray} size={18} text={"Town Hall, New York"} />
        </View>
        {/* <View
          style={{
            ...AppStyles.box,
            borderRadius: 15,
            marginTop: 10,
            padding: 15,
            paddingHorizontal: 15,
            flexDirection: "row",
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: 18, height: 18, marginRight: 10 }}
            source={require("../../assets/png/icons/pin.png")}
          />
          <NewText color={colors.gray} size={18} text={"Drop Off Address"} />
        </View> */}
        {dropPoints.map((item, index) => {
                return (
                  <>
                    <View style={{ paddingTop: verticalScale(10) }}>
                      <CustomInput
                        leftImage={icon.location}
                        placeholder={item.dropOffPlaceHolder}
                        value={item.dropOffAddress}
                        onChangeText={(txt) => {
                          const updates = [...dropPoints];
                          updates[index] = {
                            ...updates[index],
                            dropOffAddress: txt, // Set the new property
                          };
                          setdropPoints(updates);
                        }}
                      />
                    </View>
                  </>
                );
              })}

              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  let data = [...dropPoints];
                  data.push({
                    dropOffPlaceHolder: "Drop  Off Address",
                    dropOffAddress: "",
                  });

                  setdropPoints(data);
                }}
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  paddingVertical: verticalScale(10),
                }}
              >
                <CustomText
                  text={"Add more drop point"}
                  color={colors.gray100}
                  fontWeight="500"
                  fontFam={Inter.medium}
                  size={14}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{
                    width: scale(22),
                    height: scale(22),
                    // tintColor: index > 0 ? colors.black : colors.white,
                  }}
                  source={icon.addlocation}
                  resizeMode="contain"
                />
              </TouchableOpacity>
        {/* <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <NewText
            color={colors.gray}
            size={14}
            text={"Add more drop point "}
          />
          <Image
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
            source={require("../../assets/png/icons/addPin.png")}
          />
        </View> */}
        <DashedLine
          style={{ width: "100%", marginVertical: 10 }}
          dashLength={3}
          dashThickness={1}
          dashGap={3}
          dashColor={colors.gray}
        />
        <View>
          <NewText
            fontWeight={"400"}
            color={colors.gray200}
            size={12}
            text={"Total Distance: 10 Miles"}
          />
        </View>
        <View style={{ marginTop: 5, marginBottom: 10 }}>
          <NewText
            fontWeight={"400"}
            color={colors.gray200}
            size={12}
            text={"Total Time: 01:12 hr"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <NewText
            fontWeight={"400"}
            color={colors.gray200}
            size={12}
            text={"New Cost: "}
          />

          <NewText
            fontWeight={"700"}
            color={colors.gray200}
            size={12}
            text={"$80"}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal:20,
          paddingVertical:10
        }}
      >
        <CustomButton
          text={"Cancel"}
          height={35}
            onPress={()=>setModalVisible(false)}
          textColor={colors.gray}
          bgColor={colors.gray1}
          paddingHorizontal={20}
        />
        <CustomButton
          text={"Submit"}
          height={35}
          onPress={()=>setModalVisible(false)}
          //   onPress={onStartButton}
          textColor={colors.white}
          bgColor={colors.primary}
          paddingHorizontal={20}
        />
      </View>
    </CustomModal>
  );
}
