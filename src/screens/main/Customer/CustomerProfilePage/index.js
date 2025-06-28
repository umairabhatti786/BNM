import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Modal,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomInput from "../../../../components/CustomInput";
import NewText from "../../../../components/NewText";
import { Spacer } from "../../../../components/Spacer";
import Button from "../../../../components/Button";
import { colors } from "../../../../utils/colors";
import { Inter } from "../../../../utils/Fonts";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { AppStyles } from "../../../../utils/AppStyle";
import { icon } from "../../../../assets/png/icons";
import CustomButton from "../../../../components/CustomButton";
import { formatPhoneNumber } from "../../../../utils/Commons";
import CustomText from "../../../../components/CustomText";
import NumberVerificationModal from "../../Driver/CustomerDriverSetting/NumberVerificationModal";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { dimensions, fontSizes } from "../../../../styles/constants";
import { customerProfileService } from "../../../../services/customerProfileService";
import { phoneVerificationService } from "../../../../services/phoneVerificationService";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CustomerProfilePage = () => {
  const navigation = useNavigation();

  const [photoUri, setPhotoUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState({});
  const [isNumberVerification, setIsNumberVerification] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerificationInput, setShowVerificationInput] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        // First try to get the profile from the API
        const profile = await customerProfileService.getUserProfile();
        if (profile) {
          setUserProfile(profile);
          setFirstName(profile.first_name || "");
          setLastName(profile.last_name || "");
          setEmail(profile.primary_email || "");
          setSecondaryEmail(profile.secondary_email || "");
          setPhone(profile.phone_number || "");
          setZipCode(profile.zip_code || "");
          setCity(profile.city || "");
          setState(profile.state || "");
          setAccountActive(profile.phone_verified || false);
        }
      } catch (error) {
        console.error("Error loading profile from API:", error);
        // If API call fails, try to get from AsyncStorage
        try {
          const storedProfile = await customerProfileService.getStoredProfile();
          if (storedProfile) {
            setUserProfile(storedProfile);
            setFirstName(storedProfile.first_name || "");
            setLastName(storedProfile.last_name || "");
            setEmail(storedProfile.primary_email || "");
            setSecondaryEmail(storedProfile.secondary_email || "");
            setPhone(storedProfile.phone_number || "");
            setZipCode(storedProfile.zip_code || "");
            setCity(storedProfile.city || "");
            setState(storedProfile.state || "");
            setAccountActive(storedProfile.phone_verified || false);
          }
        } catch (storageError) {
          console.error("Error loading profile from storage:", storageError);
        }
      }
    };

    loadProfile();
  }, []);

  const handleSendVerificationCode = async () => {
    try {
      await phoneVerificationService.sendVerificationCode(phone);
      setIsNumberVerification(true);
    } catch (error) {
      console.error("Error sending verification code:", error);
      ToastAndroid.show("Failed to send verification code", ToastAndroid.SHORT);
    }
  };

  const handleVerifySuccess = async () => {
    try {
      // Update verification status in AsyncStorage and API
      const updatedProfile =
        await customerProfileService.updatePhoneVerificationStatus(true);
      setAccountActive(true);
      setUserProfile(updatedProfile);
      setErrors({ ...errors, verify: "" });
    } catch (error) {
      console.error("Error updating verification status:", error);
      ToastAndroid.show(
        "Failed to update verification status",
        ToastAndroid.SHORT
      );
    }
  };

  const onSave = async () => {
    let errors = {};

    // Check first name
    if (!firstName) {
      errors.firstName = "First name is required.";
    }

    // Check last name
    if (!lastName) {
      errors.lastName = "Last name is required.";
    }

    // Check phone
    if (!phone) {
      errors.phone = "Phone number is required.";
    }

    // Check zip code
    if (!zipCode) {
      errors.zipCode = "Zip code is required.";
    }

    // Check city
    if (!city) {
      errors.city = "City is required.";
    }

    // Check state
    if (!state) {
      errors.state = "State is required.";
    }

    // Check if phone is verified
    if (!accountActive) {
      errors.verify = "Please verify phone number";
    }

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      // Prepare profile data for update
      const profileData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        secondary_email: secondaryEmail,
        city: city,
        state: state,
        zip_code: zipCode,
        phone_verified: accountActive,
        account_active: accountActive,
      };

      // Update profile
      const updatedProfile = await customerProfileService.updateUserProfile(
        profileData
      );

      // Update local state with the new profile data
      setUserProfile(updatedProfile);
      setAccountActive(updatedProfile.phone_verified === true);

      // Show success message
      ToastAndroid.show("Profile updated successfully", ToastAndroid.SHORT);

      // Navigate to next screen with the correct account active status
      navigation.navigate("CustomerDriverSetting", {
        active: updatedProfile.phone_verified === true,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      ToastAndroid.show("Failed to update profile", ToastAndroid.SHORT);
    }
  };

  // Example of how you can log errors for specific fields
  console.log(errors.email, "EMAIL");
  console.log(errors.firstName, "FIRST NAME");
  const handlePhotoUpload = () => {
    setModalVisible(true);
  };

  const selectFromGallery = async () => {
    const options = {
      mediaType: "photo",
    };
    try {
      const response = await launchImageLibrary(options);
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
        setModalVisible(false);
      }
    } catch (error) {
      console.log("ImagePicker Error: ", error);
      ToastAndroid.show("Failed to access gallery", ToastAndroid.SHORT);
    }
  };

  const capturePhoto = async () => {
    const options = {
      mediaType: "photo",
    };
    try {
      const response = await launchCamera(options);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
        ToastAndroid.show("Failed to capture image", ToastAndroid.SHORT);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setPhotoUri(uri);
          try {
            const updatedProfile =
              await customerProfileService.uploadProfilePicture(uri);
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
        setModalVisible(false);
      }
    } catch (error) {
      console.log("ImagePicker Error: ", error);
      ToastAndroid.show("Failed to access camera", ToastAndroid.SHORT);
    }
  };
  console.log(photoUri, "-----ph");
  return (
    <View>
      <View
        style={{
          ...AppStyles.justifyRow,
          marginTop: Platform.OS == "ios" ? -20 : 0,
          // paddingVertical: verticalScale(13),
          height: 57,
          backgroundColor: colors.white,
          paddingVertical: verticalScale(13),
          paddingHorizontal: scale(15),
          borderBottomWidth: 1,
          borderColor: colors.black40,
          // paddingTop: 60,
        }}
      >
        <TouchableOpacity
          // style={{ width: "15%" }}
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
          style={{ marginLeft: 30 }}
          text={"Customer Profile"}
        />
        <View style={{ width: 50 }} />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={styles.container}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.black40,
            paddingHorizontal: 15,
            paddingTop: 10,
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handlePhotoUpload}>
              {photoUri ? (
                <Image
                  source={{ uri: photoUri }}
                  style={styles.uploadedPhoto}
                />
              ) : userProfile?.profile_picture ? (
                <Image
                  source={{ uri: userProfile.profile_picture }}
                  style={styles.uploadedPhoto}
                />
              ) : (
                <>
                  <Image
                    style={{
                      width: 64,
                      height: 64,
                      zIndex: 1,
                      marginRight: 10,
                    }}
                    source={require("../../../../assets/png/images/profile.png")}
                  />
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 16,
                      backgroundColor: colors.gray300,
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                      bottom: 17,
                    }}
                  >
                    <Image
                      style={{ width: 12, height: 12 }}
                      source={require("../../../../assets/png/icons/camera.png")}
                    />
                  </View>
                </>
              )}
            </TouchableOpacity>
            <View>
              <NewText
                size={14}
                fontWeight={"600"}
                color={colors.gray}
                text={"Hello,"}
                style={{ marginBottom: 5, marginTop: 10 }}
              />
              <NewText
                size={16}
                fontWeight={"700"}
                color={colors.black}
                text={`${userProfile?.first_name || ""} ${
                  userProfile?.last_name || ""
                }`}
              />
            </View>
          </View>
          <Image
            style={{ height: 30, width: 20 }}
            source={require("../../../../assets/png/icons/badge.png")}
          />
        </View>
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <NewText style={styles.title} text={"First name"} />
            <View style={styles.inputContainer}>
              <CustomInput
                style={[styles.input]}
                placeholder={"Will"}
                value={firstName}
                error={errors.firstName}
                onChangeText={(val) => {
                  setFirstName(val), setErrors({ ...errors, firstName: "" });
                }}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <NewText style={styles.title} text={"Last name"} />
            <View style={styles.inputContainer}>
              <CustomInput
                style={styles.input}
                placeholder={"Smith"}
                value={lastName}
                error={errors.lastName}
                onChangeText={(val) => {
                  setLastName(val), setErrors({ ...errors, lastName: "" });
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <NewText style={styles.title} text={"Primary Email"} />
          <View style={styles.inputContainer}>
            <CustomInput
              value={email}
              editable={false}
              style={styles.input}
              placeholder={"Primary Email"}
            />
          </View>
        </View>
        <View>
          <NewText style={styles.title} text={"Secondary Email (Optional)"} />
          <View style={styles.inputContainer}>
            <CustomInput
              value={secondaryEmail}
              keyboard={"email-address"}
              style={styles.input}
              error={errors.email}
              onChangeText={(val) => {
                setSecondaryEmail(val), setErrors({ ...errors, email: "" });
              }}
              placeholder={"Email Address"}
            />
          </View>
        </View>
        <View>
          <NewText style={styles.title} text={"Username"} />
          <View style={styles.inputContainer}>
            <CustomInput
              value={username}
              onChangeText={(val) => {
                setUsername(val), setErrors({ ...errors, username: "" });
              }}
              style={styles.input}
              placeholder={"Username"}
              error={errors.username}
            />
          </View>
        </View>
        <View>
          <NewText style={styles.title} text={"Phone Number"} />
          <View
            style={[
              styles.inputContainer,
              {
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.gray300,
                borderRadius: 10,
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <CustomInput
                placeholder={"(000)-000-0000"}
                keyboard={"numeric"}
                style={{ borderWidth: 0 }}
                maxLength={14}
                value={phone}
                editable={!accountActive}
                error={errors.phone || errors.verify}
                onChangeText={(text) => {
                  const formattedText = formatPhoneNumber(text);
                  setPhone(formattedText);
                  setErrors({ ...errors, phone: "" });
                }}
              />
            </View>
            <TouchableOpacity
              onPress={handleSendVerificationCode}
              style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 6,
                marginRight: 5,
              }}
            >
              <CustomText
                fontWeight={"500"}
                size={13}
                color={colors.white}
                text={accountActive ? "Verified" : "Verify"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <NewText style={styles.title} text={"City"} />
            <View style={styles.inputContainer}>
              <CustomInput
                value={city}
                onChangeText={(val) => {
                  setCity(val), setErrors({ ...errors, city: "" });
                }}
                style={styles.input}
                error={errors.city}
                placeholder={"City"}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <NewText style={styles.title} text={"State"} />
            <View style={styles.inputContainer}>
              <CustomInput
                value={state}
                style={styles.input}
                error={errors.state}
                onChangeText={(val) => {
                  setState(val), setErrors({ ...errors, state: "" });
                }}
                placeholder={"State"}
              />
            </View>
          </View>
        </View>
        <View>
          <NewText style={styles.title} text={"Zip Code"} />
          <View style={styles.inputContainer}>
            <CustomInput
              keyboard={"numeric"}
              value={zipCode}
              onChangeText={(val) => {
                setZipCode(val), setErrors({ ...errors, zipCode: "" });
              }}
              style={styles.input}
              error={errors.zipCode}
              placeholder={"Zip Code"}
            />
          </View>
        </View>

        <NumberVerificationModal
          modalVisible={isNumberVerification}
          setModalVisible={setIsNumberVerification}
          onSubmit={handleVerifySuccess}
          phoneNumber={phone}
        />
        <CustomButton
          onPress={onSave}
          text={"Save"}
          bgColor={colors.primary}
          textColor={colors.white}
          style={{ marginVertical: 10 }}
        />
      </ScrollView>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalView}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Upload Delivery Photo</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.closeIcon}
                  source={require("../../../../assets/webp/closeIcon.webp")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={{ justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={selectFromGallery}
              >
                <Image
                  style={styles.icon}
                  source={require("../../../../assets/webp/galleryIcon.webp")}
                />
                <Text style={styles.textStyle}>Upload From Photos</Text>
              </TouchableOpacity>

              <View style={styles.dottedLine2} />
              <TouchableOpacity
                style={styles.modalOption}
                onPress={capturePhoto}
              >
                <Image
                  style={styles.icon}
                  source={require("../../../../assets/webp/cameraIcon.webp")}
                />
                <Text style={styles.textStyle}>Capture Photo</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    // paddingBottom: 200,
    // marginBottom:30
  },
  title: {
    color: colors.black,
    fontWeight: "700",
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 7,
    marginBottom: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  uploadedPhoto: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    width: 320,
    padding: dimensions.paddingLevel1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
    padding: 20,
  },
  modalText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: "700",
    color: colors.black,
  },
  modalText2: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: "500",
    color: colors.black,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: dimensions.paddingLevel3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    // marginBottom:5
  },
});

export default CustomerProfilePage;
