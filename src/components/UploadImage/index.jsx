// import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const UploadImage = ({
	image,
	setImage,
	stateName,
	hasError,
	errors,
	setErrors,
}) => {
	const uploadImage = async () => {
		// try {
		// 	await ImagePicker.requestCameraPermissionsAsync();
		// 	let result = await ImagePicker.launchCameraAsync({
		// 		cameraType: ImagePicker.CameraType.front,
		// 		// allowsEditing: true,
		// 		aspect: [1, 1],
		// 		quality: 1,
		// 	});
		// 	if (!result.canceled) {
		// 		if (errors[stateName]) {
		// 			removeKey();
		// 		}
		// 		await saveImage(result.assets[0].uri);
		// 	}
		// } catch (error) {
		// 	console.log('Error');
		// }

		//	CAMERA PERMISSION IS GRANTED THEN COPY THE CODE BELOW BELOW AND PUT THAT TO LAUNCH THE CAMERA!!!!!!!!
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					title: 'App Camera Permission',
					message: 'App needs access to your camera ',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				try {
					const result = await launchCamera();
					if (!result.didCancel) {
						if (errors[stateName]) {
							removeKey();
						}
						await saveImage(result.assets[0].uri);
					}
				} catch (error) {
					console.log('Error: ', error);
				}
			} else {
				console.log('Camera permission denied');
			}
		} catch (err) {
			console.warn(err);
		}
	};

	const saveImage = async (image) => {
		try {
			setImage(image);
		} catch (error) {}
	};

	const removeKey = () => {
		const newState = { ...errors };
		// delete newState['isChecked'];
		delete newState[stateName];
		setErrors(newState);
	};

	return (
		<TouchableOpacity
			// className={`border rounded-lg items-center justify-center h-36 ${
			// 	hasError ? 'border-red-600' : 'border-gray-300'
			// }`}
			style={{
				borderWidth: 1,
				borderRadius: 8,
				alignItems: 'center',
				justifyContent: 'center',
				height: 144,
				borderColor: hasError ? 'red' : '#D1D5DB',
			}}
			onPress={() => uploadImage()}
		>
			{image ? (
				<Image
					source={{ uri: image }}
					// className="h-32 w-28 object-contain"
					style={{ height: 128, width: 112, objectFit: 'contain' }}
				/>
			) : (
				<Text
					// className="text-base font-normal text-[#AAAAAA]"
					style={{ fontSize: 16, fontWeight: 400, color: '#AAAAAA' }}
				>
					Click here to upload image
				</Text>
			)}
		</TouchableOpacity>
	);
};

export default UploadImage;
