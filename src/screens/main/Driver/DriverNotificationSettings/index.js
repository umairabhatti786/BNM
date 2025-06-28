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
  import { icon } from "../../../../assets/png/icons";
import { CustomHeader } from "../../../../components/CustomHeader";
import DriverSettingOrderUpdateModal from "./DriverSettingOrderUpdateModal";
import DriverNotificationSettingCard from "./DriverNotificationSettingCard";
  
  const DriverNotificationSettings = ({navigation}) => {

    const [isUpdateModal,setIsUpdateModal]=useState(false)
    const[selectNotificationUpdates,setSelectNotificationUpdates]=useState({})
    

    const [updatesData,setUpdatesData]=useState(
        [{
            name: "Push",
            active:selectNotificationUpdates?.push
        
          },
          {
            name:"Email",
            active:selectNotificationUpdates?.email
        
          },
          {
            name:"SMS",
            active:selectNotificationUpdates?.sms
        
          }
        ]

    )
    const notificationData = [
      {
        id: 1,
        title: "Order Updates",
        push:true,
        email:true,
        sms:false
      },
      {
        id: 2,
        img: icon.star,
        title: "Order Updates",
        push:true,
        email:true,
        sms:false

      },
      {
        id: 3,
        img: icon.infoIcon,
        title: "Post Updates",
        push:true,
        email:true,
        sms:false
        
      },
      {
        id: 4,
        img: icon.bulb,
        title: "Services Updates",
        push:true,
        email:true,
        sms:false

      },
      {
        id: 5,
        img: icon.star,
        title: "Recommendation",
        push:true,
        email:true,
        sms:false

      },
      {
        id: 6,
        img: icon.infoIcon,
        title: "Reminders",
        push:true,
        email:true,
        sms:false

      },
      {
        id: 7,
        img: icon.bulb,
        title: "Promotions and News",
        push:true,
        email:true,
        sms:false
        
      },
      {
        id: 8,
        img: icon.bulb,
        title: "Account and Security",
        push:true,
        email:true,
        sms:false
        
      },
      
    
    ];
  
    const renderNotification = ({ item, index }) => {
      return <DriverNotificationSettingCard  title={item.title} 
      onPress={()=>{
        setSelectNotificationUpdates(item)

        setIsUpdateModal(true)

      }}
      push={item.push}
      email={item.email}
      sms={item.sms}
      
      />;
    };
  

    return (
        <>
         <Screen
        backgroundColor={colors.white}
        topBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <View >
         <CustomHeader
         label={"Notification Settings"}
         navigation={navigation}
          />
  
         
  
          <FlatList
            data={notificationData}
            style={{ paddingTop: 20 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20, margin:15}}
            keyExtractor={(item,index) => index.toString()}
            ListFooterComponent={<View style={{height: 120}}/>}
  
            renderItem={renderNotification}
          
          />
        </View>
      </Screen>

      <DriverSettingOrderUpdateModal
      modalVisible={isUpdateModal}
      bgColor={colors.secondary}
      title={selectNotificationUpdates?.title}
      selectNotificationUpdates={selectNotificationUpdates}
      setSelectNotificationUpdates={setSelectNotificationUpdates}

      setModalVisible={setIsUpdateModal}
      data={updatesData}
      setData={setUpdatesData}
      />


        </>
     
    );
  };
  
  export default DriverNotificationSettings;
  
  const styles = StyleSheet.create({});
  