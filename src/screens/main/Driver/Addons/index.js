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
import React, { useState } from "react";
import { Screen } from "../../../../utils/ui/Screen";
import { colors } from "../../../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import TopHeader from "../../../../components/TopHeader";
import { AppStyles } from "../../../../utils/AppStyle";
import CustomText from "../../../../components/CustomText";
import DropDown from "../../../../components/DropDown";
import { DropDownData } from "../../../../utils/Commons";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { Spacer } from "../../../../components/Spacer";
import { Inter } from "../../../../utils/Fonts";
import { icon } from "../../../../assets/png/icons";
import CustomInput from "../../../../components/CustomInput";
import DashedLine from "react-native-dashed-line";
import MilesContainer from "../../../../components/MilesContainer";
import CategoryBottomTab from "../../../../components/CategoryBottomTab";
import ToggleSwitch from "toggle-switch-react-native";
import CustomBackModal from "../../../../components/CustomBackModal";
import Collapsible from "react-native-collapsible";
import { image } from "../../../../assets/png/images";
import { fontSizes } from "../../../../styles/constants";

const Addons = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBackVisible, setIsBackVisible] = useState(false);

  const [uploadingHelpData, setUploadingHelpData] = useState({
    isLoadingUnloading: false,
    isBasePrice: false,
    isLoadingUnloadingCollapsed: false,

    loadingFlat: "",
    loadingElevator: "",
    loadingStairsMedium: "",
    loadingStairsHeavy: "",
    unloadingFlat: "",
    unloadingElevator: "",
    unloadingStairsMedium: "",
    unloadingStairsHeavy: "",

    uplaodRatePerHour: "",
    isUplaodRatePerHour: false,

    uplaodRatePerDay: "",
    isUplaodRatePerDay: false,
  });
  const [activeAddons, setActiveAddons] = useState({
    isEquipmentRental: false,
  });
  const [PriceData, setPriceData] = useState([
    {
      title: "Boxing/Unboxing Help",
      isActive: false,
      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },
    {
      title: "Assembling/Disassembling",
      isActive: false,
      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },
    {
      title: "Installation/Dismanting",
      isActive: false,
      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },
  ]);

  const [equipmentRentalData, setEEquipmentRentalData] = useState([
    {
      title: "4-Wheel  Dolly",
      isActive: false,
      isCollapsed: false,
      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },
    {
      title: "Appliance Dolly",
      isActive: false,
      isCollapsed: true,

      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },
    {
      title: "Hand Truck Dolly",
      isActive: false,
      isCollapsed: true,

      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },

    {
      title: "Loading Ramp",
      isActive: false,
      isCollapsed: true,
      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },

    {
      title: "Material Lift",
      isActive: false,
      isCollapsed: true,
      basePrice: "",
      isbasePrice: false,
      hourPrice: "",
      isHourPrice: false,
      dayPrice: "",
      isDayPrice: false,
    },
  ]);
  const ScheduleQuote = ({ title }) => {
    return (
      <View>
        <View style={AppStyles.justifyRow}>
          <View
            style={{
              ...AppStyles.justifyRow,
              width: "60%",
              //   backgroundColor:"red"
              //   marginBottom: verticalScale(13),
            }}
          >
            <CustomText
              text={title || "Schedule Quote"}
              color={colors.gray200}
              size={13}
            />

            <Image
              style={{ width: scale(13), height: scale(13) }}
              source={icon.cross}
              resizeMode={"contain"}
            />
          </View>
          <CustomInput
            height={29}
            width={scale(70)}
            paddingHorizontal={1}
            borderRadius={8}
            value={"1.2"}
          />
        </View>
      </View>
    );
  };

  const EnableAddons = ({
    isActive,
    title,
    isNext,
    fontWight,
    fontSize,
    setIsActive,
    isShowDrop,
    onPress,
    disabled,
  }) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.4}
        onPress={onPress}
        style={{
          ...AppStyles.justifyRow,
          marginBottom: verticalScale(10),

          marginRight: scale(5),
        }}
      >
        <CustomText
          fontWeight={fontWight || "700"}
          color={colors.black}
          fontFam={Inter.bold}
          text={title}
          size={fontSize || 14}
        />

        <View style={AppStyles.row}>
          <ToggleSwitch
            isOn={isActive}
            onColor={"#F2F2F2"}
            offColor={"#F2F2F2"}
            size="small"
            onToggle={setIsActive}
            // style={{ opacity: isActive ? 1 : 0.5 }}
            // onToggle={setIsActive}
            thumbOnStyle={{
              width: 22,
              height: 22,
              borderRadius: 9999,
              backgroundColor: "#008000",
            }}
            thumbOffStyle={{
              width: 22,
              height: 22,
              borderRadius: 9999,
              backgroundColor: "#CCCCCC",
            }}
            trackOffStyle={{ width: 52, height: 30 }}
            trackOnStyle={{ width: 52, height: 30 }}
          />
          {isNext && (
            <>
              <Spacer width={scale(10)} />
              <Image
                style={{ width: scale(15), height: scale(15) }}
                source={isShowDrop ? icon.up : icon.down}
                resizeMode={"contain"}
              />
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const InputWeight = ({
    title,
    fontSize,
    placeholder,
    isDashedLine,
    value,
    onChangeText,
    editable,
  }) => {
    return (
      <View style={{ paddingHorizontal: scale(15) }}>
        <View
          style={{
            ...AppStyles.justifyRow,
          }}
        >
          <CustomText text={title} color={colors.black} size={fontSize || 13} />
          <CustomInput
            editable={editable}
            height={29}
            width={scale(100)}
            paddingHorizontal={1}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            borderRadius={8}
            style={{paddingHorizontal:10}}
            // value={"1.2"}
          />
        </View>

        <View style={{ marginVertical: verticalScale(10) }}>
          {isDashedLine && (
            <DashedLine
              dashLength={6}
              dashThickness={1}
              dashGap={5}
              dashColor={colors.gray}
            />
          )}
        </View>
      </View>
    );
  };

  const PriceInput = ({
    title,
    fontSize,
    placeholder,
    isShowLine,
    isActive,
    value,
    onChangeText,
    setIsActive,
  }) => {
    return (
      <View>
        <View
          style={{
            ...AppStyles.justifyRow,
            paddingHorizontal: scale(15),
          }}
        >
          <CustomText text={title} color={colors.black} size={fontSize || 13} />

          <View style={AppStyles.row}>
            <CustomInput
              height={29}
              editable={isActive}
              value={value}
              width={scale(100)}
              paddingHorizontal={1}
              placeholder={placeholder}
              borderRadius={8}
              onChangeText={onChangeText}
            />
            <Spacer width={scale(10)} />

            <ToggleSwitch
              isOn={isActive}
              onColor={"#F2F2F2"}
              offColor={"#F2F2F2"}
              size="small"
              // style={{ opacity: isActive ? 1 : 0.5 }}
              onToggle={setIsActive}
              thumbOnStyle={{
                width: 22,
                height: 22,
                borderRadius: 9999,
                backgroundColor: "#008000",
              }}
              thumbOffStyle={{
                width: 22,
                height: 22,
                borderRadius: 9999,
                backgroundColor: "#CCCCCC",
              }}
              trackOffStyle={{ width: 52, height: 30 }}
              trackOnStyle={{ width: 52, height: 30 }}
            />
          </View>
        </View>
        {isShowLine && (
          <View style={{ marginVertical: verticalScale(10) }}>
            <CustomLine />
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <Screen
        height={40}
        backgroundColor={colors.white}
        // topBarColor={colors.primary}
        barStyle={"dark-content"}
      >
        <View
          style={{
            flex: 1,

            backgroundColor: colors.white,
          }}
        >
          <TopHeader
            txt={"Add-ons"}
            onApply={() => {
              setIsModalVisible(true);
            }}
            isBack={() => setIsBackVisible(true)}
            isRightText={"Apply"}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: scale(15),
                paddingTop: verticalScale(30),
              }}
            >
              <EnableAddons
                isActive={uploadingHelpData?.isLoadingUnloading}
                isShowDrop={uploadingHelpData?.isLoadingUnloadingCollapsed}
                // onPress={()=>{
                //   setUploadingHelpData({
                //     ...uploadingHelpData,
                //     isLoadingUnloadingCollapsed: !uploadingHelpData.isLoadingUnloadingCollapsed,
                //   })

                // }}
                setIsActive={() => {
                  setUploadingHelpData({
                    ...uploadingHelpData,
                    isLoadingUnloading: !uploadingHelpData.isLoadingUnloading,
                  });
                }}
                title={"Lifting/Loading/Unloading Help"}
              />

              <View style={{ ...AppStyles.box }}>
                <Collapsible
                  collapsed={uploadingHelpData.isLoadingUnloadingCollapsed}
                >
                  <View>
                    <Spacer height={verticalScale(15)} />
                    <View style={{ paddingHorizontal: scale(15) }}>
                      <EnableAddons
                        isActive={uploadingHelpData.isBasePrice}
                        fontWight={"500"}
                        setIsActive={() => {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            isBasePrice: !uploadingHelpData.isBasePrice,
                          });
                        }}
                        isNext={true}
                        title={"Base Price"}
                        fontSize={13}
                      />
                    </View>

                    <CustomText
                      text={"Loading"}
                      fontWeight={"700"}
                      style={{
                        marginVertical: verticalScale(10),
                        paddingHorizontal: scale(15),
                      }}
                      //   color={colors.}
                      size={13}
                    />
                    <InputWeight
                      placeholder={"$"}
                      editable={uploadingHelpData?.isBasePrice}
                      value={uploadingHelpData.loadingFlat}
                      title={"Flat (no stairs or elevator)"}
                      isDashedLine
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            loadingFlat: txt,
                          });
                        }
                      }}
                    />
                    <InputWeight
                      placeholder={"$"}
                      editable={uploadingHelpData?.isBasePrice}
                      title={"Elevator"}
                      value={uploadingHelpData.loadingElevator}
                      isDashedLine
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            loadingElevator: txt,
                          });
                        }
                      }}
                    />
                    <InputWeight
                      placeholder={"$/Per Flight"}
                      editable={uploadingHelpData?.isBasePrice}
                      title={"Stairs (Medium Weight)"}
                      value={uploadingHelpData.loadingStairsMedium}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            loadingStairsMedium: txt,
                          });
                        }
                      }}
                      isDashedLine
                    />

                    <InputWeight
                      placeholder={"$/Per Flight"}
                      editable={uploadingHelpData?.isBasePrice}
                      title={"Stairs (Heavy Weight)"}
                      value={uploadingHelpData.loadingStairsHeavy}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            loadingStairsHeavy: txt,
                          });
                        }
                      }}
                    />

                    <CustomText
                      text={"Unloading"}
                      fontWeight={"700"}
                      style={{
                        marginVertical: verticalScale(10),
                        paddingHorizontal: scale(15),
                      }}
                      //   color={colors.}
                      size={13}
                    />
                    <InputWeight
                      placeholder={"$"}
                      editable={uploadingHelpData?.isBasePrice}
                      title={"Flat (no stairs or elevator)"}
                      value={uploadingHelpData.unloadingFlat}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            unloadingFlat: txt,
                          });
                        }
                      }}
                      isDashedLine
                    />
                    <InputWeight
                      placeholder={"$"}
                      title={"Elevator"}
                      editable={uploadingHelpData?.isBasePrice}
                      isDashedLine
                      value={uploadingHelpData.unloadingElevator}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            unloadingElevator: txt,
                          });
                        }
                      }}
                    />
                    <InputWeight
                      placeholder={"$/Per Flight"}
                      editable={uploadingHelpData?.isBasePrice}
                      title={"Stairs (Medium Weight)"}
                      value={uploadingHelpData.unloadingStairsMedium}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            unloadingStairsMedium: txt,
                          });
                        }
                      }}
                      isDashedLine
                    />

                    <InputWeight
                      editable={uploadingHelpData?.isBasePrice}
                      placeholder={"$/Per Flight"}
                      title={"Stairs (Heavy Weight)"}
                      value={uploadingHelpData.unloadingStairsHeavy}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            unloadingStairsHeavy: txt,
                          });
                        }
                      }}
                    />
                    <View
                      style={{
                        marginBottom: verticalScale(10),
                        marginTop: verticalScale(-10),
                      }}
                    >
                      <CustomLine />
                    </View>
                    <PriceInput
                      title={"Rate Per Hour"}
                      value={uploadingHelpData.uplaodRatePerHour}
                      isActive={uploadingHelpData.isUplaodRatePerHour}
                      setIsActive={() => {
                        setUploadingHelpData({
                          ...uploadingHelpData,
                          isUplaodRatePerHour:
                            !uploadingHelpData?.isUplaodRatePerHour,
                        });
                      }}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            uplaodRatePerHour: txt,
                          });
                        }
                      }}
                      placeholder={"$"}
                      isShowLine
                    />

                    <PriceInput
                      title={"Rate Per Day"}
                      value={uploadingHelpData.uplaodRatePerDay}
                      isActive={uploadingHelpData.isUplaodRatePerDay}
                      setIsActive={() => {
                        setUploadingHelpData({
                          ...uploadingHelpData,
                          isUplaodRatePerDay:
                            !uploadingHelpData?.isUplaodRatePerDay,
                        });
                      }}
                      onChangeText={(txt) => {
                        if (/^\d+$/.test(txt) || txt === "") {
                          setUploadingHelpData({
                            ...uploadingHelpData,
                            uplaodRatePerDay: txt,
                          });
                        }
                      }}
                      placeholder={"$"}
                    />
                    <Spacer height={verticalScale(10)} />
                  </View>
                </Collapsible>
              </View>

              {PriceData.map((item, index) => {
                return (
                  <>
                    <View style={{ marginTop: verticalScale(25) }}>
                      <EnableAddons
                        isActive={item?.isActive}
                        title={item.title}
                        setIsActive={() => {
                          const data = [...PriceData];

                          data[index].isActive = !item.isActive;

                          setPriceData(data);
                        }}
                      />
                    </View>

                    <View style={{ ...AppStyles.box }}>
                      <View>
                        <Spacer height={verticalScale(15)} />

                        <PriceInput
                          title={"Base Price"}
                          placeholder={"$"}
                          isActive={item.isbasePrice}
                          setIsActive={() => {
                            const data = [...PriceData];
                            data[index].isbasePrice = !item.isbasePrice;
                            setPriceData(data);
                          }}
                          value={item.basePrice}
                          onChangeText={(text) => {
                            if (/^\d+$/.test(text) || text === "") {
                              setPriceData((prevData) =>
                                prevData.map((item, ind) =>
                                  ind === index
                                    ? { ...item, basePrice: text }
                                    : item
                                )
                              );
                            }
                          }}
                          isShowLine
                        />
                        <PriceInput
                          title={"Rate Per Hour"}
                          placeholder={"$"}
                          isShowLine
                          isActive={item.isHourPrice}
                          setIsActive={() => {
                            const data = [...PriceData];
                            data[index].isHourPrice = !item.isHourPrice;
                            setPriceData(data);
                          }}
                          value={item.hourPrice}
                          onChangeText={(text) => {
                            if (/^\d+$/.test(text) || text === "") {
                              setPriceData((prevData) =>
                                prevData.map((item, ind) =>
                                  ind === index
                                    ? { ...item, hourPrice: text }
                                    : item
                                )
                              );
                            }
                          }}
                        />
                        <PriceInput
                          title={"Rate Per Day"}
                          value={item.dayPrice}
                          isActive={item.isDayPrice}
                          setIsActive={() => {
                            const data = [...PriceData];
                            data[index].isDayPrice = !item.isDayPrice;
                            setPriceData(data);
                          }}
                          placeholder={"$"}
                          onChangeText={(text) => {
                            if (/^\d+$/.test(text) || text === "") {
                              setPriceData((prevData) =>
                                prevData.map((item, ind) =>
                                  ind === index
                                    ? { ...item, dayPrice: text }
                                    : item
                                )
                              );
                            }
                          }}
                        />

                        <Spacer height={verticalScale(10)} />
                      </View>
                    </View>
                  </>
                );
              })}

              <>
                <View style={{ marginTop: verticalScale(25) }}>
                  <EnableAddons
                    isActive={activeAddons.isEquipmentRental}
                    setIsActive={() => {
                      setActiveAddons({
                        ...activeAddons.isEquipmentRental,
                        isEquipmentRental: !activeAddons.isEquipmentRental,
                      });
                    }}
                    title={"Equipment Rental"}
                  />
                </View>

                <View style={{ ...AppStyles.box }}>
                  <View>
                    {equipmentRentalData.map((item, index) => {
                      return (
                        <>
                          <View
                            style={{
                              paddingHorizontal: verticalScale(15),
                              marginTop: verticalScale(10),
                            }}
                          >
                            <EnableAddons
                              isActive={item?.isActive}
                              fontSize={13}
                              isShowDrop={!item.isCollapsed}
                              onPress={() => {
                                const data = [...equipmentRentalData];
                                data[index].isCollapsed = !item.isCollapsed;
                                setEEquipmentRentalData(data);
                              }}
                              setIsActive={() => {
                                const data = [...equipmentRentalData];
                                data[index].isActive = !item.isActive;
                                setEEquipmentRentalData(data);
                              }}
                              fontWight={"500"}
                              title={item.title}
                              isNext
                            />
                          </View>
                          <Collapsible collapsed={item.isCollapsed}>
                            <View style={{ marginBottom: verticalScale(10) }}>
                              <PriceInput
                                title={"Base Price"}
                                placeholder={"$"}
                                isActive={item.isbasePrice}
                                setIsActive={() => {
                                  const data = [...equipmentRentalData];
                                  data[index].isbasePrice = !item.isbasePrice;
                                  setEEquipmentRentalData(data);
                                }}
                                value={item.basePrice}
                                onChangeText={(text) => {
                                  if (/^\d+$/.test(text) || text === "") {
                                    setEEquipmentRentalData((prevData) =>
                                      prevData.map((item, ind) =>
                                        ind === index
                                          ? { ...item, basePrice: text }
                                          : item
                                      )
                                    );
                                  }
                                }}
                              />
                              <View
                                style={{
                                  marginVertical: verticalScale(10),
                                  paddingHorizontal: scale(15),
                                }}
                              >
                                <DashedLine
                                  dashLength={6}
                                  dashThickness={1}
                                  dashGap={5}
                                  dashColor={colors.gray}
                                />
                              </View>
                              <PriceInput
                                title={"Rate Per Hour"}
                                placeholder={"$"}
                                isActive={item.isHourPrice}
                                setIsActive={() => {
                                  const data = [...equipmentRentalData];
                                  data[index].isHourPrice = !item.isHourPrice;
                                  setEEquipmentRentalData(data);
                                }}
                                value={item.hourPrice}
                                onChangeText={(text) => {
                                  if (/^\d+$/.test(text) || text === "") {
                                    setEEquipmentRentalData((prevData) =>
                                      prevData.map((item, ind) =>
                                        ind === index
                                          ? { ...item, hourPrice: text }
                                          : item
                                      )
                                    );
                                  }
                                }}
                              />
                              <View
                                style={{
                                  marginVertical: verticalScale(10),
                                  paddingHorizontal: scale(15),
                                }}
                              >
                                <DashedLine
                                  dashLength={6}
                                  dashThickness={1}
                                  dashGap={5}
                                  dashColor={colors.gray}
                                />
                              </View>

                              <PriceInput
                                title={"Rate Per Day"}
                                placeholder={"$"}
                                isActive={item.isDayPrice}
                                setIsActive={() => {
                                  const data = [...equipmentRentalData];
                                  data[index].isDayPrice = !item.isDayPrice;
                                  setEEquipmentRentalData(data);
                                }}
                                value={item.dayPrice}
                                onChangeText={(text) => {
                                  if (/^\d+$/.test(text) || text === "") {
                                    setEEquipmentRentalData((prevData) =>
                                      prevData.map((item, ind) =>
                                        ind === index
                                          ? { ...item, dayPrice: text }
                                          : item
                                      )
                                    );
                                  }
                                }}
                              />
                            </View>
                          </Collapsible>

                          {equipmentRentalData.length !== index + 1 && (
                            <View
                            // style={{ marginBottom: verticalScale(10) }}
                            >
                              <CustomLine />
                            </View>
                          )}
                        </>
                      );
                    })}

                    <Spacer height={verticalScale(10)} />
                  </View>
                </View>
              </>

              <Spacer height={verticalScale(30)} />
            </View>
          </ScrollView>
          {/* <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.bottomBarItem}>
              <Text style={styles.bottomBarText}>Save</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.bottomBarItem}>
              <Text style={styles.bottomBarText}> Preview</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.bottomBarItem}>
              <Text style={styles.bottomBarText}>Post</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </Screen>
      {/* 
      <CustomBackModal
        startButtonText={"Clear All"}
        saveButtonText={"Apply"}
        onSave={() => {
          setIsModalVisible(false);
          setTimeout(() => {
            navigation.navigate("Addons");
          }, 1000);
        }}
        onStartButton={() => {
          setIsModalVisible(false);
          setTimeout(() => {
            navigation.navigate("Addons");
          }, 1000);
        }}
        //   onStartButton
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
      /> */}

      <CustomBackModal
        startButtonText={"Clear"}
        saveButtonText={"Apply"}
        cancelText={"reset"}
        onSave={() => {
          setIsBackVisible(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        onStartButton={() => {
          setIsBackVisible(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
        //   onStartButton
        modalVisible={isBackVisible}
        setModalVisible={setIsBackVisible}
      />
    </>
  );
};

export default Addons;

const styles = StyleSheet.create({
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
    fontSize: fontSizes.fontMidMedium,
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "500",
  },
  bottomBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
