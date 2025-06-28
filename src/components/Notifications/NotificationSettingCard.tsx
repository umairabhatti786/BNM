import { StyleSheet, View } from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
import SwitchToggle from 'react-native-switch-toggle';

const NotificationSettingCard = ({ title, des, date,enabled,onSwitch }: any) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(15),
          backgroundColor: theme.colors.Input_field,
          borderWidth: 1,
          flexDirection:"row",
          justifyContent:"space-between",
          borderColor: theme.colors.highlght,
          gap: sizeHelper.calHp(4),
          padding: sizeHelper.calHp(20),
        }}
      >
        <View
        style={{
            gap: sizeHelper.calHp(4),
            width:"80%"

        }}
        >

        <CustomText
          text={title}
        
          color={theme.colors.black}
        //   size={20}
        />
        <CustomText
          text={des}
          numberOfLines={1}
          fontWeight="400"
          fontFam={fonts.Inter_Light}
          color={theme.colors.black}
          size={19}
        />


        </View>
       

<SwitchToggle
        switchOn={enabled}
        onPress={onSwitch}
        circleColorOff="#ffff"
        circleColorOn="#ffff"
        backgroundColorOn="#157347"
        backgroundColorOff="#06934520"
        containerStyle={styles.containerStyle}
        circleStyle={styles.circleStyle}
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
export default NotificationSettingCard;

const styles = StyleSheet.create({

    containerStyle: {
        width: sizeHelper.calWp(105),
        height: sizeHelper.calHp(43),
        borderRadius: 25,
        padding: 5,
      },
      circleStyle: {
        width: 20,
        height: 20,
        borderRadius: 10,
      },
      label: {
        marginTop: 10,
        fontSize: 18,
      }


});
