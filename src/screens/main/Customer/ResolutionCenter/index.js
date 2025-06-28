import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import { CustomHeader } from "../../../../components/CustomHeader";
import { Spacer } from "../../../../components/Spacer";
import Search from "../../../../components/Search";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import Collapsible from "react-native-collapsible";
const ResolutionCenter = ({ navigation, route }) => {
  let data = route?.params?.data;
  console.log("data", data);

  const [showDriverSearchDetail, setShowDriverSearchDetail] = useState(true);
  // const [showLocalDelivery, setShowLocalDelivery] = useState(true);
  // const [showDetail, setShowDetail] = useState(true);

  const DriverSearchData = [
    "Problem Signing in",
    "Order",
    "Track Order",
    "Delivery issue",
    "Ride issue",
    "Road Support",
    "View Earnings",
    "Payment",
    "Missing Payment",
    "Order",
    "Review",
  ];

  const DropContainer = ({
    fontWeight,
    size,
    txt,
    onPress,
    isSetting,
    isOpen,
    noLine,
  }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={{
            ...AppStyles.justifyRow,
            paddingVertical: verticalScale(10),
          }}
        >
          <NewText
            fontWeight={fontWeight || "500"}
            color={colors.gray200}
            fontFam={Inter.bold}
            text={txt}
            size={size || 15}
          />

          <Spacer width={scale(10)} />

          <Image
            style={{ width: scale(13), height: scale(13) }}
            source={isOpen ? icon.down : icon.grayforward}
            resizeMode={"contain"}
          />
        </TouchableOpacity>

        <View style={{ paddingVertical: 5 }}>{!noLine && <CustomLine />}</View>
      </View>
    );
  };

  const QuickLearn = ({ text }) => {
    return (
      <TouchableOpacity style={{ ...AppStyles.row, marginRight: 20 }}>
        <TouchableOpacity style={styles.playContainer}>
          <Image
            style={{ width: 18, height: 18}}
            resizeMode="contain"
            source={icon.play}
          />
        </TouchableOpacity>

        <NewText
          text={text}
          color={colors.gray200}
          fontFam={Inter.bold}
          //   fontWeight="00"
          size={16}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Screen
        backgroundColor={colors.white}
        topBarColor={colors.white}
        statusBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <CustomHeader label={"Resolution Center"} navigation={navigation} />
        <ScrollView
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
          style={{
            backgroundColor: colors.white,
            marginTop: 10,
          }}
        >
            <View
            style={{paddingHorizontal:15}}
            >

          <Search />
          <Spacer height={20} />

          <View>
            <NewText
              text={"Suggested Topics"}
              color={colors.black}
              fontFam={Inter.bold}
              fontWeight="700"
              size={16}
            />
            <Spacer height={20} />

            <DropContainer isOpen={true} txt={"Settings"} />

            <DropContainer isOpen={true} txt={"Track Orders"} />

            <DropContainer
              isOpen={true}
              noLine={true}
              //   onPress={() => setShowLocalDelivery(!showLocalDelivery)}
              txt={"View Earnings"}
            />
          </View>

          <Spacer height={20} />

          <View>
            <NewText
              text={"Quick Learn"}
              color={colors.black}
              fontFam={Inter.bold}
              fontWeight="700"
              size={16}
            />
                        </View>

                        </View>


            <Spacer height={20} />

            <ScrollView
              horizontal={true}
              style={{paddingLeft:15}}
              showsHorizontalScrollIndicator={false}
            >
              <QuickLearn text={"Quick Tips"} />
              <QuickLearn text={"Track Order"} />
              <QuickLearn text={"Search Mover"} />
            </ScrollView>

          <Spacer height={30} />
          <View style={{paddingHorizontal:15}}>

          <View>
            <NewText
              text={"All Topics"}
              color={colors.black}
              fontFam={Inter.bold}
              fontWeight="700"
              size={16}
            />
            <Spacer height={20} />

            <DropContainer isOpen={true} txt={"Signup"} />

            <DropContainer isOpen={true} txt={"Sign-in"} />

            <DropContainer
              isOpen={true}
              //   onPress={() => setShowLocalDelivery(!showLocalDelivery)}
              txt={"Customer: Search"}
            />

            <View>
              <DropContainer
                isOpen={true}
                noLine={true}
                txt={"Driver Search"}
              />
              <Collapsible collapsed={showDriverSearchDetail}>
                <CustomLine/>
                <View>
                  {DriverSearchData.map((item,index) => {
                    return <DropContainer isOpen={true}

                    noLine={DriverSearchData.length-1!==index?false:true}
                     txt={item} />;
                  })}
                </View>
              </Collapsible>
              <View>
                <CustomLine />

                <TouchableOpacity
                  onPress={() =>
                    setShowDriverSearchDetail(!showDriverSearchDetail)
                  }
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 999,
                    backgroundColor: "#EEEEEE",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: "45%",
                    bottom: -15,
                  }}
                >
                  <Image
                    style={{ width: scale(13), height: scale(13) }}
                    source={showDriverSearchDetail?  icon.down:icon.up}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Spacer height={30} />

          <View>
            <NewText
              text={"Support Messages"}
              color={colors.black}
              fontFam={Inter.bold}
              fontWeight="700"
              size={16}
            />
            <Spacer height={10} />

            <DropContainer
              isOpen={false}
              noLine={true}
              txt={"View Active Messages"}
            />
          </View>

          <Spacer height={20} />

          <View>
            <NewText
              text={"Contact Center"}
              color={colors.black}
              fontFam={Inter.bold}
              fontWeight="700"
              size={16}
            />
            <Spacer height={10} />

            <DropContainer isOpen={false} 
            onPress={()=>navigation.navigate("SupportTeamLiveChat")}
            txt={"Chat with support"} />

            <DropContainer isOpen={false} txt={"Call Support"} />

            <DropContainer
              isOpen={false}
              noLine={true}
              //   onPress={() => setShowLocalDelivery(!showLocalDelivery)}
              txt={"Additional Resources (Documentation)"}
            />
          </View>

          </View>

        </ScrollView>
      </Screen>
    </>
  );
};

export default ResolutionCenter;

const styles = StyleSheet.create({
  playContainer: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
