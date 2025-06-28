import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Commons";
import { AppStyles } from "../../utils/AppStyle";
import NewText from "../NewText";
import { icon } from "../../assets/png/icons";

const MessageContainer = ({ item ,mainColor}) => {
  return (
    <View style={{ alignSelf: item?.from ? "flex-end" : "flex-start" }}>
      <View style={item.from ? {...styles.rightContainer,
          backgroundColor: mainColor||colors.primary,

      } : styles.leftContainer}>
        <View style={{ width: "82%" }}>
          <Text style={item.from ? styles.rightText : styles.leftText}>
            {item.message}
          </Text>
        </View>
      </View>

      <View style={{...AppStyles.row,alignSelf:item.from?"flex-end":"flex-start"}}>
        <Text style={item.from ? styles.rightTime : styles.leftTime}>
          {item.time}
        </Text>
        {
            item.seen&&(
                <View style={AppStyles.row}>

<View
          style={{
            width: 5,
            height: 5,
            borderRadius: 999,
            backgroundColor: "#D9D9D9",
            marginHorizontal: 10,
          }}
        />
                <NewText text={"Seen"}
                fontWeight={"400"}
                 size={14} color={ mainColor|| colors.primary} />
                 <Image
                 style={{width:15,height:15,marginLeft:2,tintColor:mainColor ||colors.primary}}
                 resizeMode="contain"
                 source={icon.seen}
                 />

                </View>
            )
        }

     


      </View>
    </View>
  );
};
export default MessageContainer;
const styles = StyleSheet.create({
  rightContainer: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: "space-between",
    minHeight: 30,
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 7,
    minWidth: 200,
    maxWidth: windowWidth / 1,
  },
  leftContainer: {
    backgroundColor: "#F2F2F2",
    borderTopLeftRadius: 12,

    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "space-between",
    alignSelf: "flex-start",
    // alignItems:"center",
    minHeight: 30,
    paddingHorizontal: 20,
    paddingVertical: 7,
    width: "80%",
  },
  rightText: {
    color: colors.white,
    fontFamily: "Inter-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 27,
  },
  rightTime: {
    color: colors.gray,
    fontFamily: "Inter-Regular",
    fontSize: 13,
    fontWeight:"400",
    textAlign: "right",
    marginVertical: 10,
  },
  leftTime: {
    color: colors.gray,
    fontFamily: "Inter-Regular",
    fontSize: 13,
    fontWeight:"400",
    marginVertical: 10,
  },
  leftText: {
    color: colors.gray200,
    fontFamily: "Inter-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 25,
  },
});
