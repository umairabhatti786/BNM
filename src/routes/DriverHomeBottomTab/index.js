import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";

import { scale, verticalScale } from "react-native-size-matters";
import { icon } from "../../assets/png/icons";
import { image } from "../../assets/png/images";
import CustomerAddPost from "../../screens/main/Customer/CustomerAddPost";
import CustomerMenu from "../../screens/main/Customer/CustomerMenu";
import CustomerNotification from "../../screens/main/Customer/CustomerNotification";
import CustomerWatchlist from "../../screens/main/Customer/CustomerWatchlist";
import DeliveryManager from "../../screens/main/Driver/DeliveryManager";
import DriverHome from "../../screens/main/Driver/DriverHome";
import { colors } from "../../utils/colors";
import DriverNotification from "../../screens/main/Driver/DriverNotification";
import CustomerDriverSetting from "../../screens/main/Driver/CustomerDriverSetting";
import ServiceProfile from "../../screens/main/Driver/ServiceProfile";

const Tab = createBottomTabNavigator();

function DriverHomeBottomTab({navigation}) {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.black, // Set your desired active tab text color
      inactiveTintColor: colors.gray,
       // Set your desired inactive tab text color
      //  style: {
      //   elevation: 5, // Add elevation for Android shadow effect
      //   shadowColor: colors.black, // Add shadow color for iOS
      //   shadowOffset: { width: 0, height: -4 }, // Add shadow offset for iOS
      //   shadowOpacity: 5, // Add shadow opacity for iOS
      //   shadowRadius: 10, // Add shadow radius for iOS
      //   backgroundColor:"white"
      // },
    }}
    screenOptions={{
      tabBarStyle: {
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        paddingTop: verticalScale(5),
        height: verticalScale(60),
        activeTintColor: colors.black, // Set your desired active tab text color
        inactiveTintColor: colors.gray,
        paddingBottom:10
      },
      tabBarLabelStyle: {
        lineHeight: 18,
        fontWeight: "500",
        fontSize: verticalScale(9),
      },
    }}
      >
      <Tab.Screen
        name={"Home"}
        component={DriverHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#000000" : "#AAAAAA",
              }}
              source={icon.home}
            />
          ),
       
        }}
      />
      <Tab.Screen
        name={"Watchlist"}
        component={ServiceProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icon.watchlist}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#000000" : "#AAAAAA",
              }}
            />
          ),
        
        }}
      />
      <Tab.Screen
        name={"Delivery Manager"}
        component={DeliveryManager}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TouchableOpacity
            onPress={()=>navigation.navigate("DeliveryManager")}
              style={{
                width: scale(50),
                height: scale(50),
                borderRadius: 100,
                backgroundColor: colors.secondary,
                marginBottom: 40,
                alignItems: "center",
                justifyContent: "center",
              }}>
                 <Image
              source={image.box}
              style={{
                width: scale(25),
                height: scale(25),
              }}
            />

              </TouchableOpacity>
          ),
          // <Image  source={icon.home}
          // style={{width:20,height:20,tintColor:focused?"#000000":"#AAAAAA"}}

          //  />,
         
        }}
      />
      <Tab.Screen
        name={"Notification"}
        component={DriverNotification}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icon.bell}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? "#000000" : "#AAAAAA",
              }}
            />
          ),
         
        }}
      />
      <Tab.Screen
        name={"Menu"}
        component={CustomerDriverSetting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icon.menu}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#000000" : "#AAAAAA",
              }}
            />
          ),
        
        }}
      />
    </Tab.Navigator>
  );
}

export default DriverHomeBottomTab;
