import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { AppStyles } from "../../../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { Inter } from "../../../../utils/Fonts";
import { Spacer } from "../../../../components/Spacer";
import { icon } from "../../../../assets/png/icons";
import { image } from "../../../../assets/png/images";
import SettingContainer from "./SettingContainer";
import ProfileCard from "../../../../components/ProfileCard";
import NewText from "../../../../components/NewText";
import PhoneNumberModal from "./PhoneNumberModal";
import NumberVerificationModal from "./NumberVerificationModal";
import TermAndCondationModal from "./TermAndCondationModal";
import AddAccountModal from "./AddAccountModal";
import PaymentHistoryModal from "./PaymentHistoryModal";
import PaymentMethodModal from "../../Customer/DriverSearch/PaymentMethodModal";
import AddPaymentMethodModal from "../../Customer/DriverSearch/AddPaymentMethodModal";
import EmailVerificationBottomSheet from "./EmailVerificationBottomSheet";
import NewPasswordBottomSheet from "./NewPasswordBottomSheet";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedAccount,
  getUserAccounts,
  setAddAccount,
  setSelectedAccount,
  setUpdateAccount,
} from "../../../../redux/reducers/authReducer";
import { useIsFocused } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import { customerProfileService } from "../../../../services/customerProfileService";

