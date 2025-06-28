import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import { Inter } from "../utils/Fonts";
import { GOOGLE_MAPS_API_KEY } from "../apis";

const GooglePlacesInput = ({
  placeholder,
  value,
  onChangeText,
  onPress,
  leftImage,
  onLocationSelect,
  type,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const fetchSuggestions = async (query) => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          query
        )}&key=${GOOGLE_MAPS_API_KEY}&language=en`
      );
      const data = await response.json();

      if (data.status === "OK") {
        setSuggestions(data.predictions);
      } else {
        setError(data.error_message || "Failed to fetch suggestions");
        setSuggestions([]);
      }
    } catch (err) {
      setError("Network error occurred");
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextChange = (text) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }

    // Clear previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set new timeout
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(text);
    }, 300);
  };

  const handleSuggestionPress = async (place) => {
    console.log("handleSuggestionPress called with place:", place);
    setInputValue(place.description);
    setSuggestions([]);

    if (onChangeText) {
      onChangeText(place.description);
    }

    try {
      console.log("Fetching place details for place_id:", place.place_id);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place.place_id}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      console.log("Geocoding response:", data);

      if (data.results && data.results[0]) {
        const location = {
          address: data.results[0].formatted_address,
          coordinates: {
            latitude: data.results[0].geometry.location.lat,
            longitude: data.results[0].geometry.location.lng,
          },
        };
        console.log("Created location object:", location);

        // Call onLocationSelect if provided
        if (onLocationSelect) {
          console.log("Calling onLocationSelect with:", { location, type });
          onLocationSelect(location, type);
        }

        // Call onPress if provided (for backward compatibility)
        if (onPress) {
          console.log("Calling onPress with:", {
            place,
            details: data.results[0],
          });
          onPress(place, data.results[0]);
        }
      } else {
        console.error("No results found in geocoding response");
      }
    } catch (error) {
      console.error("Error getting place details:", error);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setSuggestions([]);
    if (onChangeText) {
      onChangeText("");
    }
    if (onLocationSelect) {
      onLocationSelect(null, type);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {leftImage && (
          <View style={styles.leftIconContainer}>
            <Image
              source={leftImage}
              resizeMode="contain"
              style={styles.leftIcon}
            />
          </View>
        )}
        <TextInput
          style={[
            styles.input,
            leftImage && { paddingLeft: scale(35) },
            value && { paddingRight: scale(35) },
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.gray100}
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
            if (onChangeText) {
              onChangeText(text);
            }
            handleTextChange(text);
          }}
          {...props}
        />
        {inputValue && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearIcon}>×</Text>
          </TouchableOpacity>
        )}
      </View>
      {suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handleSuggestionPress(item)}
              >
                <Text style={styles.suggestionText}>{item.description}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.place_id}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    height: verticalScale(45),
    color: colors.black,
    fontSize: 14,
    fontFamily: Inter.medium,
    borderWidth: 1,
    borderColor: colors.black40,
    borderRadius: scale(12),
    paddingHorizontal: scale(15),
    backgroundColor: colors.white,
  },
  leftIconContainer: {
    position: "absolute",
    left: scale(7),
    top: verticalScale(14),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  leftIcon: {
    width: scale(16),
    height: scale(16),
  },
  suggestionsContainer: {
    position: "absolute",
    top: verticalScale(50),
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black40,
    borderRadius: scale(12),
    marginTop: scale(5),
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 1000,
    maxHeight: verticalScale(200),
  },
  suggestionItem: {
    padding: scale(10),
    height: verticalScale(40),
    borderBottomWidth: 1,
    borderBottomColor: colors.black40,
  },
  suggestionText: {
    fontSize: scale(14),
    fontFamily: Inter.medium,
    color: colors.black,
  },
  clearButton: {
    position: "absolute",
    right: scale(7),
    top: verticalScale(10),
    width: scale(24),
    height: scale(24),
    justifyContent: "center",
    alignItems: "center",
  },
  clearIcon: {
    fontSize: scale(20),
    color: "#666",
    fontWeight: "bold",
  },
});

export default GooglePlacesInput;
