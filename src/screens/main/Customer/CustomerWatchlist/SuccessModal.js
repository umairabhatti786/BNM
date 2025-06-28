import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Modal from "react-native-modal";
  
  import { scale, verticalScale } from "react-native-size-matters";
  import { windowHeight } from "../../../../utils/Commons";
  import { colors } from "../../../../utils/colors";
  import { AppStyles } from "../../../../utils/AppStyle";
  import Button from "../../../../components/Button";
  import { icon } from "../../../../assets/png/icons";
  import NewText from "../../../../components/NewText";
import { Spacer } from "../../../../components/Spacer";
  
  const SuccessModal = ({ modalVisible, setModalVisible,onReturnHome }) => {
    return (
      <Modal
        isVisible={modalVisible}
        //   onBackdropPress={handelModal}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "92%",
            maxHeight: windowHeight / 1.3,
            backgroundColor: colors.white,
            borderRadius: scale(15),
            alignSelf: "center",
          }}
        >
          <View
            style={{
              alignSelf: "flex-end",
              paddingHorizontal: 15,
              paddingTop: 15,
            }}
          >
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
  
          <View style={{ width: "100%", alignItems: "center" }}>
            <NewText
              color={colors.black}
              style={{ textAlign: "center" }}
              size={20}
              fontWeight={"700"}
              text={"Success!"}
            />
            <Spacer height={10}/>
               <NewText
              color={colors.gray200}
              style={{ textAlign: "center" }}
              size={15}
              fontWeight={"400"}
              text={"Your selected action is successful."}
            />
  
            <View
              style={{
                ...AppStyles.row,
                width: "100%",
                justifyContent: "center",
                padding: 20,
                gap: 20,
              }}
            >
              <Button
                text={"Dismiss"}
                height={28}
                bgColor={"#EEEEEE"}
                borderColor={"transparent"}
                borderWidth={1}
                paddingHorizontal={30}
                size={14}
                  onPress={()=>setModalVisible(false)}
                borderRadius={7}
                textColor={colors.gray}
              />
              <Button
                text={"Return to Home"}
                height={28}
                bgColor={colors.primary}
                borderColor={"transparent"}
                borderWidth={1}
                size={14}
                  onPress={onReturnHome}
                borderRadius={7}
                textColor={colors.white}
                paddingHorizontal={10}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default SuccessModal;
  
  const styles = StyleSheet.create({});
  