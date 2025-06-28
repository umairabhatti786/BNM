import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const InputBox = ({
	title,
	onChange,
	state,
	type,
	hasError,
	errors,
	setErrors,
	stateName,
	editable
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const removeKey = () => {
		const newState = { ...errors };
		delete newState[stateName];
		setErrors(newState);
	};

	return (
		<>
			<TextInput
				placeholder={isFocused ? '' : `${title}`}
				editable={editable}
				// onChangeText={onChange}
				onChangeText={(newText) => {
					if (errors[stateName]) {
						removeKey();
					}
					onChange(newText);
				}}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				value={state}
				keyboardType={type}
				// className={`border rounded-lg py-1 px-3 text-sm ${
				// 	hasError ? 'border-red-600' : 'border-gray-300'
				// }`}
				style={{
					borderWidth: 1,
					borderRadius: 8,
					paddingHorizontal: 12,
					paddingVertical: 4,
					fontSize: 14,
					height: 46,
					borderColor: hasError ? 'red' : '#d1d5db',
				}}
			/>
		</>
	);
};

export default InputBox;
