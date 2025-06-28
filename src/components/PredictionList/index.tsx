import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { WINDOW_HEIGHT } from "@gorhom/bottom-sheet";
import { useSelector } from "react-redux";
import { scale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
export interface cardData1 {
  description?: string;
  price?: number;
  image?: any;
}
type Props = {
  data?: cardData1;
  onPress?: () => void;
  Addresses: any;
  onAddressPress?:()=>void
};

const PredictionList = ({ data, onPress, Addresses,onAddressPress }: Props) => {
  return (
    <View
      style={{
        width:"100%",
        // position: "absolute",
        backgroundColor: colors.white,
        maxHeight: 300,
        borderRadius:scale(10),
      }}
    >
      <View >
        <ScrollView horizontal={false}>
          {Addresses.map((i, index) => {
            return (
              <View key={i.toString() + index}>
                <TouchableOpacity 
                onPress={()=>onAddressPress(i)}
                style={{ ...appStyles.row, padding: 15 }}>
                  <Image
                    style={{ width: 15, height: 15,marginBottom:3 }}
                    resizeMode="contain"
                    source={images.location}
                  />
                  <NewText
                    text={i.description}
                    size={14}
                    // fontFam={font.montserratMedium}
                    fontWeight="400"
                    style={{ marginLeft: 10 }}
                    color={colors.white}
                  />
                </TouchableOpacity>

                <CustomLine height={1} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default PredictionList;