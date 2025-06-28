import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSignature = async (signature) => {
	try {
		await AsyncStorage.setItem('signature', signature);
		// console.log('saved to storage');
	} catch (e) {
		console.error('Failed to save signature:', e);
	}
};

export const loadSignature = async () => {
	try {
		const signature = await AsyncStorage.getItem('signature');
		// console.log('LOADING SIGNATURE');
		return signature !== null ? signature : null;
	} catch (e) {
		console.error('Failed to load signature:', e);
	}
};

export const clearSignature = async () => {
	try {
		await AsyncStorage.removeItem('signature');
		// await AsyncStorage.setItem('signature', null);
	} catch (e) {
		console.error('Failed to clear signature:', e);
	}
};
