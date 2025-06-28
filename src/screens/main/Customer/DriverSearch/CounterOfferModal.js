import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  import Modal from "react-native-modal";
  import { scale, verticalScale } from "react-native-size-matters";
  import DashedLine from "react-native-dashed-line";
  import { AppStyles } from "../../../../utils/AppStyle";
  import { windowHeight } from "../../../../utils/Commons";
  import { colors } from "../../../../utils/colors";
  import NewText from "../../../../components/NewText";
  import CustomLine from "../../../../components/CustomLine/CustomLine";
  import { icon } from "../../../../assets/png/icons";
  import { image } from "../../../../assets/png/images";
import { Inter } from "../../../../utils/Fonts";
import Button from "../../../../components/Button";
import { Spacer } from "../../../../components/Spacer";
  
  const CounterOfferModal = ({
    modalVisible,
    handelModal,
    setModalVisible,
    data,
    setData,
    onSubmit,
    submitButtonColor,
    setCounterOffer,
    counterOffer,

  
    title,
  }) => {
    return (
      <Modal
        isVisible={modalVisible}
        onBackdropPress={handelModal}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "90%",
            //   height: 450,
            maxHeight: windowHeight / 1.2,
            backgroundColor: colors.white,
            borderRadius: scale(15),
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
          <View style={{padding:20}}>
          <View
        style={{
          ...AppStyles.justifyRow,
          ...styles.mainContainer,
          width: "100%",
        }}
      >
        <TextInput
                value={counterOffer}
                placeholder="$"
                keyboardType="numeric"
                placeholderTextColor={colors.gray}
                style={{
                  color: colors.black,
                  fontFamily: "600",
                  fontSize: 16,
                  fontFamily: Inter.bold,
                  height: 45,
                  width:"80%",
                }}
                onChangeText={(txt)=>{
                  setCounterOffer(txt)
                }}
              />
  
  <NewText
              color={colors.gray}
              size={14}
              fontWeight={"400"}
              text={"Optional"}
            />
      </View>

      <View style={{...AppStyles.justifyRow,marginTop:20}}>
                <Button
                  text={"Cancel"}
                  height={28}
                  bgColor={"#EEEEEE"}
                  borderColor={"transparent"}
                  borderWidth={1}
                  size={14}
                  onPress={()=>setModalVisible(false)}
                //   onPress={onCounterOffer}
                  borderRadius={7}
                  textColor={colors.gray}
                  width={scale(70)}
                />
                <Button
                  text={"Submit"}
                  height={28}
                  bgColor={ submitButtonColor|| colors.primary}
                  borderColor={"transparent"}
                  borderWidth={1}
                  size={14}
                  onPress={onSubmit}
                  borderRadius={7}
                  textColor={colors.white}
                  width={scale(70)}
                />
              </View>

          </View>

       
        
        </View>
      </Modal>
    );
  };
  
  export default CounterOfferModal;
  
  const styles = StyleSheet.create({

    mainContainer: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.black40,
        paddingHorizontal: 15,
        backgroundColor:colors.white,
      },
   
  });
  