const CustomerDriverSetting = ({ navigation, route }) => {
  const [isPhoneNumberVisible, setIsPhoneNumberVisible] = useState(false);
  const [isNumberVerification, setIsNumberVerification] = useState(false);
  const params = route?.params;
  const [accountActive, setAccountActive] = useState(false);
  const [isAddPaymentMethodVisible, steIsAddPaymentMethodVisible] =
    useState(false);
  const [isTermAndConditionVisible, setIsTermAndConditionVisible] =
    useState(false);
  const [isPaymentHistoryModal, setIsPaymentHistoryModal] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const emailVerificattionSheet = useRef(false);
  const newPasswordSheet = useRef(false);
  const focused = useIsFocused();
  const dispatch = useDispatch();

  const selectedAccount = useSelector((state) => getSelectedAccount(state));
  const userAccounts = useSelector((state) => getUserAccounts(state));

  const [isAddAccountVisible, setIsAddAccountVisible] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await customerProfileService.getStoredProfile();
        if (profile) {
          setUserProfile(profile);
          setAccountActive(profile.phone_verified === true);
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    loadProfile();
  }, [focused]);

  const ManageOrdersData = [
    {
      title: "Upcoming",
      text: "1",
      onPress: () =>
        navigation.navigate("ManageOrders", { aciveTab: "Upcoming" }),
    },
    {
      title: "Active",
      text: "1",
      onPress: () =>
        navigation.navigate("ManageOrders", { aciveTab: "Active" }),
    },
    {
      title: "Completed",
      text: "5",
      onPress: () =>
        navigation.navigate("ManageOrders", { aciveTab: "Completed" }),
    },
  ];

  const AccountData = [
    {
      title: "Legal Name",
      text: userProfile
        ? `${userProfile.first_name || ""} ${
            userProfile.last_name || ""
          }`.trim() || "Not provided"
        : "Loading...",
    },
    {
      title: "Phone",
      text: userProfile?.phone_number || "Not provided",
    },
    {
      title: "Email",
      text: userProfile?.primary_email || "Not provided",
    },
  ];
  const SecurityData = [
    {
      title: "Password",
      text: "Click to change",
      onPress: () => emailVerificattionSheet.current.present(),
    },
    { title: "MFA", text: "Activated" },
    {
      title: "Notification",
      text: "Click to check settings",
      onPress: () => navigation.navigate("NotificationSettings"),
    },
  ];
  const PaymentData = [
    {
      title: "Methods",
      text: "Click to check settings",
      onPress: () => setIsPaymentModal(true),
    },
    {
      title: "Transaction History",
      text: "Check",
      onPress: () => {
        selectedAccount != "Driver"
          ? setIsPaymentHistoryModal(true)
          : navigation.navigate("Earnings");
      },
    },
    {
      title: "Withdraw",
      text: "Check",
      onPress: () => {
        selectedAccount != "Driver"
          ? setIsPaymentHistoryModal(true)
          : navigation.navigate("Earnings");
      },
    },
  ];
  const LearnData = [
    { title: "News" },
    { title: "Documentations" },
    { title: "Promotions" },
    // { title: "Vouchers/Rewards",},
  ];
  const MoreData = [
    { title: "Be a Partner" },
    {
      title: "Privacy Policy",
      onPress: () => setIsTermAndConditionVisible(true),
    },
    {
      title: "Terms & Conditions",
      onPress: () => setIsTermAndConditionVisible(true),
    },
  ];
  console.log("Customer driver settings ----------");
  return (
    <>
      <Screen
        height={40}
        backgroundColor={colors.white}
        // topBarColor={colors.white}
        barStyle={"dark-content"}
        statusBarColor={colors.white}
      >
        <View
          style={{
            flex: 1,

            backgroundColor: colors.white,
          }}
        >
          <View
            style={{
              ...AppStyles.justifyRow,
              backgroundColor: colors.white,
              paddingVertical: verticalScale(5),
              paddingHorizontal: scale(15),
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              // onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: scale(15), height: scale(15) }}
                resizeMode="contain"
                source={icon.back}
              />
              <Spacer width={scale(10)} />
              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{ textAlign: "center" }}
                text={"Your Profile"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("ResolutionCenter")}
            >
              <Image
                style={{
                  width: scale(70),
                  height: scale(60),
                }}
                source={image.fqa}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
              }}
            >
              <View>
                {userProfile &&
                  userProfile.first_name &&
                  userProfile.last_name && (
                    <View>
                      <ProfileCard
                        selectAccount={selectedAccount}
                        onPress={() => {
                          selectedAccount == "Customer"
                            ? navigation.navigate("Home")
                            : navigation.navigate("Home");
                        }}
                        onNext={() => {
                          navigation.navigate("BottomTab", {
                            screen: "Home",
                          });
                        }}
                        user={
                          userProfile.first_name + " " + userProfile.last_name
                        }
                        img={userProfile.profile_image}
                        isRating={false}
                        isActive={userProfile.phone_verified}
                        buttonWidth={scale(100)}
                        setIsActive={() => {
                          // Handle account activation if needed
                        }}
                      />
                      <Spacer height={verticalScale(10)} />
                    </View>
                  )}
              </View>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  setIsAddAccountVisible(true);
                }}
                style={{
                  ...AppStyles.row,
                  alignSelf: "flex-end",
                  paddingVertical: verticalScale(15),
                }}
              >
                <NewText
                  color={colors.secondary}
                  size={16}
                  text={"Add Account"}
                />
                <Spacer width={scale(10)} />
                <Image
                  style={{ width: scale(16), height: scale(16) }}
                  source={icon.add}
                />
              </TouchableOpacity>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(10),
                }}
                text={"Account"}
              />

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={
                  () =>
                    selectedAccount != "Driver"
                      ? navigation.navigate("CustomerProfilePage")
                      : navigation.navigate("DriverInfo")
                  //setIsPhoneNumberVisible(true)
                }
                style={{
                  flexDirection: "row",
                  // alignSelf: "flex-end",
                  alignItems: accountActive ? "center" : "flex-start",
                  marginVertical: 10,
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  backgroundColor: accountActive
                    ? "#00FF66" + "20"
                    : colors.red + "20",
                  borderRadius: 10,
                }}
              >
                {accountActive ? (
                  <TouchableOpacity style={styles.activeContainer}>
                    <Image
                      style={{ width: 18, height: 18 }}
                      resizeMode="contain"
                      source={icon.tick}
                    />
                  </TouchableOpacity>
                ) : (
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={image.alert}
                  />
                )}

                <View
                  style={{ gap: 5, marginHorizontal: 10, marginVertical: 5 }}
                >
                  {accountActive ? (
                    <NewText
                      color={colors.black}
                      size={14}
                      text={"Account Activated!"}
                    />
                  ) : (
                    <>
                      <NewText
                        color={colors.black}
                        size={13}
                        text={"Required Action (1)"}
                      />
                      {/* here we are */}
                      <NewText
                        color={colors.red}
                        size={13}
                        text={"Click here to resolve"}
                      />
                    </>
                  )}
                </View>
              </TouchableOpacity>
              <View style={styles.box}>
                <View style={{ paddingTop: verticalScale(15) }}>
                  {AccountData.map((item, index) => {
                    return (
                      <SettingContainer
                        text={item.title}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                text={"Manage Orders"}
              />
              <View style={styles.box}>
                <View style={{ paddingTop: verticalScale(15) }}>
                  {ManageOrdersData.map((item, index) => {
                    return (
                      <SettingContainer
                        text={item.title}
                        onPress={item.onPress}
                        fontWeight={"bold"}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                text={"Security"}
              />
              <View style={styles.box}>
                <View style={{ paddingTop: verticalScale(15) }}>
                  {SecurityData.map((item, index) => {
                    return (
                      <SettingContainer
                        onPress={item.onPress}
                        text={item.title}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                text={"Payment"}
              />
              <View style={styles.box}>
                <View style={{ paddingTop: verticalScale(15) }}>
                  {PaymentData.map((item, index) => {
                    return (
                      <SettingContainer
                        text={item.title}
                        onPress={item?.onPress}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                text={"Learn"}
              />
              <View style={styles.box}>
                <View style={{ paddingTop: verticalScale(15) }}>
                  {LearnData.map((item, index) => {
                    return (
                      <SettingContainer
                        text={item.title}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>
              <NewText
                fontWeight="700"
                color={colors.black}
                fontFam={Inter.bold}
                size={16}
                style={{
                  marginTop: verticalScale(20),
                  marginBottom: verticalScale(15),
                }}
                text={"More"}
              />
              <View style={styles.box}>
                <View style={{ paddingTop: verticalScale(15) }}>
                  {MoreData.map((item, index) => {
                    return (
                      <SettingContainer
                        onPress={item.onPress}
                        text={item.title}
                        data={AccountData}
                        index={index}
                        text1={item.text}
                      />
                    );
                  })}
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  if (selectedAccount == "Driver") {
                    dispatch(setSelectedAccount("Customer"));
                    navigation.navigate("BottomTab");
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 10,
                        routes: [{ name: "BottomTab" }],
                      })
                    );
                  } else {
                    navigation.navigate("CustomerSignup");
                  }
                }}
                style={{
                  ...AppStyles.row,
                  paddingHorizontal: scale(7),
                  paddingVertical: verticalScale(5),
                  // width: scale(100),
                  alignSelf: "flex-end",
                  borderWidth: 1.5,
                  borderColor: "#FF0000",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: scale(6),
                  marginTop: verticalScale(10),
                  marginBottom: verticalScale(20),
                  gap: 5,
                }}
              >
                <NewText
                  fontWeight="700"
                  color={"#FF0000"}
                  fontFam={Inter.bold}
                  size={14}
                  text={"Log Out"}
                />

                <Image
                  style={{
                    width: scale(18),
                    height: scale(18),
                    alignSelf: "flex-end",
                  }}
                  source={image.logout}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Screen>

      <PhoneNumberModal
        modalVisible={isPhoneNumberVisible}
        setModalVisible={setIsPhoneNumberVisible}
        onSubmit={() => {
          setIsPhoneNumberVisible(false);
          setTimeout(() => {
            setIsNumberVerification(true);
          }, 500);
        }}
      />
      <NumberVerificationModal
        modalVisible={isNumberVerification}
        setModalVisible={setIsNumberVerification}
        onSubmit={() => {
          setIsNumberVerification(false);
          setAccountActive(true);
        }}
      />

      <AddAccountModal
        modalVisible={isAddAccountVisible}
        userProfile={userProfile}
        setModalVisible={setIsAddAccountVisible}
        onSubmit={() => {
          setIsPhoneNumberVisible(false);
          setTimeout(() => {
            setIsNumberVerification(true);
          }, 500);
        }}
      />
      <TermAndCondationModal
        modalVisible={isTermAndConditionVisible}
        setModalVisible={setIsTermAndConditionVisible}
      />
      <PaymentHistoryModal
        modalVisible={isPaymentHistoryModal}
        setModalVisible={setIsPaymentHistoryModal}
      />
      <PaymentMethodModal
        onPressCard={() => {
          setIsPaymentModal(false);
          setTimeout(() => {
            steIsAddPaymentMethodVisible(true);
          }, 1000);
        }}
        modalVisible={isPaymentModal}
        setModalVisible={setIsPaymentModal}
      />
      <AddPaymentMethodModal
        buttonTitle={"Submit"}
        onPay={() => {
          steIsAddPaymentMethodVisible(false);
          setTimeout(() => {
            navigation.navigate("Home");
            // setIsThankyouModal(true);
          }, 500);
        }}
        modalVisible={isAddPaymentMethodVisible}
        setModalVisible={steIsAddPaymentMethodVisible}
      />

      <EmailVerificationBottomSheet
        bottomSheetModalRef={emailVerificattionSheet}
        onSubmit={() => {
          emailVerificattionSheet.current.dismiss();
          setTimeout(() => {
            newPasswordSheet.current.present();
          }, 500);
        }}
      />
      <NewPasswordBottomSheet
        bottomSheetModalRef={newPasswordSheet}
        onSubmit={() => {
          newPasswordSheet.current.dismiss();
          setTimeout(() => {
            navigation.navigate("Home");
          }, 500);
        }}
      />
    </>
  );
};

export default CustomerDriverSetting;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
    paddingHorizontal: scale(15),
    // paddingBottom:verticalScale(10)
  },
  activeContainer: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
