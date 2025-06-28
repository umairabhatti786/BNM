import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomerHome from "../../screens/main/Customer/CustomerHome";
import CustomerAddPost from "../../screens/main/Customer/CustomerAddPost";
import CustomerWatchlist from "../../screens/main/Customer/CustomerWatchlist";
import CustomerNotification from "../../screens/main/Customer/CustomerNotification";
import CustomerMenu from "../../screens/main/Customer/CustomerMenu";
import { icon } from "../../assets/png/icons";
import { scale, verticalScale } from "react-native-size-matters";
import CustomerDriverSetting from "../../screens/main/Driver/CustomerDriverSetting";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator()
const CustomerBottomTabs=()=> {
  const navigation =useNavigation()
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.black, // Set your desired active tab text color
        inactiveTintColor: colors.gray,
     
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
        component={CustomerHome}
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
        component={CustomerWatchlist}
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
        name={"Add Post"}
        component={CustomerAddPost}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate("CustomerFilter")
              

            }}
              style={{
                width: scale(50),
                height: scale(50),
                borderRadius: 999,
                backgroundColor: colors.primary,
                marginBottom: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icon.plus}
                style={{
                  width: scale(20),
                  height: scale(20),
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
        component={CustomerNotification}
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

export default CustomerBottomTabs;
