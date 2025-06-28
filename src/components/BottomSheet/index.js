import { SafeAreaView, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import {  BottomSheetModal,BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useFocusEffect } from "@react-navigation/native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const BottomSheet = (props) => {
  const { bottomSheetModalRef, snapTo, onDismiss, children,marginHorizontal } = props;
  const validSnapTo = snapTo && (typeof snapTo === 'string' || typeof snapTo === 'number') ? snapTo : '47%';

  const snapPoints = useMemo(() => {
    console.log('Snap Points:', validSnapTo);
    return [validSnapTo];
  }, [validSnapTo]);
  useFocusEffect(
    useCallback(() => {
      return () => {
        bottomSheetModalRef.current?.close();
      };
    }, [])
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      pressBehavior="close"
      backdropComponent={(props) => <Backdrop {...props} bottomSheetModalRef={bottomSheetModalRef} />}
      snapPoints={snapPoints}
      style={{marginHorizontal:marginHorizontal||0}}
      onDismiss={props?.onDismiss}
      children={() => (
        <BottomSheetScrollView
        showsVerticalScrollIndicator={false}

        >
            <SafeAreaView>
          <View style={{ paddingTop: 12, paddingBottom: 30 }}>{children}</View>
        </SafeAreaView>

        </BottomSheetScrollView>
      
      )}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ backgroundColor: "#E7E7E7" }}
    />
  );
};

const Backdrop = ({ animatedIndex, bottomSheetModalRef, style }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [1, 1],
      [1, 1],
      Extrapolate.CLAMP
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.6)",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View onTouchStart={() => bottomSheetModalRef.current?.close()} style = { containerStyle } />;
};

export default BottomSheet;
