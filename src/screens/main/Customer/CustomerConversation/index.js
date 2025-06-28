import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import { Inter } from "../../../../utils/Fonts";
import NewText from "../../../../components/NewText";
import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../../../assets/png/icons";
import NotificationContainer from "../CustomerNotification/NotificationContainer";
import ConversationContainer from "./ConversationContainer";
import { image } from "../../../../assets/png/images";
import { CustomHeader } from "../../../../components/CustomHeader";

const CustomerConversation = ({navigation}) => {
  const conversation = [
    {
      id: 1,
      img: image.defimg600,
      type: "referring",
      name: "Advance Piano Mover",
      date: "5h",
      amount: "$35",
      message: "Senectus sodales nulla ut viverra...",
      online: true,
    },
    {
      id: 2,
      img: image.defimg700,
      type: "review",
      name: "John Doe",
      date: "1d",
      amount: "$35",
      message: "Senectus sodales nulla ut viverra...",
    },
    {
      id: 3,
      img: image.defimg102,
      type: "info",
      name: "John Smith Plumbers",
      date: "2d",
      amount: "$35",
      message: "Senectus sodales nulla ut viverra...",
    },
    {
      id: 4,
      img: image.defimg200,
      type: "referring",
      name: "Valerie E. [Username]",
      date: "5d",
      amount: "$35",
      message: "Senectus sodales nulla ut viverra...",
    },
    {
      id: 5,
      img: image.defimg600,
      type: "review",
      name: "John Smith Plumbers",
      date: "10d",
      amount: "$35",
      message: "Senectus sodales nulla ut viverra...",
    },
    {
      id: 6,
      img: image.defimg700,
      type: "info",
      name: "John Doe",
      date: "15d",
      amount: "$35",
      message: "Senectus sodales nulla ut viverra...",
    },
    {
      id: 7,
      img: image.defimg900,
      type: "referring",
      name: "John Smith Plumbers",
      date: "1mo",
      amount: "$35",
      message: "Senectus sodales nulla ut viverra...",
    },
  ];

  const renderConversation = ({ item, index }) => {
    return (
      <ConversationContainer
        name={item?.name}
        onPress={()=>navigation.navigate("CustomerChat",{data:item})}
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
          style={{ width: "33%" }}
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
          text={"Messages"}
        />
        <View style={{ width: "33%" }} />
      </View>
    );
  };
  return (
    <Screen
      backgroundColor={colors.white}
      topBarColor={colors.white}
      statusBarColor={colors.white}
      barStyle={"dark-content"}
    >
      <View style={{ backgroundColor: colors.white }}>
        {/* <Header /> */}
        <CustomHeader
        label="Messages"
        navigation={navigation}
        />

        <FlatList
          data={conversation}
          style={{ paddingTop: 30 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
          keyExtractor={(item) => item}
          ListFooterComponent={<View style={{ height: 120 }} />}
          renderItem={renderConversation}
        />
      </View>
    </Screen>
  );
};

export default CustomerConversation;

const styles = StyleSheet.create({});
