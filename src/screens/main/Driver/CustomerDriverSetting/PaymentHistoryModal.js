import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
  } from "react-native";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/colors";
import Button from "../../../../components/Button";
import CustomInput from "../../../../components/CustomInput";
import { AppStyles } from "../../../../utils/AppStyle";
import NewText from "../../../../components/NewText";
import { icon } from "../../../../assets/png/icons";
import { windowHeight } from "../../../../utils/Commons";
import Modal from "react-native-modal";
import { scale } from "react-native-size-matters";

  const PaymentHistoryModal = ({ modalVisible, setModalVisible,onSubmit }) => {
 
  
    return (

        <Modal
        isVisible={modalVisible}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "95%",
            maxHeight: windowHeight / 1.3,
            backgroundColor: colors.white,
            borderRadius: scale(15),
            alignSelf: "center",
            alignItems:"center",
            gap:10,
            paddingBottom:20

          }}
        >
          <View style={{ ...AppStyles.justifyRow, paddingHorizontal: scale(15),paddingTop:scale(15),alignSelf:"flex-end" }}>
           
  
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              activeOpacity={0.4}
              //   disabled={!onShowPassword}
              style={{ justifyContent: "center", alignItems: "center",height:20,width:30, }}
            >
              <Image
                source={icon.cross}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: colors.gray100,
                }}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={{width:30,height:30}}
            source={icon.infoCircle}
            resizeMode="contain"
            />

          <View style={{marginHorizontal:40,gap:20}}>
        

            <NewText
                  fontWeight="400"
                color={colors.gray200}
                //   fontFam={Inter.bold}
                size={14}
                lineHeight={22}
                style={{
                    textAlign:"center"
                }}
                text={"Selection only applies in Driver Account"}
              />
               



        


        </View>
       
  
        </View>
      </Modal>
  
    );
  };
  
  export default PaymentHistoryModal;
  
  const styles = StyleSheet.create({
    cardImage: { width: 50, height: 50 },
  });
  