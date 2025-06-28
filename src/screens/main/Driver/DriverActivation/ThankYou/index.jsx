// import { FontAwesome6 } from '@expo/vector-icons';
// import { Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icon } from '../../../../../assets/png/icons';

const ThankYou = ({ navigation }) => {
	const clearStorage = async () => {
		await AsyncStorage.clear();
	};

	return (
		<SafeAreaView
			style={{
				backgroundColor: 'white',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<View
				style={{
					alignItems: 'center',
					marginHorizontal: 20,
				}}
			>
				<Image
					source={icon.checkedcircle}
					tintColor={'#01AD8F'}
					style={{ width: 117, height: 117 }}
					resizeMode="contain"
				/>
				<View style={{ alignItems: 'center', marginTop: 42 }}>
					<Text style={{ fontSize: 30, fontWeight: 'bold' }}>Thank You!</Text>
					<Text
						style={{
							fontSize: 18,
							fontWeight: 400,
							color: '#666666',
							textAlign: 'center',
							marginTop: 11,
							lineHeight: 31.5,
						}}
					>
						Your Information has been Received. Continue to complete activation
					</Text>
				</View>
				<View style={{ marginTop: 20 }}>
					<Pressable
						className="bg-[#01AD8F] py-3 px-5 rounded-xl items-center"
						style={{
							backgroundColor: '#01AD8F',
							paddingVertical: 12,
							paddingHorizontal: 20,
							borderRadius: 12,
							alignItems: 'center',
						}}
						onPress={() => {
							navigation.popToTop();
							navigation.navigate('BottomTab');
							// navigation.pop(7);
							// clearStorage();
						}}
					>
						<Text style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>
							Back to Home
						</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default ThankYou;
