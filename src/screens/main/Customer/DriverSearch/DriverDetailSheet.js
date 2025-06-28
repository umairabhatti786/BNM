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
import { colors } from "../../../../utils/colors";
import NewText from "../../../../components/NewText";
import DashedLine from "react-native-dashed-line";
import BottomSheet from "../../../../components/BottomSheet";
import CustomerTicket from "../../../../components/CustomerTicket";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import Collapsible from "react-native-collapsible";
import { icon } from "../../../../assets/png/icons";
import { Spacer } from "../../../../components/Spacer";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import CustomInput from "../../../../components/CustomInput";
import HorizontalContainer from "../../../../components/HorizontalContainer";
import Button from "../../../../components/Button";
import CustomSheetModal from "../../../../components/CustomSheetModal";
  
  const DriverDetailSheet = ({
 
    bottomSheetModalRef,
    selectedDrivers,
    watchListObject,
    setIsCounterOfferVisible,
    setWatchListObject,
    navigation,
    setIsWatchList,
    onCounterOffer,
    onBook
  }) => {

    const [isCollapsible, setIsCollapsible] = useState(true);
    const [isServiceModal,setIsServiceModal]=useState(false)
    const [selectedServiceType,setSelectedServiceType]=useState("Scheduled")
  
    const [isCategoryodal,setIsCategoryModal]=useState(false)
    const [selectedCategory,setSelectedCategory]=useState("Delivery")
    const [isAddons,setIsAddons]=useState(true)

  
    const [isServiceDescriptionModal,setIsServiceDescriptionModal]=useState(false)
    const [selectedService,setSelectedService]=useState("Moving")
console.log("selectedDrivers",selectedDrivers?.time)
    return (

        <BottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        snapTo={"65%"}
        // marginHorizontal={15}
        // onDismiss={() => setPause(false)}
      >
        <View >

   
  
        <TouchableOpacity
          activeOpacity={0.6}
        //   onPress={onPress}
          style={{
            flexDirection: "row",
   
            paddingLeft: scale(10),
            // paddingVertical: verticalScale(10),
            backgroundColor:colors.white
          }}
        >
          <TouchableOpacity
            // onPress={onPressProfile}
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
              source={selectedDrivers?.img}
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
                <TouchableOpacity 
                // onPress={onPressProfile}
                >
                  <NewText
                    text={selectedDrivers?.name}
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
                    selectedDrivers?.active == "Available"
                        ? colors.green
                        : selectedDrivers?.active == "Busy"
                        ? colors.red
                        : selectedDrivers?.active == "On Schedule"
                        ? colors.yellow
                        : colors.gray,
                  }}
                />
                <Spacer width={scale(5)} />

                <NewText text={selectedDrivers?.active} size={12} color={colors.gray} />
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
                <TouchableOpacity
                //  onPress={onWatchList}
                 >
                  <Image
                    style={{
                      width: 16,
                      height: 19,
                      tintColor: watchListObject
                        ?.map((da) => da?.id)
                        .includes(selectedDrivers?.id)
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
              onPress={() => setIsCollapsible(!isCollapsible)}
              style={{ ...AppStyles.justifyRow }}
            >
              <View style={{ ...AppStyles.row }}>
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.location}
                />

                <Spacer width={scale(5)} />

                <NewText text={selectedDrivers?.distance} size={12} color={colors.gray} />
                <Spacer width={scale(7)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.clock}
                />

                <Spacer width={scale(5)} />

                <NewText text={selectedDrivers?.time} size={12} color={colors.gray} />
                <Spacer width={scale(5)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.car}
                />

                <Spacer width={scale(7)} />

                <NewText text={selectedDrivers?.vehicle} size={12} color={colors.gray} />
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
                  editable={false}
                  value={selectedServiceType}
                  dropDown={true}
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
                  editable={false}
                  value={selectedCategory}
                  dropDown={true}
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

            <Spacer height={verticalScale(5)} />

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

            <View
              style={{ ...AppStyles.justifyRow, paddingHorizontal: scale(10) }}
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

              <View style={{...AppStyles.row,marginTop:10}}>
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

          </View>
        </View>

      </BottomSheet>
  
    );
  };
  
  export default DriverDetailSheet;
  
  const styles = StyleSheet.create({
    iconContainer: {
      width: 14,
      height: 14,
    },
  });
  