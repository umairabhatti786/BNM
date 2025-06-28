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
  
  import { scale, verticalScale } from "react-native-size-matters";
import CustomModal from "../CustomModal";
import DashedLine from "react-native-dashed-line";
import { colors } from "../../utils/colors";
import { icon } from "../../assets/png/icons";
import NewText from "../NewText";
import { AppStyles } from "../../utils/AppStyle";
  
  const AllServicesModal = ({
    modalVisible,
    setModalVisible,
    selectedObject,
    setSelectedObject,
    title,
    servicesData,
  }) => {
  ;
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
      >
          <ScrollView>
          <View >
            {servicesData?.map((item, index) => {
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
                          ? colors.primary
                          : colors.gray100
                      }
                      size={15}
                      text={item}
                    />

                    {selectedObject == item && (
                      <Image
                        source={icon.tick}
                        resizeMode="contain"
                        style={{
                          width: 16,
                          height: 16,
                          tintColor: colors.primary,
                        }}
                      />
                    )}
                  </TouchableOpacity>

                  {servicesData?.length - 1 !== index && (
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
          </View>
        </ScrollView>
      
      </CustomModal>
    );
  };
  
  export default AllServicesModal;
  
  const styles = StyleSheet.create({});
  