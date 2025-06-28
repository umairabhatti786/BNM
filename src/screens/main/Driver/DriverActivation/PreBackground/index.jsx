import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { icon } from '../../../../../assets/png/icons';
import usePersistentState from '../../../../../components/usePersistentState';
import { AppStyles } from '../../../../../utils/AppStyle';

const PreBackground = ({ navigation }) => {
	// const router = useRouter();

	const [backgroundCheck, setBackgroundCheck] = usePersistentState(
		'backgroundCheck',
		'No'
	);

	const [backgroundSwitch, setBackgroundSwitch] = usePersistentState(
		'backgroundSwitch',
		false
	);

	const [activeBackgroundSwitch, setActiveBackgroundSwitch] =
		usePersistentState('activeBackgroundSwitch', null);

	const [errors, setErrors] = useState({});

	const switchNames = ['Individual', 'Business'];

	const toggleBackgroundSwitch = () => {
		if (backgroundSwitch) {
			setBackgroundCheck('No');
		} else {
			setBackgroundCheck('Yes');
		}
		setBackgroundSwitch(!backgroundSwitch);
	};

	const toggleSwitch = (value, index) => {
		setActiveBackgroundSwitch(value ? index : null);
	};

	const removeKey = (key) => {
		const newState = { ...errors };
		// delete newState['isChecked'];
		delete newState[key];

		setErrors(newState);
	};

	const validatePage = () => {
		const newErrors = {};
		let isValid = true;

		if (backgroundCheck === 'No') {
			newErrors.backgroundCheck = 'Please confirm';
			isValid = false;
		}

		// Need to check if it !== 0 because without it, isValid = false
		if (!activeBackgroundSwitch && activeBackgroundSwitch !== 0) {
			newErrors.activeBackgroundSwitch = 'Please choose one.';
			isValid = false;
		}

		setErrors(newErrors);

		return isValid;
	};

	const handleSubmit = () => {
		const isValid = validatePage();

		if (isValid) {
			// router.push('/screens/PreBackground');

			if (activeBackgroundSwitch == 0) {
				// router.push('/screens/IndividualInfo');
				navigation.navigate('IndividualInfo');
			} else if (activeBackgroundSwitch === 1) {
				// router.push('/screens/BusinessInfo');
				navigation.navigate('BusinessInfo');
			}
		}
	};

	return (
		<ScrollView style={{ backgroundColor: 'white' }}>
			<View style={{ ...AppStyles.margins }}>
				<Text style={{ ...AppStyles.screenTitle }}>Pre-background Q&A</Text>
				<View>
					<Text style={{ fontSize: 14, fontWeight: 'bold' }}>
						We may require a Background check, Motor Vehicle Report, and Drug
						Screen to be completed later in the process. Do you wish to
						continue?
					</Text>
					{errors.backgroundCheck && (
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							{/* <FontAwesome5 name="exclamation-circle" color={'red'} size={14} /> */}
							<Image
								source={icon.exclamationmark}
								style={{ width: 16, height: 16 }}
								resizeMode="contain"
							/>
							<Text
								style={{
									fontSize: 14,
									fontWeight: 'bold',
									color: 'red',
									marginLeft: 4,
								}}
							>
								Press the switch if you want to continue
							</Text>
						</View>
					)}

					<View
						style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}
					>
						<Switch
							// onValueChange={toggleBackgroundSwitch}
							onValueChange={() => {
								if (errors.backgroundCheck) {
									removeKey('backgroundCheck');
								}
								toggleBackgroundSwitch();
							}}
							value={backgroundSwitch}
							trackColor={{ false: '#eff0ef', true: '#eff0ef' }}
							thumbColor={backgroundSwitch ? '#0aba04' : 'grey'}
							// style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
							// className="mr-4"
						/>
						<Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 5 }}>
							{backgroundCheck}
						</Text>
					</View>
				</View>

				<View
					style={{
						borderStyle: 'dashed',
						borderBottomWidth: 1,
						borderBottomColor: '#d1d5db',
						marginTop: 12,
					}}
				/>

				<View style={{ marginTop: 20 }}>
					<Text style={{ fontSize: 14, fontWeight: 'bold' }}>
						Do you plan to join Buzz&Move as an individual or as a business?{' '}
					</Text>
					{errors.activeBackgroundSwitch && (
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							{/* <FontAwesome5 name="exclamation-circle" color={'red'} size={14} /> */}
							<Image
								source={icon.exclamationmark}
								style={{ width: 16, height: 16 }}
								resizeMode="contain"
							/>
							<Text
								style={{
									fontSize: 14,
									fontWeight: 'bold',
									color: 'red',
									marginLeft: 4,
								}}
							>
								Choose one
							</Text>
						</View>
					)}

					<View style={{ marginTop: 8 }}>
						{switchNames.map((name, index) => (
							<View
								key={index}
								style={{ flexDirection: 'row', alignItems: 'center' }}
							>
								<Switch
									value={activeBackgroundSwitch === index}
									onValueChange={(value) => {
										if (errors.activeBackgroundSwitch) {
											removeKey('activeBackgroundSwitch');
										}
										toggleSwitch(value, index);
									}}
									trackColor={{ false: '#eff0ef', true: '#eff0ef' }}
									thumbColor={
										activeBackgroundSwitch === index ? '#0aba04' : 'grey'
									}
								/>
								<Text style={{ fontSize: 14, fontWeight: 600, marginLeft: 5 }}>
									{name}
								</Text>
							</View>
						))}
					</View>
				</View>

				<View
					style={{
						borderStyle: 'dashed',
						borderBottomWidth: 1,
						borderBottomColor: '#d1d5db',
						marginTop: 12,
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
						onPress={() => {
							// validatePage();
							// callbackValidation();
							handleSubmit();
							// if (Object.keys(errors).length === 0) {
							// 	if (activeBackgroundSwitch === 0) {
							// 		router.push('/screens/IndividualInfo');
							// 	} else if (activeBackgroundSwitch === 1) {
							// 		router.push('/screens/BusinessInfo');
							// 	}
							// }
						}}
					>
						<Text style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>
							Next
						</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
};

export default PreBackground;
