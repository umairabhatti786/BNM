import { StyleSheet, View, TouchableOpacity } from "react-native";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/colors";
import Button from "../../../../components/Button";
import CustomInput from "../../../../components/CustomInput";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useState } from "react";
import NewText from "../../../../components/NewText";
import { scale } from "react-native-size-matters";
import { AppStyles } from "../../../../utils/AppStyle";
import { phoneVerificationService } from "../../../../services/phoneVerificationService";

const NumberVerificationModal = ({
  modalVisible,
  setModalVisible,
  onSubmit,
  phoneNumber,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: 4 });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerifyCode = async () => {
    if (value.length !== 4) {
      setError("Please enter the complete verification code");
      return;
    }

    setLoading(true);
    try {
      await phoneVerificationService.verifyCode(phoneNumber, value);
      setError("");
      onSubmit();
      setModalVisible(false);
    } catch (error) {
      setError("Invalid verification code");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    try {
      await phoneVerificationService.sendVerificationCode(phoneNumber);
      setError("");
    } catch (error) {
      setError("Failed to send verification code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={"Enter your phone number"}
    >
      <View style={{ margin: 10, gap: 10 }}>
        <NewText
          fontWeight="400"
          color={colors.gray200}
          //   fontFam={Inter.bold}
          size={16}
          style={{
            marginRight: scale(30),
          }}
          text={"Enter the 4-digit code sent to your phone"}
        />
        <CodeField
          ref={ref}
          {...props}
          caretHidden={true}
          value={value}
          onChangeText={(value) => {
            setValue(value);
            setError("");
          }}
          cellCount={4}
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

        {error ? (
          <NewText
            size={12}
            fontWeight={"400"}
            color={colors.red}
            text={error}
            style={{ marginTop: 5 }}
          />
        ) : null}

        <View style={AppStyles.justifyRow}>
          <TouchableOpacity onPress={handleResendCode}>
            <NewText
              fontWeight="600"
              color={"#01AD8F"}
              textDecorationLine={"underline"}
              //   fontFam={Inter.bold}
              size={16}
              style={{
                marginRight: scale(30),
              }}
              text={"Resend"}
            />
          </TouchableOpacity>
          <Button
            text={"Submit"}
            height={32}
            bgColor={"#01AD8F"}
            borderColor={"transparent"}
            borderWidth={-1}
            onPress={handleVerifyCode}
            size={16}
            width={90}
            borderRadius={7}
            textColor={colors.white}
            loading={loading}
          />
        </View>
      </View>
    </CustomModal>
  );
};

export default NumberVerificationModal;

const styles = StyleSheet.create({
  cardImage: { width: 50, height: 50 },
  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    gap: 25,
  },
  codeFieldCell: {
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.black10,
  },
});
