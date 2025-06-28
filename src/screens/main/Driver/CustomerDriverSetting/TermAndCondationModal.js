import {
    StyleSheet,
    View,
  } from "react-native";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/colors";
import Button from "../../../../components/Button";
import CustomInput from "../../../../components/CustomInput";
import { AppStyles } from "../../../../utils/AppStyle";
import NewText from "../../../../components/NewText";
  
  const TermAndCondationModal = ({ modalVisible, setModalVisible,onSubmit }) => {
 
  
    return (
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Privacy, Terms & Condition"}
      
      >
        <View style={{margin:10,gap:20}}>
            <View>
            <NewText
                  fontWeight="400"
                color={colors.gray200}
                //   fontFam={Inter.bold}
                size={14}
                lineHeight={22}
                // style={{
                //     marginRight: scale(30),
                // }}
                text={"By submitting your application, I <<name>> confirm that I am at least eighteen(18) years of age and understand Buzz & Move will process my personal data in accordance with our Privacy Statement available"}
              />
                <NewText
                  fontWeight="400"
                color={"#12D1AF"}
                textDecorationLine={"underline"}
                //   fontFam={Inter.bold}
                size={14}
                lineHeight={22}
                // style={{
                //     marginRight: scale(30),
                // }}
                text={"here"}
              />


            </View>

          <View >
          <Button
                  text={"Download"}
                  height={33}
                  bgColor={colors.primary}
                  borderColor={"transparent"}
                  borderWidth={1}
                  size={16}
                  onPress={()=>setModalVisible(false)}
                  borderRadius={7}
                  textColor={colors.white}
                />

          </View>


        </View>
      </CustomModal>
    );
  };
  
  export default TermAndCondationModal;
  
  const styles = StyleSheet.create({
    cardImage: { width: 50, height: 50 },
  });
  