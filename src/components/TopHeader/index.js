import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { AppStyles } from '../../utils/AppStyle'
import { colors } from '../../utils/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomText from '../CustomText'
import { Inter } from '../../utils/Fonts'
import { icon } from '../../assets/png/icons'
import { useNavigation } from '@react-navigation/native'

const TopHeader = ({txt,isRightText,onApply,isBack},) => {
    const navigation=useNavigation()
  return (
    <View
            style={{
              ...AppStyles.justifyRow,
              backgroundColor: colors.white,
              paddingVertical: verticalScale(13),
              paddingHorizontal: scale(15),
              elevation: 5,
              shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              // shadowRadius: 5,
            }}>
            <TouchableOpacity
              style={{ width: "30%" }}
              onPress={isBack}>
              <Image
                style={{ width: scale(15), height: scale(15) }}
                resizeMode="contain"
                source={icon.back}
              />
            </TouchableOpacity>

            <CustomText
              fontWeight="700"
              color={colors.black}
              fontFam={Inter.bold}
              size={14}
              style={{ textAlign: "center" }}
              text={txt}
            />
            <TouchableOpacity 
            onPress={onApply}
            style={{ width: "33%",}} >
                {
                    isRightText&&(
                        <CustomText
                        fontWeight="600"
                        color={colors.secondary}
                        // fontFam={Inter.bold}
                        size={14}
                        style={{ textAlign: "right" }}
                        text={isRightText}
                      />

                    )
                }

          
                </TouchableOpacity>
          </View>
  )
}

export default TopHeader