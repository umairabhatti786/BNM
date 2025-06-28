import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';

const AutoInput = ({
	setState,
	state,
	stateName,
	title,
	mask,
	hasError,
	errors,
	setErrors,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const removeKey = () => {
		const newState = { ...errors };
		delete newState[stateName];
		setErrors(newState);
	};

	return (
		<>
			<MaskInput
				placeholder={isFocused ? '' : `${title}`}
				value={state}
				onChangeText={(masked, unmasked) => {
					if (errors[stateName]) {
						removeKey();
					}
					setState(masked);
				}}
				mask={mask}
				keyboardType="numeric"
				// className={`border rounded-lg py-1 px-3 text-sm ${
				// 	hasError ? 'border-red-600' : 'border-gray-300'
				// }`}
				style={{
					borderWidth: 1,
					borderRadius: 8,
					height: 46,
					paddingVertical: 4,
					paddingHorizontal: 12,
					fontSize: 14,
					borderColor: hasError ? 'red' : '#D1D5DB',
				}}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</>
	);
};

export default AutoInput;
