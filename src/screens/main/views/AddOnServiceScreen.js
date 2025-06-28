import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import { colors, fontSizes, dimensions } from "../../../styles/constants";
import CategoryBottomTab from "../../../components/CategoryBottomTab";
import SuccessModal from "../../../components/SuccessModal";
import { useNavigation } from "@react-navigation/native";
import { setAddService } from "../../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";
// import SuccessModal from "../Customer/CustomerWatchlist/SuccessModal";

export default function AddOnServiceScreen() {
  // State management for switches
  const navigation = useNavigation()
  const [isLiftingEnabled, setIsLiftingEnabled] = useState(false);
  const dispatch=useDispatch()

  const [isLoadingBasePriceEnabled, setIsLoadingBasePriceEnabled] =
    useState(false);
    const [isPostedModal, setIsPostedModal] = useState(false);
  const [isLoadingHourEnabled, setIsLoadingHourEnabled] = useState(false);
  const [isLoadingDayEnabled, setIsLoadingDayEnabled] = useState(false);

  const [isBoxingUnboxingEnabled, setIsBoxingUnboxingEnabled] = useState(false);
  const [isBoxingBasePriceEnabled, setIsBoxingBasePriceEnabled] =
    useState(false);
  const [isBoxingHourEnabled, setIsBoxingHourEnabled] = useState(false);
  const [isBoxingDayEnabled, setIsBoxingDayEnabled] = useState(false);

  const [
    isAssemblingDisassemblingEnabled,
    setIsAssemblingDisassemblingEnabled,
  ] = useState(false);
  const [isAssemblingBasePriceEnabled, setIsAssemblingBasePriceEnabled] =
    useState(false);
  const [isAssemblingHourEnabled, setIsAssemblingHourEnabled] = useState(false);
  const [isAssemblingDayEnabled, setIsAssemblingDayEnabled] = useState(false);

  const [isInstallingEnabled, setIsInstallingEnabled] = useState(false);
  const [isInstallingBasePriceEnabled, setIsInstallingBasePriceEnabled] =
    useState(false);
  const [isInstallingHourEnabled, setIsInstallingHourEnabled] = useState(false);
  const [isInstallingDayEnabled, setIsInstallingDayEnabled] = useState(false);

  const [isBasePriceEnabled, setIsBasePriceEnabled] = useState(false);
  const [isRatePerHourEnabled, setIsRatePerHourEnabled] = useState(false);
  const [isRatePerDayEnabled, setIsRatePerDayEnabled] = useState(false);

  const [isEquipmentRentalEnabled, setIsEquipmentRentalEnabled] =
    useState(false);
  const [isFourWheelDollyEnabled, setIsFourWheelDollyEnabled] = useState(false);
  const [isApplianceDollyEnabled, setIsApplianceDollyEnabled] = useState(false);
  const [isHandTruckDollyEnabled, setIsHandTruckDollyEnabled] = useState(false);
  const [isLoadingRampEnabled, setIsLoadingRampEnabled] = useState(false);
  const [isMaterialLiftEnabled, setIsMaterialLiftEnabled] = useState(false);

  const [isFourWheelDollyBasePriceEnabled, setFourWheelDollyBasePriceEnabled] =
    useState(false);
  const [
    isFourWheelDollyRatePerHourEnabled,
    setFourWheelDollyRatePerHourEnabled,
  ] = useState(false);
  const [
    isFourWheelDollyRatePerDayEnabled,
    setFourWheelDollyRatePerDayEnabled,
  ] = useState(false);

  const [isApplianceDollyBasePriceEnabled, setApplianceDollyBasePriceEnabled] =
    useState(false);
  const [
    isApplianceDollyRatePerHourEnabled,
    setApplianceDollyRatePerHourEnabled,
  ] = useState(false);
  const [
    isApplianceDollyRatePerDayEnabled,
    setApplianceDollyRatePerDayEnabled,
  ] = useState(false);

  const [isHandTruckDollyBasePriceEnabled, setHandTruckDollyBasePriceEnabled] =
    useState(false);
  const [
    isHandTruckDollyRatePerHourEnabled,
    setHandTruckDollyRatePerHourEnabled,
  ] = useState(false);
  const [
    isHandTruckDollyRatePerDayEnabled,
    setHandTruckDollyRatePerDayEnabled,
  ] = useState(false);

  const [isLoadingRampBasePriceEnabled, setLoadingRampBasePriceEnabled] =
    useState(false);
  const [isLoadingRampRatePerHourEnabled, setLoadingRampRatePerHourEnabled] =
    useState(false);
  const [isLoadingRampRatePerDayEnabled, setLoadingRampRatePerDayEnabled] =
    useState(false);

  const [isMaterialLiftBasePriceEnabled, setMaterialLiftpBasePriceEnabled] =
    useState(false);
  const [isMaterialLiftRatePerHourEnabled, setMaterialLiftRatePerHourEnabled] =
    useState(false);
  const [isMaterialLiftRatePerDayEnabled, setMaterialLiftRatePerDayEnabled] =
    useState(false);

  // State for toggling Loading/Unloading sections
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  const handleLoadingBaseSwitch = () => {
    setIsLoadingBasePriceEnabled((previousState) => !previousState);
  };

  // Function to toggle the Loading/Unloading section visibility
  const toggleLoadingVisibility = () => {
    setIsLoadingVisible((prevState) => !prevState);
  };

  const [expandedSections, setExpandedSections] = useState({
    fourWheelDolly: false,
    applianceDolly: false,
    handTruckDolly: false,
    loadingRamp: false,
    materialLift: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // State for input values
  const [inputValues, setInputValues] = useState({
    loading: ["", "", "", ""],
    unloading: ["", "", "", ""],
  });

  const handleEquipmentRentalSwitch = () => {
    setIsEquipmentRentalEnabled((previousState) => !previousState);
  };

  const handleLiftingSwitch = () => {
    setIsLiftingEnabled((previousState) => !previousState);
  };

  const handleBoxingUnboxingSwitch = () => {
    setIsBoxingUnboxingEnabled((prevState) => {
      const newState = !prevState;

      // Automatically enable or disable the inner switches and inputs
      if (newState) {
        setIsBoxingBasePriceEnabled(true);
        setIsBoxingHourEnabled(true);
        setIsBoxingDayEnabled(true);
      } else {
        setIsBoxingBasePriceEnabled(false);
        setIsBoxingHourEnabled(false);
        setIsBoxingDayEnabled(false);
      }

      return newState;
    });
  };

  const handleAssemblingDisassemblingSwitch = () => {
    setIsAssemblingDisassemblingEnabled((prev) => {
      if (!prev) {
        setIsAssemblingBasePriceEnabled(true);
        setIsAssemblingHourEnabled(true);
        setIsAssemblingDayEnabled(true);
      } else {
        setIsAssemblingBasePriceEnabled(false);
        setIsAssemblingHourEnabled(false);
        setIsAssemblingDayEnabled(false);
      }
      return !prev;
    });
  };

  const handleInstallationSwitch = () => {
    setIsInstallingEnabled((prev) => {
      if (!prev) {
        setIsInstallingBasePriceEnabled(true);
        setIsInstallingHourEnabled(true);
        setIsInstallingDayEnabled(true);
      } else {
        setIsInstallingBasePriceEnabled(false);
        setIsInstallingHourEnabled(false);
        setIsInstallingDayEnabled(false);
      }
      return !prev;
    });
  };

  const renderEquipmentRow = (
    label,
    sectionKey,
    isEnabled,
    setIsEnabled,
    basePriceEnabled,
    setBasePriceEnabled,
    ratePerHourEnabled,
    setRatePerHourEnabled,
    ratePerDayEnabled,
    setRatePerDayEnabled
  ) => (
    <View key={sectionKey} style={styles.equipmentRow}>
      <View style={styles.rowHeader}>
        <Text style={styles.labelText}>{label}</Text>
        <View style={styles.rowActions}>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsEnabled((prevState) => !prevState)}
            value={isEnabled}
          />
          <TouchableOpacity onPress={() => toggleSection(sectionKey)}>
            <Image
              source={
                expandedSections[sectionKey]
                  ? require("../../../assets/webp/upArrow.webp")
                  : require("../../../assets/webp/downArrow.webp")
              }
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {expandedSections[sectionKey] && (
        <View style={styles.expandedContent}>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Base Price</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="$"
              editable={basePriceEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={basePriceEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setBasePriceEnabled((prevState) => !prevState)
              }
              value={basePriceEnabled}
            />
          </View>
          <View style={styles.dottedLine} />
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Rate Per Hour</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="$"
              editable={ratePerHourEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={ratePerHourEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setRatePerHourEnabled((prevState) => !prevState)
              }
              value={ratePerHourEnabled}
            />
          </View>
          <View style={styles.dottedLine} />
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Rate Per Day</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="$"
              editable={ratePerDayEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={ratePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setRatePerDayEnabled((prevState) => !prevState)
              }
              value={ratePerDayEnabled}
            />
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent title="Add-on Services" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.titleText}>Lifting/Loading/Unloading Help</Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            //onValueChange={() => setIsLiftingEnabled(previousState => !previousState)}
            onValueChange={handleLiftingSwitch}
            value={isLiftingEnabled}
          />
        </View>

        <View style={styles.basePriceCard}>
          <View style={styles.switchRow}>
            <Text style={styles.labelText}>Base Price</Text>
            <View style={[styles.rowHeader]}>
              <Switch
                trackColor={{ false: colors.secondary, true: colors.primary }}
                thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
                ios_backgroundColor={colors.secondary}
                // onValueChange={() => setIsBasePriceEnabled(previousState => !previousState)}
                onValueChange={handleLoadingBaseSwitch}
                value={isLoadingBasePriceEnabled}
              />
              <TouchableOpacity onPress={toggleLoadingVisibility}>
                <Image
                  source={
                    isLoadingVisible
                      ? require("../../../assets/webp/upArrow.webp") // Replace with your up arrow icon path
                      : require("../../../assets/webp/downArrow.webp") // Replace with your down arrow icon path
                  }
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {isLoadingVisible && (
            <>
              <Text style={styles.sectionTitle}>Loading</Text>
              {[
                "Flat (no stairs or elevator)",
                "Elevator",
                "Stairs (Medium Weight)",
                "Stairs (Heavy Weight)",
              ].map((label, index) => (
                <React.Fragment key={index}>
                  <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>{label}</Text>
                    <TextInput
                      style={[styles.textInput, styles.fixedWidthInput]}
                      keyboardType="numeric"
                      placeholder={
                        label.includes("Stairs") ? "$/Per Flight" : "$"
                      }
                      // editable={isLiftingEnabled}
                      editable={isLoadingBasePriceEnabled}
                    />
                  </View>
                  <View style={styles.dottedLine} />
                </React.Fragment>
              ))}

              <Text style={[styles.sectionTitle, styles.sectionMarginTop]}>
                Unloading
              </Text>
              {[
                "Flat (no stairs or elevator)",
                "Elevator",
                "Stairs (Medium Weight)",
                "Stairs (Heavy Weight)",
              ].map((label, index) => (
                <React.Fragment key={index}>
                  <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>{label}</Text>
                    <TextInput
                      style={[styles.textInput, styles.fixedWidthInput]}
                      keyboardType="numeric"
                      placeholder={
                        label.includes("Stairs") ? "$/Per Flight" : "$"
                      }
                      //  editable={isLiftingEnabled}
                      editable={isLoadingBasePriceEnabled}
                    />
                  </View>
                  <View style={styles.dottedLine} />
                </React.Fragment>
              ))}

              <View style={styles.sectionMarginTop}>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Rate Per Hour</Text>
                  <TextInput
                    style={styles.textInput2}
                    keyboardType="numeric"
                    placeholder="$"
                    // editable={isLiftingEnabled}
                    editable={isLoadingHourEnabled}
                  />
                  <Switch
                    trackColor={{
                      false: colors.secondary,
                      true: colors.primary,
                    }}
                    thumbColor={
                      isRatePerDayEnabled ? colors.white : colors.white
                    }
                    ios_backgroundColor={colors.secondary}
                    onValueChange={() =>
                      setIsLoadingHourEnabled((previousState) => !previousState)
                    }
                    value={isLoadingHourEnabled}
                  />
                </View>
                <View style={styles.dottedLine} />
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Rate Per Day</Text>
                  <TextInput
                    style={styles.textInput2}
                    keyboardType="numeric"
                    placeholder="$"
                    editable={isLiftingEnabled}
                    // editable={isLoadingDayEnabled}
                  />
                  <Switch
                    trackColor={{
                      false: colors.secondary,
                      true: colors.primary,
                    }}
                    thumbColor={
                      isRatePerDayEnabled ? colors.white : colors.white
                    }
                    ios_backgroundColor={colors.secondary}
                    onValueChange={() =>
                      setIsLoadingDayEnabled((previousState) => !previousState)
                    }
                    value={isLoadingDayEnabled}
                  />
                </View>
              </View>
            </>
          )}
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>Boxing/Unboxing Help</Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={handleBoxingUnboxingSwitch}
            value={isBoxingUnboxingEnabled}
          />
        </View>

        <View style={styles.boxCard}>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Base Price</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isBoxingBasePriceEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setIsBoxingBasePriceEnabled((prevState) => !prevState)
              }
              value={isBoxingBasePriceEnabled}
            />
          </View>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Rate Per Hour</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isBoxingHourEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setIsBoxingHourEnabled((prevState) => !prevState)
              }
              value={isBoxingHourEnabled}
            />
          </View>
          <View style={styles.boxCardRow}>
            <Text style={styles.inputLabel}>Rate Per Day</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isBoxingDayEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setIsBoxingDayEnabled((prevState) => !prevState)
              }
              value={isBoxingDayEnabled}
            />
          </View>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>Assembling/Disassembling</Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={handleAssemblingDisassemblingSwitch}
            value={isAssemblingDisassemblingEnabled}
          />
        </View>

        <View style={styles.boxCard}>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Base Price</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isAssemblingBasePriceEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setIsAssemblingBasePriceEnabled((prev) => !prev)
              }
              value={isAssemblingBasePriceEnabled}
              // disabled={!isAssemblingDisassemblingEnabled}
            />
          </View>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Rate Per Hour</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isAssemblingHourEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsAssemblingHourEnabled((prev) => !prev)}
              value={isAssemblingHourEnabled}
              //disabled={!isAssemblingDisassemblingEnabled}
            />
          </View>
          <View style={styles.boxCardRow}>
            <Text style={styles.inputLabel}>Rate Per Day</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isAssemblingDayEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsAssemblingDayEnabled((prev) => !prev)}
              value={isAssemblingDayEnabled}
              // disabled={!isAssemblingDisassemblingEnabled}
            />
          </View>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>Installation/Dismantling</Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={handleInstallationSwitch}
            value={isInstallingEnabled}
          />
        </View>

        <View style={styles.boxCard}>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Base Price</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isInstallingBasePriceEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() =>
                setIsInstallingBasePriceEnabled((prev) => !prev)
              }
              value={isInstallingBasePriceEnabled}
              //disabled={!isInstallingEnabled}
            />
          </View>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Rate Per Hour</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isInstallingHourEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsInstallingHourEnabled((prev) => !prev)}
              value={isInstallingHourEnabled}
              //  disabled={!isInstallingEnabled}
            />
          </View>
          <View style={styles.boxCardRow}>
            <Text style={styles.inputLabel}>Rate Per Day</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isInstallingDayEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsInstallingDayEnabled((prev) => !prev)}
              value={isInstallingDayEnabled}
              //disabled={!isInstallingEnabled}
            />
          </View>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>Equipment Rental</Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() =>
              setIsEquipmentRentalEnabled((prevState) => !prevState)
            }
            value={isEquipmentRentalEnabled}
          />
        </View>

        <View style={styles.equipmentContainer}>
          {renderEquipmentRow(
            "4-Wheel Dolly",
            "fourWheelDolly",
            isFourWheelDollyEnabled,
            setIsFourWheelDollyEnabled, // Main row switch
            isFourWheelDollyBasePriceEnabled,
            setFourWheelDollyBasePriceEnabled, // Base Price
            isFourWheelDollyRatePerHourEnabled,
            setFourWheelDollyRatePerHourEnabled, // Rate Per Hour
            isFourWheelDollyRatePerDayEnabled,
            setFourWheelDollyRatePerDayEnabled // Rate Per Day
          )}
          {renderEquipmentRow(
            "Appliance Dolly",
            "applianceDolly",
            isApplianceDollyEnabled,
            setIsApplianceDollyEnabled, // Main row switch
            isApplianceDollyBasePriceEnabled,
            setApplianceDollyBasePriceEnabled, // Base Price
            isApplianceDollyRatePerHourEnabled,
            setApplianceDollyRatePerHourEnabled, // Rate Per Hour
            isApplianceDollyRatePerDayEnabled,
            setApplianceDollyRatePerDayEnabled // Rate Per Day
          )}
          {renderEquipmentRow(
            "Hand Truck Dolly",
            "handTruckDolly",
            isHandTruckDollyEnabled,
            setIsHandTruckDollyEnabled, // Main row switch
            isHandTruckDollyBasePriceEnabled,
            setHandTruckDollyBasePriceEnabled, // Base Price
            isHandTruckDollyRatePerHourEnabled,
            setHandTruckDollyRatePerHourEnabled, // Rate Per Hour
            isHandTruckDollyRatePerDayEnabled,
            setHandTruckDollyRatePerDayEnabled // Rate Per Day
          )}
          {renderEquipmentRow(
            "Loading Ramp",
            "loadingRamp",
            isLoadingRampEnabled,
            setIsLoadingRampEnabled, // Main row switch
            isLoadingRampBasePriceEnabled,
            setLoadingRampBasePriceEnabled, // Base Price
            isLoadingRampRatePerHourEnabled,
            setLoadingRampRatePerHourEnabled, // Rate Per Hour
            isLoadingRampRatePerDayEnabled,
            setLoadingRampRatePerDayEnabled // Rate Per Day
          )}
          {renderEquipmentRow(
            "Material Lift",
            "materialLift",
            isMaterialLiftEnabled,
            setIsMaterialLiftEnabled, // Main row switch
            isMaterialLiftBasePriceEnabled,
            setMaterialLiftpBasePriceEnabled, // Base Price
            isMaterialLiftRatePerHourEnabled,
            setMaterialLiftRatePerHourEnabled, // Rate Per Hour
            isMaterialLiftRatePerDayEnabled,
            setMaterialLiftRatePerDayEnabled // Rate Per Day
          )}
        </View>
      </ScrollView>

      {/* <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarText}>Save</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarText}>Preview</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarText}>Post</Text>
        </TouchableOpacity>
      </View> */}
      {/* <CategoryBottomTab  /> */}
      {/* <SuccessModal
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
      /> */}
     

      <SuccessModal
        modalVisible={isPostedModal}
        title={"Posted!"}
        successButtonColor={colors.primary}
        descripation={"You can view Item in Offered Service"}
        submitText={"See Offered Service"}
        setModalVisible={setIsPostedModal}
        onSubmit={() => {
          setIsPostedModal(false);
          setTimeout(() => {
            navigation.navigate("ServiceProfile");
            // navigation.navigate("Home");
          }, 500);
        }}
      />
      <CategoryBottomTab
        // label1={"Save"}
        onLabel3={()=>setIsPostedModal(true)}
        onLabel1={()=>{
          let payload = {
            isAddService: true,
            serviceName: "Add-ons",
          };
          dispatch(setAddService(payload));
          
          navigation.navigate("ServiceProfile")
        }}
        // onLabel3={()=>setIsRefresh(!isRefresh)}

        // label2={"Post"}
        // label3={"Clear All"}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingTop: 20,
  },
  scrollViewContainer: {
    padding: dimensions.paddingLevel3,
  },
  basePriceCard: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    marginTop: "5%",
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginBottom: "5%",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //  marginTop: '3%',
    alignContent: "center",
  },
  titleText: {
    fontSize: fontSizes.fontLarge,
    fontWeight: "700",
    color: colors.black,
  },
  labelText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.black,
    flex: 1,
  },
  sectionTitle: {
    fontSize: fontSizes.fontMediumPlus,
    color: colors.black,
    fontWeight: "700",
    marginTop: "7%",
    marginBottom: "5%",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  inputLabel: {
    flex: 1,
    fontSize: fontSizes.fontMidMedium,
    color: colors.black,
  },
  textInput: {
    height: dimensions.heightLevel3,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 7,
    width: 80,
    marginRight: 10,
    paddingHorizontal: dimensions.paddingLevel2,
  },
  textInput2: {
    height: dimensions.heightLevel3,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 7,
    width: 80,
    paddingHorizontal: dimensions.paddingLevel2,
    marginRight: 10,
  },
  fixedWidthInput: {
    width: 120,
  },
  sectionMarginTop: {},
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: "lightgray",
    borderStyle: "dashed",
    marginVertical: 15,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 5,
    marginBottom: 5,
  },
  boxCard: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    marginTop: "5%",
    marginBottom: "5%",
  },
  boxCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },

  equipmentContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    // paddingHorizontal: 15,
    //  paddingVertical: 10,
    marginTop: "5%",
    marginBottom: "5%",
  },
  equipmentRow: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingVertical: dimensions.paddingLevel3,
    paddingHorizontal: 15,
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelText: {
    fontSize: 16,
    color: "black",
  },
  rowActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  expandedContent: {
    marginTop: 10,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: "#fff8f7", // Make the border color transparent
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 }, // Shadow above the bar
    shadowOpacity: 0.2, // Adjust opacity for shadow visibility
    shadowRadius: 4, // Adjust the radius for shadow blur
    elevation: 4, // Add elevation for Android shadow effect
  },
  bottomBarText: {
    fontSize:14,
    // fontSize: fontSizes.fontMidMedium,
    color: colors.primary,
    textAlign: "center",
    fontWeight: "500",
  },
  bottomBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    width: 1,
    backgroundColor: "lightgray",
    height: "200%",
  },
});
