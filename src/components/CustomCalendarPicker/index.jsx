import {
	ActivityIndicator,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

// import { scale, verticalScale } from 'react-native-size-matters';
import { icon } from '../../assets/png/icons';
import { AppStyles } from '../../utils/AppStyle';
import { colors } from '../../utils/colors';
// import CustomText from '../CustomText';
import NewText from '../NewText';

const CustomCalendarPicker = ({ width, text, onPress, hasError }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				...AppStyles.justifyRow,
				// ...styles.daysContainer,
				height: 46,
				borderRadius: 8,
				borderWidth: 1,
				borderColor: hasError ? 'red' : colors.black40,
				paddingHorizontal: 10,
				paddingVertical: 4,
				backgroundColor: colors.white,
				width: width || '100%',
			}}
		>
			<NewText
				text={text || 'Choose Date'}
				color={colors.gray}
				fontWeight="600"
				size={15}
			/>

			<Image
				style={{ width: 18, height: 18 }}
				resizeMode="contain"
				source={icon.calendar}
			/>
		</TouchableOpacity>
	);
};

export default CustomCalendarPicker;

// const styles = StyleSheet.create({
// 	daysContainer: {
// 		height: 46,
// 		borderRadius: 8,
// 		borderWidth: 1,
// 		borderColor: hasError ? 'red' : colors.black40,
// 		paddingHorizontal: 10,
// 		paddingVertical: 4,
// 		backgroundColor: colors.white,
// 	},
// });
