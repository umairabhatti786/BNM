import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import Modal from "react-native-modal";
import { scale } from "react-native-size-matters";
import BottomSheet from "../../../../components/BottomSheet";
import NewText from "../../../../components/NewText";
import { colors } from "../../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import DashedLine from "react-native-dashed-line";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useState } from "react";
import Button from "../../../../components/Button";
import { Spacer } from "../../../../components/Spacer";
import { Inter } from "../../../../utils/Fonts";

const EmailVerificationBottomSheet = ({ bottomSheetModalRef, onSubmit,color }) => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 6 });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <BottomSheet
      bottomSheetModalRef={bottomSheetModalRef}
      snapTo={["60%"]}
      // onDismiss={() => setPause(false)}
    >
      <View style={{ paddingHorizontal: 40 }}>
        <NewText
          color={colors.black}
          fontWeight={"bold"}
          style={{ paddingBottom: 12, textAlign: "center" }}
          size={15}
          text={"Enter Email Verification Code"}
        />
        <NewText
          color={colors.gray200}
          style={{ paddingBottom: 12, textAlign: "center" }}
          size={16}
          lineHeight={30}
          text={
            "We’ve sent a verification code to your email fahi***@gmail.com"
          }
        />

        <CodeField
          ref={ref}
          {...props}
          caretHidden={true}
          value={value}
          onChangeText={(value) => {
            setValue(value);
            if (value.length == 6) {
              // onHandleOTP(value);
            }
          }}
          cellCount={6}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={{
                ...styles.codeFieldCell,
              }}
            >
              <NewText
                size={22}
                fontWeight={"600"}
                color={colors.gray}
                text={symbol || (isFocused ? <Cursor /> : "0")}
              />
            </View>
          )}
        />
        <Spacer height={10} />

        <Button
          text={"Submit"}
          height={45}
          size={16}
          bgColor={color||colors.primary}
          onPress={onSubmit}
          borderRadius={10}
        />
        <Spacer height={10} />

        <NewText
          color={colors.gray200}
          style={{ paddingBottom: 5, textAlign: "center" }}
          size={16}
          lineHeight={30}
          text={"Didn’t receive the code?"}
        />

        <NewText
          color={ color || colors.primary}
          fontWeight={"600"}
          textDecorationLine={"underline"}
          fontFam={Inter.medium}
          style={{ paddingBottom: 12, textAlign: "center" }}
          size={15}
          text={"Resend Code"}
        />
      </View>
    </BottomSheet>
  );
};

export default EmailVerificationBottomSheet;

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
