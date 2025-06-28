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
import NotificationContainer from "./NotificationContainer";

const CustomerNotification = ({navigation}) => {
  const notificationData = [
    {
      id: 1,
      img: icon.bulb,
      type: "referring",
      title: "Get up to $100 for referring a friend",
      date: "Feb 18, 2024",
    },
    {
      id: 2,
      img: icon.star,
      type: "review",
      title: "[Username] left you a review",
      date: "Feb 18, 2024",
    },
    {
      id: 3,
      img: icon.infoIcon,
      type: "info",
      title: "Your offer from [Name] has been accepted. You can now check the status of your accepted order",
      date: "Feb 18, 2024",
    },
    {
      id: 4,
      img: icon.bulb,
      type: "referring",
      title: "Get up to $100 for referring a friend",
      date: "Feb 18, 2024",
    },
    {
      id: 5,
      img: icon.star,
      type: "review",
      title: "[Username] left you a review",
      date: "Feb 18, 2024",
    },
    {
      id: 6,
      img: icon.infoIcon,
      type: "info",
      title: "Your offer from [Name] has been accepted. You can now check the status of your accepted order",
      date: "Feb 18, 2024",
    },
    {
      id: 7,
      img: icon.bulb,
      type: "referring",
      title: "Get up to $100 for referring a friend",
      date: "Feb 18, 2024",
    },
    {
      id: 8,
      img: icon.star,
      type: "review",
      title: "[Username] left you a review",
      date: "Feb 18, 2024",
    },
    {
      id: 9,
      img: icon.infoIcon,
      type: "info",
      title: "Your offer from [Name] has been accepted. You can now check the status of your accepted order",
      date: "Feb 18, 2024",
    },
    {
      id: 10,
      img: icon.bulb,
      type: "referring",
      title: "Get up to $100 for referring a friend",
      date: "Feb 18, 2024",
    },
    {
      id: 11,
      img: icon.infoIcon,
      type: "info",
      title: "Your offer from [Name] has been accepted. You can now check the status of your accepted order",
      date: "Feb 18, 2024",
    },
  ];

  const renderNotification = ({ item, index }) => {
    return <NotificationContainer  title={item.title} 
    img={item.img}
    date={item.date}
    
    />;
  };

  const Header=()=>{
    return(
      <View style={{ ...AppStyles.justifyRow,paddingHorizontal:15,paddingVertical:10 }}>
      <NewText
        text={"Notifications"}
        size={18}
        fontWeight={"700"}
        fontFam={Inter.bold}
        color={colors.black}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>navigation.navigate("NotificationSettings")}
        style={{
          width: 30,
          height: 40,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
          source={icon.setting}
        />
      </TouchableOpacity>
    </View>

    )
  }
  return (
    <Screen
      backgroundColor={colors.white}
      topBarColor={colors.white}
      statusBarColor={colors.white}
      barStyle={"dark-content"}
    >
      <View >
       <Header />

       

        <FlatList
          data={notificationData}
          style={{ paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 20, }}
          keyExtractor={(item) => item}
          ListFooterComponent={<View style={{height: 120}}/>}

          renderItem={renderNotification}
        
        />
      </View>
    </Screen>
  );
};

export default CustomerNotification;

const styles = StyleSheet.create({});
