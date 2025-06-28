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
  import ConversationContainer from "../CustomerConversation/ConversationContainer";
  import { Spacer } from "../../../../components/Spacer";
  import MessageContainer from "../../../../components/MessageContainer";
  import CustomLine from "../../../../components/CustomLine/CustomLine";
  import MessageSander from "../../../../components/MessageSander";
import AttachmentModal from "../CustomerChat/AttachmentModal";
import { CustomHeader } from "../../../../components/CustomHeader";
  
  const SupportTeamLiveChat = ({ navigation, route }) => {
  
    const [isAttachModal, setIsAttachModal] = useState(false);
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
  
    const renderConversation = ({ item, index }) => {
      return (
        <ConversationContainer
          name={item?.name}
          img={item?.img}
          amount={item?.amount}
          online={item?.online}
          date={item?.date}
          message={item?.message}
        />
      );
    };
  
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
            text={"Support Team Live Chat"}
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
  
            <MessageContainer item={item} />
          </View>
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
            label="Support Team Live Chat"
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
                // ListHeaderComponent={<OrderDetailCon />}
              />
            </View>
            <MessageSander onAttach={() => setIsAttachModal(true)} />
  
           
          </View>
        </Screen>
  
        <AttachmentModal
          modalVisible={isAttachModal}
          title={"Attach a file to message"}
          setModalVisible={setIsAttachModal}
        />
      </>
    );
  };
  
  export default SupportTeamLiveChat;
  
  const styles = StyleSheet.create({
    viewDetailCon: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 15,
      paddingVertical: 6,
      alignSelf: "center",
      marginVertical: 10,
    },
  });
  