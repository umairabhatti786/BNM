import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomerBottomTabs from "../CustomerBottomTabs/Tabs";
import DriverSearch from "../../screens/main/Customer/DriverSearch";
import TrackOrder from "../../screens/main/TrackOrder";
import DriverHomeBottomTab from "../DriverHomeBottomTab";
import CustomerSearch from "../../screens/main/Driver/CustomerSearch";
import DeliveryManager from "../../screens/main/Driver/DeliveryManager";
import CustomerDriverSetting from "../../screens/main/Driver/CustomerDriverSetting";
import CustomerSignup from "../../screens/auth/CustomerSignup";
import DriverSignup from "../../screens/auth/DriverSignup";
import DriverService from "../../screens/main/Driver/DriverService";
import MoveCategoryOne from "../../screens/main/Driver/MoveCategoryOne";
import MoveCategoryTwo from "../../screens/main/Driver/MoveCategoryTwo";
import SetPrice from "../../screens/main/Driver/SetPrice";
import Addons from "../../screens/main/Driver/Addons";
import CustomerConversation from "../../screens/main/Customer/CustomerConversation";
import CustomerChat from "../../screens/main/Customer/CustomerChat";
import NotificationSettings from "../../screens/main/Customer/NotificationSettings";
import CustomerFilter from "../../screens/main/Customer/CustomerFilter";
import CustomerProfile from "../../screens/main/Customer/CustomerProfile";
import DedicatedService from "../../screens/main/Customer/DedicatedService/DedicatedService";
import ManageOrders from "../../screens/main/Customer/ManageOrders";
import ResolutionCenter from "../../screens/main/Customer/ResolutionCenter";
import SupportTeamLiveChat from "../../screens/main/Customer/SupportTeamLiveChat";
import DriverFilter from "../../screens/main/Driver/DriverFilter";
import DriverConversation from "../../screens/main/Driver/DriverConversation";
import DriverChat from "../../screens/main/Driver/DriverChat";
import DriverNotificationSettings from "../../screens/main/Driver/DriverNotificationSettings";
// import DriverProfile from "../../screens/main/Driver/DriverProfile";
import ServiceProfile from "../../screens/main/Driver/ServiceProfile";
import ThankYou from "../../screens/main/Driver/DriverActivation/ThankYou";
import IndividualConfirmation from "../../screens/main/Driver/DriverActivation/IndividualConfirmation";
import BusinessConfirmation from "../../screens/main/Driver/DriverActivation/BusinessConfirmation";
import IndividualInfo from "../../screens/main/Driver/DriverActivation/IndividualInfo";
import BusinessInfo from "../../screens/main/Driver/DriverActivation/BusinessInfo";
import BusinessDisclosure from "../../screens/main/Driver/DriverActivation/BusinessDisclosure";
import IndividualDisclosure from "../../screens/main/Driver/DriverActivation/IndividualDisclosure";
import BusinessIdentification from "../../screens/main/Driver/DriverActivation/BusinessIdentification";
import IndividualIdentification from "../../screens/main/Driver/DriverActivation/IndividualIdentification";
import PreBackground from "../../screens/main/Driver/DriverActivation/PreBackground";
import DriverInfo from "../../screens/main/Driver/DriverActivation/DriverInfo";
import ResolutionCenterScreen from "../../screens/main/views/ResolutionCenterScreen";
import AddOnServiceScreen from "../../screens/main/views/AddOnServiceScreen";
import PickupTaskScreen from "../../screens/main/views/PickupTaskScreen";
import DropoffTaskScreen from "../../screens/main/views/DropoffTaskScreen";
import SupportTeamChatScreen from "../../screens/main/views/SupportTeamChatScreen";
import EarningsScreen from "../../screens/main/views/EarningsScreen";
import CustomerProfilePage from "../../screens/main/Customer/CustomerProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedAccount } from "../../redux/reducers/authReducer";

