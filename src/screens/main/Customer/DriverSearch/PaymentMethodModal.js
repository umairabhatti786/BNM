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

const PaymentMethodModal = ({ modalVisible, setModalVisible,onPressCard }) => {
  const CardConTainer = ({ img, title, descripation,onPress }) => {
    return (
      <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      >
        <View style={{ ...AppStyles.justifyRow, padding: 15 }}>
          <View style={{ ...AppStyles.row, gap: 10 }}>
            <Image style={styles.cardImage} source={img} />
            <View style={{ gap: 8, width:"70%"}}>
              <NewText
                color={colors.black}
                size={15}
                fontWeight={"700"}
                text={title}
              />
              <NewText
                color={colors.gray200}
                size={13}
                fontWeight={"400"}
                text={descripation}
              />
            </View>
          </View>

          <Image
            style={{ width: 15, height: 15 }}
            source={icon.nexticon}
            resizeMode="contain"
          />
        </View>

        <CustomLine />
      </TouchableOpacity>
    );
  };
  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={"Payment Method"}
      //   width={"100%"}
      // mainPadding={10}
      lineNotShow={true}
    >
      <View style={{ ...AppStyles.box, borderRadius: 15, marginTop: -10 }}>
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
          onPress={onPressCard}

        />
      </View>
    </CustomModal>
  );
};

export default PaymentMethodModal;

const styles = StyleSheet.create({
  cardImage: { width: 50, height: 50 },
});
