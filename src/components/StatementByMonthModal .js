import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

const StatementByMonthModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState('');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleYearChange = (direction) => {
    setSelectedYear(selectedYear + direction);
  };

  return (
    <View style={styles.centeredView}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Statement by Month</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={require('./assets/webp/close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Select Month"
            value={selectedMonth}
            onFocus={() => {
              // Add logic to open a date picker or handle calendar selection
            }}
          />

          <View style={styles.yearSelector}>
            <TouchableOpacity onPress={() => handleYearChange(-1)}>
              <Text style={styles.yearText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.yearText}>{selectedYear}</Text>
            <TouchableOpacity onPress={() => handleYearChange(1)}>
              <Text style={styles.yearText}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.monthGrid}>
            {months.map((month, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.monthItem,
                  selectedMonth === month && styles.selectedMonth
                ]}
                onPress={() => setSelectedMonth(month)}
              >
                <Text style={styles.monthText}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.downloadButton} onPress={() => { /* Add download logic here */ }}>
            <Text style={styles.downloadButtonText}>Download</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginVertical: 20,
    width: '100%',
  },
  yearSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginBottom: 20,
  },
  yearText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  monthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  monthItem: {
    width: '22%',
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedMonth: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  monthText: {
    color: '#000',
  },
  downloadButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default StatementByMonthModal;