const AppStack = () => {
  const Stack = createStackNavigator();

  const selectedAccount = useSelector(getSelectedAccount);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("selectedAccount", selectedAccount);
  //   const [splashState,setSplashState]=useState(true)

  //   useEffect(() => {
  //     let timeState = setTimeout(() => {
  //       // navigation.push('Onboarding01')
  //       setSplashState(false);
  //     }, 2000);
  //     return () => {
  //       clearTimeout(timeState);
  //     };
  //   }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="CustomerProfilePage"
    >
      {/* {splashState&&<Stack.Screen name={strings.splashScreen} component={SplashScreen} />} */}

      {!isAuthenticated ? (
        <>
          <Stack.Screen name={"CustomerSignup"} component={CustomerSignup} />
          <Stack.Screen name={"DriverSignup"} component={DriverSignup} />
        </>
      ) : (
        <Stack.Screen
          name={"BottomTab"}
          component={
            selectedAccount === "Driver"
              ? DriverHomeBottomTab
              : CustomerBottomTabs
          }
        />
      )}
      {/* <Stack.Screen
        name={"DriverHomeBottomTab"}
        component={DriverHomeBottomTab}
      /> */}
      <Stack.Screen
        name={"NotificationSettings"}
        component={NotificationSettings}
      />
      <Stack.Screen name={"CustomerFilter"} component={CustomerFilter} />
      <Stack.Screen name={"DriverFilter"} component={DriverFilter} />

      <Stack.Screen name={"DriverSearch"} component={DriverSearch} />
      <Stack.Screen
        name={"DriverConversation"}
        component={DriverConversation}
      />

      <Stack.Screen name={"DriverService"} component={DriverService} />
      <Stack.Screen name={"MoveCategoryOne"} component={MoveCategoryOne} />
      <Stack.Screen name={"MoveCategoryTwo"} component={MoveCategoryTwo} />
      <Stack.Screen name={"SetPrice"} component={SetPrice} />
      <Stack.Screen name={"Addons"} component={Addons} />
      <Stack.Screen name={"ResolutionCenter"} component={ResolutionCenter} />
      <Stack.Screen name={"Earnings"} component={EarningsScreen} />
      <Stack.Screen
        name={"SupportTeamLiveChat"}
        component={SupportTeamLiveChat}
      />
      <Stack.Screen
        name="SupportTeamChatScreen"
        component={SupportTeamChatScreen}
      />

      <Stack.Screen
        name={"ResolutionCenterScreen"}
        component={ResolutionCenterScreen}
      />

      <Stack.Screen name={"DriverChat"} component={DriverChat} />
      {/* <Stack.Screen name={"DriverProfile"} component={DriverProfile} /> */}

      <Stack.Screen
        name={"DriverNotificationSettings"}
        component={DriverNotificationSettings}
      />

      <Stack.Screen name={"TrackOrder"} component={TrackOrder} />
      <Stack.Screen name={"CustomerProfile"} component={CustomerProfile} />
      <Stack.Screen name={"ManageOrders"} component={ManageOrders} />

      <Stack.Screen name={"DedicatedService"} component={DedicatedService} />

      <Stack.Screen name={"CustomerSearch"} component={CustomerSearch} />
      <Stack.Screen name={"DeliveryManager"} component={DeliveryManager} />
      <Stack.Screen name="AddOnServiceScreen" component={AddOnServiceScreen} />
      <Stack.Screen name="PickupTaskScreen" component={PickupTaskScreen} />
      <Stack.Screen name="DropoffTaskScreen" component={DropoffTaskScreen} />
      <Stack.Screen
        name="CustomerProfilePage"
        component={CustomerProfilePage}
      />
      <Stack.Screen
        name={"CustomerDriverSetting"}
        component={CustomerDriverSetting}
      />
      <Stack.Screen
        name="DriverInfo"
        component={DriverInfo}
        options={{
          headerShown: true,
          title: "Driver Account Information",

          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"PreBackground"}
        component={PreBackground}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"IndividualIdentification"}
        component={IndividualIdentification}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"BusinessIdentification"}
        component={BusinessIdentification}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"IndividualDisclosure"}
        component={IndividualDisclosure}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"BusinessDisclosure"}
        component={BusinessDisclosure}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"BusinessInfo"}
        component={BusinessInfo}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"IndividualInfo"}
        component={IndividualInfo}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"BusinessConfirmation"}
        component={BusinessConfirmation}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"IndividualConfirmation"}
        component={IndividualConfirmation}
        options={{
          headerShown: true,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={"ThankYou"}
        component={ThankYou}
        options={{
          headerShown: false,
          title: "Driver Account Information",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            height: 80,
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
