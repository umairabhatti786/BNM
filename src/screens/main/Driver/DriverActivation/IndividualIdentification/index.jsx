import React, { useRef, useState } from 'react';
import {
	FlatList,
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import Modal from 'react-native-modal';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import { icon } from '../../../../../assets/png/icons';
import AutoInput from '../../../../../components/AutoInput';
// import CalendarBox from '../../components/CalendarBox';
// import CalendarPicker from '../../components/CalendarPicker';
import InputBox from '../../../../../components/Input';
import UploadImage from '../../../../../components/UploadImage';
import usePersistentState from '../../../../../components/usePersistentState';
import { AppStyles } from '../../../../../utils/AppStyle';
// import CustomCalendar from '../../components/CustomCalendar';
// import CustomCalendarPicker from '../../components/CustomCalendarPicker';
import CustomCalendar from '../../../../../components/CustomCalendar';
import CustomCalendarPicker from '../../../../../components/CustomCalendarPicker';

const IndividualIdentification = ({ navigation }) => {
	// const router = useRouter();
	const scrollViewRef = useRef();

	const mask = [
		/\d/,
		/\d/,
		/\d/,
		`\u2013`,
		/\d/,
		/\d/,
		`\u2013`,
		/\d/,
		/\d/,
		/\d/,
		/\d/,
	];

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const [errors, setErrors] = useState({});
	//   const [isCalendarVisible, setCalendarVisible] = useState(false);

	const [SSN, setSSN] = usePersistentState('SSN', '');

	const [DL, setDL] = usePersistentState('DL', '');

	const [insurance, setInsurance] = usePersistentState('insurance', '');

	// const [policyDate, setPolicyDate] = usePersistentState('policyDate', '');

	const [DLState, setDLState] = usePersistentState('DLState', null);

	const [frontDLImage, setFrontDLImage] = usePersistentState(
		'frontDLImage',
		null
	);

	// const [date, setDate] = useState('Choose Date');
	const [date, setDate] = usePersistentState('policyDate', 'Choose Date');

	const [backDLImage, setBackDLImage] = usePersistentState('backDLImage', null);

	const [policyImage, setPolicyImage] = usePersistentState('policyImage', null);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleStateSelect = (state) => {
		setDLState(state);
		toggleModal();
	};

	const handleConfirm = (date) => {
		// setPolicyDate(date);
		// console.log(date);
		createFormatDate(date);
		hideCalendar();
	};

	const createFormatDate = (date) => {
		const newDate = new Date(date);
		const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
		const day = newDate.getDate().toString().padStart(2, '0');
		const year = newDate.getFullYear();
		setPolicyDate(`${month}\u2013${day}\u2013${year}`);
	};

	// const showCalendar = () => {
	// 	setIsCalendarVisible(true);
	// };

	// const hideCalendar = () => {
	// 	setIsCalendarVisible(false);
	// };

	const removeKey = (key) => {
		const newState = { ...errors };
		// delete newState['isChecked'];
		delete newState[key];

		setErrors(newState);
	};

	const scrollToTop = () => {
		scrollViewRef.current.scrollTo({ y: 0, animated: true });
	};

	const validatePage = () => {
		const newErrors = {};

		let isValid = true;

		if (!SSN || SSN.length !== 11) {
			newErrors.SSN = 'This field is required.';
			isValid = false;
		}

		if (!DL) {
			newErrors.DL = 'This field is required.';
			isValid = false;
		}

		if (!insurance) {
			newErrors.insurance = 'This field is required.';
			isValid = false;
		}

		if (!DLState) {
			newErrors.DLState = 'This field is required.';
			isValid = false;
		}

		// if (!policyDate) {
		// 	newErrors.policyDate = 'This field is required.';
		// 	isValid = false;
		// }
		if (!date || date == 'Choose Date') {
			newErrors.date = 'This field is required.';
			isValid = false;
		}
		if (!frontDLImage) {
			newErrors.frontDLImage = 'This field is required.';
			isValid = false;
		}

		if (!backDLImage) {
			newErrors.backDLImage = 'This field is required.';
			isValid = false;
		}

		if (!policyImage) {
			newErrors.policyImage = 'This field is required.';
			isValid = false;
		}

		setErrors(newErrors);

		return isValid;
	};

	const handleSubmit = () => {
		const isValid = validatePage();

		if (!isValid) {
			scrollToTop();
		}

		// console.log(policyDate);

		if (isValid) {
			// router.push('/screens/IndividualConfirmation');
			navigation.navigate('IndividualConfirmation');
		}
	};

	const states = [
		'AL',
		'AK',
		'AZ',
		'AR',
		'CA',
		'CO',
		'CT',
		'DE',
		'FL',
		'GA',
		'HI',
		'ID',
		'IL',
		'IN',
		'IA',
		'KS',
		'KY',
		'LA',
		'ME',
		'MD',
		'MA',
		'MI',
		'MN',
		'MS',
		'MO',
		'MT',
		'NE',
		'NV',
		'NH',
		'NJ',
		'NM',
		'NY',
		'NC',
		'ND',
		'OH',
		'OK',
		'OR',
		'PA',
		'RI',
		'SC',
		'SD',
		'TN',
		'TX',
		'UT',
		'VT',
		'VA',
		'WA',
		'WV',
		'WI',
		'WY',
	];

	return (
		<View>
			{Object.keys(errors).length > 0 && (
				<View
					// className="bg-red-600 z-10 absolute left-0 right-0"
					style={{
						backgroundColor: 'red',
						zIndex: 10,
						position: 'absolute',
						left: 0,
						right: 0,
					}}
				>
					<View
						// className="my-3 mx-5"
						style={{ marginVertical: 12, marginHorizontal: 20 }}
					>
						<Text
							// className="text-white text-base font-bold"
							style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
						>
							There are{' '}
							<Text
								// className="underline"
								style={{ textDecorationLine: 'underline' }}
							>
								{Object.keys(errors).length}
							</Text>{' '}
							errors on this page. Please fill out all fields before moving on.
						</Text>
					</View>
				</View>
			)}
			<ScrollView ref={scrollViewRef} style={{ backgroundColor: 'white' }}>
				<View
					style={{
						...AppStyles.margins,
						paddingTop: Object.keys(errors).length > 0 ? 64 : null,
					}}
				>
					<Text style={{ ...AppStyles.screenTitle }}>
						Personal Identification
					</Text>
					<View>
						<Text style={styles.textSubTitle}>SSN</Text>
						{/* <InputBox
						title="##-#######"
						onChange={setSSN}
						state={SSN}
						type="numeric"
					/> */}
						<AutoInput
							setState={setSSN}
							state={SSN}
							stateName={'SSN'}
							title={`###\u2013##\u2013####`}
							mask={mask}
							hasError={errors.SSN ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>Driver License (DL) Number</Text>
						<InputBox
							title="Driver License (DL) Number"
							onChange={setDL}
							state={DL}
							stateName={'DL'}
							type="default"
							hasError={errors.DL ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>Issuing State</Text>
						<TouchableOpacity
							// className={`border rounded-lg py-2 px-3 text-sm ${
							// 	errors.DLState ? 'border-red-600' : 'border-gray-300'
							// }`}
							style={{
								borderWidth: 1,
								borderRadius: 8,
								paddingHorizontal: 12,
								paddingVertical: 8,
								height: 46,
								justifyContent: 'center',
								borderColor: errors.DLState ? 'red' : '#d1d5db',
							}}
							onPress={toggleModal}
						>
							<Text
								// className={` text-sm ${
								// 	DLState ? 'text-black' : 'text-[#616161]'
								// }`}
								style={{ fontSize: 14, color: DLState ? 'black' : '#616161' }}
							>
								{DLState ? DLState : 'Please Select'}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>Take Photo of DL front side</Text>
						{/* <TouchableOpacity className="border border-gray-300 rounded-lg h-36 items-center justify-center">
						<Text className="text-base font-normal text-[#AAAAAA]">
							Click here to upload image
						</Text>
						<UploadImage setImage={setFrontDLImage} image={frontDLImage} />
					</TouchableOpacity> */}
						<UploadImage
							setImage={setFrontDLImage}
							image={frontDLImage}
							stateName={'frontDLImage'}
							hasError={errors.frontDLImage ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>
							Take Photo of DL reverse side
						</Text>
						{/* <TouchableOpacity className="border border-gray-300 rounded-lg h-36 items-center justify-center">
						<Text className="text-base font-normal text-[#AAAAAA]">
							Click here to upload image
						</Text>
						<UploadImage />
					</TouchableOpacity> */}
						<UploadImage
							setImage={setBackDLImage}
							image={backDLImage}
							stateName={'backDLImage'}
							hasError={errors.backDLImage ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>Auto Insurance Provider</Text>
						<InputBox
							title="Auto Insurance Provider"
							onChange={setInsurance}
							state={insurance}
							stateName={'insurance'}
							type="default"
							hasError={errors.insurance ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>

					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>Policy Expiration Date</Text>
						{/* <CalendarBox
							// setDate={setPolicyDate}
							date={policyDate}
							setIsCalendarVisible={setIsCalendarVisible}
							isCalendarVisible={isCalendarVisible}
							hasError={errors.policyDate ? true : false}
						/> */}
						<CustomCalendarPicker
							width={'100%'}
							text={date}
							onPress={() => {
								if (errors.date) {
									removeKey('date');
								}
								setIsCalendarVisible(true);
							}}
							hasError={errors.date ? true : false}
						/>
						{/* <CalendarPicker
							width={'100%'}
							text={date}
							onPress={() => setIsCalendarVisible(true)}
						/> */}
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>
							Upload Insurance Policy Declaration page
						</Text>
						{/* <TouchableOpacity className="border border-gray-300 rounded-lg h-36 items-center justify-center">
						<Text className="text-base font-normal text-[#AAAAAA]">
							Click here to upload image
						</Text>
						<UploadImage />
					</TouchableOpacity> */}
						<UploadImage
							setImage={setPolicyImage}
							image={policyImage}
							stateName={'policyImage'}
							hasError={errors.policyImage ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>

					<View
						style={{
							borderStyle: 'dashed',
							borderBottomWidth: 1,
							borderBottomColor: '#d1d5db',
							marginTop: 20,
						}}
					/>

					<View style={{ marginVertical: 20 }}>
						<Pressable
							style={{
								backgroundColor: '#01AD8F',
								padding: 8,
								borderRadius: 12,
								alignItems: 'center',
							}}
							// onPress={() => router.push('/screens/IndividualConfirmation')}
							// onPress={() => navigation.navigate('IndividualConfirmation')}

							onPress={handleSubmit}
						>
							<Text style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>
								Next
							</Text>
						</Pressable>
					</View>

					{/* <DateTimePicker
						isVisible={isCalendarVisible}
						mode="date"
						onConfirm={handleConfirm}
						onCancel={hideCalendar}
					/> */}

					<CustomCalendar
						modalVisible={isCalendarVisible}
						date={date}
						setDate={setDate}
						setModalVisible={setIsCalendarVisible}
					/>

					<Modal
						isVisible={isModalVisible}
						onBackdropPress={() => setIsModalVisible(false)}
					>
						<View
							// className="bg-white p-1 rounded-lg justify-center items-center w-11/12 h-[91%] self-center"
							style={{
								backgroundColor: 'white',
								padding: 4,
								borderRadius: 12,
								justifyContent: 'center',
								alignItems: 'center',
								width: '92%',
								height: '91%',
								alignSelf: 'center',
							}}
						>
							<View style={{ flexDirection: 'row' }}>
								<Text>Select State</Text>
							</View>

							<FlatList
								style={{ width: '100%' }}
								data={states}
								keyExtractor={(item) => item}
								renderItem={({ item }) => (
									<View style={{ marginHorizontal: 20 }}>
										<TouchableOpacity
											onPress={() => {
												if (errors.DLState) {
													removeKey('DLState');
												}
												handleStateSelect(item);
											}}
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												justifyContent: 'space-between',
											}}
										>
											<Text
												style={{
													paddingVertical: 16,
													fontSize: 16,
													fontWeight: 500,
													color: DLState === item ? '#0a987f' : '#6b7280',
												}}
											>
												{item}
											</Text>
											{DLState === item ? (
												// <FontAwesome6 name="check" size={20} color="#0a987f" />
												<Image
													source={icon.tick}
													style={{ width: 20, height: 20 }}
													tintColor={'#0a987f'}
													resizeMode="contain"
												/>
											) : null}
										</TouchableOpacity>
										<View
											style={{
												borderStyle: 'dashed',
												borderBottomWidth: 1,
												borderBottomColor: '#d1d5db',
											}}
										/>
									</View>
								)}
								initialNumToRender={14}
								windowSize={5}
							/>
						</View>
					</Modal>
				</View>
			</ScrollView>
		</View>
	);
};

export default IndividualIdentification;

const styles = StyleSheet.create({
	textSubTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
