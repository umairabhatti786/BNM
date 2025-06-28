import { StyleSheet, View } from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";

const NotificationCard = ({ title, des, date }: any) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(15),
          backgroundColor: theme.colors.Input_field,
          borderWidth: 1,
          borderColor: theme.colors.highlght,
          gap: sizeHelper.calHp(4),
          padding: sizeHelper.calHp(20),
        }}
      >
        <CustomText
          text={title}
          fontWeight="600"
          fontFam={fonts.Poppins_SemiBold}
          color={theme.colors.black}
          size={23}
        />
        <CustomText
          text={des}
          numberOfLines={1}
          color={theme.colors.black}
          size={21}
        />
        <CustomText
          text={date}
          style={{ marginTop: sizeHelper.calHp(5) }}
          fontFam={fonts.Inter_Light}
          fontWeight="400"
          color={theme.colors.black + "90"}
          // size={23}
        />
        {/* <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: sizeHelper.calWp(100),
            height: sizeHelper.calWp(80),
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: sizeHelper.calWp(50),
              height: sizeHelper.calWp(50),
              resizeMode: 'contain',
              tintColor: theme.colors.black+"80",
            }}
            source={icons.arrow_back}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <CustomText
            text={title}
            fontWeight="600"
            fontFam={fonts.Poppins_SemiBold}
            color={theme.colors.black}
            size={25}
          />
        </View>
        <View style={{width: 60}} /> */}
      </View>
    </>
  );
};
export default NotificationCard;

const styles = StyleSheet.create({});
