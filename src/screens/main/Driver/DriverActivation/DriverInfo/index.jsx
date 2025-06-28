// import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";

import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import Modal from "react-native-modal";
// import { icon } from '../../assets/png/icons';
import { icon } from "../../../../../assets/png/icons";

// import InputBox from '../../components/Input';
import InputBox from "../../../../../components/Input";

// import usePersistentState from '../../components/usePersistentState';
import usePersistentState from "../../../../../components/usePersistentState";

// import { AppStyles } from '../../utils/AppStyle';
import { AppStyles } from "../../../../../utils/AppStyle";
import { useDispatch } from "react-redux";
import {
  setAddAccount,
  setSelectedAccount,
  setUpdateAccount,
} from "../../../../../redux/reducers/authReducer";
import { image } from "../../../../../assets/png/images";

const DriverInfo = ({ navigation, route }) => {
  const isEdit = route?.params?.isEdit;
  const isDriverActivate = route?.params?.isDriverActivate;
  console.log("isEdit", isDriverActivate);
  const dispatch = useDispatch();
  const scrollViewRef = useRef();

  const [firstName, setFirstName] = usePersistentState("firstName", "");

  const [lastName, setLastName] = usePersistentState("lastName", "");

  const [email, setEmail] = usePersistentState("email", "");

  const [address, setAddress] = usePersistentState("address", "");

  const [city, setCity] = usePersistentState("city", "");

  const [state, setState] = usePersistentState("state", null);

  const [zipCode, setZipCode] = usePersistentState("zipCode", "");

  const [number, setNumber] = usePersistentState("number", "");

  const [activeSwitch, setActiveSwitch] = usePersistentState(
    "activeSwitch",
    null
  );

  const [isOlder, setIsOlder] = usePersistentState("isOlder", "No");
  const [vehicleName, setVehicleName] = usePersistentState("vehicleName", "");
  // const [vehicleReg, setVehicleReg] = usePersistentState("vehicleReg", "");


  const [vehicleMake, setVehicleMake] = usePersistentState("vehicleMake", "");

  const [vehicleModel, setVehicleModel] = usePersistentState(
    "vehicleModel",
    ""
  );

  const [vehicleColor, setVehicleColor] = usePersistentState(
    "vehicleColor",
    ""
  );
  const [vehicleLicensePlate, setVehicleLicensePlate] = usePersistentState(
    "vehicleLicensePlate",
    ""
  );
  const [vehicleYear, setVehicleYear] = usePersistentState("vehicleYear", "");

  const [isChecked, setIsChecked] = usePersistentState("isChecked", false);

  const [olderSwitch, setOlderSwitch] = usePersistentState(
    "olderSwitch",
    false
  );

  const [streetFocused, setStreetFocused] = useState(false);

  const [phoneFocused, setPhoneFocused] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [errors, setErrors] = useState({});

  const switchNames = [
    "Ride",
    "Delivery",
    "Ride and Delivery",
    "Delivery Addons Only",
  ];

  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const toggleOlderSwitch = () => {
    if (olderSwitch) {
      setIsOlder("No");
    } else {
      setIsOlder("Yes");
    }
    setOlderSwitch(!olderSwitch);
  };

  const toggleSwitch = (value, index) => {
    setActiveSwitch(value ? index : null);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleStateSelect = (state) => {
    setState(state);
    toggleModal();
  };

  const handleChangeText = (inputText) => {
    const lines = inputText.split("\n");

    if (lines.length <= 3) {
      setAddress(inputText);
    } else {
      setAddress(lines.slice(0, 3).join("\n"));
    }
  };

  const removeKey = (key) => {
    const newState = { ...errors };
    // delete newState['isChecked'];
    delete newState[key];

    setErrors(newState);
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const validatePage = () => {
    const newErrors = {};
    let isValid = true;

    // If firstName isn't filled out
    if (!firstName) {
      newErrors.firstName = "This field is required.";
      isValid = false;
    }
    // If lastName isn't filled out
    if (!lastName) {
      newErrors.lastName = "This field is required.";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "This field is required.";
      isValid = false;
    }

    if (!address) {
      newErrors.address = "This field is required.";
      isValid = false;
    }

    if (!city) {
      newErrors.city = "This field is required.";
      isValid = false;
    }

    if (!state) {
      newErrors.state = "This field is required.";
      isValid = false;
    }

    if (!zipCode) {
      newErrors.zipCode = "This field is required.";
      isValid = false;
    }

    if (!number) {
      newErrors.number = "This field is required.";
      isValid = false;
    } else if (number.length != 14) {
      newErrors.number = "Invalid phone number length.";
      isValid = false;
    }

    if (activeSwitch === null && activeSwitch !== 0) {
      newErrors.activeSwitch = "This field is required.";
      isValid = false;
    }
    if (!vehicleName) {
      newErrors.vehicleName = "This field is required.";
      isValid = false;
    }
    // if (!vehicleReg) {
    //   newErrors.vehicleReg = "This field is required.";
    //   isValid = false;
    // }

    if (!vehicleMake) {
      newErrors.vehicleMake = "This field is required.";
      isValid = false;
    }

    if (!vehicleModel) {
      newErrors.vehicleModel = "This field is required.";
      isValid = false;
    }

    if (!vehicleColor) {
      newErrors.vehicleColor = "This field is required.";
      isValid = false;
    }
    if (!vehicleLicensePlate) {
      newErrors.vehicleLicensePlate = "This field is required.";
      isValid = false;
    }

    if (!vehicleYear) {
      newErrors.vehicleYear = "This field is required.";
      isValid = false;
    }

    if (!isChecked) {
      newErrors.isChecked = "You need insurance.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    const isValid = validatePage();

    if (!isValid) {
      scrollToTop();
    }
    // navigation.navigate('PreBackground');

    if (isValid) {
      if (isDriverActivate) {
        dispatch(setSelectedAccount("Driver"));
        dispatch(
          setAddAccount({
            user: "Driver",
            img: image.defimg600,
            isActive: true,
            isRating: true,
            buttonWidth: 55,
            id: 2,
          })
        );
        dispatch(
          setUpdateAccount({
            isActive: false,
            id: 1,
          })
        );
      }
      isEdit
        ? navigation.navigate("ThankYou")
        : navigation.navigate("PreBackground");
    }
  };

  return (
    <View>
      {Object.keys(errors).length > 0 && (
        <View
          // className="bg-red-600 z-10 absolute left-0 right-0"
          style={{
            backgroundColor: "red",
            zIndex: 10,
            position: "absolute",
            left: 0,
            right: 0,
          }}
        >
          <View
            // className="my-3 mx-5"
            style={{ marginVertical: 12, marginHorizontal: 20 }}
          >
            <Text
              // className="text-white text-base font-bold"
              style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            >
              There are{" "}
              <Text
                // className="underline"
                style={{ textDecorationLine: "underline" }}
              >
                {Object.keys(errors).length}
              </Text>{" "}
              errors on this page. Please fill out all fields before moving on.
            </Text>
          </View>
        </View>
      )}
      <ScrollView ref={scrollViewRef} style={{ backgroundColor: "white" }}>
        <View
          // className={`mt-5 mx-5 ${
          // 	Object.keys(errors).length > 0 ? 'pt-16' : null
          // }`}
          style={{
            ...AppStyles.margins,
            paddingTop: Object.keys(errors).length > 0 ? 64 : null,
          }}
        >
          <Text style={{ ...AppStyles.screenTitle }}>Driver Information</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: 168 }}>
              <Text style={styles.textSubTitle}>First Name</Text>
              <InputBox
                title="First Name"
                editable={!isDriverActivate ? false : true}
                onChange={setFirstName}
                state={firstName}
                stateName="firstName"
                type="default"
                hasError={errors.firstName ? true : false}
                errors={errors}
                setErrors={setErrors}
              />
            </View>
            <View style={{ width: 168 }}>
              <Text style={styles.textSubTitle}>Last Name</Text>
              <InputBox
                title="Last Name"
                editable={!isDriverActivate ? false : true}
                onChange={setLastName}
                state={lastName}
                stateName="lastName"
                type="default"
                hasError={errors.lastName ? true : false}
                errors={errors}
                setErrors={setErrors}
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Email</Text>
            <InputBox
              title="Email Address"
              editable={!isDriverActivate ? false : true}
              onChange={setEmail}
              state={email}
              stateName="email"
              type="default"
              hasError={errors.email ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Address</Text>
            {/* <View
							className={`border rounded-lg px-3 text-sm ${
								errors.address ? 'border-red-600' : 'border-gray-300'
							}`}
						> */}
            <View
              style={{
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 12,
                borderColor: errors.address ? "red" : "#d1d5db",
              }}
            >
              <TextInput
                style={[styles.textInput, { paddingVertical: 4 }]}
                editable
                multiline={true}
                numberOfLines={3}
                placeholder={streetFocused ? "" : "Street"}
                // onChangeText={handleChangeText}
                onChangeText={(newText) => {
                  if (errors.address) {
                    removeKey("address");
                  }
                  handleChangeText(newText);
                }}
                value={address}
                // className="py-1"
                onFocus={() => setStreetFocused(true)}
                onBlur={() => setStreetFocused(false)}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View style={{ width: 168 }}>
              <Text style={styles.textSubTitle}>City</Text>
              <InputBox
                title="City"
                onChange={setCity}
                state={city}
                stateName="city"
                type="default"
                hasError={errors.city ? true : false}
                errors={errors}
                setErrors={setErrors}
              />
            </View>
            <View style={{ width: 168 }}>
              <Text style={styles.textSubTitle}>State</Text>
              {/* <TouchableOpacity
								className={`border rounded-lg py-2 px-3 text-sm ${
									errors.state ? 'border-red-600' : 'border-gray-300'
								}`}
								onPress={toggleModal}
							> */}
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  height: 46,
                  justifyContent: "center",
                  borderColor: errors.state ? "red" : "#d1d5db",
                }}
                onPress={toggleModal}
              >
                <Text
                  // className={` text-sm ${
                  // 	state ? 'text-black' : 'text-[#616161]'
                  // }`}
                  style={{ fontSize: 14, color: state ? "black" : "#616161" }}
                >
                  {state ? state : "State"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Zip Code</Text>
            <InputBox
              title="Zip Code"
              onChange={setZipCode}
              state={zipCode}
              stateName="zipCode"
              type="numeric"
              hasError={errors.zipCode ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Phone Number</Text>
            <MaskInput
              placeholder={phoneFocused ? "" : "(___) ___-____"}
              value={number}
              onChangeText={(masked, unmasked) => {
                if (errors.number) {
                  removeKey("number");
                }
                setNumber(masked);
              }}
              mask={Masks.USA_PHONE}
              keyboardType="numeric"
              // className={`border rounded-lg py-1 px-3 text-sm ${
              // 	errors.number ? 'border-red-600' : 'border-gray-300'
              // }`}
              style={{
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 4,
                fontSize: 14,
                height: 46,
                justifyContent: "center",
                borderColor: errors.number ? "red" : "#d1d5db",
              }}
              onFocus={() => setPhoneFocused(true)}
              onBlur={() => setPhoneFocused(false)}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Type of Service
              </Text>
              {errors.activeSwitch && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* <FontAwesome5
										name="exclamation-circle"
										color={'red'}
										size={14}
									/> */}
                  <Image
                    source={icon.exclamationmark}
                    style={{ width: 16, height: 16 }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "red",
                      marginLeft: 4,
                    }}
                  >
                    Choose a type of service
                  </Text>
                </View>
              )}
            </View>
            {switchNames.map((name, index) => (
              <View
                key={index}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Switch
                  // The active switch is the index of one of the 4 switch choices
                  value={activeSwitch === index}
                  onValueChange={(value) => {
                    if (errors.activeSwitch) {
                      removeKey("activeSwitch");
                    }
                    toggleSwitch(value, index);
                  }}
                  trackColor={{ false: "#eff0ef", true: "#eff0ef" }}
                  thumbColor={activeSwitch === index ? "#0aba04" : "grey"}
                  // style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
                <Text
                  style={{ fontSize: 14, fontWeight: "600", marginLeft: 5 }}
                >
                  {name}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 20, width: 261 }}>
            <Text style={styles.textSubTitle}>
              Are you 18 years or older with a valid driver's license?
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Switch
                onValueChange={toggleOlderSwitch}
                value={olderSwitch}
                thumbColor={olderSwitch ? "#0aba04" : "grey"}
                trackColor={{ false: "#eff0ef", true: "#eff0ef" }}

                // style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                // className="mr-4"
              />
              <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 5 }}>
                {isOlder}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderStyle: "dashed",
              borderBottomWidth: 1,
              borderBottomColor: "#d1d5db",
              marginTop: 12,
            }}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
              Vehicle Information
            </Text>
          </View>
       

          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Vehicle Name</Text>
            <InputBox
              title="e.g. Toyota"
              onChange={setVehicleName}
              state={vehicleName}
              stateName="vehicleName"
              type="default"
              hasError={errors.vehicleMake ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>

          {/* <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Vehicle Registration Number</Text>
            <InputBox
              title="e.g. 235"
              onChange={setVehicleReg}
              state={vehicleReg}
              stateName="vehiclReg"
              type="numeric"
              hasError={errors.vehicleMake ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View> */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Vehicle Make</Text>
            <InputBox
              title="e.g. Toyota"
              onChange={setVehicleMake}
              state={vehicleMake}
              stateName="vehicleMake"
              type="default"
              hasError={errors.vehicleMake ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Model</Text>
            <InputBox
              title="e.g. Corolla"
              onChange={setVehicleModel}
              state={vehicleModel}
              stateName="vehicleModel"
              type="default"
              hasError={errors.vehicleModel ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.textSubTitle}>Vehicle Year</Text>
            <InputBox
              title="e.g. 2015"
              onChange={setVehicleYear}
              state={vehicleYear}
              stateName="vehicleYear"
              type="numeric"
              hasError={errors.vehicleYear ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>

          <View>
            <Text style={styles.textSubTitle}>Vehicle Color</Text>
            <InputBox
              title="e.g. Red"
              onChange={setVehicleColor}
              state={vehicleColor}
              stateName="vehicleColor"
              type="default"
              hasError={errors.vehicleColor ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={styles.textSubTitle}>Vehicle License Plate</Text>
            <InputBox
              title="e.g. ABC-1234"
              onChange={setVehicleLicensePlate}
              state={vehicleLicensePlate}
              stateName="vehicleLicensePlate"
              type="default"
              hasError={errors.vehicleLicensePlate ? true : false}
              errors={errors}
              setErrors={setErrors}
            />
          </View>

          <View
            style={{
              borderStyle: "dashed",
              borderBottomWidth: 1,
              borderBottomColor: "#d1d5db",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginVertical: 20,
              alignItems: "flex-start",
            }}
          >
            <Checkbox
              value={isChecked}
              // onValueChange={setIsChecked}
              onValueChange={() => {
                if (errors.isChecked) {
                  removeKey("isChecked");
                }
                setIsChecked(!isChecked);
              }}
              color={`${errors.isChecked ? "red" : ""}`}
              // color={`${!isChecked ? 'red' : ''}`}
              // className="rounded-md border"
              style={{ borderRadius: 6, borderWidth: 1 }}
            />
            <Text
              style={{
                width: 324,
                fontSize: 14,
                fontWeight: 500,
                marginLeft: 12,
              }}
            >
              Yes, I have minimum insurance for selected service and agree to
              Insurance Agreement.
            </Text>
          </View>

          <View
            style={{
              borderStyle: "dashed",
              borderBottomWidth: 1,
              borderBottomColor: "#d1d5db",
            }}
          />

          <View style={{ marginVertical: 20 }}>
            <Pressable
              // className="bg-[#01AD8F] p-2 rounded-xl items-center"
              style={{
                backgroundColor: "#01AD8F",
                padding: 8,
                borderRadius: 12,
                alignItems: "center",
              }}
              onPress={() => {
                // validatePage();
                handleSubmit();
                // router.push('/screens/PreBackground');
                // if (Object.keys(errors).length === 0) {
                // 	router.push('/screens/PreBackground');
                // }
                // navigation.navigate('PreBackground');
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: 600, color: "white" }}>
                Next
              </Text>
            </Pressable>
          </View>

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setIsModalVisible(false)}
          >
            {/* <View className="bg-white p-1 rounded-lg justify-center items-center w-11/12 h-[91%] self-center"> */}
            <View
              style={{
                backgroundColor: "white",
                padding: 4,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                width: "92%",
                height: "91%",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text>Select State</Text>
              </View>

              <FlatList
                // className="w-full"
                style={{ width: "100%" }}
                data={states}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <View style={{ marginHorizontal: 20 }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (errors.state) {
                          removeKey("state");
                        }
                        handleStateSelect(item);
                      }}
                      // className="flex flex-row items-center justify-between"
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        // className={`py-4 text-base font-medium ${
                        // 	state === item ? 'text-[#0a987f]' : 'text-gray-500'
                        // }`}
                        style={{
                          paddingVertical: 16,
                          fontSize: 16,
                          fontWeight: 500,
                          color: state === item ? "#0a987f" : "#6b7280",
                        }}
                      >
                        {item}
                      </Text>
                      {state === item ? (
                        // <FontAwesome6 name="check" size={20} color="#0a987f" />
                        <Image
                          source={icon.tick}
                          style={{ width: 20, height: 20 }}
                          tintColor={"#0a987f"}
                          resizeMode="contain"
                        />
                      ) : null}
                    </TouchableOpacity>
                    <View
                      style={{
                        borderStyle: "dashed",
                        borderBottomWidth: 1,
                        borderBottomColor: "#d1d5db",
                      }}
                    />
                  </View>
                )}
                initialNumToRender={14}
                windowSize={5}
              />
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    textAlignVertical: "top",
    fontSize: 14,
  },
  textSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default DriverInfo;
