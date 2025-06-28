import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { CustomHeader } from "../../../../components/CustomHeader";
import { Inter } from "../../../../utils/Fonts";
import { AppStyles } from "../../../../utils/AppStyle";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import { image } from "../../../../assets/png/images";
import CustomText from "../../../../components/CustomText";
import { icon } from "../../../../assets/png/icons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import CustomButton from "../../../../components/CustomButton";
import NewText from "../../../../components/NewText";
import Collapsible from "react-native-collapsible";
import BottomSheet from "../../../../components/BottomSheet";
import DashedLine from "react-native-dashed-line";
import RenameModal from "../../Customer/CustomerWatchlist/RenameModal";
import DeleteModal from "../../Customer/CustomerWatchlist/DeleteModal";
import AttachmentModal from "../../Customer/CustomerChat/AttachmentModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddService,
  setAddServiceVisable,
} from "../../../../redux/reducers/authReducer";
import AddServiceModal from "./AddServiceModal";
import { useIsFocused } from "@react-navigation/native";
import SuccessModal from "../../../../components/SuccessModal";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import { ToastAndroid } from "react-native";
import customerProfileService from "../../../../services/customerProfileService";

const ServiceProfile = ({ navigation, route }) => {
  const [isOfferedService, setIsOfferedService] = useState(false);
  const [isSavedSearch, setIsSavedSearch] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isRenameModal, setIsRenameModal] = useState(false);
  const [isAttachModal, setIsAttachModal] = useState(false);
  const [renameText, setRenameText] = useState("");
  const [isAddServiceVisable, setIsAddServiceVisable] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const dispatch = useDispatch();
  const addService = useSelector(getAddService);
  const focused = useIsFocused();

  console.log("isAddServiceVisable", addService);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [selectedOffers, setSelectedOffers] = useState({});
  const [isSelectedOffers, setIsSelectedOffers] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (addService?.isAddService == true) {
      setTimeout(() => {
        setIsAddServiceVisable(true);
      }, 500);
    }
  }, [focused]);

  // useEffect(() => {
  //   if(addService?.isAddService==true){
  //     setIsAddServiceVisable(true)
  //   }

  // }, [focused]);

  const bottomSheetData = [
    {
      name: "Open",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();
      },
    },
    {
      name: "Edit",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();
      },
    },
    {
      name: "Rename",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();

        setTimeout(() => {
          setIsRenameModal(true);
        }, 800);
      },
    },
    {
      name: "Post",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();
      },
    },
    {
      name: "Delete",
      onPress: () => {
        bottomSheetModalRef.current.dismiss();

        setTimeout(() => {
          setIsDeleteModal(true);
        }, 800);
      },
    },
  ];
  console.log("selectedOffersckdnckd", selectedOffers);
  const [offeredServiceData, setOfferServiceData] = useState([
    { name: "Delivery (main)", isOfline: false, id: 0 },
    { name: "Furniture Deliver", isOfline: false, id: 1 },
    { name: "Installation/Dismantling", isOfline: false, id: 2 },
    { name: "Piano Delivery", isOfline: true, removeLine: true, id: 3 },
  ]);
  const [saveSearchData, setSaveSearchData] = useState([
    { name: "Ride", id: 4 },
    { name: "Furniture Deliver", id: 5, removeLine: true },
  ]);

  console.log("offeredServiceData", saveSearchData);

  const ProfileContainer = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("ServiceProfile")}
        style={{ ...styles.box }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: scale(10),
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsAttachModal(true)}
            style={AppStyles.row}
          >
            <Image
              style={{
                width: scale(55),
                height: scale(55),
                borderRadius: scale(8),
              }}
              source={
                userProfile?.profile_picture
                  ? { uri: userProfile.profile_picture }
                  : image.default_user
              }
            />

            <View
              style={{
                width: scale(28),
                height: scale(28),
                borderRadius: scale(30),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.gray300,
                position: "absolute",
                bottom: verticalScale(-5),
                left: scale(-8),
                borderWidth: 2.5,
                borderColor: colors.white,
              }}
            >
              <Image
                style={{
                  width: "60%",
                  height: "60%",
                  marginBottom: verticalScale(2),
                }}
                resizeMode="contain"
                source={icon.camera}
              />
            </View>
            <View
              style={{
                paddingLeft: scale(10),
                paddingTop: verticalScale(3),
                gap: verticalScale(2),
              }}
            >
              <CustomText
                text={"Hello,"}
                size={15}
                fontWeight={"600"}
                fontFam={Inter.medium}
                style={{ marginRight: scale(5) }}
                color={colors.gray}
              />

              <NewText
                text={"Will Smith"}
                size={15}
                fontWeight={"600"}
                fontFam={Inter.bold}
                color={colors.black}
              />
            </View>
          </TouchableOpacity>

          <View style={{ ...AppStyles.row, gap: scale(8) }}>
            <Image
              style={{
                width: scale(20),
                height: scale(20),
              }}
              resizeMode="contain"
              source={icon.share}
            />

            <NewText text={"Share"} size={14} color={colors.gray} />
          </View>
        </View>

        <View>
          <CustomLine />
        </View>
        <View style={{ padding: scale(10) }}>
          <CustomButton
            text={"Add New Service"}
            height={verticalScale(30)}
            width={"100%"}
            fontWeight={"600"}
            size={13}
            onPress={() => navigation.navigate("DriverService")}
            fontFam={Inter.medium}
            textColor={colors.white}
            bgColor={colors.secondary}
            borderColor={colors.secondary}
            borderWidth={1.5}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const DropContainer = ({
    fontWeight,
    size,
    txt,
    onPress,
    isSetting,
    isActive,
    removeLine,
    internet_image,
    isInternet,
  }) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={{
            ...AppStyles.justifyRow,
            paddingVertical: verticalScale(8),
            paddingHorizontal: scale(15),
          }}
        >
          <View style={{ ...AppStyles.row, gap: scale(10) }}>
            {isInternet && (
              <Image
                style={{ width: scale(18), height: scale(18) }}
                source={internet_image || icon.internet}
                resizeMode={"contain"}
              />
            )}

            <NewText
              fontWeight={"500"}
              color={colors.black}
              text={txt}
              size={16}
            />
          </View>

          <Spacer width={scale(10)} />
          {isSetting ? (
            <Image
              style={{ width: scale(20), height: scale(20) }}
              source={icon.dots}
              resizeMode={"contain"}
            />
          ) : (
            <Image
              style={{ width: scale(13), height: scale(13) }}
              source={isActive ? icon.up : icon.down}
              resizeMode={"contain"}
            />
          )}
        </TouchableOpacity>

        {!removeLine && (
          <View style={{ paddingVertical: verticalScale(8) }}>
            <CustomLine />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const handlePhotoUpload = async (type) => {
    try {
      const options = {
        mediaType: "photo",
      };
      const response =
        type === "gallery"
          ? await launchImageLibrary(options)
          : await launchCamera(options);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
        ToastAndroid.show("Failed to select image", ToastAndroid.SHORT);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setPhotoUri(uri);
          try {
            const updatedProfile =
              await customerProfileService.uploadProfilePicture(uri);
            // Update the profile image in the UI
            setUserProfile(updatedProfile);
            ToastAndroid.show(
              "Profile picture updated successfully",
              ToastAndroid.SHORT
            );
          } catch (error) {
            console.error("Error uploading profile picture:", error);
            ToastAndroid.show(
              "Failed to upload profile picture",
              ToastAndroid.SHORT
            );
            setPhotoUri(null);
          }
        }
        setIsAttachModal(false);
      }
    } catch (error) {
      console.log("ImagePicker Error: ", error);
      ToastAndroid.show(
        `Failed to ${type === "gallery" ? "access gallery" : "access camera"}`,
        ToastAndroid.SHORT
      );
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
        <CustomHeader
          label={"Service Profile"}
          navigation={navigation}
          isRight={true}
          onRight={() => navigation.navigate("DriverInfo", { isEdit: true })}
        />

        <ScrollView>
          <View
            style={{
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(15),
              paddingBottom: verticalScale(30),
            }}
          >
            <ProfileContainer />

            <View
              style={{
                ...AppStyles.justifyRow,
                paddingVertical: verticalScale(30),
              }}
            >
              <View style={styles.amountContainer}>
                <CustomText
                  text={"100"}
                  size={22}
                  fontWeight={"bold"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <CustomText text={"Views"} size={12} color={colors.gray} />
              </View>

              <CustomLine height={verticalScale(50)} width={1} />

              <View style={styles.amountContainer}>
                <CustomText
                  text={"10"}
                  size={22}
                  fontWeight={"bold"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <CustomText text={"Saved"} size={12} color={colors.gray} />
              </View>

              <CustomLine height={verticalScale(50)} width={1} />

              <View style={styles.amountContainer}>
                <CustomText
                  text={"4.8"}
                  size={22}
                  fontWeight={"bold"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <CustomText text={"Ratings"} size={12} color={colors.gray} />
              </View>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsOfferedService(!isOfferedService)}
                style={{
                  ...AppStyles.justifyRow,
                  //   paddingTop: verticalScale(35),
                }}
              >
                <CustomText
                  text={"Offered Service"}
                  size={14}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={isOfferedService == true ? icon.down : icon.up}
                />
              </TouchableOpacity>
              <Collapsible collapsed={isOfferedService}>
                {offeredServiceData.length > 0 && (
                  <View
                    style={{
                      ...AppStyles.box,
                      paddingTop: 10,
                      marginTop: 15,
                    }}
                  >
                    {offeredServiceData.map((item, index) => {
                      return (
                        <DropContainer
                          size={15}
                          isInternet
                          internet_image={
                            item?.isOfline ? icon.no_internet : item.internet
                          }
                          removeLine={offeredServiceData.length - 1 == index}
                          onPress={() => {
                            setRenameText(item?.name);

                            setIsSelectedOffers(true);
                            setSelectedOffers(item?.id);
                            setTimeout(() => {
                              bottomSheetModalRef.current.present();
                            }, 500);
                          }}
                          txt={item.name}
                          isSetting
                        />
                      );
                    })}

                    <View style={{ paddingBottom: 10 }} />
                  </View>
                )}
              </Collapsible>
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsSavedSearch(!isSavedSearch)}
                style={{
                  ...AppStyles.justifyRow,
                  paddingTop: verticalScale(25),
                }}
              >
                <CustomText
                  text={"Saved Search"}
                  size={14}
                  fontWeight={"700"}
                  fontFam={Inter.bold}
                  color={colors.black}
                />

                <Image
                  style={styles.iconContainer}
                  resizeMode={"contain"}
                  source={isSavedSearch == true ? icon.down : icon.up}
                />
              </TouchableOpacity>
              <Collapsible collapsed={isSavedSearch}>
                {saveSearchData.length > 0 && (
                  <View
                    style={{
                      ...AppStyles.box,
                      paddingTop: 10,
                      marginTop: 15,
                    }}
                  >
                    {saveSearchData.map((item, index) => {
                      return (
                        <DropContainer
                          size={15}
                          removeLine={saveSearchData.length - 1 == index}
                          onPress={() => {
                            setSelectedOffers(item?.id);
                            setRenameText(item?.name);
                            setTimeout(() => {
                              bottomSheetModalRef.current.present();
                            }, 500);
                          }}
                          txt={item.name}
                          isSetting
                        />
                      );
                    })}

                    <View style={{ paddingBottom: 10 }} />
                  </View>
                )}
              </Collapsible>
            </View>
          </View>
        </ScrollView>
      </Screen>

      <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
        <View style={{ paddingHorizontal: 15 }}>
          <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              setTimeout(() => {
                if (!isSelectedOffers) {
                  navigation.navigate("CustomerSearch");
                } else {
                  navigation.navigate("DriverService");
                  setIsSelectedOffers(false);
                }
              }, 500);
            }}
            activeOpacity={0.6}
          >
            <NewText
              color={colors.gray200}
              style={{ textAlign: "center", marginTop: verticalScale(15) }}
              size={16}
              text={"Open"}
            />
            <View style={{ paddingTop: verticalScale(15) }}>
              <DashedLine
                style={{ width: "100%" }}
                dashLength={3}
                dashThickness={1}
                dashGap={3}
                dashColor={colors.gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              setTimeout(() => {
                if (!isSelectedOffers) {
                  navigation.navigate("DriverFilter");
                } else {
                  navigation.navigate("DriverService");
                  setIsSelectedOffers(false);
                }
              }, 500);
            }}
            activeOpacity={0.6}
          >
            <NewText
              color={colors.gray200}
              style={{ textAlign: "center", marginTop: verticalScale(15) }}
              size={16}
              text={"Edit"}
            />
            <View style={{ paddingTop: verticalScale(15) }}>
              <DashedLine
                style={{ width: "100%" }}
                dashLength={3}
                dashThickness={1}
                dashGap={3}
                dashColor={colors.gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              setTimeout(() => {
                setIsRenameModal(true);
              }, 800);
            }}
            activeOpacity={0.6}
          >
            <NewText
              color={colors.gray200}
              style={{ textAlign: "center", marginTop: verticalScale(15) }}
              size={16}
              text={"Rename"}
            />
            <View style={{ paddingTop: verticalScale(15) }}>
              <DashedLine
                style={{ width: "100%" }}
                dashLength={3}
                dashThickness={1}
                dashGap={3}
                dashColor={colors.gray}
              />
            </View>
          </TouchableOpacity>
          {isSelectedOffers && (
            <TouchableOpacity
              onPress={() => {
                const updates = [...offeredServiceData];
                updates[selectedOffers] = {
                  ...updates[selectedOffers],
                  isOfline: updates[selectedOffers].isOfline ? false : true, // Set the new property
                };
                setOfferServiceData(updates);
                setIsSelectedOffers(false);

                bottomSheetModalRef.current.dismiss();
              }}
              activeOpacity={0.6}
            >
              <NewText
                color={colors.gray200}
                style={{ textAlign: "center", marginTop: verticalScale(15) }}
                size={16}
                text={
                  offeredServiceData[selectedOffers]?.isOfline ? "Post" : "Hide"
                }
              />
              <View style={{ paddingTop: verticalScale(15) }}>
                <DashedLine
                  style={{ width: "100%" }}
                  dashLength={3}
                  dashThickness={1}
                  dashGap={3}
                  dashColor={colors.gray}
                />
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              bottomSheetModalRef.current.dismiss();

              setTimeout(() => {
                setIsDeleteModal(true);
              }, 800);
            }}
            activeOpacity={0.6}
          >
            <NewText
              color={colors.red}
              style={{ textAlign: "center", marginTop: verticalScale(15) }}
              size={16}
              text={"Delete"}
            />
            <View style={{ paddingTop: verticalScale(15) }}>
              <DashedLine
                style={{ width: "100%" }}
                dashLength={3}
                dashThickness={1}
                dashGap={3}
                dashColor={colors.gray}
              />
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <SuccessModal
        modalVisible={isSuccessModal}
        title={"Saved!"}
        successButtonColor={colors.secondary}
        descripation={"You can view Item in Offered Service"}
        submitText={"See Offered Service"}
        setModalVisible={setIsSuccessModal}
        onSubmit={() => {
          setIsSuccessModal(false);
        }}
      />

      <RenameModal
        mainColor={colors.primary}
        setRenameText={setRenameText}
        renameText={renameText}
        onChangeText={(txt) => {
          setRenameText(txt);
        }}
        setModalVisible={setIsRenameModal}
        modalVisible={isRenameModal}
        title={"Rename"}
        onSubmit={() => {
          if (isSelectedOffers) {
            const updates = [...offeredServiceData];
            updates[selectedOffers] = {
              ...updates[selectedOffers],
              name: renameText, // Set the new property
            };
            setOfferServiceData(updates);
            setRenameText("");
            setIsSelectedOffers(false);
          } else {
            const updates = [...saveSearchData];

            // Find the index of the item you want to update
            const indexToUpdate = updates?.findIndex(
              (item) => item?.id === selectedOffers
            );

            // If the item is found, update its name
            if (indexToUpdate !== -1) {
              updates[indexToUpdate] = {
                ...updates[indexToUpdate],
                name: renameText, // Set the new property
              };
            }

            setSaveSearchData(updates);
            setRenameText("");
          }

          setIsRenameModal(false);
        }}
        navigation={navigation}
      />

      <DeleteModal
        modalVisible={isDeleteModal}
        setModalVisible={setIsDeleteModal}
        onYes={() => {
          if (isSelectedOffers) {
            // Assuming selectedOffers is the object with an id property
            const filterUpdate = offeredServiceData.filter(
              (item) => item?.id !== selectedOffers
            );

            // Update the state with the filtered array

            setOfferServiceData(filterUpdate);
            setIsSelectedOffers(false);
          } else {
            // Assuming selectedOffers is the object with an id property
            const filterUpdate = saveSearchData.filter(
              (item) => item?.id !== selectedOffers
            );
            console.log("filterUpdate", filterUpdate);
            // Update the state with the filtered array
            setSaveSearchData(filterUpdate);
          }
          setIsDeleteModal(false);

          //   setTimeout(() => {
          //     setIsSuccessModal(true);
          //   }, 500);
        }}
      />
      <AttachmentModal
        modalVisible={isAttachModal}
        title={"Change Profile Picture"}
        subtitle_image={image.upload_photo}
        subtitle1={"Upload From Photos"}
        subtitle2={"Capture Photo"}
        setModalVisible={setIsAttachModal}
        onGalleryPress={() => handlePhotoUpload("gallery")}
        onCameraPress={() => handlePhotoUpload("camera")}
      />
      <AddServiceModal
        title={"Service  Name"}
        placeholder={
          addService?.serviceName == "Add-ons"
            ? "Delivery Add-ons only "
            : `${addService?.serviceName} Service (Default)`
        }
        modalVisible={isAddServiceVisable}
        value={serviceValue}
        onCancel={() => {
          setIsAddServiceVisable(false);
          setServiceValue("");

          dispatch(setAddServiceVisable(false));
        }}
        onSubmit={() => {
          setIsAddServiceVisable(false);
          setServiceValue("");
          setTimeout(() => {
            setIsSuccessModal(true);
          }, 500);

          dispatch(setAddServiceVisable(false));
        }}
        setValue={setServiceValue}
        setModalVisible={setIsAddServiceVisable}
      />
    </>
  );
};

export default ServiceProfile;

const styles = StyleSheet.create({
  box: {
    borderRadius: scale(15),
    borderWidth: 1,
    borderColor: colors.black40,
  },
  amountContainer: { width: "30%", alignItems: "center" },
  iconContainer: {
    width: scale(14),
    height: scale(14),
  },
});
