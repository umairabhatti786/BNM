import React, { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputBox from '../../../../../components/Input';
import usePersistentState from '../../../../../components/usePersistentState';
import { AppStyles } from '../../../../../utils/AppStyle';

const IndividualConfirmation = ({ navigation }) => {
	// const router = useRouter();
	// const scrollViewRef = useRef();

	const [confirmName, setConfirmName] = usePersistentState('confirmName', '');
	const [confirmDate, setConfirmDate] = usePersistentState('confirmDate', '');
	const [errors, setErrors] = useState({});

	useEffect(() => {
		createFormatDate();
	}, []);

	const createFormatDate = () => {
		const newDate = new Date();
		const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
		const day = newDate.getDate().toString().padStart(2, '0');
		const year = newDate.getFullYear();
		setConfirmDate(`${month}\u2013${day}\u2013${year}`);
	};

	const validatePage = () => {
		const newErrors = {};
		let isValid = true;

		if (!confirmName) {
			newErrors.confirmName = 'This field is required.';
			isValid = false;
		}

		setErrors(newErrors);

		return isValid;
	};

	const handleSubmit = () => {
		const isValid = validatePage();

		if (isValid) {
			// router.push('/screens/ThankYou');
			navigation.navigate('ThankYou');
		}
	};

	return (
		<View style={{ backgroundColor: 'white', height: '100%' }}>
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
			<ScrollView style={{ backgroundColor: 'white' }}>
				<View
					style={{
						...AppStyles.margins,
						paddingTop: Object.keys(errors).length > 0 ? 64 : null,
					}}
				>
					<Text style={{ ...AppStyles.screenTitle }}>Confirmation</Text>
					<View>
						<Text style={styles.textSubTitle}>Confirm Full Legal Name</Text>
						<InputBox
							title="Confirm Full Legal Name"
							onChange={setConfirmName}
							state={confirmName}
							stateName={'confirmName'}
							type="default"
							hasError={errors.confirmName ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>Today's Date</Text>
						<View
							// className="border border-gray-300 rounded-lg py-1 px-3 h-[38px] justify-center"
							style={{
								borderWidth: 1,
								borderColor: '#d1d5db',
								borderRadius: 8,
								paddingVertical: 4,
								paddingHorizontal: 12,
								height: 46,
								justifyContent: 'center',
							}}
						>
							<View
								// className="flex flex-row justify-between items-center"
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<Text
									// className="text-sm text-[#CCCCCC] text-[15px]"
									style={{ fontSize: 15, color: '#CCCCCC' }}
								>
									{confirmDate}
								</Text>
							</View>
						</View>
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
							// onPress={() => router.push('/screens/ThankYou')}
							onPress={handleSubmit}
						>
							<Text style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>
								Submit
							</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default IndividualConfirmation;

const styles = StyleSheet.create({
	textSubTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
