import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import CustomText from "../Text";
import moment from "moment";
import sizeHelper from "../../utils/Helpers";

const CustomChat = ({
  item,

  lastRenderedDate,
  messages,
  index,

}: any) => {
 

  // Show date only if it's different from the last message

  return (
    <View>
    
 <View style={item?.from ? styles.rightContainer : styles.leftContainer}>
          <View>
            <Text style={item?.from  ? styles.rightText : styles.leftText}>
              {item?.message}
            </Text>
          </View>

          
        </View>
    </View>
  );
};
export default CustomChat;
const styles = StyleSheet.create({
  rightContainer: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: sizeHelper.calWp(15),
    borderBottomLeftRadius:sizeHelper.calWp(15),
    borderTopRightRadius:sizeHelper.calWp(15),
    justifyContent: "space-between",
    alignSelf: "flex-end",
    paddingVertical: sizeHelper.calHp(12),
    paddingHorizontal:sizeHelper.calWp(20),
    minWidth: "30%",
    maxWidth: "85%",
  },
  leftContainer: {
    backgroundColor: "#1C2D34",
   borderTopLeftRadius: sizeHelper.calWp(15),
    borderBottomRightRadius:sizeHelper.calWp(15),
    borderTopRightRadius:sizeHelper.calWp(15),
    justifyContent: "space-between",
    alignSelf: "flex-start",
    // minHeight: 30,
paddingVertical: sizeHelper.calHp(12),
    paddingHorizontal:sizeHelper.calWp(20),
    minWidth: "30%",
    maxWidth: "80%",
  },
  rightText: {
    color: theme.colors.black,
    fontFamily: fonts.Inter_Regular,
    fontWeight: "500",
    fontSize: sizeHelper.calHp(21),
    // lineHeight: verticalScale(18),
  },

 
  leftText: {
    color: theme.colors.white,
    fontFamily: fonts.Inter_Regular,
    fontWeight: "500",
    fontSize: sizeHelper.calHp(21),
    // lineHeight: verticalScale(18),
  },
});
