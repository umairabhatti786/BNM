import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import MainHeaderComponent from '../../../components/MainHeaderComponent';
import { colors, dimensions, fontSizes } from '../../../styles/constants';
import OrderCardComponent from '../../../components/OrderCardComponent ';
import CalendarModal from '../../../components/CalenderModal'; // Assume this is the custom calendar picker component
import SearchBarComponent from '../../../components/SearchBarComponent';

export default function HistoryScreen() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [showDateFrom, setShowDateFrom] = useState(false);
  const [showDateTo, setShowDateTo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateSelectedFrom, setDateSelectedFrom] = useState(false); // Track if date is selected for "From"
  const [dateSelectedTo, setDateSelectedTo] = useState(false); // Track if date is selected for "To"

  const onChangeFromDate = (selectedDate) => {
    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      setDateFrom(selectedDate);
      setDateSelectedFrom(true); // Set date selected for "From"
    } else {
      console.error('Invalid date:', selectedDate);
    }
    setShowDateFrom(false);
  };
  
  const onChangeToDate = (selectedDate) => {
    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      setDateTo(selectedDate);
      setDateSelectedTo(true); // Set date selected for "To"
    } else {
      console.error('Invalid date:', selectedDate);
    }
    setShowDateTo(false);
  };

  
  const formatDate = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      date.setDate(date.getDate() + 1); 
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month and ensure it's 2 digits
      const day = date.getDate().toString().padStart(2, '0'); 
      const year = date.getFullYear(); // Get full year
      return `${month}/${day}/${year}`; // Return date in MM/DD/YYYY format
    } else {
      return 'Invalid Date';
    }
  };

  const sampleImage1 = require('../../../assets/webp/sampleImage.webp');

  // Dummy order data
  const orders = [
    {
      number: '123456',
      date: '02/26/23',
      status: 'Success',
      statusColor: "#0A987F1A",
      textColor: colors.primary,
      userImage: sampleImage1,
      username: 'Username',
      type: 'On-demand',
      category: 'Ride',
      from: 'City, ST, Zipcode',
      to: 'City, ST, Zipcode',
      distance: '10 Miles',
      time: '01:12 hr',
      cost: 80,
      extraCharge: 10,
      totalCost: 90,
    },
    {
      number: '123457',
      date: '02/27/23',
      status: 'Failed',
      statusColor: '#FF00001A',
      textColor: "#FF0000",
      userImage: sampleImage1,
      username: 'Username2',
      type: 'On-demand',
      category: 'Ride',
      from: 'City, ST, Zipcode',
      to: 'City, ST, Zipcode',
      distance: '12 Miles',
      time: '01:20 hr',
      cost: 100,
      extraCharge: 15,
      totalCost: 115,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeaderComponent title="History" />
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
          Move History
        </Text>

        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => setShowDateFrom(true)} style={styles.dateInput}>
            <View style={styles.dateTextContainer}>
              <Text style={{ color: "gray" }}>
                From: {dateSelectedFrom ? formatDate(dateFrom) : ''}  
              </Text>
              {!dateSelectedFrom && (
                <Image
                  source={require('../../../assets/webp/calenderIcon.webp')} // Replace with your icon's path
                  style={styles.icon}
                />
              )}
            </View>
          </TouchableOpacity>
          <Text>____</Text>
          <TouchableOpacity onPress={() => setShowDateTo(true)} style={styles.dateInput}>
            <View style={styles.dateTextContainer}>
              <Text style={{ color: "gray" }}>
                To: {dateSelectedTo ? formatDate(dateTo) : ''}
              </Text>
              {!dateSelectedTo && (
                <Image
                  source={require('../../../assets/webp/calenderIcon.webp')} // Replace with your icon's path
                  style={styles.icon}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <CalendarModal
          visible={showDateFrom}
          onClose={() => setShowDateFrom(false)}
          onSelectDate={onChangeFromDate}
          selectedDate={dateFrom}
        />

        <CalendarModal
          visible={showDateTo}
          onClose={() => setShowDateTo(false)}
          onSelectDate={onChangeToDate}
          selectedDate={dateTo}
        />

        <View style={{ padding: dimensions.paddingLevel3 }}>
          <SearchBarComponent
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Order Cards */}
        {orders.map(order => (
          <OrderCardComponent key={order.number} order={order} />
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    alignItems: "center"
  },
  dateInput: {
    width:dimensions.widthLevel13,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: dimensions.paddingLevel2,
    borderRadius: 9,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20, // Adjust size as needed
    marginLeft: 20, 
  },
  dateTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
