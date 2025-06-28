import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const usePersistentState = (key, initialValue) => {
	const [state, setState] = useState(initialValue);

	useEffect(() => {
		const loadState = async () => {
			try {
				const savedState = await AsyncStorage.getItem(key);
				if (savedState !== null) {
					setState(JSON.parse(savedState));
				}
			} catch (error) {
				console.error('Failed to load state:', error);
			}
		};

		loadState();
	}, [key]); // Run only once on mount

	useEffect(() => {
		const saveState = async () => {
			try {
				await AsyncStorage.setItem(key, JSON.stringify(state));
			} catch (error) {
				console.error('Failed to save state:', error);
			}
		};

		saveState();
	}, [key, state]); // Run whenever key or state changes

	return [state, setState];
};

export default usePersistentState;
