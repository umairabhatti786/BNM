import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import Modal from "react-native-modal";
import { scale } from "react-native-size-matters";
import BottomSheet from "../../../../components/BottomSheet";
import NewText from "../../../../components/NewText";
import { colors } from "../../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import DashedLine from "react-native-dashed-line";

import { useState } from "react";
import Button from "../../../../components/Button";
import { Spacer } from "../../../../components/Spacer";
import { Inter } from "../../../../utils/Fonts";
import CustomInput from "../../../../components/CustomInput";

const NewPasswordBottomSheet = ({ bottomSheetModalRef, onSubmit,color }) => {
  const navigation = useNavigation();
  const [newPassword,setNewPassword]=useState("")
  const [reEnterNewPassword,setReEnterNewPassword]=useState("")

  const [value, setValue] = useState("");


  return (
    <BottomSheet
      bottomSheetModalRef={bottomSheetModalRef}
      snapTo={["60%"]}
      // onDismiss={() => setPause(false)}
    >
      <View style={{ paddingHorizontal: 20,gap:20 }}>
        <NewText
          color={colors.black}
          fontWeight={"bold"}
          style={{ paddingBottom: 12, textAlign: "center" }}
          size={15}
          text={"Enter New Password"}
        />


<CustomInput
                  height={40}
                  color={colors.gray100}
                  value={newPassword}
                  onChangeText={(txt)=>setNewPassword(txt)}
                  placeholder={"New Password"}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  borderRadius={8}
                />
                <CustomInput
                  height={40}
                  color={colors.gray100}
                
                  value={reEnterNewPassword}
                  onChangeText={(txt)=>setReEnterNewPassword(txt)}
                  placeholder={"Re-enter New Password"}
                  fontWeight={"600"}
                  paddingHorizontal={10}
                  borderRadius={8}
                />
      

       
        <Spacer height={10} />

        <Button
          text={"Login"}
          height={40}
        bgColor={color||colors.primary}
          size={16}
          onPress={onSubmit}
          borderRadius={10}
        />
       
      </View>
    </BottomSheet>
  );
};

export default NewPasswordBottomSheet;

const styles = StyleSheet.create({
  cardImage: { width: 50, height: 50 },

  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    gap: 10,
  },
  codeFieldCell: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.black10,
  },
});
