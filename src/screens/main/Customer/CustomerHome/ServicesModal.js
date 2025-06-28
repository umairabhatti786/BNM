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
import CategoryItem from "./CategoryItem";
import { useNavigation } from "@react-navigation/native";

const ServicesModal = ({
  modalVisible,
  handelModal,
  setModalVisible,
  selectedObject,
  title,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categoryData = [
    { name: "Need a Ride", img: image.ride },
    { name: "Retail Store Delivery", img: image.retailstore },
    { name: "Local Delivery", img: image.delivery },
    { name: "Furniture Delivery", img: image.furniture },
    { name: "Auto Parts Delivery", img: image.autoparts },
    { name: "Office Moving", img: image.office },
    { name: "Building Materials", img: image.materials },
  ];

  const navigation = useNavigation();
  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={title}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categoryData.map((item, index) => {
          return (
            <View
              style={{
                margin: 10,
              }}
            >
              <CategoryItem
                selectedCategory={selectedCategory}
                index={index}
                img={item.img}
                name={item.name}
                onPress={() => {
                  navigation.navigate("DriverSearch");
                  setSelectedCategory(index);
                  setModalVisible(false);

                }}
              />
            </View>
          );
        })}
      </View>
    </CustomModal>
  );
};

export default ServicesModal;

const styles = StyleSheet.create({});
