import React, { useEffect, useRef, useState } from 'react';
import {
	ActivityIndicator,
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';
// import { icon } from '../../../../assets/png/icons';
import { icon } from '../../../../../assets/png/icons';
// import InputBox from '../../../../components/Input';
import {
	clearSignature,
	loadSignature,
	saveSignature,
} from '../../../../../components/AsyncFuncs';
import InputBox from '../../../../../components/Input';
// import SignatureArea from '../../components/SignatureArea';
import usePersistentState from '../../../../../components/usePersistentState';
import { AppStyles } from '../../../../../utils/AppStyle';

const BusinessDisclosure = ({ navigation }) => {
	const ref = useRef();
	const scrollViewRef = useRef();

	// const router = useRouter();
	// const navigation = useNavigation();

	const [scrollEnabled, setScrollEnabled] = useState(true);

	const [fullBusinessNameTwo, setFullBusinessNameTwo] = usePersistentState(
		'fullBusinessNameTwo',
		''
	);

	const [isLoading, setIsLoading] = useState(true);

	const [signature, setSignature] = useState('');

	const [errors, setErrors] = useState({});

	const [resetRender, setResetRender] = useState(0);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			// Reset the loading state when the screen comes into focus
			loadSignatureData();
			// Simulate a loading time
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500); // Adjust time as needed
		});

		return unsubscribe;
	}, [navigation]);

	const loadSignatureData = async () => {
		try {
			setSignature(null);
			const savedSignature = await loadSignature();
			// console.log('SIGNATURE LOADED');
			setSignature(savedSignature);
			// return savedSignature;
		} catch (error) {
			console.log(error);
		}
	};

	const retrieveSignature = async () => {
		try {
			const retrievedSignature = await loadSignature();
			// console.log(retrievedSignature);
			return retrievedSignature;
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignature = async (signatureData) => {
		if (errors.signatureInStorage) {
			removeKey();
		}
		await saveSignature(signatureData);
	};

	const handleClear = async () => {
		ref.current.clearSignature();
		// setSignatureURI('');
		setSignature(null);
		setResetRender((prevKey) => prevKey + 1);
		await clearSignature();
	};

	const handleEmpty = () => {
		// console.log('what');
		setSignature(null);
		// setSignatureURI('');
	};

	const handleSave = async () => {
		// Call readSignature to get the signature data URL
		await ref.current.readSignature();
	};

	const scrollToTop = () => {
		scrollViewRef.current.scrollTo({ y: 0, animated: true });
	};

	const removeKey = () => {
		const newState = { ...errors };
		delete newState['signatureInStorage'];
		setErrors(newState);
	};

	const validatePage = async () => {
		const newErrors = {};
		let isValid = true;

		if (!fullBusinessNameTwo) {
			newErrors.fullBusinessNameTwo = 'This field is required.';
			isValid = false;
		}

		const signatureInStorage = await retrieveSignature();

		if (!signatureInStorage) {
			newErrors.signatureInStorage = 'This field is required.';
			isValid = false;
		}

		setErrors(newErrors);
		setResetRender((prevKey) => prevKey + 1);

		return isValid;
	};

	const handleSubmit = async () => {
		// await handleSave();

		// const signatureInStorage = await loadSignatureData();

		// console.log(signatureInStorage);

		// retrieveSignature();

		const isValid = await validatePage();

		// if (!isValid) {
		// 	scrollToTop();
		// }

		if (isValid) {
			// router.push('/screens/BusinessIdentification');
			navigation.navigate('BusinessIdentification');
		}
		// router.push('/screens/BusinessIdentification');
		// navigation.navigate('BusinessIdentification');
	};

	if (isLoading) {
		return <ActivityIndicator size={'large'} />;
	}

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
			<ScrollView
				ref={scrollViewRef}
				scrollEnabled={scrollEnabled}
				// className="bg-white"
				style={{ backgroundColor: 'white' }}
			>
				<View
					style={{
						...AppStyles.margins,
						paddingTop: Object.keys(errors).length > 0 ? 64 : null,
					}}
				>
					<Text style={{ ...AppStyles.screenTitle }}>
						Disclosure and Authorization
					</Text>
					<Text style={styles.textSubtitle}>
						Disclosure and Authorization Agreement
					</Text>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubtitle}>
							Background Check Disclosure:
						</Text>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								As part of our commitment to ensuring the safety and security of
								our platform, Buzz&Move may conduct background checks on all
								delivery partners. This background check may include
								verification of your identity, employment history, criminal
								records, driving records, and other relevant information.
							</Text>
						</View>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubtitle}>Authorization</Text>

						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								You hereby authorize Buzz&Move and its agents to conduct a
								background check on you for the purpose of evaluating your
								suitability to provide delivery services on our platform.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								You understand and agree that this background check may be
								conducted periodically during your engagement as a delivery
								partner.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								You authorize Buzz&Move to obtain and use information from
								third-party sources for the purpose of conducting the background
								check.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								You acknowledge that the results of the background check may
								affect your eligibility to provide delivery services on our
								platform.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								You understand that you have the right to review and dispute the
								accuracy of any information obtained in the background check.
							</Text>
						</View>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.textSubtitle}>Additional Disclosure</Text>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								Buzz&Move is committed to protecting the privacy and security of
								your personal information. Any information collected during the
								background check process will be handled in accordance with our
								Privacy Policy.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								You understand that providing false or misleading information,
								or failing to disclose relevant information, may result in
								disqualification from providing delivery services on our
								platform.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								By signing up and using our services, you confirm that all
								information provided by you is true, accurate, and complete to
								the best of your knowledge.
							</Text>
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

					<View style={{ marginTop: 20 }}>
						<Text style={{ fontWeight: 500, fontSize: 15 }}>
							By signing below, I, asd accept the following requirements of the
							aggreement:
						</Text>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								The information provided above is true and accurate.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								I acknowledge and accept all responsibilities for any injuries,
								damages, or traffic violations that may occur while using
								Buzz&Move Mobile App.
							</Text>
						</View>
						<View style={styles.bulletPoints}>
							<Text style={styles.bullet}>{'\u2B24'}</Text>
							<Text style={styles.bulletText}>
								I have read, understand, and agree to the document above
								containing the Background Check Disclosure, Additional
								Disclosure, and Authorization. I authorize Buzz&Move to order a
								report about me.
							</Text>
						</View>
					</View>

					<View
						// className="flex flex-row justify-between"
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Text
							// className="text-sm font-bold mt-5 mb-5"
							style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 20 }}
						>
							Sign Here
						</Text>

						{errors.signatureInStorage && (
							<View
								// className="flex flex-row items-center"
								style={{ flexDirection: 'row', alignItems: 'center' }}
							>
								{/* <FontAwesome5
									name="exclamation-circle"
									color={'red'}
									size={14}
								/> */}
								<Image
									source={icon.exclamationmark}
									style={{ width: 16, height: 16 }}
									resizeMode="contain"
								/>
								<Text
									// className="text-sm font-bold text-red-600 ml-1"
									style={{
										fontSize: 14,
										fontWeight: 'bold',
										color: 'red',
										marginLeft: 4,
									}}
								>
									Please sign
								</Text>
							</View>
						)}
					</View>
					<View
						style={styles.container}
						onTouchStart={() => {
							setScrollEnabled(false);
						}}
						onTouchEnd={() => {
							setScrollEnabled(true);
						}}
					>
						<SignatureScreen
							key={resetRender}
							ref={ref}
							onOK={handleSignature}
							// onEmpty={handleEmpty}
							onEmpty={() => {
								console.log('empty');
							}}
							// webStyle={style}
							webStyle={`.m-signature-pad {box-shadow: none; border: none; } .m-signature-pad--footer {display: none; margin: 0px; } .m-signature-pad--body { position:absolute; left: 0px; 
							border: 2px solid #e6e6e6;
							 border-radius: 10px;}`}
							onEnd={handleSave}
							dataURL={signature}
							// dataURL={''}
							// dataURL={null}
							showsVerticalScrollIndicator={false}
							// className="mb-1"
						/>
						<View style={[styles.row, { marginTop: 4 }]}>
							<Pressable
								onPress={handleClear}
								style={{
									backgroundColor: '#01ad8f',
									paddingVertical: 2,
									paddingHorizontal: 4,
									borderRadius: 6,
								}}
							>
								<Text style={{ fontWeight: 500, color: 'white' }}>Clear</Text>
							</Pressable>
							{/* <Button title="Confirm" onPress={handleSave} /> */}
							{/* <Button title="test" onPress={() => setSignature('')} /> */}

							{/* <Text>{errors.signatureInStorage ? 'true' : 'false'}</Text> */}
						</View>
					</View>

					<Text
						style={{
							fontSize: 14,
							fontWeight: 'bold',
							marginTop: 20,
							marginBottom: 8,
						}}
					>
						Full Business Name
					</Text>
					<InputBox
						title="Full Business Name"
						onChange={setFullBusinessNameTwo}
						state={fullBusinessNameTwo}
						stateName={'fullBusinessNameTwo'}
						type="default"
						hasError={errors.fullBusinessNameTwo ? true : false}
						errors={errors}
						setErrors={setErrors}
					/>

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
							// onPress={() => router.push('/screens/BusinessIdentification')}
							onPress={handleSubmit}
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

export default BusinessDisclosure;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 200,
		// width: 100,
		// padding: 5,
		// borderWidth: 1,
		// borderTopLeftRadius: 10,
		// borderTopRightRadius: 10,
		// borderBottomLeftRadius: 10,
		// borderBottomRightRadius: 10,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center',
	},
	textSubtitle: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	bulletPoints: {
		flexDirection: 'row',
		marginTop: 12,
	},
	bullet: {
		color: '#D9D9D9',
		fontSize: 12,
	},
	bulletText: {
		fontSize: 15,
		color: '#666666',
		flex: 1,
		paddingLeft: 16,
	},
});
