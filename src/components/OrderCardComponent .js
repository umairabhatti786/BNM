import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, dimensions, fontSizes } from '../styles/constants';

const OrderCardComponent = ({ order }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.orderNumber}>Order #{order.number}</Text>
        <Text style={styles.date}>{order.date}</Text>
        <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
          <Text style={[styles.statusText, { color: order.textColor }]}>{order.status}</Text>
        </View>
      </View>
      <View style={styles.cardMidTitle}>
        <View style={styles.detailsText}>
          <Text style={styles.text3}>120 ml • </Text>
          <Text style={styles.text3}>1 hr 12 min • </Text>
          <Text style={styles.text3}>Delivery</Text>
        </View>
        <TouchableOpacity onPress={toggleDetails}>
          <Image
            source={showDetails ? require('../assets/webp/upArrow.webp') : require('../assets/webp/downArrow.webp')}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>
      </View>
      {showDetails && (
        <View style={styles.cardBody}>
          <View style={styles.line} />
          <View style={styles.userInfo}>
            <Image source={order.userImage} style={styles.image} />
            <Text style={styles.username}>{order.username}</Text>
            <Image style={styles.groupIcon} source={require('../assets/webp/GIcon.webp')} />
          </View>
          <View style={styles.orderDetails}>
            <View style={styles.line} />
            <View style={styles.detailRow}>
              <Text style={styles.text1}>Type</Text>
              <Text style={styles.text2}>{order.type}</Text>
            </View>
            <View style={styles.dottedLine} />
            <View style={styles.detailRow}>
              <Text style={styles.text1}>Category</Text>
              <Text style={styles.text2}>{order.category}</Text>
            </View>
            <View style={styles.dottedLine} />
            <View style={styles.detailRow}>
              <Text style={styles.text1}>From</Text>
              <Text style={styles.text2}>{order.from}</Text>
            </View>
            <View style={styles.dottedLine} />
            <View style={styles.detailRow}>
              <Text style={styles.text1}>To</Text>
              <Text style={styles.text2}>{order.to}</Text>
            </View>
            <View style={styles.dottedLine} />

            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
             <View style={styles.detailRow}>
               <Text style={styles.text3}>Total Distance: </Text>
               <Text style={styles.text3}>{order.distance}</Text>
             </View>
           

             <View style={styles.detailRow}>
               <Text style={styles.text3}>Total Time: </Text>
               <Text style={styles.text3}>{order.time}</Text>
             </View>
             </View>

            <View style={styles.lineContainer}>
              <View style={styles.line} />
              <TouchableOpacity onPress={toggleExpand} style={styles.arrowButton}>
                <Image
                  source={isExpanded ? require('../assets/webp/upArrow.webp') : require('../assets/webp/downArrow.webp')}
                  style={styles.icon3}
                />
              </TouchableOpacity>
            </View>

            {isExpanded && (
              <View style={styles.expandedSection}>
              
                {/* Additional sample data */}
                <View style={styles.sampleData}>
                  <Text style={styles.text1}>Additional Info:</Text>
                  <Text style={styles.text2}>{order.additionalInfo}</Text>
                </View>
                <View style={styles.line} />
              </View>
            )}

           
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={styles.detailRow}>
                <Text style={styles.text1}>Cost: </Text>
                <Text style={styles.text2}>${order.cost}</Text>
              </View>
              <View style={styles.dottedLine} />
              <View style={styles.detailRow}>
                <Text style={styles.text1}>Extra Charge/Tip: </Text>
                <Text style={styles.text2}>${order.extraCharge}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.text1}>Total Cost: </Text>
              <Text style={styles.text2}>${order.totalCost}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: dimensions.paddingLevel3,
    marginVertical: dimensions.paddingLevel2,
    marginHorizontal: '5%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderNumber: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: 'bold',
    color: colors.black,
  },
  image: {
    width: 60,
    height: 60,
  },
  date: {
    fontSize: fontSizes.fontMedium,
    color: colors.black,
  },
  statusBadge: {
    paddingHorizontal: dimensions.paddingLevel2,
    paddingVertical: dimensions.paddingLevel1,
    borderRadius: 5,
  },
  statusText: {
    fontSize: fontSizes.fontMedium,
    fontWeight: '700',
  },
  cardMidTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  detailsText: {
    flexDirection: 'row',
    color: colors.primary,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  cardBody: {
    marginTop: dimensions.paddingLevel1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    flex: 1,
    marginLeft: dimensions.paddingLevel2,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: 'bold',
    color: colors.black,
  },
  groupIcon: {
    width: 22,
    height: 35,
  },
  orderDetails: {
    // marginTop: dimensions.paddingLevel,
  },
  text1: {
    color: colors.secondary,
    fontSize: fontSizes.fontMidMedium,
  },
  text2: {
    color: colors.black,
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '500',
  },
  text3: {
    color: colors.secondary,
    fontSize: fontSizes.fontMedium,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  downloadButton: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    padding: dimensions.paddingLevel2,
    alignItems: 'center',
    marginTop: dimensions.paddingLevel4,
  },
  downloadText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10%',
    position: 'relative',
  },
  arrowButton: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -15 }],
  },
  icon3: {
    width: 14,
    height: 14,
  },
  expandedSection: {
    marginTop: 10,
  },
  sampleData: {
    marginVertical: 10,
  },
});

export default OrderCardComponent;
