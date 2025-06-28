import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import MainHeaderComponent from "../../../components/MainHeaderComponent";
import { colors, dimensions, fontSizes } from "../../../styles/constants";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function TripScreen() {
  const [category, setCategory] = useState("Delivery Service");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Delivery Service", value: "Delivery Service" },
    { label: "Courier Service", value: "Courier Service" },
    { label: "Transport Service", value: "Transport Service" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const [addStopModalVisible, setAddStopModalVisible] = useState(false);

  const [uploadStopsModalVisible, setUploadStopsModalVisible] = useState(false);

  // State to track drop-offs
  const [dropOffs, setDropOffs] = useState([{ address: "", instruction: "" }]);

  const addDropOff = () => {
    if (dropOffs.length < 50) {
      // Limit to 50 drop-offs
      setDropOffs([...dropOffs, { address: "", instruction: "" }]);
    }
  };

  const [phone, setPhone] = useState("");
  const [newTrips, setNewTrips] = useState([]); // State to manage new trip orders
  const [nameOrOrder, setNameOrOrder] = useState(""); // State to manage name or order input
  const [pickupAddress, setPickupAddress] = useState(""); // State to manage pickup address
  const [pickupInstruction, setPickupInstruction] = useState("");
  const [stop, setStop] = useState("");
  const [dropOffAddress, setDropOffAddress] = useState("");
  const [limitReached, setLimitReached] = useState(false); // State to manage modal visibility

  const openModal = (type) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const formatPhoneNumber = (input) => {
    let cleaned = ("" + input).replace(/\D/g, "");
    // Split the cleaned number into parts
    let match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      // Format the number in the pattern (000)-000-0000
      let formatted = `${match[1] ? "(" + match[1] : ""}${
        match[2] ? ")-" + match[2] : ""
      }${match[3] ? "-" + match[3] : ""}`;
      return formatted;
    }

    return input;
  };

  const handlePhoneChange = (text) => {
    setPhone(formatPhoneNumber(text));
  };

  const handleAddTrip = () => {
    //const trimmedNameOrOrder = nameOrOrder.trim();

    const totalTrips = [...tripOrders, ...newTrips].length;
    if (totalTrips >= 20) {
      setLimitReached(true);
      return;
    }

    const newTrip = {
      id: newTrips.length + 3, // Adjusting the id based on the default trips
      name: nameOrOrder || `Order #${new Date().getTime()}`,
      pickUp: pickupAddress,
      dropOff: dropOffAddress,
      phone: phone,
      category: category,
    };

    setNewTrips([...newTrips, newTrip]);
    setStop("");
    setNameOrOrder("");
    setPhone("");
    setPickupAddress(""); // Clear the pickup address field
    setPickupInstruction("");
    setDropOffAddress(""); // Clear the drop-off address field
    setDropOffs([{ address: "", instruction: "" }]);
  };

  const handleRemoveTrip = (id) => {
    setNewTrips(newTrips.filter((trip) => trip.id !== id));
  };

  const tripOrders = [
    {
      id: 1,
      name: "Order #7162533",
      pickUp: "Down town, new york",
      dropOff: "Down town, new york",
      phone: "(000)-000-0000",
      category: "Local Delivery",
    },
    {
      id: 2,
      name: "Valerie E.",
      pickUp: "Down town, new york",
      dropOff: "Down town, new york",
      phone: "(000)-000-0000",
      category: "Local Delivery",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeaderComponent title="New Trips" />

      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>New Trip</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Stop"
            placeholderTextColor="black"
            value={stop}
            onChangeText={setStop}
          />

          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setAddStopModalVisible(true)}
          >
            {/* <Image style={styles.dropOffIcon} source={require('../../../assets/webp/addDropOff.webp')} /> */}
            <Text style={styles.label2}>Add stop from</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Name / Order #</Text>
        <TextInput
          style={styles.input}
          placeholder="Name / Order #"
          placeholderTextColor="gray"
          value={nameOrOrder}
          onChangeText={setNameOrOrder}
        />

        <Text style={styles.label}>Customer Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="(000)-000-0000"
          keyboardType="phone-pad"
          placeholderTextColor="gray"
          maxLength={14}
          value={phone}
          onChangeText={handlePhoneChange}
        />

        <Text style={styles.label}>Category</Text>
        <DropDownPicker
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
          style={styles.picker}
          dropDownContainerStyle={styles.pickerDropDown}
          listItemContainerStyle={styles.listItemContainer}
          tickIconStyle={{ display: "none" }} // Hide the tick icon
          textStyle={{ color: "gray" }} // Set the text color to gray
          arrowIconStyle={{ tintColor: "gray" }} // Set the arrow color to gray
        />

        <Text style={styles.label}>Pick-Up Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Pick-Up Address"
          placeholderTextColor="gray"
          value={pickupAddress}
          onChangeText={setPickupAddress}
        />

        <Text style={styles.label}>Pick-Up Instruction</Text>
        <TextInput
          style={styles.input}
          placeholder="Pick-Up Instruction"
          placeholderTextColor="gray"
          value={pickupInstruction}
          onChangeText={setPickupInstruction}
        />

        {/* Render Drop-Off fields dynamically */}
        {dropOffs.map((dropOff, index) => (
          <View key={index}>
            <Text style={styles.label}>{`Drop-Off Address (${
              index + 1
            })`}</Text>
            <TextInput
              style={styles.input}
              placeholder="Drop-Off Address"
              placeholderTextColor="gray"
              value={dropOff.address}
              onChangeText={(text) => {
                const updatedDropOffs = [...dropOffs];
                updatedDropOffs[index].address = text;
                setDropOffs(updatedDropOffs);
              }}
              // value={dropOffAddress} onChangeText={setDropOffAddress}
            />

            <Text style={styles.label}>{`Drop-Off Instruction (${
              index + 1
            })`}</Text>
            <TextInput
              style={styles.input}
              placeholder="Drop-Off Instruction"
              placeholderTextColor="gray"
              value={dropOff.instruction}
              onChangeText={(text) => {
                const updatedDropOffs = [...dropOffs];
                updatedDropOffs[index].instruction = text;
                setDropOffs(updatedDropOffs);
              }}
            />
          </View>
        ))}

        {/* Button to add more drop-offs */}
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          {dropOffs.length < 50 && (
            <TouchableOpacity onPress={addDropOff}>
              <Text style={styles.label2}>Add more Drop-Offs</Text>
            </TouchableOpacity>
          )}
          {/* <Image style={styles.dropOffIcon} source={require('../../../assets/webp/addDropoff.webp')} /> */}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.clearButton}>
            <Text
              style={{
                color: colors.secondary,
                fontWeight: "600",
                fontSize: fontSizes.fontMidMedium,
              }}
            >
              Clear
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addStopButton}
            onPress={handleAddTrip}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "600",
                fontSize: fontSizes.fontMidMedium,
              }}
            >
              Add Stop to Trip
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dottedLine} />

        {[...tripOrders, ...newTrips].map((order, index, array) => (
          <View key={index} style={styles.tripOrderContainer}>
            <View style={styles.timeline}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{order.id}</Text>
              </View>
              <View style={styles.pointer} />

              {index < array.length && (
                <View style={styles.verticalLineContainer}>
                  <View
                    style={[
                      styles.verticalLine,
                      index === array.length - 1 && styles.shortVerticalLine, // Apply short line style if it's the second to last item
                    ]}
                  />
                </View>
              )}
            </View>
            <View style={styles.orderDetails}>
              <View style={styles.orderRow}>
                <Text style={styles.orderName}>{order.name}</Text>
                <TouchableOpacity>
                  <Image
                    style={styles.iIcon}
                    source={require("../../../assets/webp/iIcon.webp")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.orderRow}>
                <Text style={styles.orderText}>Pick-Up Address</Text>
                <TouchableOpacity>
                  <Image
                    style={styles.iIcon}
                    source={require("../../../assets/webp/dragIcon.webp")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.orderRow}>
                <Text style={styles.orderDetail}>{order.pickUp}</Text>
                <TouchableOpacity onPress={() => handleRemoveTrip(order.id)}>
                  <Image
                    style={styles.closeIcon2}
                    source={require("../../../assets/webp/closeIcon.webp")}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.orderText}>Drop-Off Address</Text>
              <Text style={styles.orderDetail}>{order.dropOff}</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.orderText}>Phone</Text>
                <Text style={styles.orderText}>Category</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.orderDetail}>{order.phone}</Text>
                <Text style={styles.orderDetail}>{order.category}</Text>
              </View>
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={styles.saveTripButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.saveTripButtonText}>Save Trip</Text>
        </TouchableOpacity>

        {/* Modal Component */}

        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalContent2}
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <TouchableOpacity
                onPress={closeModal}
                style={styles.closeButton2}
              >
                <Image
                  style={styles.closeIcon}
                  source={require("../../../assets/webp/closeIcon.webp")}
                />
              </TouchableOpacity>

              <Text style={styles.modalText}>Saved!</Text>
              <Text style={styles.modalText2}>
                You can view Trips in Saved Trips
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalButtonText}>Dismiss</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    setModalVisible(false);
                    // Navigate to saved trips screen or handle navigation here
                  }}
                >
                  <Text style={styles.modalButtonText2}>See Saved Trips</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="none"
          transparent={true}
          visible={addStopModalVisible}
          onRequestClose={() => setAddStopModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPressOut={() => setAddStopModalVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalContent}
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <View style={styles.modalHeader}>
                <Text style={styles.modalText}>Add Stops to Trip</Text>
                <TouchableOpacity
                  onPress={() => setAddStopModalVisible(false)}
                  style={styles.closeButton}
                >
                  <Image
                    style={styles.closeIcon}
                    source={require("../../../assets/webp/closeIcon.webp")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />

              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity style={styles.modalOption}>
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/webp/tripIcon2.webp")}
                  />
                  <Text style={styles.textStyle}>
                    Add (Current Location{"\n"} as) stop
                  </Text>
                </TouchableOpacity>

                <View style={styles.dottedLine2} />
                <TouchableOpacity style={styles.modalOption}>
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/webp/tripIcon3.webp")}
                  />
                  <Text style={styles.textStyle}>Add from my order</Text>
                </TouchableOpacity>

                <View style={styles.dottedLine2} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => setUploadStopsModalVisible(true)}
                  >
                    <Image
                      style={styles.icon}
                      source={require("../../../assets/webp/fileIcon.webp")}
                    />
                    <Text style={styles.textStyle}>
                      Upload stops from{"\n"} documents
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.iIcon2}
                      source={require("../../../assets/webp/iIcon.webp")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.modalNote}>
                Format: Excel file (.xls or .xlsx) only
              </Text>
              <Text style={styles.modalNote}>
                Order: Name (Column A), Customer Phone (Column B), Pick-up
                Address (Column C), Pick-up Instruction (Column D)...
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

        {/* New Upload Stops Modal */}
        <Modal
          animationType="none"
          transparent={true}
          visible={uploadStopsModalVisible}
          onRequestClose={() => setUploadStopsModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPressOut={() => setUploadStopsModalVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalContent}
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <View style={styles.modalHeader}>
                <Text style={styles.modalText}>Upload Excel file</Text>
                <TouchableOpacity
                  onPress={() => setUploadStopsModalVisible(false)}
                  style={styles.closeButton}
                >
                  <Image
                    style={styles.closeIcon}
                    source={require("../../../assets/webp/closeIcon.webp")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />

              <TouchableOpacity style={styles.modalOption}>
                <Image
                  style={styles.icon}
                  source={require("../../../assets/webp/excelIcon.webp")}
                />
                <Text style={styles.textStyle}>Pick a FIle</Text>
              </TouchableOpacity>

              <View style={styles.dottedLine2} />

              <TouchableOpacity style={styles.modalOption}>
                <Image
                  style={styles.icon}
                  source={require("../../../assets/webp/excelIcon.webp")}
                />
                <Text style={styles.textStyle}>From Folder</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

        {/* Modal for limit reached */}
        <Modal
          animationType="none"
          transparent={true}
          visible={limitReached}
          onRequestClose={() => setLimitReached(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPressOut={() => setLimitReached(false)}
          >
            <TouchableOpacity
              style={styles.modalContent2}
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <TouchableOpacity
                onPress={() => setLimitReached(false)}
                style={styles.closeButton2}
              >
                <Image
                  style={styles.closeIcon}
                  source={require("../../../assets/webp/closeIcon.webp")}
                />
              </TouchableOpacity>
              <Text style={styles.modalText}>Error!</Text>
              <Text style={styles.modalText2}>
                Your plan is limited to 20 stops (including orders). Please
                upgrade or reduce the number of stops.
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.dismissButton}
                  onPress={() => setLimitReached(false)}
                >
                  <Text style={styles.modalButtonText}>Dismiss</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalButtonText2}>Upgrade</Text>
                </TouchableOpacity>
              </View>
              {/* </View>
        </View> */}
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: dimensions.paddingLevel3,
  },
  title: {
    fontSize: fontSizes.fontLarge,
    fontWeight: "700",
    marginTop: "5%",
    color: colors.black,
    marginBottom: "4%",
  },
  label: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: "700",
    marginTop: "5%",
    color: colors.black,
  },

  inputWrapper: {
    position: "relative",
    marginBottom: "3%",
  },
  input: {
    height: dimensions.heightLevel4,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: dimensions.paddingLevel2,
    marginTop: "3%",
  },
  overlay: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
    flexDirection: "row",
  },
  label2: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: "700",
    color: "lightgray",
    marginRight: 5,
  },
  dropOffIcon: {
    width: 20,
    height: 20,
  },
  picker: {
    height: dimensions.heightLevel4,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: dimensions.paddingLevel1,
    marginTop: "2%",
  },
  pickerDropDown: {
    borderColor: "lightgray",
    borderWidth: 1,
  },
  listItemContainer: {
    justifyContent: "center",
  },
  label2: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: "700",
    marginTop: "5%",
    color: "lightgray",
  },
  dropOffIcon: {
    width: 25,
    height: 25,
    marginTop: "4%",
    marginRight: 5,
  },
  clearButton: {
    backgroundColor: "#EEEEEE",
    color: colors.secondary,
    borderRadius: 11,
    width: dimensions.widthLevel15,
    padding: dimensions.paddingLevel2,
    alignItems: "center",
    marginTop: dimensions.paddingLevel4,
  },
  addStopButton: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: dimensions.widthLevel12,
    borderRadius: 11,
    padding: dimensions.paddingLevel2,
    alignItems: "center",
    marginTop: dimensions.paddingLevel4,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: "#ccc",
    borderStyle: "dashed",
    marginVertical: "10%",
    marginTop: "10%",
  },
  tripOrderContainer: {
    flexDirection: "row", // Ensure row layout for id and details
    marginBottom: dimensions.paddingLevel3,
  },
  timeline: {
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: {
    color: colors.white,
    fontWeight: "700",
  },
  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: colors.primary,
    marginTop: -3, // Adjust this to make the pointer touch the circle
  },
  verticalLine: {
    flex: 1,
    width: 2,
    //height:80,
    backgroundColor: "#A8D0C0",
    color: "transparent",
  },
  verticalLineContainer: {
    width: 2,
    flex: 1,
    alignItems: "center",
  },
  verticalLine: {
    width: 2,
    backgroundColor: "#A8D0C0", // Use lighter color for the line
    height: 250, // Adjust this height as needed
    position: "absolute",
  },
  shortVerticalLine: {
    height: 230, // Shorter height for the last line
  },
  orderDetails: {
    flex: 1,
    borderRadius: 8,
    padding: dimensions.paddingLevel3,
    marginLeft: dimensions.paddingLevel2,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  orderName: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: "700",
    color: colors.black,
  },
  orderText: {
    fontSize: fontSizes.fontMedium,
    fontWeight: "500",
    color: colors.secondary,
    marginTop: dimensions.paddingLevel3,
  },
  orderDetail: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: "500",
    color: colors.black,
    marginTop: dimensions.paddingLevel1,
  },
  saveTripButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: dimensions.paddingLevel2,
    alignItems: "center",
    marginTop: dimensions.paddingLevel4,
  },
  saveTripButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: "80%",
  },
  modalContent2: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: "80%",
    padding: dimensions.paddingLevel3,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton2: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  modalText: {
    fontSize: fontSizes.fontXLarge,
    color: colors.black,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 5,
  },
  modalText2: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.secondary,
    fontWeight: "400",
    marginBottom: 30,
    marginVertical: dimensions.paddingLevel2,
    justifyContent: "center",
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    backgroundColor: colors.primary,
    borderRadius: 9,
    paddingVertical: dimensions.paddingLevel2,
    paddingHorizontal: dimensions.paddingLevel3,
    marginHorizontal: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: colors.secondary,
    fontSize: fontSizes.fontMidMedium,
    fontWeight: "700",
    paddingVertical: dimensions.paddingLevel2,
    paddingHorizontal: dimensions.paddingLevel3,
    marginHorizontal: 5,
    alignItems: "center",
  },
  modalButtonText2: {
    color: colors.white,
    fontSize: fontSizes.fontMidMedium,
    fontWeight: "700",
    paddingHorizontal: dimensions.paddingLevel1,
    alignItems: "center",
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  closeIcon2: {
    width: 12,
    height: 12,
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
  textStyle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
  dottedLine2: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
    borderStyle: "dashed",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  line: {
    height: 1,
    backgroundColor: "lightgray",
  },
  modalNote: {
    color: colors.secondary,
    paddingLeft: dimensions.paddingLevel3,
    marginBottom: 8,
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iIcon: {
    width: 16,
    height: 16,
  },
  iIcon2: {
    width: 16,
    height: 16,
    right: 20,
    top: "40%",
  },
});
