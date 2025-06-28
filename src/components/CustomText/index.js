import { Text } from 'react-native'
import { colors } from '../../utils/colors'
import { verticalScale } from 'react-native-size-matters'



const CustomText = ({ color, size, fontFam, text, style, lineHeight,numberOfLines,fontWeight,textDecorationLine }) => {
    return (
        <Text
        numberOfLines={numberOfLines}
            style={[
                {
                    color: color || colors.black,
                    fontSize: verticalScale(size || 10),
                    fontWeight: fontWeight ||"500",
                    fontFamily: fontFam || "Inter-Regular",
                    textDecorationLine:textDecorationLine,
                
                    
                    ...(lineHeight && { lineHeight: lineHeight }),
                }, style
            ]}
        >
            {text}
        </Text >
    )
}
export default CustomText
