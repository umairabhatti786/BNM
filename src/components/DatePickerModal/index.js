import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  import Modal from "react-native-modal";
  import CustomText from "../CustomText";
  import { Spacer } from "../Spacer";
  import { colors } from "../../utils/colors";
  import { AppStyles } from "../../utils/AppStyle";
  import CustomButton from "../CustomButton";
  import { scale, verticalScale } from "react-native-size-matters";
  import { image } from "../../assets/png/images";
  import { icon } from "../../assets/png/icons";
  import CustomLine from "../CustomLine/CustomLine";
  import DashedLine from "react-native-dashed-line";
  import { windowHeight } from "../../utils/Commons";
  import NewText from "../NewText";

  
  const DatePickerModal = ({
    modalVisible,
    handelModal,
    startButtonText,
    onStartButton,
    setModalVisible,
    onSave,
    data,
    selectedObject,
    setSelectedObject,
    title,
    mainColor,
  }) => {
    const [isEnabled, setIsEnabled] = useState(true);
  
    console.log("selectedObject", selectedObject);
  
    return (
      <Modal
        isVisible={modalVisible}
        onBackdropPress={handelModal}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "95%",
            //   height: 450,
            maxHeight: windowHeight / 1.2,
            backgroundColor: colors.white,
            borderRadius: scale(10),
            alignSelf: "center",
          }}
        >
          {/* <Spacer height={10} /> */}
          <View style={{ ...AppStyles.justifyRow, padding: scale(15) }}>
            <NewText
              color={colors.black}
              size={16}
              fontWeight={"700"}
              text={title}
            />
  
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              activeOpacity={0.6}
              //   disabled={!onShowPassword}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={icon.cross}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: colors.gray100,
                }}
              />
            </TouchableOpacity>
          </View>
  
          <CustomLine />
          <ScrollView>
            {/* <View style={{ padding: scale(20) }}>
              {data?.map((item, index) => {
                return (
                  <View style={{ width: "100%" }}>
                    <TouchableOpacity
                      style={{ ...AppStyles.justifyRow, width: "100%" }}
                      activeOpacity={0.6}
                      onPress={() => {
                        setSelectedObject(item);
  
                        setModalVisible(false);
                      }}
                    >
                      <NewText
                        color={
                          selectedObject == item
                            ? mainColor || colors.secondary
                            : colors.gray100
                        }
                        size={15}
                        // fontWeight={"700"}
                        text={item}
                      />
  
                      {selectedObject == item && (
                        <Image
                          source={icon.tick}
                          resizeMode="contain"
                          style={{
                            width: 16,
                            height: 16,
                            tintColor: mainColor || colors.secondary,
                          }}
                        />
                      )}
                    </TouchableOpacity>
  
                    {data.length - 1 !== index && (
                      <View style={{ paddingVertical: verticalScale(13) }}>
                        <DashedLine
                          dashLength={6}
                          dashThickness={1}
                          dashGap={5}
                          dashColor={colors.gray}
                        />
                      </View>
                    )}
                  </View>
                );
              })}
            </View> */}
          </ScrollView>
  
          {/* <View style={AppStyles.justifyRow}>
              <View style={AppStyles.row}>
                <CustomButton
                  text={startButtonText}
                  height={35}
                  onPress={onStartButton}
                  textColor={colors.secondary}
                  bgColor={colors.white}
                  borderColor={colors.secondary}
                  borderWidth={1.5}
                  paddingHorizontal={scale(10)}
                />
                <Spacer width={scale(10)} />
    
                <CustomButton
                  text={"Save"}
                  height={35}
                  onPress={onSave}
    
                  
                  textColor={colors.white}
                  bgColor={colors.secondary}
                  //  borderColor={colors.secondary}
                  //  borderWidth={1}
                  paddingHorizontal={scale(15)}
                />
              </View>
    
              <CustomButton
                text={"Cancel"}
                height={35}
                onPress={()=>setModalVisible(false)}
                textColor={colors.gray}
                bgColor={"#EEEEEE"}
                //  borderColor={colors.secondary}
                //  borderWidth={1}
                paddingHorizontal={scale(12)}
              />
            </View> */}
        </View>
      </Modal>
    );
  };
  
  export default DatePickerModal;
  
  const styles = StyleSheet.create({
    imgContainer: {
      width: 160,
      height: 160,
      borderRadius: 999,
      backgroundColor: colors.grey400,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  