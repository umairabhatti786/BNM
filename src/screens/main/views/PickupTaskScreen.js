import React, { useState, useRef  } from 'react';
import {
  View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Switch, TextInput,Pressable
} from 'react-native';
import HeaderComponent from '../../../components/HeaderComponent';
import { colors, dimensions, fontSizes } from '../../../styles/constants';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import CalendarModal from '../../../components/CalenderModal';
import SignatureScreen from 'react-native-signature-canvas';
import moment from 'moment';

export default function PickupTaskScreen({navigation}) {
  const [photoUri, setPhotoUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [textExpanded, setTextExpanded] = useState(false); // State to manage the text expansion
  const [statusModalVisible, setStatusModalVisible] = useState(false); // New state for status modal
  const [status, setStatus] = useState(''); // New state to track selected status
  const [reasons, setReasons] = useState(''); // State for reason input
  const [isDelayedExpanded, setIsDelayedExpanded] = useState(false);
  const [tempStatus, setTempStatus] = useState('');
  const [isFailedExpanded, setIsFailedExpanded] = useState(false);
  const [extraChargeModalVisible, setExtraChargeModalVisible] = useState(false);
  const [extraChargeTip, setExtraChargeTip] = useState(false); // For the switch
  const [extraChargeAmount, setExtraChargeAmount] = useState('');
  const [dateExtension, setDateExtension] = useState('');
  const [description, setDescription] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [dateFrom, setDateFrom] = useState(new Date());
  const [showDateFrom, setShowDateFrom] = useState(false);
  const [dateSelectedFrom, setDateSelectedFrom] = useState(false);
  const [descriptionError, setDescriptionError] = useState('');
  const signatureRef = useRef(null); // Ref for the SignatureScreen

  const [signature, setSignature] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleSave = () => {
    // handle save action here
  };

  const onChangeFromDate = (selectedDate) => {
    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      // Set the time to noon (12:00 PM) to avoid timezone issues
      selectedDate.setHours(12, 0, 0, 0);
      setDateFrom(selectedDate);
  
      // Format date to MM-DD-YYYY and set in the input field
      const formattedDate = formatDate(selectedDate);
      setDateExtension(formattedDate);  // Update the TextInput with the formatted date
  
      setDateSelectedFrom(true); // Set date selected for "From"
    } else {
      console.error('Invalid date:', selectedDate);
    }
    setShowDateFrom(false);
  };
  

  const formatDate = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      date.setDate(date.getDate() + 1); 
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month and ensure it's 2 digits
      const day = date.getDate().toString().padStart(2, '0'); // Get day and ensure it's 2 digits
      const year = date.getFullYear(); // Get full year
      return `${month}/${day}/${year}`; // Return date in MM/DD/YYYY format
    } else {
      return 'Invalid Date';
    }
  };
  
  const handleSubmit = () => {
    if (!description) {
      setDescriptionError('Required field *'); // Show error if description is empty
    } else {
      setDescriptionError(''); // Clear error if description is filled
      setExtraChargeModalVisible(false);
      // Continue with the submission logic
    }
  };

  const handlePhotoUpload = () => {
    setModalVisible(true);
  };

  const selectFromGallery = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setPhotoUri(uri);
        }
        setModalVisible(false);
      }
    }).catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
  };

  const toggleTextExpansion = () => {
    setTextExpanded(!textExpanded);
  };

  const toggleStatusModal = () => {
    setStatusModalVisible(!statusModalVisible);
  };


  const capturePhoto = () => {
    const options = {
      mediaType: 'photo',
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setPhotoUri(uri);
        }
        setModalVisible(false);
      }
    }).catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
  };

  const handleStatusChange = (selectedStatus) => {
    if (tempStatus === selectedStatus) {
      setTempStatus(''); // Turn off the toggle if it's already selected
      setIsDelayedExpanded(false);
      setIsFailedExpanded(false);
      setReasons(''); // Clear reasons when switching status
    } else {
      setTempStatus(selectedStatus);
      if (selectedStatus === 'Delayed') {
        setIsDelayedExpanded(true);
        setIsFailedExpanded(false);
      } else if (selectedStatus === 'Failed') {
        setIsDelayedExpanded(false);
        setIsFailedExpanded(true);
      } else {
        setIsDelayedExpanded(false);
        setIsFailedExpanded(false);
      }
      setReasons(''); // Clear reasons when switching status
    }
  };

  const handleSubmitStatus = () => {
    setStatus(tempStatus); // Set the selected status when the user submits
    toggleStatusModal(); // Close the modal
  };

  const handleDropoffTask = () => {
    navigation.navigate('DropoffTaskScreen');
  };

  const handleSignatureOK = (signatureData) => {
    setSignature(signatureData);
  };

  const handleSignatureClear = () => {
    signatureRef.current.clearSignature();
    setSignature(null);
  };

  const handleSignatureEmpty = () => {
    console.log('Signature pad is empty');
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white, }}>
      <HeaderComponent title="Pick Up Task" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.orderRow}>
          <Text style={styles.titleText}>Order #7162533</Text>
          <Image style={styles.iIcon} source={require('../../../assets/webp/iIcon.webp')} />
        </View>
        <View style={styles.dottedLine} />

        <View style={styles.row2}>
          <Image style={styles.addressIcon} source={require('../../../assets/webp/addressIcon.webp')} />
          <Text style={styles.addressText}>
            10750 Saint Charles Rock{'\n'}
            Road Saint Ann, MO 63074, US
          </Text>
        </View>
        <View style={styles.row3}>
          <View style={styles.row5}>
            <Image style={styles.directionIcon} source={require('../../../assets/webp/directionIcon.webp')} />
            <Text style={{fontSize:fontSizes.fontMidMedium,marginLeft:5}}>Direction</Text>
          </View>
          <View style={styles.row4}>
            <Image style={styles.callIcon} source={require('../../../assets/webp/messageIcon.webp')} />
            <Image style={styles.callIcon} source={require('../../../assets/webp/callIcon.webp')} />
          </View>
        </View>
        <View style={styles.dottedLine} />

        <View style={styles.row2}>
          <Image style={styles.addressIcon} source={require('../../../assets/webp/messageIcon2.webp')} />
          <Text style={styles.subTitleText}>Pick-Up Instruction</Text>
        </View>

         <TouchableOpacity onPress={toggleTextExpansion}>
          <Text style={styles.subText}>
            Come in to front store entrance and say you’re here for “A My Deliver”...
            {textExpanded && '\nPlease also make sure to check the order number with the store representative, and ensure the package is securely sealed before leaving the premises.'}
          </Text>

        </TouchableOpacity>

        <View style={styles.dottedLine} />

        <Text style={styles.repText}>Rep. Name</Text>
        <View style={styles.input}>
          <Text style={styles.nameText}>John Doe</Text>
        </View>
        <View style={styles.dottedLine} />

        <View style={styles.input}>
        {!status && (

            <TouchableOpacity onPress={toggleStatusModal}>
              <View style={styles.statusRow}>
                <Text style={styles.nameText}>Select Pick-Up Status</Text>
                <Image style={styles.arrowIcon} source={require('../../../assets/webp/rightArrow.webp')} />
              </View>
            </TouchableOpacity>

        )}

        {status && (
          <TouchableOpacity onPress={toggleStatusModal} style={styles.selectedStatusContainer}>
            <View style={styles.statusRow}>
              <Switch
                value={true}
                trackColor={{ false: 'lightgray', true: status === 'Success' ? "#0A987F1A" : status === 'Delayed' ? 'lightgray' : '#FF00001A' }}
                thumbColor={status === 'Success' ? colors.primary : status === 'Delayed' ? 'gray' : 'red'}
              />
              <Text style={styles.switchLabel}>{status}</Text>
              <Image style={styles.arrowIcon} source={require('../../../assets/webp/rightArrow.webp')} />
            </View>
          </TouchableOpacity>
        )}
        </View>

                <TouchableOpacity
          style={styles.input}
          onPress={() => setExtraChargeModalVisible(true)}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.nameText}>Extra Charge and Time</Text>
            <Image style={styles.arrowIcon} source={require('../../../assets/webp/rightArrow.webp')} />
          </View>
        </TouchableOpacity>


        <View style={styles.dottedLine} />

        <Text style={styles.repText}>Rep. Signature</Text>
        
      <SignatureScreen
       style={styles.signatureBox}
        ref={signatureRef}
        onOK={handleSignatureOK}
        onEmpty={() => {
          console.log('Signature pad is empty');
        }}
        autoClear={false}
        penColor="black"
        backgroundColor="white"
        strokeWidth={4}
        webStyle={`.m-signature-pad {box-shadow: none; border: none;} 
                   .m-signature-pad--footer {display: none; margin: 0px;} 
                   .m-signature-pad--body {position: absolute; left: 0px; 
                   border: 2px solid #e6e6e6; border-radius: 10px;}`}
        onEnd={handleSave}
        showsVerticalScrollIndicator={false}
      />
      <View style={[styles.row, { marginTop: 4 }]}>

      </View>
      
        <View style={styles.dottedLine} />

        <Text style={styles.repText}>Photo</Text>
        <TouchableOpacity style={styles.photoBox} onPress={handlePhotoUpload}>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.uploadedPhoto} />
          ) : (
            <Text style={styles.photoText}>Click here to upload photo</Text>
          )}
        </TouchableOpacity>
        <View style={styles.dottedLine} />

        <TouchableOpacity style={styles.confirmButton} onPress={() => setConfirmModalVisible(true)}>
          <Text style={styles.confirmButtonText}>Confirm Pick-up</Text>
        </TouchableOpacity>
      </ScrollView>

   
 {/* Status Modal */}
 <Modal
        animationType="none"
        transparent={true}
        visible={statusModalVisible}
        onRequestClose={toggleStatusModal}
      >

            <TouchableOpacity 
          style={styles.centeredView} 
          activeOpacity={1} 
          onPressOut={() => toggleStatusModal(false)}
        >
          <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>

           
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Pick-Up Status Option</Text>
              <TouchableOpacity onPress={toggleStatusModal}>
                <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
              </TouchableOpacity>
            </View>

            <View style={styles.line} />

            {/* Success Switch */}
            <View style={styles.switchContainer}>
              <Switch
                value={tempStatus === 'Success'}
                onValueChange={() => handleStatusChange('Success')}
                trackColor={{ false: 'lightgray', true: colors.success }}
                thumbColor={tempStatus === 'Success' ? colors.primary : 'gray'}
              />
              <Text style={[styles.switchLabel,{color:colors.primary}]}>Success</Text>
            </View>

            {/* Delayed Switch */}
            <View style={styles.switchContainer}>
              <View style={styles.statusRow}>
                <Switch
                  value={tempStatus === 'Delayed'}
                  onValueChange={() => handleStatusChange('Delayed')}
                  trackColor={{ false: 'lightgray', true: 'gray' }}
                  thumbColor={tempStatus === 'Delayed' ? 'lightgray' : 'gray'}
                />
                <Text style={[styles.switchLabel,{color:'lightgray'}]}>Delayed</Text>
                <TouchableOpacity onPress={() => setIsDelayedExpanded(!isDelayedExpanded)}>
                  <Image
                    style={styles.arrowIcon}
                    source={isDelayedExpanded ? require('../../../assets/webp/upArrow.webp') : require('../../../assets/webp/downArrow.webp')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {isDelayedExpanded && (
              <TextInput
                style={styles.reasonInput}
                placeholder="Reasons for delay"
                value={reasons}
                onChangeText={setReasons}
              />
            )}

            {/* Failed Switch */}
            <View style={styles.switchContainer}>
              <View style={styles.statusRow}>
                <Switch
                  value={tempStatus === 'Failed'}
                  onValueChange={() => handleStatusChange('Failed')}
                  trackColor={{ false: 'lightgray', true: '#FF00001A' }}
                  thumbColor={tempStatus === 'Failed' ? 'red' : 'gray'}
                />
                <Text style={[styles.switchLabel,{color:"red"}]}>Failed</Text>
                <TouchableOpacity onPress={() => setIsFailedExpanded(!isFailedExpanded)}>
                  <Image
                    style={styles.arrowIcon}
                    source={isFailedExpanded ? require('../../../assets/webp/upArrow.webp') : require('../../../assets/webp/downArrow.webp')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {isFailedExpanded && (
              <TextInput
                style={styles.reasonInput}
                placeholder="Reasons for failure"
                value={reasons}
                onChangeText={setReasons}
              />
            )}

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitStatus}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

        </TouchableOpacity>
        </TouchableOpacity>
      </Modal>


            <Modal
        animationType="none"
        transparent={true}
        visible={extraChargeModalVisible}
        onRequestClose={() => setExtraChargeModalVisible(!extraChargeModalVisible)}
      >

        <TouchableOpacity 
          style={styles.centeredView} 
          activeOpacity={1} 
          onPressOut={() => setExtraChargeModalVisible(false)}
        >
          <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>
          
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Request</Text>
              <TouchableOpacity onPress={() => setExtraChargeModalVisible(!extraChargeModalVisible)}>
                <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
              </TouchableOpacity>
            </View>

      <View style={styles.line} />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Extra Charge/Tip</Text>
        <Switch
          value={extraChargeTip}
          onValueChange={setExtraChargeTip}
          trackColor={{ false: 'lightgray', true:  colors.success }}
          thumbColor={extraChargeTip ? colors.primary : 'gray'}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="$"
        keyboardType="numeric"
        value={extraChargeAmount}
        onChangeText={setExtraChargeAmount}
        editable={extraChargeTip} 
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Date Extension</Text>
      
         <Switch
    value={!!dateExtension}
    onValueChange={() => 
      setDateExtension(dateExtension ? '' : moment().add(1, 'days').format('MM/DD/YYYY'))
    }
    trackColor={{ false: 'lightgray', true: colors.success }}
    thumbColor={dateExtension ? colors.primary : 'gray'}
  />
      </View>

<Text style={styles.switchLabel}>Extra Charge/Tip</Text>
{dateExtension && (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input2}
      placeholder="MM-DD-YYYY"
      value={dateExtension || ''}
      onChangeText={setDateExtension}
    />
    <TouchableOpacity style={styles.iconContainer} onPress={() => setShowDateFrom(true)}>
      <Image
        source={require('../../../assets/webp/calenderIcon.webp')} // Replace with your icon's path
        style={styles.icon2}
      />
    </TouchableOpacity>
  </View>
)}

