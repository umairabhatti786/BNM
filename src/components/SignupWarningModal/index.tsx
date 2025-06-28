import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { scale } from "react-native-size-matters";
import { windowHeight } from "../../utils/Commons";
import { colors } from "../../utils/colors";
import { AppStyles } from "../../utils/AppStyle";
import { icon } from "../../assets/png/icons";
import NewText from "../NewText";
import { Inter } from "../../utils/Fonts";
import CustomLine from "../CustomLine/CustomLine";
import CustomButton from "../CustomButton";

const SignupWarningModal = ({
  modalVisible,
  setModalVisible,
  onSubmit,
  onLogin,
  onSignup
}: any) => {
  return (
    <Modal isVisible={modalVisible} style={{ flex: 1 }}>
      <View
        style={{
          width: "95%",
          maxHeight: windowHeight / 1.3,
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
          alignItems: "center",
          gap: 10,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            ...AppStyles.justifyRow,
            paddingHorizontal: scale(15),
            paddingTop: scale(15),
            width:"100%",
          }}
        >
                <NewText
            fontWeight="400"
            color={colors.black}
              fontFam={Inter.bold}
            size={14}
            lineHeight={22}
          
            text={"Become a Mover"}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            activeOpacity={0.4}
            //   disabled={!onShowPassword}
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
              height: 20,
              width: 30,
            }}
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
        <CustomLine/>
        <Image
          style={{ width: 30, height: 30 }}
          source={icon.infoCircle}
          resizeMode="contain"
        />

        <View style={{ marginHorizontal: 40, gap: 20 }}>
          <NewText
            fontWeight="400"
            color={colors.gray200}
            size={14}
            lineHeight={22}
            style={{
              textAlign: "center",
            }}
            text={"Please, log in or sign up as a customer, After logging in, navigate to the Account Manager Menu and click on 'Add Account'.."}
          />
        </View>

        <View style={{...AppStyles.justifyRow,width:"100%",paddingHorizontal:scale(30)}}>
            <CustomButton
              text={"Login"}
              height={30}
              onPress={onLogin}
              textColor={colors.white}
              bgColor={colors.primary}
              borderColor={"transparent"}
              paddingHorizontal={scale(20)}
            />

<CustomButton
            text={"Sign up"}
            height={30}
            onPress={onSignup}
            textColor={colors.white}
            bgColor={colors.primary}
            borderColor={"transparent"}
            paddingHorizontal={scale(20)}
          />

           
          </View>

        

      </View>
    </Modal>
  );
};

export default SignupWarningModal;

const styles = StyleSheet.create({
  cardImage: { width: 50, height: 50 },
});
