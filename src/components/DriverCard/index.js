import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from "react-native";
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
import DashedLine from 'react-native-dashed-line';
import CustomButton from "../CustomButton";
import Collapsible from 'react-native-collapsible';



const DriverCard = ({item,onPress,isNoShadow,backgroundColor,onWatchList,onCounterOffer,onAccept}) => {
    const [isCollapsible,setIsCollapsible]=useState(item.isOpen)
    const [isAddons,setIsAddons]=useState(true)

    
  return (
    <View
      style={{
        elevation: 5,
        shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
        shadowOffset: { width: -4, height: -2 },
        shadowOpacity:  !isNoShadow ?0.2:0,
        shadowRadius: 5,
      }}
      >
      <View
        style={{
          backgroundColor:backgroundColor|| colors.white,
          elevation: 5,
          shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          shadowOffset: { width: 4, height: 5 },
          shadowOpacity:  !isNoShadow ?0.2:0,
          shadowRadius: 5,
          borderRadius: scale(15),
       
        }}>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={onPress}
        style={{ flexDirection: "row", flex: 1,
           paddingLeft: scale(10),
           paddingVertical: verticalScale(10),
     }}>
          <View
            style={{
              width: scale(52),
              height: scale(52),
              borderRadius: scale(7),
              overflow: "hidden",
            }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode={"contain"}
              source={item.img}
            />
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              flex: 1,
              paddingHorizontal: scale(10),
              paddingVertical: verticalScale(2),
            }}>
            <View
              style={{
                ...AppStyles.justifyRow,
                paddingBottom: verticalScale(10),
              }}>
              <View style={{ ...AppStyles.row }}>
                <CustomText
                  text={item.name}
                  size={13.5}
                  fontWeight={"600"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />
                
              </View>
              <View style={AppStyles.row}>
                <TouchableOpacity
                onPress={onWatchList}
                activeOpacity={0.6}
                >
                   <Image
                  style={{
                    width: scale(22),
                    height: scale(22),
                  }}
                  resizeMode={"contain"}
                  source={item.pass}
                />

                </TouchableOpacity>
               

               
              </View>
            </View>

            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>setIsCollapsible(!isCollapsible)}
             style={{ ...AppStyles.justifyRow }}>
              <View style={{ ...AppStyles.row }}>
              <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.calendar}
                />

                <Spacer width={scale(5)} />

                <CustomText text={item.date} size={10} color={colors.gray} />
                <Spacer width={scale(7)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.location}
                />

                <Spacer width={scale(5)} />

                <CustomText text={item.distance} size={10} color={colors.gray} />
                <Spacer width={scale(7)} />
                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={icon.clock}
                />

                <Spacer width={scale(5)} />

                <CustomText text={item.time} size={10} color={colors.gray} />
               
              </View>

              <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={ isCollapsible==false?icon.up: icon.down}
                />
           
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Collapsible
        collapsed={isCollapsible}
        >
        <View>

        <CustomLine
        />
        <View style={{paddingHorizontal:scale(15)}}>
        <Spacer height={verticalScale(15)}/>
                <HorizontalContainer
                text={"Type"}
                text1={"On-demand"}
                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>
                <HorizontalContainer
                text={"Category"}
                text1={"Ride"}
                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>

                <HorizontalContainer
                text={"From"}
                text1={"City, ST, Zipcode"}
                />
                 <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>

<HorizontalContainer
                text={"To"}
                text1={"City, ST, Zipcode"}
                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>

                <HorizontalContainer
                text={"Completed Orders"}
                text1={"22"}
                />
                <View style={{marginVertical:verticalScale(13)}}>
                <DashedLine dashLength={6} dashThickness={1} dashGap={5} dashColor={colors.gray} />


                </View>

                <HorizontalContainer
                text={"Fulfilment"}
                text1={"On-100%"}
                />
             
               




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

       
        <Spacer height={verticalScale(5)}/>

        <View style={{...AppStyles.justifyRow,paddingHorizontal:scale(10),}}>
       

            <View style={AppStyles.row}>
            <CustomText
                  text={"Cost:"}
                  size={14}
                  fontWeight={"400"}
                  style={{marginRight:scale(5)}}
                //   fontFam={Inter.bold}
                  color={colors.gray200}
                />
                 <CustomText
                  text={"$50"}
                  size={14}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />
            </View>

             <View style={AppStyles.row}>
                 <CustomButton
                 text={"Counter Offer"}
                 height={30}
                 bgColor={colors.white}
                 borderColor={colors.secondary}
                 borderWidth={1}
                 onPress={onCounterOffer}
                 size={14}
                 textColor={colors.secondary}
                 width={scale(110)}
                 />
                 <Spacer width={scale(10)}/>
                  <CustomButton
                 text={"Accept"}
                 onPress={onAccept}
                 height={30}
                 size={14}
                 bgColor={colors.secondary}

                 borderColor={colors.secondary}
                 borderWidth={1}
                 width={scale(90)}
                 />
                 
             </View>



        </View>
        <Spacer height={verticalScale(15)}/>

                


        <View>

        </View>
        </View>
        </Collapsible>



      </View>
    </View>
  );
};

export default DriverCard;

const styles = StyleSheet.create({
    iconContainer:{
        width: scale(14), height: scale(14) 

    }

});