<CalendarModal
  visible={showDateFrom}
  onClose={() => setShowDateFrom(false)}
  onSelectDate={(selectedDate) => {
    onChangeFromDate(selectedDate); // Ensures the date is formatted and handled correctly
    setShowDateFrom(false);
  }}
  selectedDate={dateFrom} // This will show the selected date when the modal opens
/>

      <Text style={{fontSize: fontSizes.fontMediumPlus, padding: dimensions.paddingLevel3,color:colors.black,fontWeight:'600',}}>Description</Text>
      <TextInput
        style={styles.reasonInput}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

       {descriptionError ? <Text style={styles.errorText}>{descriptionError}</Text> : null}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setExtraChargeModalVisible(false)}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

  </TouchableOpacity>
  </TouchableOpacity>
</Modal>

          <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >

        <TouchableOpacity 
          style={styles.centeredView} 
          activeOpacity={1} 
          onPressOut={() => setModalVisible(false)}
        >
          <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>

      <View style={styles.modalHeader}>
        <Text style={styles.modalText}>Upload Delivery Photo</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.closeIcon} source={require('../../../assets/webp/closeIcon.webp')} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={{justifyContent:'center'}}>
      <TouchableOpacity style={styles.modalOption} onPress={selectFromGallery}>
        <Image style={styles.icon} source={require('../../../assets/webp/galleryIcon.webp')} />
        <Text style={styles.textStyle}>Upload From Photos</Text>
      </TouchableOpacity>
      
      <View style={styles.dottedLine2} />
      <TouchableOpacity style={styles.modalOption} onPress={capturePhoto}>
        <Image style={styles.icon} source={require('../../../assets/webp/cameraIcon.webp')} />
        <Text style={styles.textStyle}>Capture Photo</Text>
      </TouchableOpacity>
      </View>

  </TouchableOpacity>
  </TouchableOpacity>
