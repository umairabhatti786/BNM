import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import icons from "../../utils/Constants/icons";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const TabHeader = ({
  title
}: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <View style={appStyles.rowjustify}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={icons.back_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <CustomText text={title} color={theme.colors.white} size={30} />

        <View>
          <TouchableOpacity
        
          >
            <Image style={styles.button_icon} source={icons.notification} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default TabHeader;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(60),
    height: sizeHelper.calWp(60),
    resizeMode: "contain",
  },
});
