import React,{useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch,Modal,TextInput } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { colors, dimensions, fontSizes, imageSizes } from '../../../styles/constants';
import MainHeaderComponent from '../../../components/MainHeaderComponent';

export default function EarningsScreen() {
  const data = [10, 20, 60, 40, 30, 80, 50]; // Example data
  const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = ['25', '26', '27', '28', '29', '30', '31'];

  const [isScheduledPaymentEnabled, setIsScheduledPaymentEnabled] = React.useState(false);

  const [showCompletedOrder, setShowCompletedOrder] = React.useState(true);
  const [showOrderDetail, setShowOrderDetail] = React.useState(true);
  const [showDepositsAndTransfer, setShowDepositsAndTransfer] = React.useState(true);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedDateRange, setSelectedDateRange] = React.useState('Mar 25 - Apr 1');
  const [earningsData, setEarningsData] = React.useState([
    { dateRange: 'Mar 25 - Apr 1', amount: '$100.00' },
    { dateRange: 'Mar 18 - Mar 25', amount: '$100.00' },
    { dateRange: 'Mar 11 - Mar 18', amount: '$100.00' },
    { dateRange: 'Mar 4 - Mar 11', amount: '$100.00' },
    { dateRange: 'Feb 26 - Mar 4', amount: '$100.00' },
    { dateRange: 'Feb 19 - Feb 26', amount: '$100.00' }
  ]);

  const [settingsModalVisible, setSettingsModalVisible] = React.useState(false);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState('');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleYearChange = (direction) => {
    setSelectedYear(selectedYear + direction);
  };

  const [totalEarnings, setTotalEarnings] = React.useState('$100.00');

  const openModal = (type) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openSettingsModal = () => {
    setSettingsModalVisible(true);
  };
  
  const closeSettingsModal = () => {
    setSettingsModalVisible(false);
  };

  const handleDateRangeSelect = (index, dateRange, amount) => {
    setSelectedDateRange(dateRange);
    setTotalEarnings(amount);
    setModalVisible(false);
  };
  
  const toggleSwitch = () => setIsScheduledPaymentEnabled(previousState => !previousState);

  const completedOrder = [
    {
      onDemand:'1',
      scheduled:'3',
      dedicated:'0'
    }
  ]

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeaderComponent title="Earnings" />

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
          Earnings
        </Text>
        
        {/* Date Range Selector and Total Earnings */}
        <View style={styles.orderSummary}>
          <View style={styles.dateRangeContainer}>
            <TouchableOpacity style={styles.dateRangeButton} onPress={openModal}>
              <Text style={styles.dateRangeText}>{selectedDateRange}</Text>
              <Image style={styles.downArrowIcon} source={require('../../../assets/webp/downArrow.webp')} />
            </TouchableOpacity>

            <Text style={styles.totalEarnings}>{totalEarnings}</Text>
          </View>

          <View style={styles.chartContainer}>
          <BarChart
            style={styles.barChart}
            data={data}
            svg={{ fill: colors.primary }} // Customize the bar color
            contentInset={{ top: 10, bottom: 40 }}
            spacingInner={0.18} // Adjust inner spacing between bars
            spacingOuter={0.01} // Adjust outer spacing (between first/last bar and chart edge)
          >
            <Grid />
          </BarChart>

          <View style={styles.xAxisContainer}>
            <XAxis
              style={styles.xAxis}
              data={data}
              formatLabel={(value, index) => xLabels[index]}
              contentInset={{ left: 10, right: 10, }}
              svg={{ fontSize: 11, fill: '#000000',fontWeight: 'bold' }}
            />
            <View style={styles.dateLabelsContainer}>
              {dates.map((date, index) => (
                <View key={index} style={styles.dateLabelContainer}>
                  <Text style={styles.dateLabel}>{date}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.text1}>Completed Order</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.orderNum}>4</Text>
          <TouchableOpacity  onPress={() => setShowCompletedOrder(!showCompletedOrder)}>
          <Image style={styles.icon} source={showCompletedOrder ? require('../../../assets/webp/upArrow.webp') : require('../../../assets/webp/downArrow.webp')} />
          </TouchableOpacity>
          </View>
        </View>

        {showCompletedOrder && (
          <View style={styles.orderSummary}>
            {completedOrder.map((completedOrder, index) => (
              <View key={index}>
                <View style={[styles.orderSummaryRow, styles.borderBottom]}>
                  <Text style={styles.orderSummaryText}>On Demand</Text>
                  <Text style={styles.orderSummaryText}>{completedOrder.onDemand}</Text>
                </View>
                <View style={[styles.orderSummaryRow, styles.borderBottom]}>
                  <Text style={styles.orderSummaryText}>Scheduled</Text>
                  <Text style={styles.orderSummaryText}>{completedOrder.scheduled}</Text>
                </View>
                <View style={styles.orderSummaryRow}>
                  <Text style={styles.orderSummaryText}>Dedicated</Text>
                  <Text style={styles.orderSummaryText}>{completedOrder.dedicated}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={styles.sectionHeader}>
          <Text style={styles.text1}>Order Detail</Text>
          <TouchableOpacity onPress={() => setShowOrderDetail(!showOrderDetail)}>
          <Image style={styles.icon} source={showOrderDetail ? require('../../../assets/webp/upArrow.webp') : require('../../../assets/webp/downArrow.webp')} />
          </TouchableOpacity>
        </View>

        {showOrderDetail && (
        <View style={styles.orderDetail}>
          <View style={styles.orderCard}>
            <View style={styles.orderInfoRow}>
              <Text style={styles.orderNumber}>Order #123456</Text>
              <Text style={styles.orderDate}>02/26/23</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
               <Text style={styles.orderPrice}>$60</Text>
            </View>
            <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
          </View>
          <View style={styles.orderCard}>
            <View style={styles.orderInfoRow}>
              <Text style={styles.orderNumber}>Order #123456</Text>
              <Text style={styles.orderDate}>02/26/23</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
               <Text style={styles.orderPrice}>$40</Text>
            </View>
            <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download Current Statement</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openSettingsModal}>
            <Image style={styles.icon2} source={require('../../../assets/webp/settingsIcon.webp')} />
          </TouchableOpacity>
        </View>
        </View>
        )}

        <View style={styles.sectionHeader}>
          <Text style={styles.text1}>Deposits and Transfer</Text>
          <TouchableOpacity onPress={() => setShowDepositsAndTransfer(!showDepositsAndTransfer)}>
          <Image style={styles.icon} source={showDepositsAndTransfer ? require('../../../assets/webp/upArrow.webp') : require('../../../assets/webp/downArrow.webp')} />
          </TouchableOpacity>
        </View>
        {showDepositsAndTransfer && (

        <View style={styles.transferSummary}>
      <View style={[styles.transferSummaryRow, styles.borderBottom]}>
        <View style={styles.transferIconContainer}>
        <Image style={styles.transferIcon} source={require('../../../assets/webp/bankIcon.webp')} />
        </View>
        <View style={styles.transferTextContainer}>
          <Text style={styles.transferTitle}>Link Bank Account</Text>
          <Text style={styles.transferSubtitle}>Receive without paying a fee</Text>
          <TouchableOpacity>
          <Image source={require('../../../assets/webp/rightArrow.webp')} style={styles.rightArrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.transferSummaryRow}>
        <View style={styles.transferIconContainer}>
        <Image style={styles.transferIcon} source={require('../../../assets/webp/bankCardIcon.webp')} />
        </View>
        <View style={styles.transferTextContainer}>
          <Text style={styles.transferTitle}>Add Debit Card</Text>
          <Text style={styles.transferSubtitle}>Instant fee: $1.90</Text>
          <TouchableOpacity>
          <Image source={require('../../../assets/webp/rightArrow.webp')} style={styles.rightArrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
        )}

        <View style={styles.paymentContainer}>
          <View style={[styles.schedulePaymentContainer, styles.borderBottom]}>
            <Text style={styles.schedulePaymentTitle}>Schedule Payment</Text>
            <Text style={styles.schedulePaymentSubtitle}>Auto transfers initiated weekly every Monday</Text>
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isScheduledPaymentEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={toggleSwitch}
              value={isScheduledPaymentEnabled}
            />
          </View>

          <View style={styles.fastCashOutContainer}>

            <View style={{backgroundColor:colors.primary,alignItems:"center",borderRadius:8}}>
            <Text style={styles.fastCashOutTitle}>Fast Cash Out</Text>
            <Text style={styles.fastCashOutFee}>Instant fee: $1.90</Text>
           
            <Text style={styles.fastCashOutSubtitle}>Available in minutes to 1 day.</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Modal for Date Range Selection */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        {/* <View style={styles.modalContainer}>
          <View style={styles.modalContent}> */}
             <TouchableOpacity 
          style={styles.modalContainer} 
          activeOpacity={1} 
          onPressOut={() => closeModal(false)}
        >
        <TouchableOpacity 
            style={styles.modalContent} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Date Range</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
        </TouchableOpacity>
        </View>
        <View style={styles.line} />
      
          <ScrollView style={styles.dateRangeList}>
            {earningsData.map((item, index) => (
              <View key={index} style={styles.dateRangeItemContainer}>
                <TouchableOpacity
                  style={[styles.dateRangeItem, selectedDateRange === item.dateRange]} // Change background color for selected item if needed
                  onPress={() => handleDateRangeSelect(index, item.dateRange, item.amount)}
                >
                  <Text style={[styles.dateRangeText, selectedDateRange === item.dateRange && styles.selectedDateRangeItem]}>
                    {item.dateRange}
                  </Text>

                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.dateRangeAmount, selectedDateRange === item.dateRange && styles.selectedDateRangeItem]}>
                    {item.amount}
                  </Text>
                  {selectedDateRange === item.dateRange && (
                    <Image style={styles.tickIcon} source={require('../../../assets/webp/tickIcon.webp')} />
                  )}
                  </View>
                </TouchableOpacity>
                {index < earningsData.length - 1 && <View style={styles.dottedLine2} />}
              </View>
            ))}
          </ScrollView>
            
          {/* </View>
        </View> */}
        </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

             <Modal
        animationType="none"
        transparent={true}
        visible={settingsModalVisible}
        onRequestClose={closeSettingsModal}
      >
        {/* <View style={styles.modalContainer}>
          <View style={styles.modalContent}> */}
             <TouchableOpacity 
          style={styles.modalContainer} 
          activeOpacity={1} 
          onPressOut={() => closeSettingsModal(false)}
        >
        <TouchableOpacity 
            style={styles.modalContent} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Statement by Month</Text>
            <TouchableOpacity onPress={() => setSettingsModalVisible(!settingsModalVisible)}>
              <Image
                source={require('../../../assets/webp/closeIcon.webp')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
      
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Select Month"
            value={`${selectedMonth} ${selectedYear}`}
            />
            <TouchableOpacity  style={styles.iconContainer}>
              <Image
                source={require('../../../assets/webp/calenderIcon.webp')} // Replace with your icon's path
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.yearSelector}>
            <TouchableOpacity onPress={() => handleYearChange(-1)}>
              <Image source={require('../../../assets/webp/rightArrow.webp')} style={styles.leftArrowIcon} />
            </TouchableOpacity>
            <Text style={styles.yearText}>{selectedYear}</Text>
            <TouchableOpacity onPress={() => handleYearChange(1)}>
              <Image source={require('../../../assets/webp/rightArrow.webp')} style={styles.rightArrowIcon2} />
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
                <Text style={[
              styles.monthText,
              selectedMonth === month && styles.selectedMonthText
            ]}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.dottedLine} />
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download</Text>
          </TouchableOpacity>
         </TouchableOpacity>
         </TouchableOpacity>
      </Modal> 

    </View>
  );
}

const styles = StyleSheet.create({
  dateRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: dimensions.paddingLevel3,
  },
  dateRangeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: dimensions.paddingLevel2,
    backgroundColor: colors.white,
  },
  dateRangeText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.secondary,
    marginRight: 5,
  },
  downArrowIcon: {
    width: 12,
    height: 12,
  },
  totalEarnings: {
    fontSize: fontSizes.fontXLarge,
    fontWeight: '700',
    color: colors.black,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: dimensions.paddingLevel4,
  },
  text1: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.black,
  },
  orderNum: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.black,
    right:10
  },
  icon: {
    width: 18,
    height: 18,
  },
  orderSummary: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    margin: dimensions.paddingLevel3,
    marginTop: 0,
  },
  orderSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:5,
    borderColor: "lightgray",
  },
  borderBottom: {
    borderWidth: 1,
    borderColor: "gray",
  },
  orderSummaryText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.black,
    padding: dimensions.paddingLevel3,
    fontWeight: '500',
  },
  orderDetail: {
    padding: dimensions.paddingLevel3,
    marginTop: "-5%"
  },
  orderCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: dimensions.paddingLevel3,
    marginVertical: 7,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  orderNumber: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '700',
    color: colors.black,
  },
  orderDate: {
    fontSize: fontSizes.fontMedium,
    color: colors.secondary,
    marginLeft:12
  },
  orderInfo: {
    fontSize: fontSizes.fontMedium,
    color:colors.secondary,
  },
  orderPrice: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.primary,
  },
  downloadButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop:'5%',
    padding: dimensions.paddingLevel2,
    alignItems: 'center',
    flexGrow: 1,   // Allow the button to grow and take available space
    flexShrink: 1, // Allow the button to shrink if necessary
  },
  downloadButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
  },
  icon2: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginTop:15,
    resizeMode: 'contain',
  },

  paymentContainer: {
    backgroundColor: colors.black,
    borderRadius: 15,
    margin: dimensions.paddingLevel3,
  },
  schedulePaymentContainer: {
    paddingBottom: dimensions.paddingLevel5,
    alignItems:"center",
    padding: dimensions.paddingLevel4,
  },
  schedulePaymentTitle: {
    fontSize: fontSizes.fontXLarge,
    fontWeight: '700',
    color: colors.white,
  },
  schedulePaymentSubtitle: {
    fontSize: fontSizes.fontMidMedium,
    textAlign:"center",
    color: colors.white,
    marginVertical: 15,
  },
  fastCashOutContainer: {
    padding: dimensions.paddingLevel2,
  },
  fastCashOutTitle: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.white,
    marginTop:10
  },
  fastCashOutSubtitle: {
    fontSize: fontSizes.fontMedium,
    color: 'lightgray',
    marginVertical: 5,
    marginBottom:10
  },
  fastCashOutFee: {
    fontSize: fontSizes.fontMedium,
    color: colors.white,
    fontWeight:'400'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: dimensions.paddingLevel2,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   // marginBottom: 20,
    padding:10
  },
  modalTitle: {
    fontSize: fontSizes.fontLarge,
    fontWeight: 'bold',
    marginBottom: 10,
    color:colors.black
  },
  dateRangeList: {
    width: '100%',
    maxHeight: 400,
  },
  dateRangeItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
 
  closeIcon: {
    width: 16,
    height: 16,
  },
  dottedLine2:{
    borderBottomWidth: 1,
   borderColor: 'lightgray',
     borderStyle: 'dashed',  
     marginBottom:5
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom:8
   // flex: 1,
  },
  dateRangeText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.secondary,
    fontWeight:'400'
  },
  dateRangeAmount: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.secondary,
    textAlign:'right',
    right:13,
    fontWeight:'400'
  },
 
  selectedDateRangeItem: {
    color:colors.primary, 
    left:0,
   // right:8,
  },
  tickIcon: {
    width: 13,
    height: 13,
    left:10

  },
  transferSummary: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    margin: dimensions.paddingLevel3,
  },
  transferSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'lightgray',
    padding: dimensions.paddingLevel3,
    position: 'relative',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  transferIconContainer: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: dimensions.paddingLevel3,
  },
  transferIcon: {
    width: 35,
    height: 35,
  },
  transferTextContainer: {
    flex: 1,
   // position: 'relative', // Add relative positioning
    paddingRight: 5, // Add padding to ensure space for the arrow
  },
  rightArrowIcon: {
    position: 'absolute',
    right: 0,
   // top: '50%',
    width: 18,
    height: 18,
    transform: [{ translateY: -30 }], // Center the arrow vertically
  },
  rightArrowIcon2: {
    position: 'absolute',
    right: 0,
    //alignItems:'flex-end',
  //  top: '50%',
    width: 18,
    height: 18,
    transform: [{ translateY: -10 }], // Center the arrow vertically
  },
  leftArrowIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    transform: [{ translateY: -10 },{ scaleX: -1}],

  },
  transferTitle: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
    color: colors.black,
  },
  transferSubtitle: {
    fontSize: fontSizes.fontMedium,
    color: colors.secondary,
  },

  chartContainer: {
    marginTop: 20,
  },
  barChart: {
    height: 200,
  },
  xAxisContainer: {
    marginTop: 0,
    paddingHorizontal: 8,
    position: 'relative',
  },
  xAxis: {
    height: 20,
  },
  dateLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginTop: -6, 
    marginBottom:10
  },
  dateLabelContainer: {
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: fontSizes.fontSmallPlus,
    color: 'black',
    fontWeight:'700'
  },
  yearSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  yearText: {
    fontSize: fontSizes.fontMediumPlus,
    justifyContent:'center',
    alignItems:'center',
    fontWeight: 'bold',
    color:colors.secondary
  },
  monthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  monthItem: {
    width: '25%',
    padding: 13,
    alignItems: 'center',
    marginVertical: 9,

  },
  selectedMonth: {
    backgroundColor:colors.primary,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius:500,
    color:"white",
    width: 55, // Ensure width and height are equal
    height: 53, 
    alignItems:'center'
  },
  selectedMonthText: {
    color:colors.white, // Selected color
  },
  monthText: {
    color:colors.secondary,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginVertical: 20,
    width: '100%',
    color:colors.black
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: '2%',
    marginTop: '10%'
  },

  inputContainer: {
    position: 'relative',
    width: '100%',
  },
 
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }], // Adjust vertically to center the icon
    width: 26,
    height: 26,
  },
 
});




