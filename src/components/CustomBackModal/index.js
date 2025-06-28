import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
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
import { scale } from "react-native-size-matters";

const CustomBackModal = ({ modalVisible, handelModal ,startButtonText,onStartButton,setModalVisible,onSave,saveButtonText,cancelText},) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={handelModal}
      style={{ flex:1,}}
      >
       <View
        style={{
          width: "98%",
        //   height: 450,
          backgroundColor: colors.white,
          borderRadius: scale(15),
          padding: scale(15),
        }}>
        <Spacer height={10} />


        <CustomText
          color={colors.black}
          size={16}
        //   fontWeight={"700"}
          text={"Are you sure you want to go back?"}
        />

        <Spacer height={20} />
        <View style={AppStyles.justifyRow}>
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
              text={ saveButtonText|| "Save"}
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
            text={cancelText|| "Cancel"}
            height={35}
            onPress={()=>setModalVisible(false)}
            textColor={colors.gray}
            bgColor={"#EEEEEE"}
            //  borderColor={colors.secondary}
            //  borderWidth={1}
            paddingHorizontal={scale(12)}
          />
        </View>
      </View> 
    </Modal>
  );
};

export default CustomBackModal;

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
