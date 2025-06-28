import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  
  import CustomModal from "../../../../components/CustomModal";
  import { scale, verticalScale } from "react-native-size-matters";
  import { AppStyles } from "../../../../utils/AppStyle";
  import { icon } from "../../../../assets/png/icons";
  import { colors } from "../../../../utils/colors";
  import NewText from "../../../../components/NewText";
  import DashedLine from "react-native-dashed-line";
  import CustomRangeSlider from "../../../../components/RangeSlider";
  import { image } from "../../../../assets/png/images";
  import CustomLine from "../../../../components/CustomLine/CustomLine";
import CustomToggle from "../../../../components/CustomToggle";
import Button from "../../../../components/Button";
  
  const DedicatedAgreementModal = ({ modalVisible, setModalVisible,onPressCard,onBook }) => {
 const [isSavePayment,setIsSavePayment]=useState(false)
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Dedicated Agreement"}
     
      >
        <View style={{gap:20,padding:10}} >
        <NewText
                  color={colors.gray200}
                  size={15}
                  fontWeight={"600"}
                  text={" I <<name>> confirm that I will pay $________ in exchange of _____service for ______  weeks duration with ___  Mover. "}
                />
                <View style={{...AppStyles.row,gap:5}}>
                <NewText
                  color={colors.gray200}
                  size={15}
                  fontWeight={"600"}
                  text={"Download a Cop"}
                />
                   <NewText
                  color={colors.primary}
                  size={15}
                  textDecorationLine={"underline"}

                  fontWeight={"500"}
                  text={"here"}
                />
                

                </View>
               

                <Button
                  text={"Book Now"}
                  height={35}
                  bgColor={colors.primary}
                  borderColor={"transparent"}
                  borderWidth={1}
                  size={16}
                  onPress={onBook}
                  borderRadius={7}
                  textColor={colors.white}
                />

        </View>
       
        {/* <View style={{ ...AppStyles.box, borderRadius: 15, marginTop: -10 }}>
          <CardConTainer
            descripation="No extra charges"
            title={"Add Crebit Card"}
            img={image.creditCard}
            onPress={onPressCard}
          />
          <CardConTainer
            descripation="Third Party transaction fee may applies"
            title={"Others"}
            img={image.home}
          /> */}
        {/* </View> */}
      </CustomModal>
    );
  };
  
  export default DedicatedAgreementModal;
  
  const styles = StyleSheet.create({
    cardImage: { width: 50, height: 50 },
  });
  