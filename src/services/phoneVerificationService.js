import api from "./api";

export const phoneVerificationService = {
  async sendVerificationCode(phoneNumber) {
    try {
      console.log("Sending verification code to:", phoneNumber);
      const response = await api.post("/api/user/verify/send-code", {
        phone_number: phoneNumber,
      });
      console.log("Verification code sent:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error sending verification code:",
        error.response?.data || error
      );
      throw error;
    }
  },

  async verifyCode(phoneNumber, code) {
    try {
      console.log("Verifying code for:", phoneNumber);
      const response = await api.post("/api/user/verify/check-code", {
        phone_number: phoneNumber,
        code: code,
      });
      console.log("Code verified:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error verifying code:", error.response?.data || error);
      throw error;
    }
  },
};
