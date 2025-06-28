import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import { Screen } from "../../../../utils/ui/Screen";
  import { colors } from "../../../../utils/colors";
  import { AppStyles } from "../../../../utils/AppStyle";
  import CustomText from "../../../../components/CustomText";
  import { Inter } from "../../../../utils/Fonts";
  import NewText from "../../../../components/NewText";
  import { scale, verticalScale } from "react-native-size-matters";
  import { icon } from "../../../../assets/png/icons";
  import { image } from "../../../../assets/png/images";
  import { Spacer } from "../../../../components/Spacer";
  import MessageContainer from "../../../../components/MessageContainer";
  import CustomLine from "../../../../components/CustomLine/CustomLine";
  import MessageSander from "../../../../components/MessageSander";
  import { CustomHeader } from "../../../../components/CustomHeader";
import DriverAttachmentModal from "./DriverAttachmentModal";
  
  const DriverChat = ({ navigation, route }) => {
    let data = route?.params?.data;
  
    const [isAttachModal, setIsAttachModal] = useState(false);
    console.log("Dastscd", data);
    const chatList = [
      {
        message: "Great! Just a moment while we connect you...",
        time: "10:20 am",
        date: "Thursday",
      },
      {
        message: "What’s your next availability.",
        time: "10:10 am",
        seen: true,
        from: true,
        date: "Today",
      },
      {
        message: "What’s your next availability.",
        time: "10:10 am",
        from: true,
      },
      {
        message: "What’s your next availability.",
        time: "10:10 am",
        from: true,
      },
    ];
  
    
  
    const Header = () => {
      return (
        <View
          style={{
            ...AppStyles.justifyRow,
            backgroundColor: colors.white,
            marginTop: -20,
            paddingVertical: verticalScale(13),
            paddingHorizontal: scale(15),
            elevation: 5,
            shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}
        >
          <TouchableOpacity
            style={{ width: "10%" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: scale(15), height: scale(15) }}
              resizeMode="contain"
              source={icon.back}
            />
          </TouchableOpacity>
          <CustomText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={14}
            text={data?.name}
          />
  
          <View style={AppStyles.row}>
            <TouchableOpacity
              // style={{ width: "33%" }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: scale(17), height: scale(17) }}
                resizeMode="contain"
                source={icon.stargrayout}
              />
            </TouchableOpacity>
            <Spacer width={20} />
            <TouchableOpacity
              // style={{ width: "33%" }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: scale(17), height: scale(17) }}
                resizeMode="contain"
                source={icon.call}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    const renderChatList = ({ item, index }) => {
      return (
        <>
          <View>
            {item.date && (
              <View style={{ ...AppStyles.justifyRow, paddingVertical: 15 }}>
                <CustomLine width={"35%"} />
                <NewText
                  color={colors.gray}
                  text={item.date}
                  fontWeight="500"
                  size={14}
                />
                <CustomLine width={"35%"} />
              </View>
            )}
  
            <MessageContainer
            mainColor={colors.secondary}
             item={item} />
          </View>
        </>
      );
    };
    const OrderDetailCon = () => {
      return (
        <>
          <View
            style={{ ...AppStyles.row, alignSelf: "center", marginVertical: 20 }}
          >
            <NewText text={"Delivery"} size={14} color={colors.gray} />
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                backgroundColor: "#D9D9D9",
                marginHorizontal: 7,
              }}
            />
            <NewText
              text={`frorm ${data?.amount}`}
              size={14}
              color={colors.gray}
            />
          </View>
          <TouchableOpacity
    onPress={() => navigation.navigate("DeliveryManager")}
             activeOpacity={0.8} style={styles.viewDetailCon}>
            <NewText
              text={"View Order Details"}
              size={14}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </>
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
          <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <CustomHeader
            label={data?.name}
            navigation={navigation}
            />
            {/* <Header /> */}
  
            <View style={{ flex: 1 }}>
              <FlatList
                data={chatList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{ gap: 10, paddingHorizontal: 15 }}
                renderItem={renderChatList}
                ListHeaderComponent={<OrderDetailCon />}
              />
            </View>
            <MessageSander
                        mainColor={colors.secondary}

             onAttach={() => setIsAttachModal(true)} />
  
            {/* <FlatList
            data={conversation}
            style={{ paddingTop: 30 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
            keyExtractor={(item) => item}
            ListFooterComponent={<View style={{ height: 120 }} />}
            renderItem={renderConversation}
          /> */}
          </View>
        </Screen>
  
        <DriverAttachmentModal
          modalVisible={isAttachModal}
          title={"Attach a file to message"}
          setModalVisible={setIsAttachModal}
        />
      </>
    );
  };
  
  export default DriverChat;
  
  const styles = StyleSheet.create({
    viewDetailCon: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.secondary,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 15,
      paddingVertical: 6,
      alignSelf: "center",
      marginVertical: 10,
    },
  });
  