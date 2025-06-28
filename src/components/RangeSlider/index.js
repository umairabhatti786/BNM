import React, { useState } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colors } from '../../utils/colors';
import { Inter } from '../../utils/Fonts';
import CustomText from '../CustomText';

const CustomRangeSlider = ({ minValue, maxValue,backgroundColor }) => {
  const [position, setPosition] = useState(0);

  const [value,setValue]=useState(0)
  console.log("value",value)

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {

      console.log("gesture",gesture)
      const newPosition = Math.max(0, Math.min(gesture.moveX, 320)); // Adjust 300 according to your slider width
      // const newPosition1 = Math.max(0, Math.min(gesture.moveX, 300)); // Adjust 300 according to your slider width
      // setValue(newPosition1-10)
      const newValue = (position / 320) * (maxValue - minValue) + minValue; // Adjust 300 according to your slider width
      console.log('New value:', newValue);
      setValue(newValue)
      setPosition(newPosition);
    },
    onPanResponderRelease: () => {
      // Calculate the value based on the position and update state
      // const newValue = (position / 320) * (maxValue - minValue) + minValue; // Adjust 300 according to your slider width
      // console.log('New value:', newValue);
      // setValue(newValue)
    },

  });
  console.log("position",position)

  return (
    <View style={{  backgroundColor:"#D9D9D9",borderRadius:scale(30)}}>
      {/* Track */}
      <View style={{ width: position, height: 3.4, backgroundColor: backgroundColor || colors.secondary, borderRadius: 999 }} />

      {/* <View style={{alignItems:"center",backgroundColor:"red"}}> */}

      <Animated.View
        style={{
          width: 20,
          height: 20,
          backgroundColor:   backgroundColor ||colors.secondary,
          top:-8,
          borderRadius: 10,
          position: 'absolute',
          left: position,
          transform: [{ translateX: -10 }],
          zIndex: 2,
          elevation: 5,
          shadowColor:backgroundColor|| colors.secondary,
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.4
        }}
        {...panResponder.panHandlers}
      >
        {
          value>13&&(
            <View style={{position:"absolute",top:0,width:50,height:30,left:-30,top:-20}}>
            <CustomText
                text={Math.floor(value)+ " mi"}
                size={12}
                fontWeight={"700"}
                fontFam={Inter.bold}
                color={colors.black}
              />
            </View>

          )
        }

      
        </Animated.View>

      {/* </View> */}

      {/* Thumb */}
      
    </View>
  );
};

export default CustomRangeSlider;
