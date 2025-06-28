import { Text,View } from "react-native";
import { colors } from "../../utils/colors";

const CustomLine = ({height,width,backgroundColor}) => {
  return (
      <View  style={{height:height || 1.1,width:width|| "100%",backgroundColor: backgroundColor ||colors.black40}}/>
    
  );
};
export default CustomLine;
