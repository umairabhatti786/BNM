import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal,TextInput,Button, StyleSheet, Image } from 'react-native';
import MainHeaderComponent from '../../../components/MainHeaderComponent';
import { colors, fontSizes, dimensions } from '../../../styles/constants';
import { useNavigation } from '@react-navigation/native';


export default function SavedTripScreen() {
  const navigation = useNavigation();  // Get the navigation prop
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedOption, setSelectedOption] = useState({
    'Group By': 'Default',
    'View as': 'Trip',
    'Sort By': 'Default',
    'Filter by': 'Today',
  });
  const [orderStatus, setOrderStatus] = useState('Upcoming');
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [pressStartTime, setPressStartTime] = useState(null);
  const [selectedTrips, setSelectedTrips] = useState({});
  const [selectedOrders, setSelectedOrders] = useState({});

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const [isRenameModalVisible, setRenameModalVisible] = useState(false);
  const [newName, setNewName] = useState('');


  const [tripDetails, setTripDetails] = useState({
    '04/24/2024': [
      { id: 1, date: '02/26/24', upcoming: 5, uncompleted: 10, completed: 14, percentCompleted: '62%' },
      { id: 2, date: '02/26/24', upcoming: 3, uncompleted: 7, completed: 20, percentCompleted: '74%' },
    ],
    '04/25/2024': [
      { id: 3, date: '02/26/24', upcoming: 3, uncompleted: 7, completed: 20, percentCompleted: '74%' },
      { id: 4, date: '02/26/24', upcoming: 4, uncompleted: 5, completed: 15, percentCompleted: '75%' },
    ],
  });

  const [deliveredOrders, setDeliveredOrders] = useState({
    Upcoming: [
      { id: 1,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Start',button2:'Pending'},
      { id: 2,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Start',button2:'Pending'},
    ],
    Active: [
      { id: 3,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '10.45', category: 'Local Delivery',button1:'Continue',button2:'En-Route'},
      { id: 4,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Continue',button2:'En-Route'},
    ],
    Completed: [
      { id: 5,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '10.45', category: 'Local Delivery' ,button1:'Start',button2:'Success'},
      { id: 6,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Start',button2:'Failed'},
    ],
  });

  const options = {
    'Group By': ['Date(Default)', 'Move Category'],
    'View as': ['Trip', 'Delivered Order'],
    'Sort By': ['Default', 'Completed'],
    'Filter by': ['Today', 'Last 1 Week', 'Last 1 Month', 'Last 1 Year', 'All'],
  };

  const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType('');
  };

  const handleCloseRenameModal = () => {
    setRenameModalVisible(false);
  };

  const selectOption = (option) => {
    setSelectedOption((prev) => ({
      ...prev,
      [modalType]: option,
    }));
    closeModal();
  };

    const openSettingsModal = (tripId) => {
    setSelectedTripId(tripId);
    setSettingsModalVisible(true);
  };

  const closeSettingsModal = () => {
    setSettingsModalVisible(false);
    setSelectedTripId(null);
  };

  const handleRename = () => {
    // Logic to rename the trip or order using newName
    console.log("Renamed to:", newName);
    setIsModalVisible(false);  // Close the modal after renaming
  };


  const renderAddModal = () => (
    <Modal
      visible={isAddModalVisible}
      transparent={true}
      animationType="none"
      onRequestClose={handleCloseAddModal}
    >
        <TouchableOpacity 
          style={styles.modalContainer} 
          activeOpacity={1} 
          onPressOut={() => handleCloseAddModal(false)}
        >
        <TouchableOpacity 
            style={styles.modalContent} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>
        <TouchableOpacity onPress={handleCloseAddModal} style={styles.closeButton2}>
            <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
            </TouchableOpacity>
          <Text style={styles.modalTitle}>Added!</Text>
          <Text style={styles.modalMessage}>Selected Trip has been added to your trip.</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity onPress={handleCloseAddModal} style={styles.dismissButton}>
              <Text style={styles.dismissText}>Dismiss</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseAddModal} style={styles.continueButton}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
      </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
  
  const renderDeleteModal = () => (
    <Modal
      visible={isDeleteModalVisible}
      transparent={true}
      animationType="none"
      onRequestClose={handleCloseDeleteModal}
    >
      <TouchableOpacity 
          style={styles.modalContainer} 
          activeOpacity={1} 
          onPressOut={() => handleCloseDeleteModal(false)}
        >
        <TouchableOpacity 
            style={styles.modalContent} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>

        <TouchableOpacity onPress={handleCloseDeleteModal} style={styles.closeButton2}>
            <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
            </TouchableOpacity>
          <Text style={styles.modalTitle}>Warning!</Text>
          <Text style={styles.modalMessage}>
            If you delete, you will lose your upcoming, pending, or completed order.
          </Text>
          <Text style={styles.modalMessage2}>Do you want to continue?</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity onPress={handleCloseDeleteModal} style={styles.noButton}>
              <Text style={styles.noText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleConfirmDeleteModal} style={styles.yesButton}>
              <Text style={styles.yesText}>Yes</Text>
            </TouchableOpacity>
          </View>
        {/* </View>
      </View> */}
      </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );

  

    const handleSettingsOption = (option) => {
    switch (option) {
      case 'Open':
        navigation.navigate('Route');
        // Handle opening the trip or order details
        break;
      case 'Edit':
        navigation.navigate('Trip');
        // Handle editing the trip or order details
        break;
      case 'Rename':
        setRenameModalVisible(true);
        // Handle renaming the trip or order
        break;
      case 'Delete':
        setDeleteModalVisible(true);
        // Handle deleting the trip or order
        break;
      default:
        break;
    }
    closeSettingsModal();
  };

const [isAnyItemSelected, setIsAnyItemSelected] = useState(false);

    const handleLongPress = (tripId) => {
      if (!isAnyItemSelected) {
        setSelectedTrips((prevSelected) => ({
          ...prevSelected,
          [tripId]: true,
        }));
        setIsAnyItemSelected(true);
        setIsHeaderVisible(true);
        setSelectedCount(1);
      }
    };
    
    const handlePress = (tripId) => {
      if (isAnyItemSelected) {
        setSelectedTrips((prevSelected) => {
          const isSelected = !prevSelected[tripId];
          const newSelectedTrips = { ...prevSelected, [tripId]: isSelected };
    
          // Update selected count based on selection state
          const newSelectedCount = isSelected
            ? selectedCount + 1
            : selectedCount - 1;
    
          // If no items are selected, hide the header
          if (newSelectedCount === 0) {
            setIsAnyItemSelected(false);
            setIsHeaderVisible(false);
          }
    
          setSelectedCount(newSelectedCount);
          return newSelectedTrips;
        });
      }
    };

    const handleLongPressOrder2 = (orderId) => {
      if (!isAnyItemSelected) {
        setSelectedOrders((prevSelected) => ({
          ...prevSelected,
          [orderId]: true,
        }));
        setIsAnyItemSelected(true);
        setIsHeaderVisible(true);
        setSelectedCount(1);
      }
    };
    
    const handlePressOrder2 = (orderId) => {
      if (isAnyItemSelected) {
        setSelectedOrders((prevSelected) => {
          const isSelected = !prevSelected[orderId];
          const newSelectedTrips = { ...prevSelected, [orderId]: isSelected };
    
          // Update selected count based on selection state
          const newSelectedCount = isSelected
            ? selectedCount + 1
            : selectedCount - 1;
    
          // If no items are selected, hide the header
          if (newSelectedCount === 0) {
            setIsAnyItemSelected(false);
            setIsHeaderVisible(false);
          }
    
          setSelectedCount(newSelectedCount);
          return newSelectedTrips;
        });
      }
    };

    const handleBackPress = () => {
      setIsHeaderVisible(false);
      setIsAnyItemSelected(false);
      setSelectedTrips({});
      setSelectedOrders({});
      setSelectedCount(0);
    };
    
    const handleAddPress = () => {
      setAddModalVisible(true);
    };
    
    const handleDeletePress = () => {
      setDeleteModalVisible(true);
    };
    const handleCloseAddModal = () => {
      setAddModalVisible(false);
    };
    
    const handleCloseDeleteModal = () => {
      setDeleteModalVisible(false);
      
    };
    const handleConfirmDeleteModal = () => {
      setDeleteModalVisible(false);
      setIsHeaderVisible(false);
      setIsAnyItemSelected(false);
      setSelectedTrips({});
      setSelectedOrders({});
      setSelectedCount(0);
    };

    const renderHeader = () => {
      if (isHeaderVisible) {
        return (
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleBackPress}>
            <Image style={styles.leftArrow} source={require('../../../assets/webp/leftArrow.webp')} />
            </TouchableOpacity>
            <Text style={styles.selectedCountText}>{selectedCount}</Text>
           
            <View style={styles.headerIconsContainer}>
              <TouchableOpacity onPress={handleAddPress}>
              <Image style={styles.icon} source={require('../../../assets/webp/plusIcon.webp')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeletePress}>
              <Image style={styles.icon} source={require('../../../assets/webp/deleteIcon.webp')} />
              </TouchableOpacity>
            </View>
          </View>
        );
      }
      return null;
    };
    
  
  const renderTripDetails = () => {
    return (
      <View>
        {Object.keys(tripDetails).map((date) => (
          <View key={date}>
            <View style={{flexDirection:'row',paddingTop:20,paddingBottom:5,paddingLeft:20}}>
            <Text style={styles.dateHeader}>Date: </Text>
            <Text style={styles.dateHeader2}>{date}</Text>
            </View>
            <View style={styles.horizontalLine} />
            {tripDetails[date].map((trip, index) => (
              
              <View key={trip.id}>
                <TouchableOpacity
                    style={[
                      selectedTrips[trip.id] && styles.selectedCard,
                    ]}
                    onLongPress={() => handleLongPress(trip.id)}
                    onPress={() => handlePress(trip.id)}
                  >
                <View style={styles.tripCard}>
                  <View style={styles.tripColumn}>
                    <Text style={[
                      styles.tripStatLabel,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      Trip {trip.id}</Text>
                    <Text style={[
                      styles.tripStatLabel,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      {trip.date}</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                    <Text style={[
                      styles.tripStatValue,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      {trip.upcoming}</Text>
                      <Text style={[
                      styles.tripStatLabel,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      Upcoming</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                  <Text style={[
                      styles.tripStatValue,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      {trip.uncompleted}</Text>
                      <Text style={[
                      styles.tripStatLabel,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      Uncomplete</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                  <Text style={[
                      styles.tripStatValue,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      {trip.completed}</Text>
                      <Text style={[
                      styles.tripStatLabel,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      Completed</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                  <Text style={[
                      styles.tripStatValue,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      {trip.percentCompleted}</Text>
                      <Text style={[
                      styles.tripStatLabel,
                      selectedTrips[trip.id] && styles.selectedTextColor
                    ]}>
                      % Completed</Text>
                  </View>
                 
                  <TouchableOpacity onPress={() => openSettingsModal(trip.id)}>
                  {/* <Image style={styles.icon2} source={require('../../../assets/webp/settingsIcon.webp')} /> */}
                  <Image
                      style={[
                        styles.icon2,
                        selectedTrips[trip.id] && styles.iconSelected,
                      ]}
                      source={require('../../../assets/webp/settingsIcon.webp')}
                    />
                  </TouchableOpacity>

                  {selectedTrips[trip.id] && (
                   <View style={styles.checkIcon}>
    <Image style={{ width: '90%', height: '90%', tintColor: 'white' }} source={require('../../../assets/webp/tickIcon.webp')} />
  </View>
  )}
                  
                </View>
                 {/* Add horizontal line after each trip card */}
                 {index < tripDetails[date].length && (
                  <View
                    style={[
                      styles.horizontalLine,
                      selectedTrips[trip.id] && styles.horizontalLineSelected,
                    ]}
                  />
                )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  const renderDeliveredOrders = () => {
    const orders = deliveredOrders[orderStatus] || [];
    return (
      <View>
        {orders.map((order) => {
          // Determine button styles based on the part and button state
          let button1Style, button2Style, buttonText1Style, buttonText2Style;

          if (selectedOrders[order.id]) {
            // If the order is selected, apply disabled styles
            button1Style = [styles.buttonDisabled, { width:dimensions.widthLevel15,borderRadius:8,justifyContent:'center',alignItems:'center', }];
            button2Style = [styles.buttonDisabled, { width:dimensions.widthLevel15,borderRadius:8,justifyContent:'center',alignItems:'center', }];
            buttonText1Style = styles.buttonTextDisabled;
            buttonText2Style = styles.buttonTextDisabled;
          } else {
            // Otherwise, apply normal styles based on orderStatus and button state
            switch (orderStatus) {
              case 'Upcoming':
                button1Style = styles.buttonUpcomingStart;
                button2Style = styles.buttonUpcomingPending;
                buttonText1Style = styles.buttonTextUpcomingStart;
                buttonText2Style = styles.buttonTextUpcomingPending;
                break;
              case 'Active':
                button1Style = order.button1 === 'Continue' ? styles.buttonActiveContinue : styles.buttonActiveEnRoute;
                button2Style = order.button2 === 'Continue' ? styles.buttonActiveContinue : styles.buttonActiveEnRoute;
                buttonText1Style = button1Style === styles.buttonActiveContinue ? styles.buttonTextActiveContinue : styles.buttonTextActiveEnRoute;
                buttonText2Style = button2Style === styles.buttonActiveContinue ? styles.buttonTextActiveContinue : styles.buttonTextActiveEnRoute;
                break;
              case 'Completed':
                button1Style = order.button1 === 'Start' ? styles.buttonCompletedStart : order.button1 === 'Success' ? styles.buttonCompletedSuccess : styles.buttonCompletedFailed;
                button2Style = order.button2 === 'Start' ? styles.buttonCompletedStart : order.button2 === 'Success' ? styles.buttonCompletedSuccess : styles.buttonCompletedFailed;
                buttonText1Style = button1Style === styles.buttonCompletedStart ? styles.buttonTextCompletedStart : button1Style === styles.buttonCompletedSuccess ? styles.buttonTextCompletedSuccess : styles.buttonTextCompletedFailed;
                buttonText2Style = button2Style === styles.buttonCompletedStart ? styles.buttonTextCompletedStart : button2Style === styles.buttonCompletedSuccess ? styles.buttonTextCompletedSuccess : styles.buttonTextCompletedFailed;
                break;
              default:
                button1Style = styles.buttonUpcomingStart; // Default fallback
                button2Style = styles.buttonUpcomingPending; // Default fallback
                buttonText1Style = styles.buttonTextUpcomingStart;
                buttonText2Style = styles.buttonTextUpcomingPending;
            }
          }

          return (
            <TouchableOpacity
              key={order.id}
              onLongPress={() => handleLongPressOrder2(order.id)}
              onPress={() => handlePressOrder2(order.id)}
              style={[
                styles.deliveredOrderContainer,
                selectedOrders[order.id] && styles.selectedCard, // Apply selected card style
              ]}
            >
              <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 10 }}>
                <Text style={styles.dateHeader}>Date: </Text>
                <Text style={styles.dateHeader2}>{order.date}</Text>
              </View>

              <View style={styles.orderDetails}>
                <View style={styles.orderRow}>
                  <Text
                    style={[
                      styles.orderName,
                      selectedOrders[order.id] && styles.selectedTextColor, // Apply selected text color
                    ]}
                  >
                    {order.name}
                  </Text>
                  <Image style={styles.iIcon} source={require('../../../assets/webp/iIcon.webp')} />
                </View>
                <Text style={styles.orderText}>Pick-Up Address</Text>
                <Text
                  style={[
                    styles.orderDetail,
                    selectedOrders[order.id] && styles.selectedTextColor, // Apply selected text color
                  ]}
                >
                  {order.pickUp}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <Text style={styles.orderText}>Start Time</Text>
                  <Text style={styles.orderText}>Category</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <Text
                    style={[
                      styles.orderDetail,
                      selectedOrders[order.id] && styles.selectedTextColor, // Apply selected text color
                    ]}
                  >
                    {order.phone}
                  </Text>
                  <Text
                    style={[
                      styles.orderDetail,
                      selectedOrders[order.id] && styles.selectedTextColor, // Apply selected text color
                    ]}
                  >
                    {order.category}
                  </Text>
                </View>

                <View style={styles.dottedLine} />

                <View style={styles.orderActions}>
                  <TouchableOpacity style={button1Style} disabled={selectedOrders[order.id]}>
                    <Text style={[styles.buttonText, buttonText1Style]}>{order.button1}</Text>
                  </TouchableOpacity>
                  <View style={button2Style}>
                    <Text style={[styles.buttonText, buttonText2Style]}>{order.button2}</Text>
                  </View>
                </View>

                {/* Checkmark icon for selected items */}
                {selectedOrders[order.id] && (
                  <View style={styles.checkIcon}>
                    <Image style={{ width: '90%', height: '90%', tintColor: 'white' }} source={require('../../../assets/webp/tickIcon.webp')} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>

        {/* Conditionally render MainHeaderComponent */}
  {!isAnyItemSelected && (
    <MainHeaderComponent title="Saved Trip(s)" />
  )}
  
  {/* Render new header if any items are selected */}
  {isAnyItemSelected && renderHeader()}

      <ScrollView>
        <Text
          style={{
            fontSize: fontSizes.fontLarge,
            fontWeight: '700',
            padding: dimensions.paddingLevel3,
            marginTop: '5%',
            color: colors.black,
          }}
        >
          Past Trip Usage
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: dimensions.paddingLevel3 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: fontSizes.fontXXXXLarge, fontWeight: '700', color: colors.black }}>83</Text>
            <Text>Total Uncompleted</Text>
          </View>
          <View style={styles.lineVertical} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: fontSizes.fontXXXXLarge, fontWeight: '700', color: colors.black }}>100</Text>
            <Text>Total Completed</Text>
          </View>
          <View style={styles.lineVertical} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: fontSizes.fontXXXXLarge, fontWeight: '700', color: colors.black }}>83%</Text>
            <Text>% Completed</Text>
          </View>
        </View>
       
        <View style={{ margin: dimensions.paddingLevel3 }}>
          <View style={styles.lineHorizontal} />
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Group By</Text>
            <TouchableOpacity onPress={() => openModal('Group By')} style={styles.optionBox}>
              <Text style={styles.optionText}>{selectedOption['Group By']}</Text>
              <Image style={styles.downArrow} source={require('../../../assets/webp/downArrow.webp')} />
            </TouchableOpacity>
          </View>
          <View style={styles.lineHorizontal} />
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>View as</Text>
            <TouchableOpacity onPress={() => openModal('View as')} style={styles.optionBox}>
              <Text style={styles.optionText}>{selectedOption['View as']}</Text>
              <Image style={styles.downArrow} source={require('../../../assets/webp/downArrow.webp')} />
            </TouchableOpacity>
          </View>
          <View style={styles.lineHorizontal} />

          <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <View style={styles.optionRow}>
              <Text style={styles.optionLabel}>Sort By</Text>
              <TouchableOpacity onPress={() => openModal('Sort By')} style={styles.optionBox2}>
                <Text style={styles.optionText}>{selectedOption['Sort By']}</Text>
                <Image style={styles.downArrow} source={require('../../../assets/webp/downArrow.webp')} />
              </TouchableOpacity>
            </View>
            <View style={styles.optionRow}>
              <Text style={styles.optionLabel}>Filter by</Text>
              <TouchableOpacity onPress={() => openModal('Filter by')} style={styles.optionBox2}>
                <Text style={styles.optionText}>{selectedOption['Filter by']}</Text>
                <Image style={styles.downArrow} source={require('../../../assets/webp/downArrow.webp')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lineHorizontal} />
        </View>

        {selectedOption['View as'] === 'Trip' ? renderTripDetails() : (
          <View>
            <View style={styles.statusButtonContainer}>
              {['Upcoming', 'Active', 'Completed'].map((status) => (
               <TouchableOpacity
               key={status}
               onPress={() => setOrderStatus(status)}
               style={[
                 styles.statusButton,
                 orderStatus === status && styles.statusButtonActive, // Apply active style conditionally
               ]}
             >
                  <Text
                    style={[
                      styles.statusButtonText,
                      orderStatus === status && styles.statusButtonTextActive,
                    ]}
                  >
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {renderDeliveredOrders()}
          </View>
        )}
      </ScrollView>
      {renderAddModal()}
      {renderDeleteModal()}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >

        <TouchableOpacity 
          style={styles.centeredView} 
          activeOpacity={1} 
          onPressOut={() => closeModal(false)}
        >
          <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>

            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>{modalType}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={{ }}>
            {modalType && options[modalType]?.map((option, index) => (
              <View key={option}>
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => selectOption(option)}
                >
                  <Text style={[ styles.textStyle,selectedOption[modalType] === option ? styles.textStyleSelected : styles.textStyleDefault, ]}>{option}</Text>
                  {selectedOption[modalType] === option && (
                    <Image style={styles.tickIcon} source={require('../../../assets/webp/tickIcon.webp')} />
                  )}
                </TouchableOpacity>
                {/* Add dotted line after each option except the last one */}
                {index < options[modalType].length - 1 && (
                  <View style={styles.dottedLine} />
                )}
              </View>
            ))}
          </View>
          {/* </View>
        </View> */}
        </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

       {/* Settings Modal */}
       <Modal
        animationType="none"
        transparent={true}
        visible={settingsModalVisible}
        onRequestClose={closeSettingsModal}
      >
        <TouchableOpacity
          style={styles.settingsCenteredView}
          onPress={closeSettingsModal}
          activeOpacity={1}
        >
          <View style={styles.settingsModalView}>

            <View style={styles.settingsOptions}>
              {['Open', 'Edit', 'Rename', 'Delete'].map((option, index, array) => (
                <View key={option}>
                  <TouchableOpacity
                    style={styles.settingsOption}
                    onPress={() => handleSettingsOption(option)}
                  >
                    <Text
                      style={[
                        styles.settingsOptionText,
                        option === 'Delete' ? styles.deleteOptionText : styles.otherOptionText,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                  {/* Add dotted line after each option except the last one */}
                  {index < array.length - 1 && <View style={styles.dottedLine} />}
                </View>
              ))}
            </View>
                      
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Rename Modal */}

      <Modal
        animationType="none"
        transparent={true}
        visible={isRenameModalVisible}
        onRequestClose={handleCloseRenameModal}
      >

             <TouchableOpacity 
          style={styles.centeredView} 
          activeOpacity={1} 
          onPressOut={() => handleCloseRenameModal(false)}
        >
        <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>
        
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Rename</Text>
              <TouchableOpacity onPress={() => setRenameModalVisible(!isRenameModalVisible)}>
                <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
              </TouchableOpacity>
            </View>
          <View style={styles.line} />
      
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="[Name]"
            placeholderTextColor="black"
            />
          </View>

          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity onPress={handleCloseRenameModal} style={styles.cancelButton}>
              <Text style={styles.noText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseRenameModal} style={styles.submitButton}>
              <Text style={styles.yesText}>Submit</Text>
            </TouchableOpacity>
          </View>
         </TouchableOpacity>
         </TouchableOpacity>
      </Modal> 

    </View>
  );
}

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionLabel: {
    fontSize: fontSizes.fontMediumPlus,
    color:colors.black,
    fontWeight:'500'
  },
  optionBox: {
    borderWidth: 1,
    borderColor:"lightgray",
    borderRadius: 5,
    width:dimensions.widthLevel13,
    height:dimensions.heightLevel3,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  optionBox2: {
    borderWidth: 1,
    borderColor:"lightgray",
    borderRadius: 5,
    width:dimensions.widthLevel15,
    height:dimensions.heightLevel3,
    marginLeft:8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    //padding: 8,
  },
  optionText: {
    fontSize: fontSizes.fontMedium,
    color:colors.secondary,
    alignContent:'center',
    paddingLeft:5,
   
  },
  downArrow: {
    width: 15,
    height: 15,
    justifyContent:'center',
    alignContent:'center',
    right:10
  },

  settingsCenteredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  settingsModalView: {
    width: '100%',
    padding: dimensions.paddingLevel3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  settingsOptions: {
    marginVertical: 10,
  },
  settingsOption: {
    paddingVertical: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  settingsOptionText: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight:'600'

  },
  deleteOptionText: {
    color: 'red', 
  },
  otherOptionText: {
    color:colors.secondary, 
  },
  dateHeader: {
    fontSize:fontSizes.fontMidMedium,
    color:colors.black,
    fontWeight:'700'
  },
  dateHeader2: {
    fontSize:fontSizes.fontMidMedium,
    color:colors.secondary,
    fontWeight:'500'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    padding: dimensions.paddingLevel3,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
    margin:dimensions.paddingLevel3
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalText: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '600',
    color:colors.black
    
  },
  closeIcon: {
    width: 15,
    height: 15,
    justifyContent:'center',
    alignContent:'center'
  },
  closeIcon2: {
    width: 15,
    height: 15,
    
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textStyleSelected: {
    color: colors.primary, // Color for selected text
    fontWeight:'600' ,
    fontSize:fontSizes.fontMidMedium
  },
  textStyleDefault: {
    color: colors.secondary,
    fontWeight:'600' ,
    fontSize:fontSizes.fontMidMedium
  },
  textStyle: {
    fontSize: fontSizes.fontMedium,
    color: colors.black,
  },
  tickIcon: {
    width: 15,
    height: 15,
  },
  sectionTitle: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    padding: dimensions.paddingLevel3,
    color: colors.black,
  },
  tripCard: {
    flexDirection: 'row',
   // padding: dimensions.paddingLevel1,
    backgroundColor: colors.white,
    paddingVertical:dimensions.paddingLevel2,
    paddingHorizontal:4,
    alignContent:'center'
  },
  checkIcon: {
    position: 'absolute',
    left: '50%',
    top: '60%',
    transform: [{ translateX: -10 }, { translateY: 25 }], // Adjust these values to center the icon
    width: 20,   // Increase the width and height to make it a bit larger and circular
    height: 20,
    borderRadius: 15,  // Half of the width/height to make it a perfect circle
    backgroundColor:colors.primary,  // Green background color
    justifyContent: 'center',  // Center the tick icon inside
    alignItems: 'center',
    padding: 5,  // Optional padding for the inner icon
  },
  tripColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tripStatLabel: {
    fontSize: fontSizes.fontSmall,
    color: colors.secondary,
  },
  tripStatValue: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
  },
  lineHorizontal: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
  lineVertical: {
    width: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: 4,
  },
  deliveredOrderContainer: {
    padding: dimensions.paddingLevel3,
  },
  deliveredOrderInfo: {
    marginBottom: 10,
  },
  orderLabel: {
    fontSize: fontSizes.fontMedium,
    fontWeight: 'bold',
    color: colors.black,
  },
  orderAddress: {
    fontSize: fontSizes.fontSmall,
    color: colors.secondary,
  },
  orderTime: {
    fontSize: fontSizes.fontSmall,
    color: colors.secondary,
  },
  orderCategory: {
    fontSize: fontSizes.fontSmall,
    color: colors.gray,
  },
  orderActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startButtonText: {
    color: colors.white,
  },
  orderStatus: {
    color: colors.black,
  },
  statusButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor:"lightgray"
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'lightgray',

  },
  statusButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
   
  },
  statusButtonText: {
    fontSize: fontSizes.fontMediumPlus,
    color: "lightgray",
    fontWeight:'700',
  },
  statusButtonTextActive: {
    color: colors.primary,
    fontSize:fontSizes.fontMediumPlus,
    fontWeight:'700',
  },
  orderDetails: {
    flex: 1,
    borderRadius: 8,
    padding: dimensions.paddingLevel3,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  orderName: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
  },
  orderText: {
    fontSize: fontSizes.fontMedium,
    fontWeight: '500',
    color: colors.secondary,
    marginTop: dimensions.paddingLevel3,
  },
  orderDetail: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '500',
    color: colors.black,
    marginTop: dimensions.paddingLevel1,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: 'lightgray',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  icon2: {
    width: 20,
    height: 20,
    marginTop:8,
    resizeMode: 'contain',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  iIcon: {
    width: 18,
    height: 18,
  },
buttonUpcomingStart: {
  backgroundColor: colors.primary,
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center',
  color: colors.white,
},
buttonUpcomingPending: {
  backgroundColor:'lightgray',
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonActiveContinue: {
  backgroundColor: colors.primary,
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonActiveEnRoute: {
  backgroundColor: colors.white,
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  borderWidth:1,
  borderColor:"lightgray",
  justifyContent:'center',
  alignItems:'center'
},
buttonCompletedStart: {
  backgroundColor: "lightgray",
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonCompletedSuccess: {
  backgroundColor: "#0A987F1A",
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonCompletedFailed: {
  backgroundColor: "#FF00001A",
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonText: {
  fontWeight:'500',
  fontSize: fontSizes.fontMidMedium,
},
buttonTextUpcomingStart: {
  color: '#FFFFFF',
},
buttonTextUpcomingPending: {
  color:colors.secondary,
},
buttonTextActiveContinue: {
  color: '#FFFFFF',
},
buttonTextActiveEnRoute: {
  color: colors.black,
},
buttonTextCompletedStart: {
  color:colors.secondary,
},
buttonTextCompletedSuccess: {
  color: '#0CBC72',
},
buttonTextCompletedFailed: {
  color: '#FF0000',
},
selectedTextColor: {
  color: 'lightgray',
},
lineVerticalSelected: {
  backgroundColor: 'lightgray', // Change vertical line color to light gray for selected items
},
horizontalLineSelected: {
  backgroundColor: 'lightgray', // Change horizontal line color to light gray for selected items
},
iconSelected: {
  tintColor: 'lightgray', // Change icon color to light gray for selected items
},
modalActions: {
  flexDirection: 'row',
},
modalIcon: {
  width: 24,
  height: 24,
  marginHorizontal: 10,
},
buttonDisabled: {
  backgroundColor: 'lightgray',
  padding: 10,
  borderRadius: 5,
},
buttonTextDisabled: {
  color: 'gray',
},
headerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: dimensions.paddingLevel3,
  backgroundColor:colors.white,
  height:dimensions.heightLevel6,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 5 },
  elevation: 7,
},
selectedCountText: {
  fontSize: fontSizes.fontMediumPlus,
  fontWeight: 'bold',
  color:colors.black,
  marginLeft:12
},
headerIconsContainer: {
  flexDirection: 'row', // Keep icons in a row
  alignItems: 'center',
  marginLeft: 'auto', // Moves the icons to the right corner
  //alignItems: 'center',
},
item: {
  padding: 15,
  borderBottomWidth: 1,
  borderColor: '#ccc',
},
selectedItem: {
  backgroundColor: '#e0e0e0',
},
icon: {
  width: 18,
  height: 18,
  marginLeft: 20,
},
leftArrow: {
  width: 18,
  height: 18,
},

modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
  width: '80%',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  alignItems: 'center',
},
modalTitle: {
  fontSize: fontSizes.fontXLarge,
  fontWeight: 'bold',
  marginBottom: 10,
  color:colors.black,
  marginTop:10
},
modalMessage: {
  fontSize: fontSizes.fontMidMedium,
  textAlign: 'center',
  marginBottom: 20,
  marginTop:5
},
modalMessage2: {
  fontSize: fontSizes.fontMediumPlus,
  textAlign: 'center',
  marginBottom: 20,
  marginTop:5,
  color:colors.black,
  fontWeight:'600'
},
closeButton2: {
  position: 'absolute',
  top: 10,
  right: 10,
  padding: 10,
},
modalButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop:20
},
dismissButton: {
  flex: 1,
  alignItems: 'center',
  padding: 10,
},
dismissText: {
  fontSize: fontSizes.fontMidMedium,
  color: 'gray',
  fontWeight:'600',
},
continueButton: {
  flex: 1,
  alignItems: 'center',
 // padding: 5,
  backgroundColor: colors.primary,
  borderRadius: 9,
  paddingVertical: dimensions.paddingLevel1,
  paddingHorizontal: dimensions.paddingLevel1,
},
continueText: {
  fontSize: fontSizes.fontMidMedium,
  color: 'white',
  fontWeight:'600'
},
noButton: {
  //flex: 1,
  paddingVertical: dimensions.paddingLevel1,
  paddingHorizontal: dimensions.paddingLevel6,
  alignItems: 'center',
  padding: 10,
  backgroundColor: 'lightgray',
  borderRadius: 9,
},
cancelButton: {
  //flex: 1,
  paddingVertical: dimensions.paddingLevel1,
  paddingHorizontal: dimensions.paddingLevel4,
  alignItems: 'center',
  padding: 10,
  backgroundColor: 'lightgray',
  borderRadius: 9,
},
noText: {
  fontSize: 16,
  color: colors.secondary,
  fontWeight:'600'
},
yesButton: {
 // flex: 1,
  paddingVertical: dimensions.paddingLevel1,
  paddingHorizontal: dimensions.paddingLevel6,
  alignItems: 'center',
  padding: 10,
  backgroundColor: 'red',
  borderRadius: 9,
},
submitButton: {
   paddingVertical: dimensions.paddingLevel1,
   paddingHorizontal: dimensions.paddingLevel4,
   alignItems: 'center',
   padding: 10,
   backgroundColor:colors.primary,
   borderRadius: 9,
 },
yesText: {
  fontSize: 16,
  color: 'white',
  fontWeight:'600'
},
textInput: {
  borderColor: '#ccc',
  borderWidth: 1,
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
},
});
