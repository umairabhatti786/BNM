import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AppStyles } from "../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { image } from "../../assets/png/images";
import { Inter } from "../../utils/Fonts";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";
import { icon } from "../../assets/png/icons";
import CustomText from "../CustomText";
import CustomLine from "../CustomLine/CustomLine";
import HorizontalContainer from "../HorizontalContainer";
import DashedLine from "react-native-dashed-line";
import CustomButton from "../CustomButton";
import Collapsible from "react-native-collapsible";
import NewText from "../NewText";
import Button from "../Button";
import CustomInput from "../CustomInput";
import ServiceTypeModal from "../../screens/main/Customer/DriverSearch/ServiceTypeModal";
import ServiceDescriptionModal from "../../screens/main/Customer/DriverSearch/ServiceDescriptionModal";
import CategoryModal from "../../screens/main/Customer/DriverSearch/CategoryModal";

const CustomerTicket = ({
  item,
  onPress,
  isNoShadow,
  backgroundColor,
  isWatchList,
  onWatchList,
  setWatchListObject,
  watchListObject,
  onPressProfile,
  onBook,
  onCounterOffer,
  isOpen,
  setDelivertype,
  disableCollapsible
}) => {
  const [isCollapsible, setIsCollapsible] = useState(isOpen|| item?.isOpen);
  const [isServiceModal,setIsServiceModal]=useState(false)
  const [selectedServiceType,setSelectedServiceType]=useState("Scheduled")

  const [isCategoryodal,setIsCategoryModal]=useState(false)
  const [selectedCategory,setSelectedCategory]=useState("Delivery")


  const [isServiceDescriptionModal,setIsServiceDescriptionModal]=useState(false)
  const [selectedService,setSelectedService]=useState("Moving")
  const [isAddons,setIsAddons]=useState(true)

  return (
    <>

<View
      style={{
        elevation: 3,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: -4, height: -2 },
        shadowOpacity: !isNoShadow ? 0.2 : 0,
        shadowRadius: 5,
      }}
    >
      <View
        style={{
          backgroundColor: backgroundColor || colors.white,
          elevation: 3,
          shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          shadowOffset: { width: 4, height: 5 },
          shadowOpacity: !isNoShadow ? 0.2 : 0,
          shadowRadius: 5,
          borderRadius: scale(15),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={{
            flexDirection: "row",
            flex: 1,
            paddingLeft: scale(10),
            paddingVertical: verticalScale(10),
          }}
        >
          <TouchableOpacity
            onPress={onPressProfile}
            style={{
              width: scale(52),
              height: scale(52),
              borderRadius: scale(7),
              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode={"contain"}
              source={item?.img}
            />
          </TouchableOpacity>
          <View
            style={{
              alignSelf: "flex-start",
              flex: 1,
              paddingHorizontal: scale(10),
              paddingVertical: verticalScale(2),
            }}
          >
            <View
              style={{
                ...AppStyles.justifyRow,
                paddingBottom: verticalScale(10),
              }}
            >
              <View style={{ ...AppStyles.row }}>
                <TouchableOpacity onPress={onPressProfile}>
                  <NewText
                    text={item?.name}
                    size={15}
                    fontWeight={"700"}
                    fontFam={Inter.bold}
                    color={colors.black}
                  />
                </TouchableOpacity>

                <Spacer width={scale(8)} />
                <View
                  style={{
                    width: scale(6),
                    height: scale(6),
                    borderRadius: 999,
                    backgroundColor:
                      item?.active == "Available"
                        ? colors.green
                        : item?.active == "Busy"
                        ? colors.red
                        : item?.active == "On Schedule"
                        ? colors.yellow
                        : colors.gray,
                  }}
                />
                <Spacer width={scale(5)} />

                <NewText text={item?.active} size={12} color={colors.gray} />
                <Spacer width={scale(5)} />
              </View>
              <View style={AppStyles.row}>
                <Image
                  style={{ width: 10, height: 14 }}
                  resizeMode={"contain"}
                  source={icon.star}
                />
                <Spacer width={scale(7)} />

                <NewText
                  text={"4.9"}
                  size={15}
                  fontWeight={"600"}
                  fontFam={Inter.semiBold}
                  color={colors.black}
                />
                <Spacer width={scale(7)} />
                <TouchableOpacity onPress={onWatchList}>
                  <Image
                    style={{
                      width: 16,
                      height: 19,
                      tintColor: watchListObject
                        ?.map((da) => da?.id)
                        .includes(item?.id)
                        ? colors.primary
                        : colors.gray100,
                    }}
                    resizeMode={"contain"}
                    source={icon.watchlist}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>!disableCollapsible&& setIsCollapsible(!isCollapsible)}
              style={{ ...AppStyles.justifyRow }}
            >
              <View style={{ ...AppStyles.row }}>
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.location}
                />

                <Spacer width={scale(5)} />

                <NewText text={item?.distance} size={12} color={colors.gray} />
                <Spacer width={scale(7)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.clock}
                />

                <Spacer width={scale(5)} />

                <NewText text={item?.time} size={12} color={colors.gray} />
                <Spacer width={scale(5)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.car}
                />

                <Spacer width={scale(7)} />

                <NewText text={item.vehicle} size={12} color={colors.gray} />
                <Spacer width={scale(5)} />
              </View>

              <Image
                style={styles.iconContainer}
                resizeMode={"contain"}
                source={isCollapsible == false ? icon.up : icon.down}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsible}>
          <View>
            <CustomLine />
            <View style={{ paddingHorizontal: scale(15) }}>
              <Spacer height={verticalScale(15)} />

              <View style={AppStyles.justifyRow}>
                <NewText text={"Type"} size={15} color={colors.gray200} />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(120)}
                  dropDown={true}
                  editable={false}
                  value={selectedServiceType}
                  onShowPassword={()=>setIsServiceModal(true)}
                  rightImage={icon.down}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
              </View>
              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>
              <View style={AppStyles.justifyRow}>
                <NewText text={"Category"} size={15} color={colors.gray200} />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(110)}
                  dropDown={true}
                  editable={false}
                  value={selectedCategory}
                  onShowPassword={()=>setIsCategoryModal(true)}
                  rightImage={icon.down}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
              </View>
              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>

              <View style={AppStyles.justifyRow}>
                <NewText
                  text={"Description"}
                  size={15}
                  color={colors.gray200}
                />

                <CustomInput
                  height={29}
                  color={colors.gray100}
                  width={scale(140)}
                  editable={false}
                  value={selectedService}
                  dropDown={true}
                  onShowPassword={()=>setIsServiceDescriptionModal(true)}
                  rightImage={icon.down}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  rightImageWidth={15}
                  rightImageHeight={15}
                  // placeholder={"$/day"}
                  borderRadius={8}
                />
              </View>

              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>

              <HorizontalContainer text={"Base Price"} text1={"$10"} />

              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>

              <HorizontalContainer text={"Mileage Price"} text1={"$10"} />
            </View>

            <View style={{ paddingVertical: verticalScale(13) }}>
            <CustomLine />

            <TouchableOpacity
              onPress={() => setIsAddons(!isAddons)}
              style={{
                width: 35,
                height: 35,
                borderRadius: 999,
                backgroundColor: "#EEEEEE",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "45%",
              }}
            >
              <Image
                style={{ width: scale(13), height: scale(13) }}
                source={icon.down}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={isAddons} >
          <View style={{paddingHorizontal:15}}>
         

              <HorizontalContainer text={"Loading fee"} text1={"$10/flight"} />
              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>
              <HorizontalContainer text={"Unloading fee"} text1={"$10/flight"} />
              <View style={{ marginVertical: verticalScale(13) }}>
                <DashedLine
                  dashLength={6}
                  dashThickness={1}
                  dashGap={5}
                  dashColor={colors.gray}
                />
              </View>

          </View>
          </Collapsible>

            <Spacer height={verticalScale(5)} />

            <View
              style={{ ...AppStyles.justifyRow, paddingHorizontal: scale(10),marginTop:5 }}
            >
              <View style={AppStyles.row}>
                <NewText
                  text={"Cost:"}
                  size={15}
                  fontWeight={"400"}
                  style={{ marginRight: scale(5) }}
                  //   fontFam={Inter.bold}
                  color={colors.gray200}
                />
                <NewText
                  text={"$50"}
                  size={15}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />
              </View>

              <View style={AppStyles.row}>
                <Button
                  text={"Counter Offer"}
                  height={28}
                  bgColor={colors.white}
                  borderColor={colors.primary}
                  borderWidth={1}
                  size={14}
                  onPress={onCounterOffer}
                  borderRadius={7}
                  textColor={colors.primary}
                  width={scale(110)}
                />
                <Spacer width={scale(10)} />
                <Button
                  onPress={onBook}
                  text={"Book Now"}
                  height={28}
                  size={16}
                  borderRadius={7}
                  borderColor={colors.primary}
                  borderWidth={1}
                  width={scale(90)}
                />
              </View>
            </View>
            <Spacer height={verticalScale(15)} />

            <View></View>
          </View>
        </Collapsible>
      </View>
    </View>

<ServiceTypeModal
        modalVisible={isServiceModal}
        title={"Service Type"}
        setDelivertype={setDelivertype}
        selectedObject={selectedServiceType}
        setSelectedObject={setSelectedServiceType}
        setModalVisible={setIsServiceModal}
      />

<ServiceDescriptionModal
        modalVisible={isServiceDescriptionModal}
        title={"Service Description"}
        selectedObject={selectedService}
        setSelectedObject={setSelectedService}
        setModalVisible={setIsServiceDescriptionModal}
      />


<CategoryModal
        modalVisible={isCategoryodal}
        title={"Category"}
        selectedObject={selectedCategory}
        setSelectedObject={setSelectedCategory}
        setModalVisible={setIsCategoryModal}
      />
    </>
    
  );
};

export default CustomerTicket;

const styles = StyleSheet.create({
  iconContainer: {
    width: 14,
    height: 14,
  },
});
