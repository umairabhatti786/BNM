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
  
  const AddPaymentMethodModal = ({ modalVisible, setModalVisible,onPressCard,onPay,buttonTitle }) => {
 const [isSavePayment,setIsSavePayment]=useState(false)
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Add Payment Method"}
        //   width={"100%"}
        // mainPadding={10}
      >
        <View style={{gap:20,padding:10}} >
        <NewText
                  color={colors.gray200}
                  size={15}
                  fontWeight={"600"}
                  text={"**********************************"}
                />
                <View style={{...AppStyles.row,gap:10}}>
                <NewText
                  color={colors.gray200}
                  size={15}
                  fontWeight={"600"}
                  text={"**********"}
                />
                   <NewText
                  color={colors.gray200}
                  size={15}
                  fontWeight={"500"}
                  text={"Payment API"}
                />
                  <NewText
                  color={colors.gray200}
                  size={15}
                  fontWeight={"600"}
                  text={"**********"}
                />

                </View>
                <NewText
                  color={colors.gray200}
                  size={15}
                  fontWeight={"600"}
                  text={"**********************************"}
                />

                <View style={{...AppStyles.row,gap:10}} >

                <CustomToggle isActive={isSavePayment} setIsActive={setIsSavePayment} />
                <NewText
                  color={colors.black}
                  size={15}
                  fontWeight={"500"}
                  text={"Save Payment for future"}
                />


                </View>
                <Button
                  text={buttonTitle||  "Pay"}
                  height={35}
                  bgColor={colors.primary}
                  borderColor={"transparent"}
                  borderWidth={1}
                  size={18}
                  onPress={onPay}
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
  
  export default AddPaymentMethodModal;
  
  const styles = StyleSheet.create({
    cardImage: { width: 50, height: 50 },
  });
  