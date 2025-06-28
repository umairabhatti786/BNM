import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
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
import NeedRide from "./NeedRide";
import CategoryBottomTab from "../../../../components/CategoryBottomTab";
import DeliveryServices from "./DeliveryServices";
import SuccessModal from "../../../../components/SuccessModal";
import { Spacer } from "../../../../components/Spacer";

const CustomerFilter = ({ navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState("Need a Ride");
  const [isPostedModal, setIsPostedModal] = useState(false);
  const [isSavedModal, setIsSavedModal] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const needRideRef = useRef();
  const deliveryServicesRef = useRef();

  useEffect(() => {
    if (route.params?.postData) {
      const post = route.params.postData;
      setSelectedTab(
        post.postType === "ride" ? "Need a Ride" : "Delivery Services"
      );

      // Use requestAnimationFrame to ensure the refs are set
      requestAnimationFrame(() => {
        if (post.postType === "ride" && needRideRef.current) {
          needRideRef.current.setInitialData(post);
        } else if (
          post.postType === "delivery" &&
          deliveryServicesRef.current
        ) {
          deliveryServicesRef.current.setInitialData(post);
        }
      });
    }
  }, [route.params]);

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
        onPress={() => navigation.navigate("CustomerChat", { data: item })}
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
          elevation: 5,
          shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          backgroundColor: colors.white,
        }}
      >
        <View
          style={{
            ...AppStyles.justifyRow,
            backgroundColor: colors.white,
            marginTop: Platform.OS == "ios" ? -20 : 0,
            // paddingVertical: verticalScale(13),
            height: 50,
            // marginTop: -20,
            paddingVertical: verticalScale(13),
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.black40,
          }}
        >
          <TouchableOpacity
            style={{ width: "15%" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: scale(15), height: scale(15) }}
              resizeMode="contain"
              source={icon.back}
            />
          </TouchableOpacity>
          <NewText
            fontWeight="700"
            color={colors.black}
            fontFam={Inter.bold}
            size={17}
            text={"Filter"}
          />
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.goBack()}
          >
            <NewText
              fontWeight="700"
              color={colors.primary}
              fontFam={Inter.bold}
              size={17}
              text={"Search"}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 52,
            backgroundColor: colors.white,
          }}
        >
          {["Need a Ride", "Delivery Service"]?.map((item, _index) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={_index.toString()}
              style={{
                flex: 1,
              }}
              onPress={() => {
                setSelectedTab(item);
              }}
            >
              <View
                style={{
                  borderBottomWidth: 4,
                  padding: 15,
                  justifyContent: "center",
                  backgroundColor: colors.white,
                  alignItems: "center",
                  borderBottomWidth: 3,
                  borderColor:
                    selectedTab === item ? colors.primary : colors.white,
                  flex: 1,
                }}
              >
                <NewText
                  size={17}
                  fontWeight="700"
                  color={selectedTab === item ? colors.primary : colors.black40}
                  text={item}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const handlePostSuccess = (response) => {
    setIsPostedModal(true);
  };

  const handleSave = () => {
    console.log("Save button clicked in parent");
    if (selectedTab === "Need a Ride") {
      needRideRef.current?.save();
    } else {
      deliveryServicesRef.current?.save();
    }
  };

  return (
    <>
      <Screen
        backgroundColor={colors.white}
        topBarColor={colors.white}
        statusBarColor={colors.white}
        barStyle={"dark-content"}
      >
        <View style={{ backgroundColor: colors.white }}>
          <Header />
          <Spacer height={4} />

          {selectedTab == "Need a Ride" ? (
            <NeedRide
              ref={needRideRef}
              navigation={navigation}
              onPostSuccess={handlePostSuccess}
              route={route}
            />
          ) : (
            <DeliveryServices
              ref={deliveryServicesRef}
              navigation={navigation}
              onPostSuccess={handlePostSuccess}
              route={route}
            />
          )}
        </View>
      </Screen>

      <SuccessModal
        modalVisible={isPostedModal}
        title={"Posted!"}
        descripation={"You can view your post in Watchlist"}
        submitText={"See Watchlist"}
        setModalVisible={setIsPostedModal}
        onSubmit={() => {
          setIsPostedModal(false);
          setTimeout(() => {
            navigation.navigate("Watchlist");
          }, 500);
        }}
      />
      <SuccessModal
        modalVisible={isSavedModal}
        title={"Saved!"}
        descripation={"You can view Saved Search in Watchlist"}
        submitText={"See Watchlist"}
        setModalVisible={setIsSavedModal}
        onSubmit={() => {
          setIsSavedModal(false);
          setTimeout(() => {
            navigation.navigate("Watchlist");
          }, 500);
        }}
      />

      <CategoryBottomTab
        label1={"Save"}
        onLabel1={handleSave}
        onLabel2={() => setIsPostedModal(true)}
        onLabel3={() => setIsRefresh(!isRefresh)}
        label2={"Post"}
        label3={"Clear All"}
        color={colors.primary}
      />
    </>
  );
};

export default CustomerFilter;

const styles = StyleSheet.create({});
