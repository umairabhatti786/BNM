import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSizes, dimensions } from '../styles/constants';

const DialogBoxComponent = ({ visible, content }) => {
  if (!visible) return null;

  return (
    <View style={styles.dialogContainer}>
      <View style={styles.dialogContent}>
        <Text style={styles.dialogText}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: colors.lightGray,
    padding: dimensions.paddingLevel3,
    borderRadius: 10,
    marginTop: dimensions.marginLevel2,
  },
  dialogContent: {
    padding: dimensions.paddingLevel2,
  },
  dialogText: {
    fontSize: fontSizes.fontMedium,
    color: colors.black,
  },
});

export default DialogBoxComponent;
