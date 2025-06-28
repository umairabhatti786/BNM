import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import DialogBoxComponent from "../../../components/DialogBoxComponent";
import { colors, fontSizes, dimensions } from "../../../styles/constants";
import SearchBarComponent from "../../../components/SearchBarComponent";

export default function ResolutionCenterScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [dialogVisible, setDialogVisible] = useState({
    settings: false,
    trackOrders: false,
    viewEarnings: false,
    signup: false,
    signIn: false,
    customerSearch: false,
    driverSearch: false,
    problemSigningIn: false,
    order: false,
    trackOrder: false,
    deliveryIssue: false,
    rideIssue: false,
    roadSupport: false,
    payment: false,
    missingPayment: false,
    review: false,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDialog = (section) => {
    setDialogVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLiveChat = () => {
    navigation.navigate("SupportTeamChatScreen");
  };

  const handleAddOnService = () => {
    navigation.navigate("AddOnServiceScreen");
  };

  const handlePickupTask = () => {
    // navigation.navigate("PickupTaskScreen");
  };

  const handleDropoffTask = () => {
    // navigation.navigate("DropoffTaskScreen");
  };

  const renderTopic = (section, title) => (
    <TouchableOpacity
      onPress={() => toggleDialog(section)}
      style={styles.topicContainer}
    >
      <Text style={styles.title}>{title}</Text>
      <Image
        source={
          dialogVisible[section]
            ? require("../../../assets/webp/upArrow.webp")
            : require("../../../assets/webp/downArrow.webp")
        }
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.white, paddingTop: 30 }}>
      <HeaderComponent title="Resolution Center" />
      <ScrollView>
        {/* Search Bar */}
        <View style={{ padding: dimensions.paddingLevel3 }}>
          <SearchBarComponent
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <Text
          style={{
            fontSize: fontSizes.fontLarge,
            fontWeight: "700",
            padding: dimensions.paddingLevel3,
            color: colors.black,
          }}
        >
          Suggested Topics
        </Text>

        {renderTopic("settings", "Settings")}
        <DialogBoxComponent
          visible={dialogVisible.settings}
          content="Settings Content"
        />
        <View style={styles.line2wrapper}>
          <View style={styles.line2} />
        </View>

        {renderTopic("trackOrders", "Track Orders")}
        <DialogBoxComponent
          visible={dialogVisible.trackOrders}
          content="Track Orders Content"
        />
        <View style={styles.line2wrapper}>
          <View style={styles.line2} />
        </View>

        {renderTopic("viewEarnings", "View Earnings")}
        <DialogBoxComponent
          visible={dialogVisible.viewEarnings}
          content="View Earnings Content"
        />

        <Text
          style={{
            fontSize: fontSizes.fontLarge,
            fontWeight: "700",
            padding: dimensions.paddingLevel3,
            color: colors.black,
          }}
        >
          Quick Learn
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: dimensions.paddingLevel3 }}
        >
          <TouchableOpacity
            onPress={() => toggleDialog("quickTips")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: dimensions.paddingLevel3,
            }}
          >
            <Image
              source={require("../../../assets/webp/playIcon.webp")}
              style={styles.iconCircle}
            />
            <Text style={styles.title}>Quick Tips</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => toggleDialog("deliveryManager")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: dimensions.paddingLevel3,
            }}
          >
            <Image
              source={require("../../../assets/webp/playIcon.webp")}
              style={styles.iconCircle}
            />
            <Text style={styles.title}>Delivery Manager</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => toggleDialog("serviceOverview")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: dimensions.paddingLevel3,
            }}
          >
            <Image
              source={require("../../../assets/webp/playIcon.webp")}
              style={styles.iconCircle}
            />
            <Text style={styles.title}>Search Customer</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text
          style={{
            fontSize: fontSizes.fontLarge,
            fontWeight: "700",
            padding: dimensions.paddingLevel3,
            color: colors.black,
          }}
        >
          All Topics
        </Text>

        {renderTopic("signup", "Signup")}
        <DialogBoxComponent
          visible={dialogVisible.signup}
          content="Signup Content"
        />
        <View style={styles.line2wrapper}>
          <View style={styles.line2} />
        </View>

        {renderTopic("signIn", "Sign-in")}
        <DialogBoxComponent
          visible={dialogVisible.signIn}
          content="Sign-in Content"
        />
        <View style={styles.line2wrapper}>
          <View style={styles.line2} />
        </View>

        {renderTopic("customerSearch", "Customer: Search")}
        <DialogBoxComponent
          visible={dialogVisible.customerSearch}
          content="Customer: Search Content"
        />
        <View style={styles.line2wrapper}>
          <View style={styles.line2} />
        </View>

        <View style={styles.collapsibleHeader}>
          {renderTopic("driverSearch", "Driver Search")}

          <DialogBoxComponent
            visible={dialogVisible.driverSearch}
            content="Driver Search Content"
          />
        </View>

        {isExpanded && (
          <>
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("problemSigningIn", "Problem Signing in")}
            <DialogBoxComponent
              visible={dialogVisible.problemSigningIn}
              content="Problem Signing in Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("order", "Order")}
            <DialogBoxComponent
              visible={dialogVisible.order}
              content="Order Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("trackOrder", "Track Order")}
            <DialogBoxComponent
              visible={dialogVisible.trackOrder}
              content="Track Order Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("deliveryIssue", "Delivery issue")}
            <DialogBoxComponent
              visible={dialogVisible.deliveryIssue}
              content="Delivery issue Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("rideIssue", "Ride issue")}
            <DialogBoxComponent
              visible={dialogVisible.rideIssue}
              content="Ride issue Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("roadSupport", "Road Support")}
            <DialogBoxComponent
              visible={dialogVisible.roadSupport}
              content="Road Support Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("viewEarnings", "View Earnings")}
            <DialogBoxComponent
              visible={dialogVisible.viewEarnings}
              content="View Earnings Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("payment", "Payment")}
            <DialogBoxComponent
              visible={dialogVisible.payment}
              content="Payment Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("missingPayment", "Missing Payment")}
            <DialogBoxComponent
              visible={dialogVisible.missingPayment}
              content="Missing Payment Content"
            />
            <View style={styles.line2wrapper}>
              <View style={styles.line2} />
            </View>

            {renderTopic("review", "Review")}
            <DialogBoxComponent
              visible={dialogVisible.review}
              content="Review Content"
            />
          </>
        )}

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <TouchableOpacity onPress={toggleExpand} style={styles.arrowButton}>
            <Image
              source={
                isExpanded
                  ? require("../../../assets/webp/upArrow.webp")
                  : require("../../../assets/webp/downArrow.webp")
              }
              style={styles.icon3}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              fontSize: fontSizes.fontLarge,
              fontWeight: "700",
              padding: dimensions.paddingLevel3,
              color: colors.black,
            }}
          >
            Support Messages
          </Text>

          <TouchableOpacity
            style={styles.rowContainer}
            onPress={handlePickupTask}
          >
            <Text style={[{ color: colors.black }, styles.title]}>
              View Active Messages
            </Text>
            <Image
              source={require("../../../assets/webp/rightArrow.webp")}
              style={styles.rightArrowIcon}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              fontSize: fontSizes.fontLarge,
              fontWeight: "700",
              padding: dimensions.paddingLevel3,
              color: colors.black,
            }}
          >
            Contact Center
          </Text>

          <TouchableOpacity
            style={styles.rowContainer}
            onPress={handleLiveChat}
          >
            <Text style={[styles.title]}>Chat with support</Text>
            <Image
              source={require("../../../assets/webp/rightArrow.webp")}
              style={styles.rightArrowIcon}
            />
          </TouchableOpacity>
          <View style={styles.line2wrapper}>
            <View style={styles.line2} />
          </View>

          <TouchableOpacity
            style={styles.rowContainer}
            // onPress={handleAddOnService}
            >
            <Text style={[styles.title]}>Call Support</Text>
            <Image
              source={require("../../../assets/webp/rightArrow.webp")}
              style={styles.rightArrowIcon}
            />
          </TouchableOpacity>
          <View style={styles.line2wrapper}>
            <View style={styles.line2} />
          </View>

          <TouchableOpacity
            style={styles.rowContainer}
            onPress={handleDropoffTask}
          >
            <Text style={[styles.title]}>
              Additional Resources (Documentation)
            </Text>
            <Image
              source={require("../../../assets/webp/rightArrow.webp")}
              style={styles.rightArrowIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.secondary,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: "500",
  },
  icon3: {
    width: 14,
    height: 14,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: colors.primary,
    marginRight: 10,
  },
  iconText: {
    color: colors.primary,
    fontSize: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  collapsibleHeader: {
    // paddingBottom: dimensions.paddingLevel1,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: "10%",
    position: "relative", // To position the button absolutely
    paddingHorizontal: dimensions.paddingLevel3,
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    flex: 1,
  },
  arrowButton: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Position the button absolutely
    left: "50%", // Center horizontally
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  topicContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: dimensions.paddingLevel3,
  },
  line2wrapper: {
    paddingHorizontal: dimensions.paddingLevel3,
  },
  line2: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: dimensions.paddingLevel3,
    paddingVertical: dimensions.paddingLevel3,
  },
  rightArrowIcon: {
    width: 16,
    height: 16,
  },
});
