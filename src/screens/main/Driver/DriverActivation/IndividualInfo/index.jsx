import Checkbox from 'expo-checkbox';

import React, { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputBox from '../../../../../components/Input';
import usePersistentState from '../../../../../components/usePersistentState';
import { AppStyles } from '../../../../../utils/AppStyle';

const IndividualInfo = ({ navigation }) => {
	// const router = useRouter();
	const scrollViewRef = useRef();

	const [errors, setErrors] = useState({});

	const [fullLegalName, setFullLegalName] = usePersistentState(
		'fullLegalName',
		''
	);

	const [dotNumber, setDotNumber] = usePersistentState('dotNumber', '');

	const [mcNumber, setMCNumber] = usePersistentState('mcNumber', '');

	const [termsChecked, setTermsChecked] = usePersistentState(
		'termsChecked',
		false
	);

	const [canCheck, setCanCheck] = usePersistentState('canCheck', false);

	const handleScroll = (event) => {
		const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
		if (layoutMeasurement.height + contentOffset.y + 1 >= contentSize.height) {
			setCanCheck(true);
		}
	};

	const removeKey = () => {
		const newState = { ...errors };
		delete newState['termsChecked'];
		setErrors(newState);
	};

	const scrollToTop = () => {
		scrollViewRef.current.scrollTo({ y: 0, animated: true });
	};

	const validatePage = () => {
		const newErrors = {};

		let isValid = true;

		if (!fullLegalName) {
			newErrors.fullLegalName = 'This field is required.';
			isValid = false;
		}

		if (!dotNumber) {
			newErrors.dotNumber = 'This field is required.';
			isValid = false;
		}

		if (!mcNumber) {
			newErrors.mcNumber = 'This field is required.';
			isValid = false;
		}

		if (!termsChecked) {
			newErrors.termsChecked = 'This field is required.';
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

		if (isValid) {
			// router.push('/screens/IndividualDisclosure');
			navigation.navigate('IndividualDisclosure');
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
			<ScrollView ref={scrollViewRef} nestedScrollEnabled>
				<View
					style={{
						...AppStyles.margins,
						paddingTop: Object.keys(errors).length > 0 ? 64 : null,
					}}
				>
					<View>
						<Text style={styles.textSubTitle}>Full Legal Name</Text>
						<InputBox
							title="Full Legal Name"
							onChange={setFullLegalName}
							state={fullLegalName}
							stateName="fullLegalName"
							type="default"
							hasError={errors.fullLegalName ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>US DOT Number?</Text>
						<InputBox
							title="US DOT Number"
							onChange={setDotNumber}
							state={dotNumber}
							stateName="dotNumber"
							type="default"
							hasError={errors.dotNumber ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
						<Text style={{ fontSize: 14, marginTop: 4, color: '#4B5563' }}>
							If not applicable, please enter 'n/a' in the field.
						</Text>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubTitle}>MC Number?</Text>
						<InputBox
							title="MC Number"
							onChange={setMCNumber}
							state={mcNumber}
							stateName="mcNumber"
							type="default"
							hasError={errors.mcNumber ? true : false}
							errors={errors}
							setErrors={setErrors}
						/>
						<Text
							style={{
								fontSize: 14,
								marginTop: 4,
								color: '#4B5563',
								marginBottom: 8,
							}}
						>
							If not applicable, please enter 'n/a' in the field.
						</Text>
					</View>

					<View
						style={{
							borderStyle: 'dashed',
							borderBottomWidth: 1,
							borderBottomColor: '#d1d5db',
							marginTop: 12,
						}}
					/>

					<Text style={{ fontSize: 14, marginTop: 20, fontWeight: 500 }}>
						Please, read the entire USDOT and MC number requirements to proceed.
						For more information, visit the FMCSA website here.
					</Text>

					<View
						// className={`border rounded-lg max-h-[155px] mt-3 ${
						// 	errors.termsChecked ? 'border-red-600' : 'border-gray-400'
						// }`}
						style={{
							borderWidth: 1,
							borderRadius: 8,
							maxHeight: 155,
							marginTop: 12,
							borderColor: errors.termsChecked ? 'red' : '#9CA3AF',
						}}
					>
						<ScrollView onScroll={handleScroll} nestedScrollEnabled>
							<Text
								style={{
									padding: 8,
									fontSize: 15,
									fontWeight: 400,
									color: '#666666',
									lineHeight: 22,
								}}
							>
								US DOT: Required if your vehicles are used in interstate
								commerce and meet certain criteria, such as having a gross
								vehicle weight rating (GVWR) or gross combination weight rating
								(GCWR) of 10,001 pounds or more, transporting hazardous
								materials in quantities requiring placarding, or transporting
								more than 8 passengers (including the driver) for compensation.
								MC: Required, if your business operates as a for-hire carrier
								transporting regulated commodities across state lines, you
								typically need in addition to a US DOT number. ****************
							</Text>
						</ScrollView>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 12 }}>
						<Checkbox
							value={termsChecked}
							// onValueChange={setTermsChecked}
							onValueChange={() => {
								if (errors.termsChecked) {
									removeKey();
								}
								setTermsChecked(!termsChecked);
							}}
							color={`${errors.termsChecked ? 'red' : ''}`}
							// className="rounded-md border"
							style={{ borderRadius: 6, borderWidth: 1 }}
							disabled={!canCheck}
						/>
						<Text
							style={{
								fontSize: 14,
								fontWeight: 400,
								marginLeft: 8,
								color: canCheck ? '#666666' : '#d1d5db',
							}}
						>
							I confirm that I meet the US-DOT and MC numbers requirements and
							agree to abide by the terms and conditions
						</Text>
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
							// onPress={() => {
							// 	activeSwitch !== null
							// 		? console.log(activeSwitch)
							// 		: console.log('None');
							// }}
							// onPress={() => router.push('/screens/Identification')}
							onPress={() => {
								// if (termsChecked) {
								// router.push('/screens/IndividualDisclosure');
								// }
								handleSubmit();
							}}
						>
							<Text style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>
								Next
							</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default IndividualInfo;

const styles = StyleSheet.create({
	textSubTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
