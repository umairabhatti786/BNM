// components/SearchBarComponent.js

import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../styles/constants';

export default function SearchBarComponent({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder={placeholder || "Search..."}
        style={styles.searchInput}
        onChangeText={onChangeText}
        value={value}
      />
      <Image style={styles.searchIcon} source={require('../assets/webp/searchIcon.webp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 9,
    paddingHorizontal: dimensions.paddingLevel2,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    padding: dimensions.paddingLevel12,
    fontSize: fontSizes.fontMedium,
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
});
