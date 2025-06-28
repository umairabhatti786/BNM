import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customerProfileService } from "./customerProfileService";

export const authService = {
  async login(email, password) {
    try {
      console.log("Making login request to server with:", { email });
      const response = await api.post("/api/auth/customer/signin/email", {
        email,
        password,
      });
      console.log(
        "Login response received:",
        JSON.stringify(response.data, null, 2)
      );

      if (!response.data || !response.data.data) {
        throw new Error("No data received from server");
      }

      if (response.data.data.token) {
        console.log("Token found in response, storing in AsyncStorage");
        await AsyncStorage.setItem("authToken", response.data.data.token);

        // Fetch and store user profile after successful login
        try {
          await customerProfileService.getUserProfile();
        } catch (profileError) {
          console.error("Error fetching profile:", profileError);
          // Don't throw here, as login was successful
        }

        return response.data.data;
      } else {
        console.error("No token in response:", response.data);
        throw new Error("Authentication failed: No token received");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      throw this.handleError(error);
    }
  },

  async signup(userData) {
    try {
      console.log("Making signup request to server with:", {
        email: userData.email,
      });
      const response = await api.post("/api/auth/customer/signup/email", {
        email: userData.email,
        password: userData.password,
        username: userData.username,
      });
      console.log(
        "Signup response received:",
        JSON.stringify(response.data, null, 2)
      );

      if (!response.data || !response.data.data) {
        throw new Error("No data received from server");
      }

      if (response.data.data.token) {
        console.log("Token found in response, storing in AsyncStorage");
        await AsyncStorage.setItem("authToken", response.data.data.token);

        // Fetch and store user profile after successful signup
        try {
          await customerProfileService.getUserProfile();
        } catch (profileError) {
          console.error("Error fetching profile:", profileError);
          // Don't throw here, as signup was successful
        }

        return response.data.data;
      } else {
        console.error("No token in response:", response.data);
        throw new Error("Authentication failed: No token received");
      }
    } catch (error) {
      console.error("Signup error:", error.response?.data || error);
      throw this.handleError(error);
    }
  },

  async logout() {
    try {
      await AsyncStorage.removeItem("authToken");
      await customerProfileService.clearProfile();
    } catch (error) {
      console.error("Logout error:", error);
    }
  },

  handleError(error) {
    if (error.response) {
      // Server responded with error
      return {
        message: error.response.data.message || "An error occurred",
        status: error.response.status,
      };
    }
    if (error.request) {
      // Request made but no response
      return {
        message: "Network error. Please check your connection.",
        status: 0,
      };
    }
    // Something else happened
    return {
      message: error.message || "An unexpected error occurred",
      status: -1,
    };
  },
};
