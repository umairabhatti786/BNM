import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SectionList,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import { image } from "../../../../assets/png/images";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import CategoryItem from "./CategoryItem";
import ProductCard from "../../../../components/ProductCard";
import ServicesModal from "./ServicesModal";
import Button from "../../../../components/Button";
import NewText from "../../../../components/NewText";
const CustomerHome = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isServiceModal,setIsServiceModal]=useState(false)

  const categoryData = [
    { name: "Need a Ride", img: image.ride },
    { name: "Retail Store Delivery", img: image.retailstore },
    { name: "Local Delivery", img: image.delivery },
    { name: "Furniture Delivery", img: image.furniture },
    { name: "Auto Parts Delivery", img: image.autoparts },
    { name: "Office Moving", img: image.office },
    { name: "Building Materials", img: image.materials },
  ];

  const productData = [
    {
      title: "Near by",
      data: [
        {
          name: "Orlando, FL",
          des: "Discover nearby drivers ready to assist with your delivery needs.",
          img: image.defimg100,
          endPoint: "Discover",
          isNearBy:true
        },
      ],
    },
    {
      title: "On-Demand",
      data: [
        {
          name: "Urgent Delivery?",
          des: "Swift and immediate solutions for your impromptu delivery requirements.",
          img: image.defimg200,
          rightImage: true,
          endPoint: "Checkout",
        },
      ],
    },
    {
      title: "Reserved",
      data: [
        {
          name: "Book in advance",
          des: "And secure your dedicated driver for future deliveries.",
          img: image.defimg300,
          endPoint: "Book Now",
        },
      ],
    },
    {
      title: "Dedicated",
      data: [
        {
          name: "Enjoy Personalized",
          des: "And reliable delivery options for recurring requirements.",
          img: image.defimg400,
          endPoint: "Checkout",
          rightImage: true,
        },
      ],
    },
    {
      title: "Special Purpose",
      data: [
        {
          name: "Need specialized handling?",
          des: "Explore our services for Heavy-duty equipment, Piano Moving, and more.",
          img: image.defimg500,
          endPoint: "Explore",
        },
      ],
    },
  ];
  return (
    <>
      <Screen
        backgroundColor={colors.white}
        statusBarColor={colors.primary}
        topBarColor={colors.primary}
        barStyle={"dark-content"}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: colors.primary,
            paddingLeft: scale(20),
            paddingRight: scale(30),

            paddingTop: Platform.OS=="ios"?10:30,
            paddingBottom: verticalScale(60),
          }}
        >
          <Image
            style={{ width: scale(85), height: verticalScale(22) }}
            source={image.appicon}
            resizeMode="contain"
          />
          <View style={AppStyles.row}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("DriverSearch")}
            >
              <Image
                style={{ width: scale(22), height: scale(22) }}
                source={icon.search}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Spacer width={scale(15)} />

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate("CustomerConversation");
              }}
            >
              <Image
                style={{ width: scale(22), height: scale(22) }}
                source={icon.message}
                resizeMode="contain"
              />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate("CustomerConversation");
                }}
                style={{
                  width: scale(22),
                  height: scale(22),
                  borderRadius: 999,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.black100,
                  position: "absolute",
                  top: -10,
                  right: -12,
                  borderColor: colors.primary,
                  borderWidth: 1.5,
                }}
              >
                <CustomText
                  text={"1"}
                  //   size={12}
                  color={colors.white}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: scale(30),
            borderTopEndRadius: scale(30),
            marginTop: verticalScale(-30),
            paddingTop: verticalScale(30),
            backgroundColor: colors.white,
          }}
        >
          <ScrollView>
            <View
              style={{
                ...AppStyles.justifyRow,
                marginBottom: verticalScale(20),
                paddingHorizontal: scale(15),
              }}
            >
              <NewText
                text={"Category"}
                size={16}
                fontWeight={"600"}
                fontFam={Inter.bold}
                color={colors.black}
              />
               <Button
                  text={"See All"}
                  height={28}
                  alignItems={"flex-end"}
                  bgColor={colors.white}
                  borderColor={"transparent"}
                  borderWidth={1}
                  size={16}
                  onPress={()=>setIsServiceModal(true)}
                  borderRadius={7}
                  textColor={colors.primary}
                  width={scale(110)}
                />
            
            </View>
            <View style={{ height: verticalScale(110) }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoryData.map((item, index) => {
                  return (
                    <View
                      style={{
                        marginLeft: scale(index == 0 ? 15 : 12),
                        marginRight: index == 3 ? scale(15) : 0,
                      }}
                    >
                      <CategoryItem
                        selectedCategory={selectedCategory}
                        index={index}
                        img={item.img}
                        name={item.name}
                        onPress={() => {
                          setSelectedCategory(index)

                          setTimeout(() => {
                            navigation.navigate("DriverSearch")

                            
                          }, 300);

                        }}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View
            // style={{paddingHorizontal:scale(15)}}
            >
              <SectionList
                sections={productData}
                scrollEnabled={false}
                style={{ marginBottom: verticalScale(30) }}
                contentContainerStyle={{ gap: 15 }}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <View style={{ paddingHorizontal: scale(15) }}>
                    <ProductCard 
                    onPress={()=>{
                      if(item.isNearBy){
                        navigation.navigate("DriverSearch",{nearBy:item.name})

                      }
                      else {
                        navigation.navigate("DriverSearch",)

                      }

                    }}
                    item={item} />
                  </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      //   marginTop: verticalScale(10),
                      paddingHorizontal: scale(15),
                    }}
                  >
                    <CustomText
                      text={title}
                      color={colors.black}
                      fontWeight="700"
                      fontFam={Inter.bold}
                      size={13.5}
                    />

                    <View
                      style={{
                        height: 0.4,
                        width: "85%",
                        backgroundColor: colors.gray1,
                        marginLeft: 20,
                      }}
                    ></View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </Screen>
      <ServicesModal
      setModalVisible={setIsServiceModal}
      modalVisible={isServiceModal}
      title={"All Services"}
      />
    </>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({});
