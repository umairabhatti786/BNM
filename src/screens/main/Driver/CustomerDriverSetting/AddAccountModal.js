import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/colors";
import Button from "../../../../components/Button";
import CustomInput from "../../../../components/CustomInput";
import { AppStyles } from "../../../../utils/AppStyle";
import NewText from "../../../../components/NewText";
import { image } from "../../../../assets/png/images";
import CustomLine from "../../../../components/CustomLine/CustomLine";
import { icon } from "../../../../assets/png/icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedAccount,
  setSelectedAccount,
} from "../../../../redux/reducers/authReducer";

const AddAccountModal = ({ modalVisible, setModalVisible, onSubmit,userProfile }) => {
  const navigation = useNavigation();
  const selectAccount = useSelector(getSelectedAccount);

  const dispatch = useDispatch();
  const CardConTainer = ({ img, title, descripation, onPress }) => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <View style={{ ...AppStyles.justifyRow, padding: 17 }}>
          <NewText
            color={colors.black}
            size={16}
            // fontWeight={"400"}
            text={title}
          />

          <Image
            style={{ width: 15, height: 15 }}
            source={icon.nexticon}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={"Add Account"}
    >
      <View style={{ gap: 30, marginVertical: 20 }}>
        {
          userProfile?.length==1&&(
            <View style={{ ...AppStyles.box, borderRadius: 15, marginTop: -10 }}>
            <CardConTainer
              onPress={() => {
                if (selectAccount == "Driver") {
                  dispatch(setSelectedAccount("Customer"));
                }
                // else if(selectAccount == "Customer"){
                //   dispatch(setSelectedAccount("Driver"));
  
  
                // }
  
                setModalVisible(false);
                setTimeout(() => {
                  selectAccount == "Driver" ? navigation.navigate(
                    "CustomerSignup" 
                  ):
                  navigation.navigate(
                    "DriverInfo",{isDriverActivate:true}
                  );
                }, 100);
              }}
              title={ selectAccount == "Driver"? "Customer Account (Primary)":"Driver Account (Primary)"}
              img={image.creditCard}
            />
          </View>

          )
        }
     

        <View style={{ ...AppStyles.box, borderRadius: 15, marginTop: -10 }}>
          <CardConTainer title={"Admin Account"} img={image.creditCard} />
        </View>
      </View>
    </CustomModal>
  );
};

export default AddAccountModal;

const styles = StyleSheet.create({
  cardImage: { width: 50, height: 50 },
});
