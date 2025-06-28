import {
    Pressable,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    StyleSheet,
    TextInput,
    Image,
  } from "react-native";
  
  import { scale, verticalScale } from "react-native-size-matters";
  import { colors } from "../../utils/colors";
  import CustomText from "../CustomText";
  import NewText from "../NewText";
  import { AppStyles } from "../../utils/AppStyle";
  import { icon } from "../../assets/png/icons";
import { Inter } from "../../utils/Fonts";
  
  const Search = ({ width, text,value }) => {
    return (
      <View
        style={{
          ...AppStyles.justifyRow,
          ...styles.mainContainer,
          width: width || "100%",
        }}
      >
        <TextInput
                value={value}
                placeholder="Search..."
                placeholderTextColor={colors.gray}
                style={{
                  color: colors.black,
                  fontFamily: "600",
                  fontSize: 16,
                  fontFamily: Inter.bold,
                  height: 45,
                  width:"90%",
                }}
              />
  
        <Image
          style={{ width: 20, height: 20,tintColor:colors.gray100 }}
          resizeMode="contain"
          source={icon.search}
        />
      </View>
    );
  };
  export default Search;
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: 45,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.black40,
      paddingHorizontal: 15,
      backgroundColor:colors.white,
    },
  });
  