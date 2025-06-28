import { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { scale, verticalScale } from 'react-native-size-matters'
import { icon } from '../../assets/png/icons'
import { colors } from '../../utils/colors'
import { Inter } from '../../utils/Fonts'
import CustomText from '../CustomText'

const DropDown = ({
  data,
  value,
  placeholderColor,
  placeholder,
  dropWidth,
  borderWidth,
  paddingHorizontal
}) => {
  const [open, setOpen] = useState(false)


  const renderRightIcon = () => (
    <View style={styles.iconStyle}>
      <Image
        style={{ width: '100%', height: '100%' }}
        source={icon.down}
        resizeMode="contain"
      />

      {/* Your custom right icon component */}
      {/* Example: <Icon name="arrow-down" type="font-awesome" color="#000" /> */}
    </View>
  )

  return (
    <View style={styles.container}>
      <Dropdown
        style={{
          ...styles.dropdown,
          width: dropWidth || '100%',
          borderWidth: borderWidth || 1,
          // paddingHorizontal:paddingHorizontal
        }}
        containerStyle={{
          backgroundColor:colors.white,
          minHeight: scale(70),
          borderWidth: -1,
        }}
        placeholderStyle={{
          ...styles.placeholderStyle,
          color: placeholderColor || colors.gray,
        }}
        // itemContainerStyle={{borderRadius:10,borderBottomWidth:1,borderColor:colors.placeholdeColor,marginVertical:5}}

        selectedTextStyle={{
          
          fontSize: scale(15),
          fontFamily:Inter.semiBold,
          color: colors.gray,
        }}
        inputSearchStyle={styles.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        renderRightIcon={renderRightIcon}
        itemTextStyle={styles.inputTextStyle}
        renderItem={(item) => {
          console.log('Itemdata', item)
          return (
            <View
              style={{
                height: 30,
                justifyContent: 'center',
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                paddingHorizontal: 10,
              }}
            >
              <CustomText
                text={item.label}
                fontWeight={'500'}
                size={13}
                color={colors.black
                }
              />
            </View>
          )
        }}
        data={data}
        // search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={placeholder || 'Select'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        // backgroundColor	={"red"}
        // renderSelectedItem={()=>{

        //   return(

        //   )
        // }}
        onChange={(item) => {
          if (item.value == value) {
            setOpen(false)
            // setValue();
            return
          }
          //   setValue(item.value);
          setOpen(false)
        }}
      />
    </View>
  )
}

export default DropDown
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: scale(10),
    // height: verticalScale(50),
  },
  dropdown: {
    // height: verticalScale(33),
    borderColor: colors.superLightGray,
    borderRadius: scale(7),
    paddingHorizontal: scale(8),
    paddingVertical:verticalScale(1),
    borderColor:colors.black40,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.white,
  },
  placeholderStyle: {
    fontSize: verticalScale(13.5),
    fontFamily:Inter.semiBold
  },

  iconStyle: {
    width: scale(10),
    height: scale(10),
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: colors.white,
  },
  inputTextStyle: {
    fontSize: 16,
    color: colors.white,
  },
})