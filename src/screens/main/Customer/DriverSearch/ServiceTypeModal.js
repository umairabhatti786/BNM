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
  import { image } from "../../../../assets/png/images";
  import { scale, verticalScale } from "react-native-size-matters";
import { AppStyles } from "../../../../utils/AppStyle";
import { icon } from "../../../../assets/png/icons";
import { colors } from "../../../../utils/colors";
import NewText from "../../../../components/NewText";
import DashedLine from "react-native-dashed-line";
  
  const ServiceTypeModal = ({
    modalVisible,
    setModalVisible,
    selectedObject,
    setSelectedObject,
    title,
    setDelivertype,
  }) => {
    const serviceData = [
     "On-Demand",
     "Scheduled",
     "Dedicated"
   
    ];
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
      >
          <ScrollView>
          <View >
            {serviceData?.map((item, index) => {
              return (
                <View style={{ width: "100%" }}>
                  <TouchableOpacity
                    style={{ ...AppStyles.justifyRow, width: "100%" }}
                    activeOpacity={0.6}
                    onPress={() => {
                      setDelivertype?.(item)
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

                  {serviceData.length - 1 !== index && (
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
  
  export default ServiceTypeModal;
  
  const styles = StyleSheet.create({});
  