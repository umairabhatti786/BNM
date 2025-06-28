import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { colors } from "../../utils/colors";
import { AppStyles } from "../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../assets/png/icons";
import CustomLine from "../CustomLine/CustomLine";
import DashedLine from "react-native-dashed-line";
import { windowHeight } from "../../utils/Commons";
import NewText from "../NewText";

const DropDownModal = ({
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
  onPress,
}) => {
  const [isEnabled, setIsEnabled] = useState(true);

  console.log("selectedObject", selectedObject);

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={handelModal}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <NewText
            color={colors.black}
            size={16}
            fontWeight={"700"}
            text={title}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            activeOpacity={0.6}
            style={styles.closeButton}
          >
            <Image
              source={icon.cross}
              resizeMode="contain"
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>
        <CustomLine />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            {data?.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.itemButton}
                  activeOpacity={0.6}
                  onPress={() => {
                    if(onPress){
                      onPress(item)

                      return
                    }
                    setSelectedObject(item);
                    setModalVisible(false);
                  }}
                >
                  <NewText
                    color={
                      selectedObject === item
                        ? mainColor || colors.secondary
                        : colors.gray100
                    }
                    size={15}
                    text={item}
                  />
                  {selectedObject === item && (
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
                  <View style={styles.dashedLineContainer}>
                    <DashedLine
                      dashLength={6}
                      dashThickness={1}
                      dashGap={5}
                      dashColor={colors.gray}
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DropDownModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "95%",
    maxHeight: windowHeight / 1.2,
    backgroundColor: colors.white,
    borderRadius: scale(15),
    paddingVertical: scale(10),
  },
  header: {
    ...AppStyles.justifyRow,
    paddingHorizontal: scale(15),
    paddingBottom: scale(10),
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    width: 18,
    height: 18,
    tintColor: colors.gray100,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: scale(20),
  },
  content: {
    flex: 1,
  },
  itemContainer: {
    width: "100%",
  },
  itemButton: {
    ...AppStyles.justifyRow,
    width: "100%",
    paddingVertical: verticalScale(13),
  },

  dashedLineContainer: {
    paddingVertical: verticalScale(13),
  },
});
