import { Image, Text,TouchableOpacity,View } from "react-native";
import { AppStyles } from "../../utils/AppStyle";
import { colors } from "../../utils/colors";
import { Inter } from "../../utils/Fonts";
import NewText from "../NewText";
import DashedLine from "react-native-dashed-line";
import { verticalScale } from "react-native-size-matters";
import { icon } from "../../assets/png/icons";


const HorizontalContainer = ({text,leftImage,color,isEnabled,toggleSwitch,isSwitch,onPress,width,size1,size,text1,color1,weight1,weight,line,isNext},) => {
  return (
    <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
    >

<TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
     style={AppStyles.justifyRow}>

       
        <NewText
        color={ color|| "#666666"}
        text={text}

        size={ size ||16}
        fontWeight={ weight|| "400"}
        />
        <View style={{...AppStyles.row,gap:7}}>
        <NewText
        color={ color1|| colors.black}
        text={text1}

        size={ size1 ||16}
        fontWeight={weight1|| "500"}
        fontFam={Inter.medium}
        />
        {
          isNext&&(
            <Image
            style={{ width: 15, height: 15 }}
            resizeMode="contain"
            source={icon.nexticon}
          />

          )
        }
         

        </View>
       

    
       

    

    </TouchableOpacity>
    {
      line&&(
        <View style={{ marginVertical: verticalScale(13) }}>
              <DashedLine
                dashLength={6}
                dashThickness={1}
                dashGap={5}
                dashColor={colors.gray}
              />
            </View>

      )
    }




    </TouchableOpacity>

  );
};
export default HorizontalContainer;
