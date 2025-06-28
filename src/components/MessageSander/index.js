import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AppStyles } from "../../utils/AppStyle";
import { icon } from "../../assets/png/icons";
import { colors } from "../../utils/colors";
const MessageSander = ({onAttach,mainColor}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity 
      onPress={onAttach}
      activeOpacity={0.6} style={styles.attachContainer}>
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
          source={icon.attach}
        />
      </TouchableOpacity>
      <View style={styles.messageContainer}>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <TextInput
            value="So, did you get time to"
            style={{ fontSize: 15, fontFamily: "SF-Compact-Display-Medium" }}
            placeholder="Type a message ..."
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={{...styles.sendContainer,
          backgroundColor:mainColor||  colors.primary,

      }}>
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
          source={icon.send}
        />
      </TouchableOpacity>
    </View>
  );
};
export default MessageSander;

const styles = StyleSheet.create({
  attachContainer: {
    width: 48,
    height: 48,
    borderRadius: 15,
    borderColor: colors.black40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sendContainer: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  messageContainer: {
    ...AppStyles.row,
    height: 50,
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.black40,
  },
  main: {
    ...AppStyles.justifyRow,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 15,
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: Platform.OS == "ios" ? colors.gray : colors.black,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