</Modal>

<Modal
  animationType="none"
  transparent={true}
  visible={confirmModalVisible}
  onRequestClose={() => setConfirmModalVisible(!confirmModalVisible)}
>

        <TouchableOpacity 
          style={styles.centeredView} 
          activeOpacity={1} 
          onPressOut={() => setConfirmModalVisible(false)}
        >
          <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>

      <Text style={styles.modalText2}>Do you want to drop-off using Route manager?</Text>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
      
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            // Add your confirm pick-up logic here
            setConfirmModalVisible(false);
          }}
        >
          <Text style={styles.submitButtonText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleDropoffTask}
        >
          <Text style={styles.cancelButtonText}>No Drop-Off Now</Text>
        </TouchableOpacity>

      </View>
  </TouchableOpacity>
  </TouchableOpacity>
</Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    padding: dimensions.paddingLevel3,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  titleText: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.black,
  },
  iIcon: {
    width: 18,
    height: 18,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: 'lightgray',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '5%',
  },
  addressText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '400',
    color: colors.black,
    marginLeft: 15,
    lineHeight: 24,
  },
  addressIcon: {
    width: 28,
    height: 28,
  },
    arrowIcon: {
    width: 17,
    height: 17,
    justifyContent:'center'
  },
  callIcon: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '7%',
  },
  row4: {
    flexDirection: 'row',
  },
  row5: {
    flexDirection: 'row',
    height: dimensions.heightLevel3,
    width: dimensions.widthLevel14,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },
  directionIcon: {
    width: 20,
    height: 20,
  },
  subTitleText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
    marginLeft: 15,
  },
  subText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '400',
    color: colors.secondary,
    marginLeft: '11%',
    margin: 10,
    lineHeight: 24,
  },
  repText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
    marginTop: '2%',
  },
  nameText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
    color: colors.black,
  },
  input: {
    height: dimensions.heightLevel4,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: dimensions.paddingLevel2,
    marginTop: '5%',
    marginBottom: 5,
   // margin:10,
    justifyContent: 'center',
  },
  signatureBox: {
    height: 180,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
  },
  clearSignatureText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 5,
  },
  photoBox: {
    height: 180,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  photoText: {
    color: 'lightgray',
    fontSize: fontSizes.fontMediumPlus,
  },
  uploadedPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
  },

  modalView: {
   // margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 320,
    padding: dimensions.paddingLevel1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'center'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   // marginBottom: 20,
    padding:20
  },
  modalText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color:colors.black,
    
  },
  modalText2: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '500',
    color:colors.black,
    paddingHorizontal:15,
    paddingTop:10
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:dimensions.paddingLevel3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dottedLine2:{
    borderBottomWidth: 1,
   borderColor: 'lightgray',
     borderStyle: 'dashed',
  },

  line: {
    height: 1,
    backgroundColor: 'lightgray',
   // flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  statusModalView: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: dimensions.widthLevel4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  closeIcon: {
    width: 15,
    height: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align the text and arrow to opposite ends
    marginBottom: 15,
    padding:dimensions.paddingLevel1,
    marginTop:2
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align the switch and text to the left, arrow to the right
  },
  switchLabel: {
    fontSize: fontSizes.fontMediumPlus,
    marginLeft: 10,
    fontWeight:'700',
    flex: 1, // Take up remaining space between switch and arrow
   
  },
  arrowIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  reasonInput: {
    height: dimensions.heightLevel9,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    paddingHorizontal:25,
    margin:10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor:"lightgray",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal:20,
    margin:10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '500',
  },
  cancelButtonText: {
    color: colors.secondary,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '500',
  },
  extraChargeModalView: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 320,
    padding: dimensions.paddingLevel3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input2: {
    flex: 1, // Take up all available space
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 5, // Adjust padding as needed
  },
  icon2: {
    width: 20,
    height: 20, // Adjust size as needed
  },
  errorText: {
    color: 'red',
    margin: 5,
    fontSize: fontSizes.fontMidMedium,
    marginLeft: 10,
  },
  
});


